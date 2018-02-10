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

    state = {
        status: ''
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            status: nextProps.visible?'open':''
        })
    }

    onCloseClick = () => {
        this.setState({status: 'close'})
        this.props.onClose()
    }

    render = () => { 
        const prefix = this.props.prefix
        const title = this.props.title
        return <div className={prefix+'-modal '+this.props.className+' '+this.state.status}>
            <Mask onClick={()=>{
                this.setState({status: 'close'})
                this.props.onClose()
            }}/>
            <div className={prefix+'-modal-content'}>
                <div className={prefix+'-modal-close'} onClick={this.onCloseClick}>
                    <Icon type="close"/>
                </div>
                {title&&<div className={prefix+'-modal-header'}>{title}</div>}
                <div>
                    {this.props.children}
                </div>
            </div>
        </div>
    }
}