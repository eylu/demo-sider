import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Department extends Component{

    constructor(props){
        super(props);

        this.state = {
            depart: props.data,
            checkedList: [],
            checkAll: false,
        };

        this.onChange = this.onChange.bind(this);
        this.onCheckAllChange = this.onCheckAllChange.bind(this);
    }

    onChange(e) {
        var jobList = this.state.depart.jobs.map((job)=>{return job.id});
        var list = this.state.checkedList;
        var value = parseInt(e.target.value);
        var index = list.indexOf(value);
        if(e.target.checked){
            if(index==-1){
                list.push(value)
            }
        }else{
            if(index > -1){
                list.splice(index, 1);
            }
        }

        this.setState({
            checkedList: list,
            checkAll: list.length === jobList.length,
        });
    }

    onCheckAllChange(e) {
        var jobList = this.state.depart.jobs.map((job)=>{return job.id});
        this.setState({
            checkedList: e.target.checked ? jobList : [],
            checkAll: e.target.checked,
        });
    }


    render(){
        return(
            <div className="depart">
                <div className="depart-title flex-wrapper">
                    <div>
                        <input type="checkbox" onChange={this.onCheckAllChange} checked={this.state.checkAll} />
                    </div>
                    <div className="name flex1">{this.state.depart.departName}</div>
                    <div className="count">{this.state.depart.number}</div>
                </div>
                <ul className="jobs">
                    {
                        this.state.depart.jobs.map((job, i)=>{
                            return (
                                <li key={i} className="flex-wrapper">
                                    <div>
                                        <input type="checkbox" value={job.id} checked={this.state.checkedList.indexOf(job.id)>-1} onChange={this.onChange} />
                                    </div>
                                    <div className="name flex1">{job.name}</div>
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