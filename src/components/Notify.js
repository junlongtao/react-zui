/**
 * page组件
 */
"use strict"

import './less/notify.less'
import React from 'react'
import Icon from './Icon'
import Util from '../Util'

export default class Notify extends React.Component {

    state = {
        visible: false
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            visible: nextProps.visible
        })
    }

    onCloseClick = () => {
        this.setState({
            visible: false
        })
    }

    onClick = () => {
        this.props.onClick(this.props.data)
    }

    render = () => {
        const top = this.state.visible ? '0' : '-100px'
        const visibility = this.state.visible ? 'visible' : 'hidden'
        return <div className='weui_notify' style={{top: top, visibility: visibility}}>
            <Icon type="notice" className="fade_in"/>
            <Icon type="close" className="fade_in cursor" onClick={this.onCloseClick}/>
            <div onClick={this.onClick}>{this.props.content}</div>
        </div>
    }
}
