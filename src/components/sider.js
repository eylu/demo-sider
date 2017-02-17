import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * 引入部门组件
 */
import PanelDepartment from './panel-department';

export default class Sider extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="sider">
                <PanelDepartment />
            </div>
        )
    }
}

