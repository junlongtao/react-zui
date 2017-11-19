/**
 *顶部提示
 */
import './less/top-notice.less'
import React from 'react'
import Icon from './Icon'

export default class TopNotice extends React.Component {

    static defaultProps = {
        prefix: 'zui',
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
        const prefix = this.props.prefix
        return this.state.visible ? <div className={prefix+'-top-notice'}>
            <Icon type="tishi"/>
            {this.props.children}
            <Icon type="guanbi" onClick={this.onCloseClick}/>
        </div> : null
    }
}