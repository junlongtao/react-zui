/**
 * 百分比显示组件
 */
"use strict"

import './less/percent.less'
import React from 'react'
import Util from '../Util'

export default class Percent extends React.Component {
    render = () => {
        const num = Util.getPercent(this.props.num, {
            unit:false
        })
        return <span className="weui_percent">
            <span>{num}</span>
            <span className="percent"> %</span>
        </span>
    }
}
