
/**
 * 引入库组件
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * 引入样式
 */
import './assets/fonts/iconfont.css';
import './assets/stylesheet/core.css';
import './assets/stylesheet/sider.css';
import './assets/stylesheet/department.css';

/**
 * 引入组件
 */
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