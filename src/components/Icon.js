/**
 * iconfont组件
 */
'use strict'

import React from 'react'

export default class Icon extends React.Component {
    render = () => {
        const cls = 'weui-icon icon iconfont icon-'+this.props.type+' '+this.props.className
        let style = this.props.style || {}
        if (this.props.type == 'blank') {
            style['margin-right'] = '22px'
        }
        return <i id={this.props.id} className={cls} style={style}
            onClick={this.props.onClick} onMouseOver={this.props.onMouseOver}/>
    }
}
