/**
 * 内容为空提示组件
 */
'use strict'

import './less/empty-tip.less'
import React from 'react'
import Icon from './Icon'

export default class EmptyTip extends React.Component {

    static defaultProps = {
        prefix: 'zui'
    }

    render = () => {
        const prefix = this.props.prefix
        return <div className={prefix+'-empty-tip cursor '+this.props.className} onClick={this.props.onClick}>
            <Icon type="empty" className={prefix+'-empty-tip-icon'}/>
            <div className={prefix+'-empty-tip-content'}>{this.props.children}</div>
        </div>
    }
}
