/**
 * 内容为空提示组件
 */
'use strict'

import './less/empty_tip.less'
import React from 'react'
import Icon from './Icon'

export default class EmptyTip extends React.Component {

    render = () => {
        return <Icon type="empty" className="weui_empty_tip"/>
    }
}
