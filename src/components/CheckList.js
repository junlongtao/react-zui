/**
 * 单选框组件
 */
"use strict"

import './less/check-list.less'
import React from 'react' 
import Message from './Message'

export default class CheckList extends React.Component {

    static defaultProps = {
        value: [],
        prefix: 'zui',
        name: '请选择',
        className: '',
        max: Infinity, 
        onChange: () => {}
    }

    state = {
        value: []
    }

    componentWillMount = () => {
        this.setState({
            value: this.props.value
        })
    }

    onOptionClick = item => { 
        const value = this.state.value
        const index = value.indexOf(item)
        if(index === -1 && value.length>=this.props.max){
            Message.info('最多同时选择'+this.props.max+'项')
            return false 
        }
        if(index === -1){ 
            value.push(item) 
        }else{
            value.splice(index, 1)
        }
        this.setState({value: value})
        this.props.onChange(value)
    }

    render = () => {
        const prefix = this.props.prefix
        const value = this.props.value
        return <div className={prefix+'-check-list'+this.props.className}>
            <div className={prefix+'-check-list-name'}>
                {this.props.name}
            </div>
            <ul className={prefix+'-check-list-option-list'}>
                {this.props.data.map(item=>{
                    const cls = value.indexOf(item)!==-1?'active':''
                    return <li key={item} 
                        className={prefix+'-check-list-option '+cls} 
                        onClick={()=>{
                            this.onOptionClick(item)
                        }}>
                        <span className={prefix+'-check-list-square'}>
                            {cls==='active'&&<span className={prefix+'-check-list-square-inner'}></span>}
                        </span>
                        <span>{item}</span>
                    </li>
                })}                
            </ul>
        </div>
    }
}
