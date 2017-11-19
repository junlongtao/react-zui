/**
 * iconfont组件
 */
'use strict' 
import React from 'react'
import './less/iconfont.css'
export default class Icon extends React.Component {

    static defaultProps = {
        type: '',
        className: '',
        prefix: 'zui',
        onClick: () => {
        }
    }

    render = () => {
        const prefix = this.props.prefix
        return <i className={prefix+'-icon iconfont icon-'+this.props.type+' '+this.props.className}
                  onClick={this.props.onClick}></i>
    }
}
