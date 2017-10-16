/**
 * 头像组件
 */
'use strict'

import './less/avatar.less'
import React from 'react'
//import defaultAvatar from './avatar_default.png'

export default class Avatar extends React.Component {
    render = () => {
        let src = this.props.src || defaultAvatar
        if (src == 'http://zcrun.com/images/head.png') {
            src = defaultAvatar
        }
        const width = this.props.width || '70px'
        const style = {
            width: width,
            height: width
        }
        return <img className={"weui_avatar "+this.props.className} style={style}
                    onClick={this.props.onClick} src={src}/>
    }
}
