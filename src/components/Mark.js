/**
 *水印标记
 */
import './less/mark.less'
import React from 'react'
export default class Mark extends React.Component {
    render = () => {
        return <div className="weui_mark">{this.props.content}</div>
    }
}