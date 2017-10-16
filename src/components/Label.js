'use strict'

import './less/label.less'
import React from 'react'
import Util from '../../Util'

export default class Label extends React.Component {
    static defaultProps = {
        prefix: 'weui',
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