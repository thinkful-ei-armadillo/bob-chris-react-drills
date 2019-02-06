import React, { Component } from 'react';


class Accordion extends Component{
    state = { 
        buttonOpen: null
    }

    handleClicked = () => {

    }

    render(){
        const cards = this.props.sections.map((section, index) =>
        {
            return <li key={index}><button>{section.title}</button></li>
        })
        return(
            <ul>
                { cards }
            </ul>
        );
    }
    
}

export default Accordion