import { FormControl, Grid, InputLabel, MenuItem, TextField, Button, FormHelperText } from "@mui/material";
import React, {useState, useEffect} from "react";
import useForm from "./useForm"
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";




const initialFieldValues={
    fullName:'',
    mobile:'',
    email:'',
    age:'',
    bloodGroup: '',
    address:''
}


const DCandidateForm = ({...props}) => {

        const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile ? "" : "This field is required."
        if ('bloodGroup' in fieldValues)
            temp.bloodGroup = fieldValues.bloodGroup ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/^$|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues, validate, props.setCurrentId)
    
    
    const inputLabel = React.useRef(null);
    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const onSuccess = () => {resetForm()
            }
            if (props.currentId == 0)
                props.createDCandidate(values, onSuccess)
            else
                props.updateDCandidate(props.currentId, values, onSuccess) 
        }
        
    }
    useEffect(() => {
        if (props.currentId != 0) {
            setValues({
                ...props.dCandidateList.find(x => x.id == props.currentId)
            })
            setErrors({})
        }
    }, [props.currentId])
    return (
        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
            <div style={{fontSize:"20px" ,height:"10px",width:"300px", margin:"10px 5px 15px 0px"}}>
            <a style={{ top:"100px", margin:"10px"}}>Add new record</a>
            </div>
            <Grid>
                <Grid>
                    <TextField style={{ margin:"10px",minWidth: 214}}
                    name="fullName"
                    variant="outlined"
                    label="Full Name"
                    value={values.fullName}
                    onChange={handleInputChange}
                    helperText = {errors.fullName}
                    {...(errors.fullName && { error: true, helperText: errors.fullName })}
                    />
                    <TextField style={{margin:"10px",minWidth: 214}}
                        name="email"
                        variant="outlined"
                        label="Email"
                        value={values.email}
                        onChange={handleInputChange}
                        {...(errors.email && { error: true, helperText: errors.email })}
                    />
                    <FormControl style={{margin:"10px",minWidth: 214}} variant="outlined"
                    {...(errors.bloodGroup && { error: true })}>
                        <InputLabel ref={inputLabel}>Blood Group</InputLabel>
                        <Select
                            name="bloodGroup"
                            value={values.bloodGroup}
                            onChange={handleInputChange}
                        >
                            <MenuItem value="">Select Blood Group</MenuItem>
                            <MenuItem value="A+">A +ve</MenuItem>
                            <MenuItem value="A-">A -ve</MenuItem>
                            <MenuItem value="B+">B +ve</MenuItem>
                            <MenuItem value="B-">B -ve</MenuItem>
                            <MenuItem value="AB+">AB +ve</MenuItem>
                            <MenuItem value="AB-">AB -ve</MenuItem>
                            <MenuItem value="O+">O +ve</MenuItem>
                            <MenuItem value="O-">O -ve</MenuItem>
                        </Select>
                        {errors.bloodGroup && <FormHelperText>{errors.bloodGroup}</FormHelperText>}
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField  style={{margin:"10px",minWidth: 214}}
                        name="mobile"
                        variant="outlined"
                        label="Mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        {...(errors.mobile && {error:true, helperText: errors.mobile})}
                    />
                    <TextField style={{ margin:"10px",minWidth: 214}}
                    name="age"
                    variant="outlined"
                    label="Age"
                    value={values.age}
                    onChange={handleInputChange}
                    />
                    <TextField style={{ margin:"10px",minWidth: 214}}
                    name="address"
                    variant="outlined"
                    label="Address"
                    value={values.address}
                    onChange={handleInputChange}
                    />
                    <div>
                    <Button style={{left:"5px", width:"97px", margin:"5px", position:"absolute"}}
                            variant="contained"
                            color="primary"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                        <Button style={{ width:"97px", left:"120px", margin:"5px", position:"absolute"}}
                            variant="contained"
                            onClick={resetForm}
                        >
                            Reset
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </form>
        );
}

const mapStateToProps = state => ({
    dCandidateList: state.dCandidate.list
})

const mapActionToProps = {
    createDCandidate: actions.create,
    updateDCandidate: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(DCandidateForm);