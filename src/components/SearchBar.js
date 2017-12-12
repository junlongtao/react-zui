'use strict'

import './less/search-bar.less'
import React from 'react' 
import Icon from './Icon'

export default class SearchBar extends React.Component {
    static defaultProps = { 
        prefix: 'zui',
        className: '',
        onClick: ()=>{},
        onFocus: ()=>{},
        onChange: ()=>{},
        onCancel: ()=>{},
        placeholder: '请输入',
    } 

    state = {
        focus: false
    }

    render = () => {
        const prefix = this.props.prefix
        const focusCls = this.state.focus?'focus ':' '
        return <div className={prefix+'-search-bar '+focusCls+this.props.className}>
            <Icon type="sousuo" className={prefix+'-search-bar-icon'}/>
            <input 
                type="text" 
                value={this.props.value} 
                className={prefix+'-search-bar-input'} 
                placeholder={this.props.placeholder} 
                onClick={this.props.onClick}
                onFocus={e=>{
                    this.setState({focus: true})
                    this.props.onFocus()
                }}
                onChange={(e)=>{
                    this.props.onChange(e.target.value)
                }}
            />
            {this.state.focus?<span className={prefix+"-search-bar-cancel"} onClick={()=>{
                this.setState({focus: false})
                this.props.onCancel()
            }}>取消</span>:null}
        </div>
    }
}