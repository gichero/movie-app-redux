import React from 'react';

export default class MovieWidget extends React.Component{
    render(){
        console.log(this.props.movieData);
        return (
            <div>
                <div className = "title">Movies</div>
                <input className = "search" placeholder = "enter movie name" value = {this.props.find} onChange = {(event) => this.props.change_query(event)}/>
                <div>
                <button className = "submit" onClick = {()=> this.props.getMovie(this.props.find)} >Submit</button>

                </div>
            </div>
        )
    }
};
