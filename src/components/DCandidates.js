import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";
import { Button, ButtonGroup, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DCandidateForm from "./DCandidatesForm";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AlignHorizontalCenter } from "@mui/icons-material";
import { margin, padding, width } from "@mui/system";




const DCandidates = (props) => {
    const [currentId, setCurrentId] = useState(0)

    const button_about = {
        width: "100px",
        height: "30px",
        margin:"15px",
        backgroundColor:"Yellow",
        position:"absolute",
        borderRadius:"5px",
        textAlign:"center",
        verticalAlign: "middle",
        padding:"4px"
      };
      const button_login = {
        width: "100px",
        height: "30px",
        margin:"15px",
        left:"800px",
        backgroundColor:"Blue",
        position:"absolute",
        borderRadius:"5px",
        textAlign:"center",
        padding:"4px"
      };
      const button_show_all = {
        width: "100px",
        height: "30px",
        margin:"15px",
        left:"200px",
        backgroundColor:"Green",
        position:"absolute",
        borderRadius:"5px",
        textAlign:"center",
        padding:"4px"
      };
      const button_contacts = {
        width: "100px",
        height: "30px",
        margin:"15px",
        left:"400px",
        backgroundColor:"Gray",
        position:"absolute",
        borderRadius:"5px",
        textAlign:"center",
        padding:"4px"
      };
    
      const maindiv = {
        width: "auto",
        height: "auto",
        position:"absolute",
        alignContent: "center"
      };
      const update = {
        border:"3px",
        width: "270px",
        height: "570px",
        position:"absolute",
        alignContent: "center",
        left:"30px",
        top:"-10px",
        borderRadius:"10px",
        //backgroundColor:"Gainsboro",
        alignContent:"center"
      };
      const info = {
        width: "1200px",
        height: "auto",
        position:"absolute",
        top:"-10px",
        left:"350px",
        borderRadius:"10px",
      };
      const navbar = {
        
        width: "1920px",
        height: "60px",
        position:"absolute",
        alignContent: "center",
        backgroundColor:"blue",
        alignItems: "center"
      };
      const paper = {
        
        width: "auto",
        height: "20px",
        position:"absolute",
        alignContent: "center",
        margin:"10px",
        top:" 100px"
      };
      const foot = {
        height:"157px",
        width: "100%" ,
        position:"absolute",
        alignContent: "center",
        backgroundColor:"#333",
        border: "5px solid #333",
        borderRadius:"3px",
        alignItems: "center",
        bottom:"-170px"
        };
      const rights = {
        position:"absolute",
        textAlign: "center",
        top:"60px",
        left:"700px"
        };
    useEffect(() => {
        props.fetchAllDCandidates()
    }, [])

    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?'))
            props.deleteDCandidate(id)
    }
    return ( 
        <div >
            <ul>
					<li><a href="http://localhost:3000/">Home</a></li>
					<li><a href="http://localhost:3000/clients">All Clients</a></li>
					<li><a href="http://localhost:3000/contact">Contacts</a></li>
					<li style={{float:"right"}}><a className="active" href="http://localhost:3000/">Log Out</a></li>
				</ul>
        <Paper style={paper}>
            <Grid container>
                    <Paper elevation={12} style={update}>
                        <div>
                            <Grid item xs={6}>
                                <DCandidateForm {...({ currentId, setCurrentId })} />
                            </Grid>
                        </div>
                    </Paper>
                <div>
                    <Paper  elevation={12} style={info}>
                        <Grid item xs={6}>
                            <TableContainer style={{minWidth:"1200px"}}>
                                <Table>
                                    <TableHead>
                                        <TableRow >
                                            <TableCell>Name</TableCell>
                                            <TableCell>Mobile</TableCell>
                                            <TableCell>BloodGroup</TableCell>
                                            <TableCell>Age</TableCell>
                                            <TableCell>Address</TableCell>
                                            <TableCell>Email</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            props.dCandidateList.map((record, index) => {
                                                return (<TableRow key={index} hover>
                                                    <TableCell>{record.fullName}</TableCell>
                                                    <TableCell>{record.mobile}</TableCell>
                                                    <TableCell>{record.bloodGroup}</TableCell>
                                                    <TableCell>{record.age}</TableCell>
                                                    <TableCell>{record.address}</TableCell>
                                                    <TableCell>{record.email}</TableCell>
                                                    <TableCell>
                                                    <ButtonGroup variant="text">
                                                            <Button><EditIcon color="primary"
                                                                onClick={() => { setCurrentId(record.id) }} /></Button>
                                                            <Button><DeleteIcon color="secondary"
                                                                onClick={() => onDelete(record.id)} /></Button>
                                                        </ButtonGroup>
                                                    </TableCell>
                                                </TableRow>)
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Paper>
                </div>
            </Grid>
        </Paper>
        <div style={foot}>
					<div textAlign="center"  style={rights}><h4 style={{color:"White"}} >Copyright © biolab 2018, Developed by <a style={{ color:"#04AA6D"}} href="https://www.agar.io/">Tech Factory</a></h4></div>
				</div>
        </div>
    );
}
const mapStateToProps = state => ({
    dCandidateList: state.dCandidate.list
})

const mapActionToProps = {
    fetchAllDCandidates: actions.fetchAll,
    deleteDCandidate: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(DCandidates);