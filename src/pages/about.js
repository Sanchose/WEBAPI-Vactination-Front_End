import { Paper } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import '../css/Admin.css';
import '../js/js'

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
		width: "1850px" ,
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
					<img src={ require('../img/lab.jpg')}/>
					<details>
						<summary>I can change this too.</summary>
						<div class="content">
							<p>
								<ol  style={{ listStyleType: "upper-roman" }}>
									<il>sdfsdf</il> <br/>
									<il>sdfsdf</il> <br/>
									<il>sdfsdf</il> <br/>
									<il>sdfsdf</il> <br/>
									<il>sdfsdf</il> <br/>
								</ol>
							</p>
						</div>
						</details>
						<details>
						<summary>Click to expand this details with a WAAPI sliding effect</summary>
						<div class="content">
							<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi unde, ex rem voluptates autem aliquid veniam quis temporibus repudiandae illo, nostrum, pariatur quae! At animi modi dignissimos corrupti placeat voluptatum!
							</p>
							<img src="https://placebear.com/400/200" alt=""/>
							<p>
							Facilis ducimus iure officia quos possimus quaerat iusto, quas, laboriosam sapiente autem ab assumenda eligendi voluptatum nisi eius cumque, tempore reprehenderit optio placeat praesentium non sint repellendus consequuntur? Nihil, soluta.
							</p>
						</div>
						</details>
						<details>
						<summary>Click to expand this details with a WAAPI sliding effect</summary>
						<div class="content">
							<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi unde, ex rem voluptates autem aliquid veniam quis temporibus repudiandae illo, nostrum, pariatur quae! At animi modi dignissimos corrupti placeat voluptatum!
							</p>
							<img src="https://placebear.com/400/200" alt=""/>
							<p>
							Facilis ducimus iure officia quos possimus quaerat iusto, quas, laboriosam sapiente autem ab assumenda eligendi voluptatum nisi eius cumque, tempore reprehenderit optio placeat praesentium non sint repellendus consequuntur? Nihil, soluta.
							</p>
						</div>
					</details>
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
