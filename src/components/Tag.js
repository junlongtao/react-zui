'use strict'

import './less/tag.less'
import React from 'react'

export default class Label extends React.Component {

    static defaultProps = {
        prefix: 'zui',
        className: '',
        onClick: ()=> {
        }
    }

    render = () => {
        const prefix = this.props.prefix
        return <span className={prefix+'-tag '+ this.props.className} onClick={this.props.onClick}>
            {this.props.children}
        </span>
    }
}