'use strict'

import './less/page-loading.less'
import React from 'react'

export default class PageLoading extends React.Component {

    static defaultProps = {
        prefix: 'zui',
        title: 'ZHICHOU',
        slogan: '互联网高级人才一站式直租平台'
    }

    render = () => {
        const prefix = this.props.prefix
        return <div className={prefix+'-page-loading'}>
            <div className={prefix+'-page-loading-content'}>
                <div className="mask"></div>
                <h4 className="title">{this.props.title}</h4>
                <div className="slogan">{this.props.slogan}</div>
            </div>
        </div>
    }
}