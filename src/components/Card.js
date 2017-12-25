/**
 * 卡片组件
 */
import './less/card.less'
import React from 'react'
import Icon from './Icon'

export default class Card extends React.Component {

    static defaultProps = {
        prefix: 'zui',
        arrow: '',
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
            {this.props.title && <div className={prefix+'-card-header'}>
                {this.props.title}
            </div>}
            <div className={prefix+'-card-content'} style={{maxHeight: this.state.collapsed?'200px':'10000px'}}> 
                {this.props.children}
                <Icon type={this.props.arrow} className={prefix+'-card-arrow-icon'}/>
            </div>
            {this.props.collapseVisible && <Icon 
                className={prefix+'-card-collapse-icon'}
                type={this.state.collapsed?'xiala':'shouqi'} 
                onClick={()=>{
                    this.setState({collapsed: !this.state.collapsed})
                }}
            />}
        </div>
    }
}