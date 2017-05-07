import React from 'react';

export default class MovieWidget extends React.Component{
    render(){
        console.log('movie results?', this.props.movieResults);
        let resultDisplay;
        if (this.props.error){
            resultDisplay = <p>{this.props.error}</p>;
        }else{
            resultDisplay = <div>
                <h3>Search Results</h3>
                <ul>
                    {
                        this.props.movieResults.map((movie, idx)=>
                            <li key={idx}>
                                {movie.title}

                            </li>
                        )
                    }
                </ul>
            </div>;

        }
        return (
            <div>
                <div className = "title">Movies</div>
                <input className = "search" placeholder = "enter movie name" value = {this.props.query} onChange = {(event) => this.props.change_query(event.target.value)}/>
                <div>
                <button className = "submit" onClick = {()=> this.props.getMovie(this.props.query)} >Search</button>
                {resultDisplay}
                </div>
            </div>
        )
    }
};
