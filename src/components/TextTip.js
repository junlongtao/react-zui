/**
 * page组件
 */
"use strict"

import './less/text_tip.less'
import React from 'react'
import Icon from './Icon'
import Link from './Link'

export default class TextTip extends React.Component {
    state = {
        visible: false
    }

    renderContent = () => {
        return this.state.visible?<div className="content">
            <div className="title">
                {this.props.title}
                <Icon type="close" onClick={()=>{
                    this.setState({visible: false})
                }}/>
            </div>
            <div className="details">{this.props.children}</div>
        </div>:null
    }

    render = () => {
        return <Link href="javascript: void(0)" className="weui_text_tip">
            <span className="clear" onClick={()=>{
                this.setState({visible: true})
            }}>{this.props.title}</span>
            {this.renderContent()}
        </Link>
    }
}
