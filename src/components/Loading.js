/**
 * loading组件
 */
"use strict"

import './less/loading.less'
import React from 'react' 

export default class Loading extends React.Component {

    static defaultProps = {
        prefix: 'zui',
        visible: true,
    }

    render() {
        const prefix = this.props.prefix
        const display = this.props.visible?'block':'none'
        return <div className={prefix+"-loading"} id={this.props.id} style={{display:display}}>
            <div className="loading">
                <div className="dot white"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    }
}
