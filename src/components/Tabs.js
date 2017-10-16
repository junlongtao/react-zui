/**
 * Tabs组件
 */
'use strict'

import './less/tabs.less'
import React from 'react'

class TabPane extends React.Component {
    render = () => {
        return <div className={"tab_pane "+this.props.className}>
            {this.props.children}
        </div>
    }
}

class Tabs extends React.Component {

    state = {
        active: ''
    }

    componentWillReceiveProps = (nextProps)=> {
        if (!this.state.active) {
            this.setState({
                active: nextProps.children[0].props.tab
            })
        }
    }

    calActiveLineLeft = () => {
        if (this.state.active === '') {
            return 0;
        }
        const children = this.props.children
        const distance = (1 / children.length) * 100
        let left = 0;
        for (let i = 0; i < children.length; i++) {
            if (children[i].props.tab === this.state.active) {
                return left + '%';
            }
            left += distance
        }
        return left + '%';
    }

    calActiveLineWidth = () => {
        const children = this.props.children
        const distance = (1 / children.length) * 100
        return distance + '%'
    }

    render = () => {
        return <div className="weui_tabs">
            <ul className="tabs_nav flex-h flex-hc">
                {this.props.children.map((item, key)=> {
                    const cls = "flex1 cursor " + (item.props.tab === this.state.active ? 'active' : '')
                    return <li className={cls} key={key} onClick={()=>{
                        this.setState({active: item.props.tab})
                        this.props.onChange && this.props.onChange(item.props.tab)
                    }}>
                        {item.props.tab}
                    </li>
                })}
            </ul>
            <div className="active_line" style={{
                left: this.calActiveLineLeft(),
                width: this.calActiveLineWidth()
            }}></div>
            {this.props.children.map((item, key)=> {
                return item.props.tab === this.state.active ? item : null
            })}
        </div>
    }
}
Tabs.TabPane = TabPane
export default Tabs