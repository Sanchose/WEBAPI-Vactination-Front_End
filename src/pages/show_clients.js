import React, { useState, useEffect } from "react";
import '../css/Admin.css';
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";
import { Button, ButtonGroup, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DCandidateForm from "../components/DCandidatesForm";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AlignHorizontalCenter } from "@mui/icons-material";
import { margin, padding, width } from "@mui/system";
import Contact from "./contact";




const Clients = (props) => {
    const [currentId, setCurrentId] = useState(0)
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
    const button_about = {
        width: "100px",
        height: "60px",
        backgroundColor:"Blue",
        position:"absolute",
        borderRadius:"5px",
        textAlign:"center",
        verticalAlign: "middle",
        padding:"17px",
        left:"0px"
        
      };
      const button_show_all = {
        width: "100px",
        height: "30px",
        margin:"15px",
        left:"200px",
        backgroundColor:"Blue",
        position:"absolute",
        borderRadius:"5px",
        textAlign:"center"
      };
      const button_contacts = {
        width: "100px",
        height: "60px",
        left:"100px",
        backgroundColor:"Blue",
        position:"absolute",
        borderRadius:"5px",
        padding:"17px",
        textAlign:"center"
      };
      const button_login = {
        width: "100px",
        height: "30px",
        margin:"15px",
        left:"800px",
        backgroundColor:"Blue",
        position:"absolute",
        borderRadius:"5px",
        textAlign:"center"
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
        backgroundColor:"Gray",
        alignItems: "center"
      };
      const paper = {
        
        width: "auto",
        height: "20px",
        position:"absolute",
        alignContent: "center",
        margin:"10px",
        top:" 100px",
        backgroundColor:"White"
      };
      const backimage = {
		width:"100%",
		height:"1000px",
	    };
    const li = {
        display:"inline"
    };
    const images = {
        position:"absolute"
    };
    const first_block = {
        position:"absolute"
    }
    const clientes ={
        position:"absolute",
        borderRadius:"8px",
        top:"200px",
        left:"700px"
    }
    const instruction ={
        margin:"10px"
    }
    useEffect(() => {
        props.fetchAllDCandidates()
    }, [])
    return ( 
        <div>
            <div>
                <ul>
                    <li><a href="http://localhost:3000/">Home</a></li>
                    <li><a href="http://localhost:3000/clients">All Clients</a></li>
                    <li><a href="http://localhost:3000/contact">Contacts</a></li>
                    <li style={{float:"right"}}><a className="active" href="http://localhost:3000/login">Login</a></li>
                </ul>
            <div className="all_clients" style={clientes}>
                <Paper>
                    <Grid container>
                        <Paper elevation={12}>
                           <Grid>
                            <p style={instruction}>This all clients can take their result of analyses.</p>
                               <TableContainer>
                                        <Table>
                                            <TableHead>
                                                <TableRow >
                                                    <TableCell>Name</TableCell>
                                                    <TableCell>Email</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    props.dCandidateList.map((record, index) => {
                                                        return (<TableRow key={index} hover>
                                                            <TableCell>{record.fullName}</TableCell>
                                                            <TableCell>{record.email}</TableCell>
                                                            <TableCell>
                                                            </TableCell>
                                                        </TableRow>)
                                                    })
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                            </Paper>
                    </Grid>
                </Paper>
            </div>
            <div style={foot}>
                <div textAlign="center"  style={rights}><h4 style={{color:"White"}} >Copyright © biolab 2018, Developed by <a style={{ color:"#04AA6D"}} href="https://www.agar.io/">Tech Factory</a></h4></div>
            </div>
            </div>
            <div>
                <img style={backimage} position="absolute" width="100%" height="100px" src={ require('../img/6.jpg')} />
            </div>
        </div>
    );
}
const mapStateToProps = state => ({
    dCandidateList: state.dCandidate.list
})

const mapActionToProps = {
    fetchAllDCandidates: actions.fetchAll,
}

export default connect(mapStateToProps, mapActionToProps)(Clients); 