/**
 * 邀请页面
 */
"use strict"

import './less/share-pannel.less'
import React from 'react'
import Icon from './Icon'
import Mask from './Mask'
import Util from '../util'
import QRCode from './QRCode'

export default class SharePannel extends React.Component {
    static defaultProps = {
        link: '',
        header: '分享至',
        prefix: 'zui',
        visible: false,
    }

    state = {
        maskVisible: false,
        qrVisible: false
    }

    onShareClick = () => {
        if (Util.os.wechat) {
            this.setState({
                maskVisible: true
            })
        } else {
            this.setState({
                qrVisible: true
            })
        }
    }

    onCopyLinkClick = () => {
        this.refs.link.select()
        document.execCommand("Copy")
        Util.toast('链接已复制')
    }

    render = () => {
        const prefix = this.props.prefix
        return this.props.visible ? <div className={prefix+'-share-pannel'}>
            <h4>
                {this.props.header}
                <Icon type="close" onClick={this.props.onClose}/>
            </h4>
            <ul>
                <li className="cursor" onClick={this.onShareClick}>
                    <Icon type="weixin"/>微信
                </li>
                <li className="cursor" onClick={this.onShareClick}>
                    <Icon type="pengyouquan"/>朋友圈
                </li>
                {Util.os.iPhone || Util.os.android ? null : <li className="cursor" onClick={this.onCopyLinkClick}>
                    <Icon type="link"/>复制链接
                </li>}
            </ul>
            {this.state.maskVisible ? <div className={this.props.prefix+"-share-pannel-mask"}>
                <Mask/>
                <Icon type="wanjiantou"/>
                <p>点击右上角分享给好友</p>
                <Icon type="close" onClick={()=>{
                    this.setState({maskVisible: false})
                }}/>
            </div> : null}
            {this.state.qrVisible ? <div className={this.props.prefix+"-share-pannel-mask"}>
                <Mask/>
                <QRCode text={this.props.link}/>
                <Icon type="close" onClick={()=>{
                    this.setState({qrVisible: false})
                }}/>
            </div> : null}
            <textarea ref="link" style={{opacity:0}} value={this.props.link} onChange={()=>{}}/>
        </div> : null
    }
}