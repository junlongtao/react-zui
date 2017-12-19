'use strict'

import './less/network-status-check.less'
import React from 'react'
import Button from './Button'
import networkimg from './img/network.jpg'

export default class NetworkStatusCheck extends React.Component {

    state = {
        online: true
    }

    componentDidMount = () => {
        //监听网络状态
        window.addEventListener("online", ()=> {
            this.setState({
                online: true
            })
        }, false)
        window.addEventListener("offline", ()=> {
            this.setState({
                online: false
            })
        }, false)
    }

    render = () => {
        const prefix = this.props.prefix
        return !this.state.online && <div className={prefix+'-network-status-check'}>
            <div className={prefix+"-network-error"}>
                <img src={networkimg}/>
                <div className="tip-text">网络不可用</div>
                <div className="tip-text small">请检查您的网络连接</div>
                <Button onClick={()=>{window.location.reload()}}>点击重试</Button>
            </div>
        </div>
    }
}