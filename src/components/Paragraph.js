'use strict'

import './less/paragraph.less'
import React from 'react'
import Util from '../util'

export default class Paragraph extends React.Component {

    static defaultProps = {
        prefix: 'zui',
        className: '',
        children: ''
    }

    render = () => {
        const prefix = this.props.prefix
        return <p className={prefix+'-paragraph '+this.props.className} dangerouslySetInnerHTML={{
            __html: this.props.children.replace(/(\r)*\n/g, "<br/>")
        }}></p>
    }
}