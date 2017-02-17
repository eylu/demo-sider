import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Department from './department';

export default class PanelDepartment extends Component{

    constructor(props){
        super(props);
        this.state = {
            clean: false,
        };

        this.cleanHandle = this.cleanHandle.bind(this);
    }

    /**
     * 清空按钮Handle
     * @param  {Boolean} status 是否清空
     */
    cleanHandle(status){
        this.setState({
            clean: status,
        });
    }

    render(){
        return(
            <div className="department">
                <div className="department-head clearfix">
                    <span className="txt l">招聘职位</span>
                    <span className="btn-clean r" onClick={()=>this.cleanHandle(true)}>清空</span>
                </div>
                {departData.map((depart,i)=>{
                    return <Department
                                key={i}
                                data={depart}
                                clean={this.state.clean}
                                setClean={this.cleanHandle}
                                />
                })}
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
            {id: 13, name: 'Android 远程控制工程师', number: 61},
            {id: 14, name: 'Web 前端工程师', number: 31},
            {id: 15, name: 'Android 多媒体软件开发工程师', number: 2},
        ]
    },
    {
        id: 2,
        departName: '产品设计部门',
        number: 136,
        jobs: [
            {id: 21, name: '网页设计师', number: 47},
            {id: 22, name: 'ID／工业设计师', number: 39},
            {id: 23, name: '视觉设计师／GUI界面设计师', number: 42},
            {id: 24, name: '平面设计师', number: 8},
        ]
    }
];