'use strict'

import './less/modal.less'
import React from 'react'
import Mask from './Mask'
import Icon from './Icon'

export default class Modal extends React.Component {

    static defaultProps = {
        prefix: 'zui',
        visible: false,
        onClose: ()=>{}
    }

    state = {}

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            visible: nextProps.visible
        })
    }

    onCloseClick = () => {
        this.setState({visible:false})
        this.props.onClose()
    }

    render = () => { 
        const prefix = this.props.prefix
        const title = this.props.title
        return this.state.visible? <div className={prefix+'-modal open '+this.props.className}>
            <Mask onClick={this.onCloseClick}/>
            <div className={prefix+'-modal-content'}>
                <div className={prefix+'-modal-close'} onClick={this.onCloseClick}>
                    <Icon type="close"/>
                </div>
                {title&&<div className={prefix+'-modal-header'}>{title}</div>}
                <div>
                    {this.props.children}
                </div>
            </div>
        </div>:null
    }
}