/**
 * Tabs组件
 */
'use strict'

import './less/tabs.less'
import React from 'react' 

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
        activeIndex: '',
        onChange: () => {
        }
    }

    state = {
        activeIndex: ''
    }

    componentDidMount = () => {
        this.setState({activeIndex: parseInt(this.props.activeIndex)})
    }

    componentWillReceiveProps = nextProps => {
        this.setState({activeIndex: parseInt(nextProps.activeIndex)})
    }

    render = () => {
        const prefix = this.props.prefix
        return <div className={prefix+'-tabs '+this.props.className}>
            <ul className={prefix+'-tabs-nav'}>
                {this.props.children.map((item, key)=> {
                    const activeCls = key === this.state.activeIndex ? 'active' : ''
                    return <li key={key} className={prefix+'-tabs-nav-item '+activeCls} onClick={()=>{
                        key = (key === this.state.activeIndex?'':key)
                        this.setState({activeIndex: key})
                        this.props.onChange(key)
                    }}>
                        {item.props.name}
                    </li>
                })}
            </ul>
            <div className={prefix+'-tabs-content'}>
                {this.props.children.map((item, key)=> {
                    return key === this.state.activeIndex ? item : null
                })}
            </div>
        </div>
    }
}
Tabs.TabPane = TabPane
export default Tabs