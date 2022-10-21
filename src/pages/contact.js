import { Paper } from '@mui/material';
import { style } from '@mui/system';
import React from 'react';
import '../css/Admin.css';

const Contact = () => {
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
      height:"1000px"
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
    const contact_info = {
       height:"800px",
       width: "1000px",
       margin:"0px 30px 50px 40px",
       top:"100px",
       borderRadius:"5px",
       border:"5px solid Silver",
       position:"absolute",
       backgroundColor:"FloralWhite"
      };
      const contact_text = {
        position:"absolute",
        fontSize:"30px",
        margin:"20px 20px 20px 20px",
        color:"white"
       };
       const second_div = {
        position:"absolute",
        fontSize:"30px",
        width:"600px",
        height:"500px",
        top:"75px",
        left:"300px",
        borderRadius:"30px",
        backgroundColor:"#333"

       };
       const first_block = {
        position:"absolute",
        width:"200px",
        height:"100px",
        top:"300px",
        borderRadius:"30px",
        backgroundColor:"#04AA6D",
        left:"1200px",
       };
       const second_block = {
        position:"absolute",
        width:"200px",
        height:"180px",
        backgroundColor:"#333",
        top:"500px",
        borderRadius:"30px",
        backgroundColor:"#333",
        left:"1500px",
        color:"white"
       };
       const third_block = {
        position:"absolute",
        width:"200px",
        height:"100px",
        top:"700px",
        borderRadius:"30px",
        backgroundColor:"#111",
        left:"1100px"
       };
return (
    <div>
          <div>
            <ul>
              <li><a href="http://localhost:3000/">Home</a></li>
              <li><a href="http://localhost:3000/clients">All Clients</a></li>
              <li><a href="http://localhost:3000/contact">Contacts</a></li>
              <li style={{float:"right"}}><a className="active" href="http://localhost:3000/login">Login</a></li>
            </ul>
            <Paper elevation={12} style={{ borderRadius:"30px", backgroundColor:"#04AA6D", top:"170px",left:"100px",position:"absolute",width:"900px", height:"650px"}}>
              <div style={second_div}>
                <address style={contact_text}>
                   In today's world, ecology is very important for each of us, it is precisely this issue that our bio laboratory took up.
                     The new equipment will allow conducting experiments on all types of substances and will show the most accurate results.
                     You will also be served by our professional team, and we are currently recruiting researchers and students for internships.
                </address>
              </div>
            </Paper>
            <div style={first_block}> <a className="all_clients" style={{ fontSize:"30px", position:"absolute", top:"25px", left:"45px"}} href="mailto:sashapronehoda@gmail.com">Mail us</a></div>
            <div style={second_block}> <a style={{ fontSize:"20px", position:"absolute", top:"25px", left:"45px"}}>Location: <br /> Box 564, Disneyland <br/> USA</a></div>
            <div style={third_block}><a className="all_clients" style={{ fontSize:"30px", position:"absolute", top:"25px", left:"20px"}} href="http://maps.google.com/maps?q=210+Louise+Ave,+Nashville,+TN+37203">View map</a></div>
            <div style={foot}>
              <div textAlign="center"  style={rights}><h4 style={{color:"White"}} >Copyright © biolab 2018, Developed by <a style={{ color:"#04AA6D"}} href="https://www.agar.io/">Tech Factory</a></h4></div>
            </div>
            <img style={backimage} position="relative" width="100%" height="100px"  src={ require('../img/6.jpg')} />
          </div>
        </div>
    );
// return (
// 	  <div>
//           <div>
// 				<ul>
// 					<li><a href="http://localhost:3000/">Home</a></li>
// 					<li><a href="http://localhost:3000/clients">All Clients</a></li>
// 					<li><a href="http://localhost:3000/contact">Contacts</a></li>
// 					<li style={{float:"right"}}><a className="active" href="http://localhost:3000/login">Login</a></li>
// 				</ul>
// 		<div>
//       <div style={contact_info}>
//         <address style={contact_text}>
//           Write on email: <a href="mailto:sashapronehoda@gmail.com">Aleksandr Nehoda</a>.
//           <br />
//           Visit us. Our website <a href='http://localhost:3000/About'>.</a>.
//           <br />
//           Example.com
//           <br />
//           Box 564, Disneyland
//           <br />
//           USA
//           <br />
//         </address>
//       </div>
// 			<div style={foot}>
// 					<div textAlign="center"  style={rights}><h4 style={{color:"White"}} >Copyright © biolab 2018, Developed by <a style={{ color:"#04AA6D"}} href="https://www.agar.io/">Tech Factory</a></h4></div>
// 				</div>
//         <img style={backimage} position="absolute" width="100%" height="100px"  src={ require('../img/6.jpg')} />
// 		</div>
// 	</div>
//   </div>
// );
};

export default Contact;
