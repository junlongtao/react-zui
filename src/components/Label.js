'use strict'

import './less/label.less'
import React from 'react' 

export default class Label extends React.Component {
    static defaultProps = {
        prefix: 'zui',
        className: ''
    }

    render = () => {
        const prefix = this.props.prefix
        return <div className={prefix+'-label '+ this.props.className}>
            <div className={prefix+'-label-content'}>{this.props.children}</div>
            <div className={prefix+'-label-triangle'}></div>
        </div>
    }
}