/**
 * page组件
 */
"use strict"

import './less/page.less'
import React from 'react'
import Header from './Header'
import ReturnTop from './ReturnTop'
import {setDocumentTitle} from '../util'

export default class Page extends React.Component {

    static defaultProps = {
        prefix: 'zui',
        className: '',
        headerVisible: true,
        returnTopVisible: false
    }

    componentWillMount = () => {
        setDocumentTitle(this.props.title)
    }

    componentDidMount = () => {
        window.scrollTo(0,0)
    }

    render = () => {
        const prefix = this.props.prefix
        return <div className={prefix+'-page '+this.props.className}>
            {this.props.headerVisible?<Header backVisible={this.props.backVisible}>
                {this.props.title}
            </Header>:null}
            {this.props.children}
            {this.props.returnTopVisible ? <ReturnTop/> : null}
        </div>
    }
}
