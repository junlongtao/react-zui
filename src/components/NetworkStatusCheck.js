'use strict'

import './less/network_status_check.less'
import React from 'react'
//import networkimg from './img/network.jpg'

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
        return !this.state.online ? <div className='network_status_check'>
            <div className="network_error">
                <img src={networkimg}/>
                <div className="tip_text">网络不可用</div>
                <div className="tip_text small">请检查您的网络连接</div>
                <Button onClick={()=>{window.location.reload()}}>点击重试</Button>
            </div>
        </div> : null
    }
}
