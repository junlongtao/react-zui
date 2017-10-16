/**
 * loading组件
 */
"use strict"

import './less/loading.less'
import React from 'react' 

export default class Loading extends React.Component {

    render() {
        //return <div className="weui_loading" id={this.props.id}
        //    style={{'display':'none'}}>
        //    <img className="loader" src={puffSvg}/>
        //</div>
        return <div className="weui_loading" id={this.props.id}>
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
