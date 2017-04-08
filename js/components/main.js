import React from 'react';
import ReactDOM from 'react-dom';

export default class Main extends React.Component{
    render(){
        let links = [];
        for(let i =0; i < this.props.numberOfContacts; i++){
            links.push(<li className="links" key={i}>
                            <img src={this.props.pic}/>
                            <a href="#">{this.props.name}</a>
                        </li>)
        }
        return(
            <ul>
                {links}
            </ul>
        );
    }
}

