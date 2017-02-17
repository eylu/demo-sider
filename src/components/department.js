import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Department extends Component{

    constructor(props){
        super(props);

        this.state = {
            depart: props.data,
            checkedList: [],     // 选中的id列表
            checkAll: false,     // 是否全部选中
        };

        this.onChange = this.onChange.bind(this);
        this.onCheckAllChange = this.onCheckAllChange.bind(this);
    }

    componentWillReceiveProps(nextProps){
        // 当接收到新属性 clean 并且为 true 时，清空选中
        if(this.props.clean !== nextProps.clean && !!nextProps.clean){
            this.setState({
                checkedList: [],
                checkAll: false,
            });
        }
    }

    /**
     * 职位状态改变 Handle
     * @param  {Object} e
     *
     * 1、依据自身状态判断是否符合全选状态
     * 2、设置清空状态为false
     */
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

        this.props.setClean && this.props.setClean(false);
    }

    /**
     * 部门选中事件
     * @param  {Object} e
     *
     * 1、依据自身状态判断是否符合全选状态
     *     自身为true时，选中列表设置为全部职位
     *     自身为false时，选中列表设置为空数组
     * 2、设置清空状态为false
     */
    onCheckAllChange(e) {
        var jobList = this.state.depart.jobs.map((job)=>{return job.id});
        this.setState({
            checkedList: e.target.checked ? jobList : [],
            checkAll: e.target.checked,
        });
        this.props.setClean && this.props.setClean(false);
    }


    render(){
        return(
            <div className="depart">
                <div className="depart-title flex-wrapper">
                    <div>
                        <input type="checkbox" onChange={this.onCheckAllChange} checked={this.state.checkAll} />
                    </div>
                    <div className="name flex1">
                        {this.state.depart.departName}
                        <i className="iconfont icon-xiangxia2"></i>
                    </div>
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