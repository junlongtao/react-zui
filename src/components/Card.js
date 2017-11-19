/**
 * 卡片组件
 */
import './less/card.less'
import React from 'react'
import Icon from './Icon'

export default class Card extends React.Component {

    static defaultProps = {
        prefix: 'zui'
    }

    state = {
        collapsed: false
    }

    componentDidMount = () => {
        this.setState({
            collapsed: this.props.collapsed
        })
    }

    render = () => {
        const prefix = this.props.prefix
        return <div className={prefix+"-card "+this.props.className} onClick={this.props.onClick}>
            {this.props.title ? <div className={prefix+'-card-header'}>
                {this.props.title}
            </div> : null}
            <div className={prefix+'-card-content'} style={{maxHeight: this.state.collapsed?'200px':'10000px'}}> 
                {this.props.children}
            </div>
            {this.props.collapseVisible ? <Icon type={this.state.collapsed?'xiala':'shouqi'} className="cursor" onClick={()=>{
                this.setState({collapsed: !this.state.collapsed})
            }}/> : null}
        </div>
    }
}