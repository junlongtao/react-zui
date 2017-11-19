/**
 * Tabs组件
 */
'use strict'

import './less/tabs.less'
import React from 'react'
import TabBar from './TabBar'

class TabPane extends React.Component {

    static defaultProps = {
        prefix: 'zui-tabs'
    }

    render = () => {
        const prefix = this.props.prefix
        return <div className={prefix+'-tab-pane'}>
            {this.props.children}
        </div>
    }
}

class Tabs extends React.Component {

    static defaultProps = {
        prefix: 'zui',
        className: '',
        active: '',
        onChange: () => {
        }
    }

    state = {
        active: ''
    }

    componentWillReceiveProps = nextProps => {
        this.setState({
            active: parseInt(nextProps.active)
        })
    }

    render = () => {
        const prefix = this.props.prefix
        return <div className={prefix+'-tabs '+this.props.className}>
            <ul className={prefix+'-tabs-nav'}>
                {this.props.children.map((item, key)=> {
                    const active = key === this.state.active ? 'active' : ''
                    return <li key={key} className={prefix+'-tabs-nav-item '+active} onClick={()=>{
                        key = (key === this.state.active?'':key)
                        this.setState({active: key})
                        this.props.onChange(key)
                    }}>
                        {item.props.name}
                    </li>
                })}
            </ul>
            <div className={prefix+'-tabs-content'}>
                {this.props.children.map((item, key)=> {
                    return key === this.state.active ? item : null
                })}
            </div>
        </div>
    }
}
Tabs.TabPane = TabPane
export default Tabs