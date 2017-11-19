'use strict'
import './less/list-loading.less'
import React from 'react'
import Icon from './Icon'
export default class ListLoading extends React.Component {
    
    static defaultProps = {
        visible: true,
        hasMore: true,
        prefix: 'zui'
    }

    render = () => {
        const prefix = this.props.prefix
        return <div className={prefix+'-list-loading'} onClick={this.props.onClick}>
            {this.props.hasMore ? <div className="circle"></div> : <div className="no-more">没有更多了</div>}
        </div>
    }
}