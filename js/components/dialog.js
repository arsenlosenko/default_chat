import React from 'react';
import ReactDOM from 'react-dom';


export default class Dialog extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="send message"
                    />
                    <input 
                        type="submit"
                        value="Send"
                    />
                </form>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
