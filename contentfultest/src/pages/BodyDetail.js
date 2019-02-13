import React, { Component } from 'react';

export default class BodyDetail extends React.Component{
    constructor(props){
        super(props)


    }
    render(){
        console.log(this.props.location.state);
        
        return(
            <div>
                <p>かくにん</p>
                 <p>{this.props.match.params.id}</p><br/>
                 <p>{this.props.location.state.title}</p><br/>
                 <p>{this.props.location.state.body}</p><br/>
            </div>
        )
    }

}