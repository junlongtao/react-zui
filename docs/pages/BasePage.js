/**
 * page组件
 */
"use strict"

import './less/base-page.less'
import React from 'react'
import {Page} from '../../build/packages'
import {parseUrl} from '../utils'

export default class BasePage extends React.Component {

    static defaultProps = {
        className: ''
    }

    render = () => {
        const className = this.props.className
        const pageAnimate = parseUrl('page_animate')
        return <Page title={this.props.title} className={'base-page ' + className + ' ' + pageAnimate}>
            {this.props.children}
        </Page>
    }
}