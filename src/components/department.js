import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Department extends Component{

    constructor(props){
        super(props);

        this.state = {
            depart: props.data,
        };
    }



    render(){
        return(
            <div className="depart">
                <div className="depart-name flex-wrapper">
                    <div className="flex1">{this.state.depart.departName}</div>
                    <div className="count">{this.state.depart.number}</div>
                </div>
                <ul>
                    {
                        this.state.depart.jobs.map((job, i)=>{
                            return (
                                <li key={i} className="flex-wrapper">
                                    <div className="flex1">{job.name}</div>
                                    <div className="count">{job.number}</div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}