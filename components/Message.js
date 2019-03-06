import React from 'react';

class Message extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <p>{this.props.name}</p>
            </div>
        ); //Todo lo que esta dentro es JSX que regresa en HTML
    }
}

export default Message;