'use strict'

import './less/label.less'
import React from 'react' 

export default class Label extends React.Component {
    static defaultProps = {
        prefix: 'zui',
        className: '', 
        height: '20px',
        color: '#ffe133',
        onClick(){}
    }

    render = () => {
        const color = this.props.color
        const height = parseInt(this.props.height)/2
        const prefix = this.props.prefix
        return <div className={prefix+'-label '+ this.props.className} style={{
            marginLeft: this.props.height
        }} onClick={this.props.onClick}>
            <div className={prefix+'-label-content'} style={{
                background: color,
                height: this.props.height 
            }}>{this.props.children}</div>
            <div className={prefix+'-label-triangle'} style={{
                left: '-'+height+'px',
                border: height+"px solid transparent",
                borderColor: color+' transparent',
                borderStyle: 'solid none solid solid',
            }}></div>
        </div>
    }
}