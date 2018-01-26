/**
 * 单选框组件
 */
"use strict"

import './less/checkbox.less'
import React from 'react'
import Icon from './Icon'

export default class Checkbox extends React.Component {

    static defaultProps = {
        prefix: 'zui',
        value: false,
        className: '',
        onChange: () => {}
    }

    componentWillMount = () => {
        this.setState({
            value: this.props.value
        })
    }

    render = () => {
        const prefix = this.props.prefix
        const active = this.props.value?'active':''
        return <span className={prefix+'-checkbox '+active+' '+this.props.className} onClick={()=>{
            this.props.onChange(!this.state.value)
            this.setState({value: !this.state.value})
        }}>
            <Icon type="xuanze"/>
        </span>
    }
}
