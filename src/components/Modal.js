'use strict'

import './less/modal.less'
import React from 'react'
import Mask from './Mask'
import Icon from './Icon'

export default class Modal extends React.Component {

    static defaultProps = {
        prefixCls: 'weui'
    }

    state = {
        status: ''
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            status: nextProps.status
        })
    }

    render = () => {
        const cls = this.props.className
        const status = this.state.status
        const prefixCls = this.props.prefixCls
        return <div className={prefixCls+'-modal '+cls+' '+status}>
            <div className={prefixCls+'-modal-content'} ref={prefixCls+'-modal-content'}>
                {this.props.children}
                <div className={prefixCls+'-modal-close'} onClick={()=>{
                    this.setState({
                        status: 'close'
                    })
                }}>
                    <div className="line"></div>
                    <Icon type="guanbi"/>
                </div>
            </div>
            <Mask onClick={()=>{
                this.setState({
                    status: 'close'
                })
            }}/>
        </div>
    }
}