
/**
 * 引入库组件
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheet/core.css';
import './assets/stylesheet/sider.css';
import './assets/stylesheet/department.css';


import Sider from './components/sider';



class App extends Component{
    render(){
        return (
            <div className="flex-wrapper">
                <Sider />
                <div className="flex1">
                    这里是右边内容
                </div>
            </div>
        );
    }
}

ReactDOM.render( <App />, document.getElementById('root'));