/**
 * 返回顶部组件
 */
'use strict'

import './less/return_top.less'
import React from 'react'
import Icon from './Icon'
import Util from '../Util'

export default class ReturnTop extends React.Component {

    state = {
        cls: '',
        visible: false
    }

    //滚动条在Y轴上的滚动距离
    getScrollTop = () => {
        var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop
    }

    componentDidMount = () => {
        Util.onScrollBottom('setReturnTopVisible', () => {
            const visible = this.getScrollTop() > 500 ? true : false
            this.setState({
                visible: visible
            })
        })
    }

    onClick = () => {
        this.setState({
            cls: 'fly_out'
        })

        const timer = setInterval(()=> {
            const currentPosition = document.documentElement.scrollTop || document.body.scrollTop
            window.scrollTo(0, currentPosition - 200)
        }, 1)
        setTimeout(()=> {
            window.scrollTo(0, 0)
            clearInterval(timer)
            this.setState({
                visible: false,
                cls: ''
            })
        }, 1000)
    }

    render = () => {
        return <div id="return_top" className={"weui_return_top cursor "+this.state.cls}
                    style={{display: this.state.visible?'block':'none'}} onClick={this.onClick}>
            <Icon type="rocket"/>
        </div>
    }
}
