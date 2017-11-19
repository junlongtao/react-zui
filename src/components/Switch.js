"use strict"

import './less/switch.less'
import React from 'react'

export default class Switch extends React.Component {

    static defaultProps = {
        value: true,
        prefix: 'zui',
        onChange: null
    }

    state = {
        value: 1
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({value: nextProps.value})
    }

    render = () => {
        const prefix = this.props.prefix
        const activeCls = this.state.value == 1 ? 'active' : ''
        return <span className={prefix+'-switch '+activeCls} onClick={()=>{
            const value = this.state.value?0:1
            this.setState({value: value})
            this.props.onChange && this.props.onChange(value)
        }}>
            <span className={prefix+'-switch-circle'}></span>
        </span>
    }
}