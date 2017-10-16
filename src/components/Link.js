'use strict'

import './less/link.less'
import React from 'react'
import Util from '../Util'

export default class Link extends React.Component {
    static defaultProps = {
        prefix: 'weui',
        href: '',
        className: ''
    }

    onClick = () => {
        if (this.props.href.indexOf('tel:') != -1) {
            return false
        }
        if (this.props.href.indexOf('mailto:') != -1) {
            return false
        }

        Util.assign(this.props.href)
    }

    renderHref = () => {
        if (this.props.href.indexOf('tel:') != -1) {
            return this.props.href
        }
        if (this.props.href.indexOf('mailto:') != -1) {
            return this.props.href
        }

        return 'javascript:;'
    }

    render = () => {
        const prefix = this.props.prefix
        return <a href={this.renderHref()} className={prefix+'-link '+ this.props.className} onClick={this.onClick}>
            {this.props.children}
        </a>
    }
}
