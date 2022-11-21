import React, { Component } from 'react'

export default class ClassForm extends Component {

    constructor(props){
        super(props)

        this.state = {
            students:[
                {       
            fullName:"Lexis", 
            Gen:23,        
        },

        {
                    
            fullName:"Josh", 
            Gen:23,
        
        },

        {
                    
            fullName:"Sam", 
            Gen:23,
        
        },

        {
                    
            fullName:"Badiako", 
            Gen:23,
        
        },
      
        
    ],

    fullName:"will",
    Gen:"",
             
        };

    }

handleChange = (e) => {
e.preventDefaul();
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state.name)
}

handlesubmit = (e) =>{
    e.preventDefaul();

const newStudent = {
    Name:this .state.name,
    Gen :this.state.Gen,

};

this.state({
students:[...this.state.students,newStudent],

name:"",
gen:"",


})

}



  render() {
    return (
      <div>
        {/* <h1>{this.state.students[0].fullName}</h1> */}

        <form>
            <h1>fullName</h1>
            <input type="text  " placeholder="fullName" onChange={this.handleChange}
              name="fullName" ></input>
            <h1>Gen</h1>

            <input placeholder='number' onChange={this.handleChange} 
            name="Gen" ></input>
            <input type="submit"></input>
        </form>

        {
            this.state.students.map((item)=>{
                return (
                    <div>
                        <h1>Name: {item.fullName}</h1>
                        <br/>
                        <h2>Name: {item.Gen}</h2>
                        <hr/>
                    </div>

                )
            })
        }
        
        
      </div>
    )
  }
}
