'use strict'

import './less/picker.less'
import React from 'react'
import Icon from './Icon'

export default class Picker extends React.Component {

    static defaultProps = {
        status: '',
        prefix: 'zui',
        name: '请选择',
        onChange: () => {
        }
    }

    state = {
        status: ''
    }

    componentWillReceiveProps = nextProps => {
        this.setState({status: nextProps.status})
    }

    onBackClick = () => {
        this.setState({status: 'close'})
        this.props.onBackClick()
    }

    render = () => {
        const status = this.state.status
        const prefix = this.props.prefix
        const className = this.props.className
        return <div className={prefix+'-picker '+className+' '+status}>
            <div className={prefix+"-picker-name"}>
                <Icon type="back" onClick={this.onBackClick}/>
                {this.props.name}
            </div>
            <div className={prefix+"-picker-content"}>
                {this.props.children}
            </div>
        </div>
    }
}