/**
 *顶部提示
 */
import './less/top_notice.less'
import React from 'react'
import Icon from './Icon'

export default class TopNotice extends React.Component {

    static defaultProps = {
        mode: 'closable'
    }

    state = {
        visible: true
    }

    onCloseClick = () => {
        this.setState({
            visible: false
        })
    }

    render = () => {
        const closeIcon = this.props.mode === 'closable' ?
            <Icon type="guanbi" className="cursor" onClick={this.onCloseClick}/> : null
        return this.state.visible ? <div className="weui_top_notice yellow_color">
            <Icon type="tishi"/>
            {this.props.children}
            {closeIcon}
        </div> : null
    }
}