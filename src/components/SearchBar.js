'use strict'

import './less/search-bar.less'
import React from 'react' 
import Icon from './Icon'

export default class SearchBar extends React.Component {
    static defaultProps = { 
        prefix: 'zui',
        className: '',
        placeholder: '请输入',
        onChange: ()=>{}
    } 

    render = () => {
        const prefix = this.props.prefix
        return <div className={prefix+'-search-bar '+this.props.className}>
            <Icon type="sousuo" className={prefix+'-search-bar-icon'}/>
            <input type="text" value={this.props.value} className={prefix+'-search-bar-input'} placeholder={this.props.placeholder} onChange={(e)=>{
                this.props.onChange(e.target.value)
            }}/>
        </div>
    }
}