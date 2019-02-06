import React, { Component } from 'react';


class Accordion extends Component{

    static defaultProps = {
        sections: []
    };

    state = { 
        buttonOpen: null
    }

    handleClicked = (e) => {
        this.setState({
            buttonOpen: e.currentTarget.getAttribute('id')
        })
        
    }

    render(){
        const cards = this.props.sections.map((section, index) =>
        {
            if (this.state.buttonOpen === index.toString()) {
                return (
                    <li key={index}><button id={index} onClick={this.handleClicked}>{section.title}</button>
                        <p>{section.content}</p>
                    </li>
                )
            }
            else {
                return <li key={index}><button id = {index} onClick = {this.handleClicked}>{section.title}</button></li>
            }
        })
        return(
            <ul>
                { cards }
            </ul>
        );
    }
    
}

export default Accordion