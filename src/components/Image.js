/**
 * image组件
 */
"use strict"

import './less/image.less'
import React from 'react' 

export default class Image extends React.Component {

    static defaultProps = {
        prefix: 'zui'
    }

    state = {
        status: 'loading'
    }

    render = () => {
        const prefix = this.props.prefix
        const cls = prefix+"-image "+this.state.status+" "+this.props.className
        return <img title="加载中" className={cls} src={this.props.src} onLoad={()=>{
            this.setState({
                status: 'done'
            })
        }} onClick={this.props.onClick}/>
    }
}
