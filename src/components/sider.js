import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import Department from './department';

export default class Sider extends Component{

    constructor(props){
        super(props);
    }



    render(){
        return(
            <div className="sider">
                <div className="department">
                    <div className="department-title clearfix">
                        <span className="txt l">招聘职位</span>
                        <span className="r">清空</span>
                    </div>
                    {departData.map((depart,i)=>{
                        return <Department key={i} data={depart} />
                    })}
                </div>
            </div>
        )
    }
}

const departData = [
    {
        id: 1,
        departName: '工程研发部门',
        number: 120,
        jobs: [
            {id: 11, name: 'Mac 开发工程师', number: 9},
            {id: 12, name: 'iOS App 测试工程师', number: 17},
        ]
    },
    {
        id: 2,
        departName: '产品设计部门',
        number: 136,
        jobs: [
            {id: 21, name: 'Mac 开发工程师', number: 9},
            {id: 22, name: 'iOS App 测试工程师', number: 17},
        ]
    }
];