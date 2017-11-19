'use strict'

import './less/tab-bar.less'
import React from 'react'

class TabBarItem extends React.Component {
    static defaultProps = {
        active: false,
        prefix: 'zui-tab-bar',
        onClick: () => {
        }
    }

    render = () => {
        const prefix = this.props.prefix
        const active = this.props.active ? 'active' : ''
        return <div className={prefix+'-item '+active} onClick={this.props.onClick}>
            {this.props.children}
        </div>
    }
}

class TabBar extends React.Component {
    static defaultProps = {
        prefix: 'zui',
        className: '',
        onChange: ()=> {
        }
    } 

    render = () => {
        const prefix = this.props.prefix
        return <div className={prefix+'-tab-bar '+this.props.className} style={this.props.style}>
            {this.props.children.map((item, key)=> { 
                return <TabBarItem key={key} active={item.props.active} onClick={()=>{ 
                    this.props.onChange(key)
                }}>
                    {item.props.children}
                </TabBarItem>
            })}
        </div>
    }
}

TabBar.Item = TabBarItem
export default TabBar