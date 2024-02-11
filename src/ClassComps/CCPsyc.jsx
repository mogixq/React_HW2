import React, { Component } from 'react'

export default class CCPsyc extends Component {
    constructor(props){
        super(props);
        this.state = {
            abvLN:'',
            abvName:'',
            abvScore:'',
            blwScore:''
        }
    }

    txtLN_Focus = (e) =>{
      this.setState({abvLN : 'Please fill the Last Name field'});
    }
    txtLN_Blur = (e) =>{
      this.setState({abvLN :''});
    }

    txtName_Focus = (e) =>{
      this.setState({abvName: 'Please fill the Name field'})
    }
    txtName_Blur = (e) => {
      this.setState({abvName: ''})
    }

    txtScore_Focus = (e) =>{
      this.setState({abvScore: 'Please fill the Score field'})
    }
    txtScore_Blur = (e) => {
      this.setState({abvScore: ''})
      if(e.target.value>555){
        this.setState({blwScore:'You are accepted'})
      }else{
        this.setState({blwScore:'Try again next year'})
      }
    }

  render() {
    return (
      <div style={{backgroundColor:'beige' ,color:'black' ,borderRadius:10}}>
        <form >
            <p style={{color:'red'}}>{this.state.abvLN}</p> 
            Last Name: <input type="text"  id="txtLastName" onFocus={this.txtLN_Focus} onBlur={this.txtLN_Blur} /> <br />
            
            <p style={{color:'red'}}>{this.state.abvName}</p>
            Name: <input type="text"  id="txtName" onFocus={this.txtName_Focus} onBlur={this.txtName_Blur} /> <br />
            
            <p style={{color:'red'}}>{this.state.abvScore}</p>
            Score: <input type="number" id="txtNumber" onFocus={this.txtScore_Focus} onBlur={this.txtScore_Blur} /> <br />
            {this.state.blwScore}
            <br />
        </form>
      </div>
    )
  }
}
