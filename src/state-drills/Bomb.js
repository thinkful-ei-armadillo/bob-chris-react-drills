import React, { Component } from 'react';


class Bomb extends Component{
    state = {
        count: 0,
    }, 
    
    let interval = setInterval(() =>{
        this.setState({
            count: this.state.count + 1 
        })
    }, 1000)


    componentDidMount(){
        
    }

    bombString(){
        if(this.state.count >= 8){
            clearInterval(); 
            return "BOOM!!!!"    
        }
        if (this.state.count % 2 === 0){
            return "Tick";
        }
        else {
            return "Tock"; 
        }
    }
    
    render(){
        return(
            <div>
                <p>
                { this.bombString() }
                </p>
            </div>
        )
    }
}
export default Bomb; 