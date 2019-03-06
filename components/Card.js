import React from 'react';

class TextCard extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.description}</p>
                <img src={this.props.URLImage}/>
            </div>
        ); //Todo lo que esta dentro es JSX que regresa en HTML
    }
}

export default TextCard;