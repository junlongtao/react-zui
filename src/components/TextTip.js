/**
 * page组件
 */
"use strict"

import './less/text-tip.less'
import React from 'react'
import Icon from './Icon'

export default class TextTip extends React.Component {

    static defaultProps = {
        prefix: 'zui'
    }

    state = {
        visible: false
    }

    render = () => {
        const prefix = this.props.prefix
        return <a href="javascript: void(0)" className={prefix+"-text-tip"}>
            <span onClick={()=>{
                this.setState({visible: true})
            }}>{this.props.title}</span>
            {this.state.visible ? <div className={prefix+"-text-tip-content"}>
                <div className={prefix+'-text-tip-title'}>
                    {this.props.title}
                    <Icon type="close" onClick={()=>{
                        this.setState({visible: false})
                    }}/>
                </div>
                <div className={prefix+'-text-tip-details'}>
                    {this.props.children}
                </div>
            </div> : null}
        </a>
    }
}
