/**
 *顶部提示
 */
import './less/notice-bar.less'
import React from 'react'
import Icon from './Icon'

export default class NoticeBar extends React.Component {

    static defaultProps = {
        prefix: 'zui',
        className: '',
        onClose: ()=> {
        }
    }

    state = {
        visible: true
    }

    componentWillReceiveProps = nextProps => {
        this.setState({visible: nextProps.visible})
    }

    onCloseClick = () => {
        this.setState({
            visible: false
        })
        this.props.onClose()
    }

    render = () => {
        const prefix = this.props.prefix
        return this.state.visible ? <div className={prefix+'-notice-bar '+this.props.className}>
            <Icon type="tishi"/>
            {this.props.children}
            <Icon type="guanbi" onClick={this.onCloseClick}/>
        </div> : null
    }
}