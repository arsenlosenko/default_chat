import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main.js';

class App extends React.Component{
    render(){
        let pic = "https://goo.gl/XHpOCn";
        return(
            <div>
                <h1>Default Chat</h1>
                <Main 
                    numberOfContacts="6"
                    pic={pic}
                    name="Sirozha"/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
