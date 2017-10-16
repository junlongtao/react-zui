'use strict'

import './less/tab-bar.less'
import React from 'react'
import Util from '../Util'

class TabBarItem extends React.Component {
    static defaultProps = {
        active: false,
        prefixCls: 'weui-tab-bar'
    }

    render = () => {
        const prefixCls = this.props.prefixCls
        const active = this.props.active ? 'active' : ''
        return <div className={prefixCls+'-item '+active} onClick={()=>{
            Util.replace(this.props.url)
        }}>
            {this.props.children}
        </div>
    }
}

class TabBar extends React.Component {
    static defaultProps = {
        prefixCls: 'weui'
    }

    render = () => {
        const prefixCls = this.props.prefixCls
        return <div className={prefixCls+'-tab-bar'}>
            {this.props.children}
        </div>
    }
}

TabBar.Item = TabBarItem
export default TabBar
