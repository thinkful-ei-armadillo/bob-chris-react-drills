import React, { Component } from 'react';


class Bomb extends Component{
    state = {
        count: 0,
    };  
    
    interval = setInterval(() =>{
        this.setState({
            count: this.state.count + 1 
        })
    }, 1000)


    componentDidMount(){
        return this.interval 
    }

    bombString(){
        if(this.state.count >= 8){
            clearInterval(this.interval); 
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
    
    componentWillUnmount(){
        clearInterval(this.interval); 
    }

}
export default Bomb; 