// import React from "react";

// export default class Home extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello i am Div Class</h1>{" "}
//       </div>
//     );
//   }
// }

//CLASS COMPONENT

//Class component is a stateful component.In Class component render
// method is neccessary method without it class component is not valid.
// Here we can use the constructor like
// constructor(){
// super()
// }

// import React from "react";

// export default function Home(props) {
//   const handleclick = () => {
//     // alert("You Clicked Me Bro");
//     console.warn("You Clicked Me Bro")
//   };

//   return (
//     <div>
//       {/* <h1 onClick={handleclick}>{props.Text}</h1> */}

// <h1>{props.Text.name}</h1>
// <h2>{props.Text.rollno}</h2>
// <h3>{props.Text.place}</h3>
//     </div>
//   );
// }
//function is a stateless component

//Props is properties like passing data it is used when we want to pass data from parent to child

// import React from "react";

// export default class Home extends React.Component {
//   render() {
//     return (
//       <div>
//         {/* <h1 onClick={handleclick}>{props.Text}</h1> */}

//         <h1>{this.props.Text.name}</h1>
//         <h2>{this.props.Text.rollno}</h2>
//         <h3>{this.props.Text.place}</h3>
//       </div>
//     );
//   }
// }

//React component states

// import React from "react";

// export default class Home extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       name: "vaishnavi",
//       lastname: "choudhary",
//       rollno: "17",
//       count: 0
//     };
//   }
// updatestate(){
//     this.setState({
//         name: "panda",
//         count:this.state.count+1
//     })
// }

//   render() {
//     return (
//       <div>
//         <h1>Name : {this.state.name}</h1>
//         <h1>LastName : {this.state.lastname}</h1>
//         <h1>Roll No: {this.state.rollno}</h1>
//         <label>Count: {this.state.count}</label>
//         <br />
//         <button onClick={()=>{
//            this.updatestate()
//         }}>Update Name</button>
//       </div>
//     );
//   }
// }


// import React from 'react'
// import { useState } from 'react'

// function Home() {

//     const [hide, sethide]=useState(false)

//     const hide11 = () =>{
//        sethide(!hide)

//     }
//   return (
//     <div> 
       
//         {hide ? null :  <h1>Hide and SHow of Buttons</h1>}
//         <button onClick={hide11}>Click Me</button>
    
    
//     </div>
    
//   )
// }

// export default Home

