import { Paper } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import '../css/Admin.css';
import '../js/js';
import WebFont from 'webfontloader';

const About = () => {
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
		backgroundColor:"blue",
		alignItems: "center"
		};
	const backimage = {
		width:"100%",
		height:"950px",
		top:"52px"
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
	  const main_info = {
		position:"absolute",
		textAlign: "center",
		top:"60px",
		left:"700px",
		width:"500px",
		height:"500px",
		backgroundColor:"red"
	  };
	  const clientes ={
		height:"800px",
		width:"auto",
		minWidth: "1850px" ,
		position:"absolute",
		alignContent: "center",
		backgroundColor:"white",
		border: "5px solid Silver",
		borderRadius:"3px",
		alignItems: "center",
		top:"100px",
		left:"1.5%"
    }
	const s = {
		ListStyleType: "inherit"
	}
	const img_class = {
		position:"absolute",
		alignContent: "center",
		backgroundColor:"white",
		border: "3px solid #6699CC",
		borderRadius:"2px",
		alignItems: "center",
		top:"100px",
		left:"30px"
	}
	const info_class = {
		position:"absolute",
		alignContent: "center",
		backgroundColor:"white",
		alignItems: "center",
		top:"100px",
		left:"870px",
		width:"800px",
		fontFamily: "Verdana, sans-serif",
	}
	const namene = {
		position:"absolute",
		alignContent: "center",
		backgroundColor:"red",
		alignItems: "center",
		borderRadius:"6px",
		top:"550px",
		left:"350px",
		fontFamily: "Verdana, sans-serif",
	}
	return (
		<div>
			<div>
				<ul>
					<li><a href="http://localhost:3000/">Home</a></li>
					<li><a href="http://localhost:3000/clients">All Clients</a></li>
					<li><a href="http://localhost:3000/contact">Contacts</a></li>
					<li style={{float:"right"}}><a className="active" href="http://localhost:3000/login">Login</a></li>
				</ul>
			<div>
                <Paper elevation={12} style={clientes}>
					<div style={img_class} >
						<Paper elevation={12}>
							<img src={ require('../img/lab.jpg')}/>
						</Paper>
					</div>
					<div style={namene} className="namen">
						<Paper elevation={6}>
							WEB-LAB
						</Paper>
					</div>
					<div style={info_class}>
						<details>
							<summary>About us</summary>
							<div class="content">
								<p>
									<ol>
											Web Lab is the latest laboratory that studies problems at the chemical level of
											water from different parts of the country.<br />
											We also conduct research on human analyzes of various types,
											and the result is guaranteed to be maximum, precisely because of our
											latest equipment. <br/>
									</ol>	   
								</p>
							</div>
							</details>
							<details>
							<summary>Services we offer</summary>
							<div class="content">
								<p>
									<ol>
											<li>Analyzes:</li><br/>
											<li>different human</li><br/>
											<li>different types of water</li><br/>
											<li>virus tests</li><br/>
											<li>and many others</li><br/>
									</ol>	
								</p>

							</div>
							</details>
							<details>
							<summary>Open days:</summary>
							<div class="content">
								<p>Monday (9:00- 18:00)</p>
								<p>Tuesday (9:00- 18:00)</p>
								<p>Wednesday (9:00- 18:00)</p>
								<p>Thursday (9:00- 18:00)</p>
								<p>Friday (9:00- 18:00)</p>
							</div>
						</details>
					</div>
                </Paper>
            </div>
            <div style={foot}>
                <div textAlign="center"  style={rights}><h4 style={{color:"White"}} >Copyright © biolab 2018, Developed by <a style={{ color:"#04AA6D"}} href="https://www.agar.io/">Tech Factory</a></h4></div>
            </div>
            </div>
            <div>
                <img style={backimage} width="100%" height="950px" src={ require('../img/6.jpg')} />
            </div>
		</div>
);
};

export default About;
