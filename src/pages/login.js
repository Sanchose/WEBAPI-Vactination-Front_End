import { Paper } from "@mui/material";
import React from "react";
import { FormControl, Grid, InputLabel, MenuItem, TextField, Button, FormHelperText } from "@mui/material";
import { padding } from "@mui/system";
import '../css/Admin.css';

const Login = () => {
	const button_about = {
		width: "100px",
		height: "30px",
		margin:"15px",
		backgroundColor:"Yellow",
		position:"absolute",
		borderRadius:"5px",
		textAlign:"center",
		left:"710px",
		verticalAlign: "middle",
		float:"left",
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
		left:"910px",
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
	const navbar = {
		height:"50px",
		width: "100%" ,
		position:"absolute",
		alignContent: "center",
		backgroundColor:"RoyalBlue",
		alignItems: "center"
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
	const lefts = {
		textAlign: "center"
	  };
    const paper = {
        width:"400px",
        height:"405px",
        top:"160px",
        left:"37%",
        position:"absolute"
    };
    const h1 ={
        margin:"30px 20px 20px 145px",
        left:"10px"
    };
    const login ={
        width:"100px",
        height:"40px",
        backgroundColor:"blue",
        margin:"30px 20px 20px 0px",
        borderRadius:"5px",
        top:"310px",
        left:"55px",
        textAlign:"center",
        padding:"8px",
        color:"white",
        position:"absolute"
    };
    const backimage = {
		width:"100%",
		height:"1000px"
	    };
	return (
		<div>
			<div>
                <div>
                    <ul>
                        <li><a href="http://localhost:3000/">Home</a></li>
                        <li><a href="http://localhost:3000/clients">All Clients</a></li>
                        <li><a href="http://localhost:3000/contact">Contacts</a></li>
                        <li style={{float:"right"}}><a className="active" href="http://localhost:3000/login">Login</a></li>
                    </ul>
                </div>
                <div>
                    <Paper elevation={12} style={paper}>
                        <h1 style={h1}>Log in</h1>
                        <TextField style={{ left:"45px", margin:"10px",minWidth: 300 }}
                            InputProps={{
                                sx: {
                                    "& input": {
                                    textAlign: "center"
                                    }
                                    }
                                }}
                            name="I"
                            variant="outlined"
                            label="Name"
                        />
                        <TextField style={{ left:"45px", margin:"10px",minWidth: 300}}
                            InputProps={{
                                sx: {
                                    "& input": {
                                    textAlign: "center"
                                    }
                                    }
                                }}
                            name="Email"
                            variant="outlined"
                            label="Email"
                        />
                        <TextField style={{ left:"45px", margin:"10px",minWidth: 300}}
                            InputProps={{
                            sx: {
                                "& input": {
                                textAlign: "center"
                                }
                                }
                            }}
                            name="Password"
                            variant="outlined"
                            label="Password"
                        />
                        <a style={login} href="http://localhost:3000/admin">Login</a>
                    </Paper>
                </div>
				<div style={foot}>
					<div textAlign="center"  style={rights}><h4 style={{color:"White"}} >Copyright © biolab 2018, Developed by <a style={{ color:"#04AA6D"}} href="https://www.agar.io/">Tech Factory</a></h4></div>
				</div>
                <img style={backimage} position="absolute" width="100%" height="100px"  src={ require('../img/6.jpg')} />
			</div>
		</div>
);
};

export default Login;
