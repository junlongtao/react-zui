/**
 * 返回顶部组件
 */
'use strict'

import './less/return-top.less'
import React from 'react'
import Icon from './Icon'
import {onWindowScroll} from '../util'

export default class ReturnTop extends React.Component {

    static defaultProps = {
        prefix: 'zui', 
        className: '',
    }

    state = { 
        status: ''
    } 

    componentDidMount = () => {
        this.returnTopMounted = true
        onWindowScroll(()=>{
            this.returnTopMounted && this.setState({status: ''})
        }, () => {  
            this.returnTopMounted && this.setState({status: 'ready'})
        })
    }

    componentWillUnmount = () => {
        this.returnTopMounted = false
    }

    onClick = () => { 
        window.returnTopInterval = setInterval(()=> { 
            const currentPosition = document.documentElement.scrollTop || document.body.scrollTop  
            window.scrollTo(0, currentPosition-100)
            if(currentPosition-100<=0){
                clearInterval(window.returnTopInterval)
            }
        }, 1) 
        this.setState({status: 'fly-out'})
    }

    render = () => {
        const prefix = this.props.prefix  
        const cls = this.props.className
        const status = this.state.status
        return <div className={prefix+"-return-top "+cls+' '+status} onClick={this.onClick}>
            <Icon type="rocket"/>
        </div>
    }
}
