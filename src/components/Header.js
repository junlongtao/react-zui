/**
 * header
 */
'use strict'

import './less/header.less'
import React from 'react'
import Icon from './Icon'

export default class Header extends React.Component {

    static defaultProps = {
        title: '',
        className: '',
        prefix: 'zui',
        backVisible: true
    }

    onBackClick = () => {
        if (this.props.prev) {
            location.assign(this.props.prev)
        } else {
            history.back()
        }
    }

    render = () => {
        const prefix = this.props.prefix
        return <div className={prefix+'-header '+this.props.className}>
            <div className={prefix+'-header-content'}>
                {this.props.backVisible ? <Icon type="back" className={prefix+'-header-back'} onClick={this.onBackClick}/> : null}
                {this.props.children}
            </div>
        </div>
    }
}
