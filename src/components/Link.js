'use strict'

import './less/link.less'
import React from 'react' 

export default class Link extends React.Component {
    static defaultProps = {
        href: '',
        prefix: 'zui',
        className: '',
        onClick: ()=>{}
    } 

    render = () => {
        const prefix = this.props.prefix
        return <a href={this.props.href} className={prefix+'-link '+this.props.className} onClick={this.props.onClick}>
            {this.props.children}
        </a>
    }
}