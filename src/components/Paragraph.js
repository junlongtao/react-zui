'use strict'

import React from 'react'
import Util from '../../Util'

export default class Paragraph extends React.Component {

    static defaultProps = {
        prefixCls: 'weui',
        className: '',
        max: ''
    }

    render = () => {
        const prefixCls = this.props.prefixCls
        const children = Util.replaceWrap(this.props.children)
        const text = this.props.max ? Util.maxLength(children, this.props.max) : children
        return <p className={prefixCls+'-paragraph '+this.props.className} dangerouslySetInnerHTML={{
            __html: text
        }}></p>
    }
}