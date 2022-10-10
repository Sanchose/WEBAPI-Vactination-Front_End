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
        fontSize:"30px"
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
            <Paper elevation={12} style={{top:"170px",left:"500px",position:"absolute",width:"1000px", height:"700px"}}>
              <address style={contact_text}>
                Write on email: <a href="mailto:sashapronehoda@gmail.com">Web-Lab@gmail.com</a>
                <br />
                Visit us at our website:<a href='http://localhost:3000/About'>Web-Lab.com</a>
                <br />
                Box 564, Disneyland
                <br />
                USA
                <br />
                <a href="http://maps.google.com/maps?q=210+Louise+Ave,+Nashville,+TN+37203">View map</a>
              </address>
            </Paper>
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
