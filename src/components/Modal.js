'use strict'

import './less/modal.less'
import React from 'react'
import Mask from './Mask'
import Icon from './Icon'

export default class Modal extends React.Component {

    static defaultProps = {
        prefix: 'zui',
        visible: false,
    }

    state = {
        status: ''
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            status: nextProps.visible?'open':''
        })
    }

    render = () => { 
        const prefix = this.props.prefix
        return <div className={prefix+'-modal '+this.props.className+' '+this.state.status}>
            <Mask onClick={()=>{
                this.setState({status: 'close'})
            }}/>
            <div className={prefix+'-modal-content'}>
                <div className={prefix+'-modal-header'}>
                    {this.props.title}
                </div>
                <div>
                    {this.props.children}
                </div>
                <div className={prefix+'-modal-close'} onClick={()=>{
                    this.setState({status: 'close'})
                }}>
                    <div className={prefix+"-modal-close-line"}></div>
                    <Icon type="guanbi"/>
                </div>
            </div>
        </div>
    }
}