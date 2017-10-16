'use strict'

import './less/list-loading.less'
import React from 'react'
import Icon from './Icon'

export default class ListLoading extends React.Component {
    static defaultProps = {
        visible: true,
        hasMore: true,
        prefixCls: 'weui'
    }

    render = () => {
        const prefixCls = this.props.prefixCls
        return <div className={prefixCls+'-list-loading'} onClick={this.props.onClick}>
            {this.props.hasMore ? <Icon type="loading"/> : <div className="no_more">没有更多了</div>}
        </div>
    }
}
