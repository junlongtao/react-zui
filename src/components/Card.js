/**
 * 卡片组件
 */
import './less/card.less'
import React from 'react'
import Icon from './Icon'
import Util from '../Util'

export default class Card extends React.Component {

    static defaultProps = {
        arrow: '',
        triangle: true,
        collapsable: false
    }

    state = {
        collapseVisible: false,
        collapse: false
    }

    componentDidMount = () => {
        window.setTimeout(()=> {
            this.refs.weui_card_wrap && this.setState({
                collapse: this.refs.weui_card_wrap.clientHeight <= 230 ? false : true,
                collapseVisible: this.refs.weui_card_wrap.clientHeight <= 230 ? false : true
            })
        },1000)
    }

    toggleCollapse = () => {
        this.setState({
            collapse: !this.state.collapse
        })
    }

    render = () => {
        const collapseCls = this.state.collapse ? '' : 'uncollapse'
        const arrowCls = this.props.arrow == 'horizontal' ? 'arrow' : ''
        if (!this.props.collapsable) {
            return <div className={"weui_card uncollapse "+arrowCls+" "+this.props.className}
                        onClick={this.props.onClick}>
                <div ref="weui_card_wrap" className="wrap">
                    {this.props.triangle == 1 ? <div className="triangle"></div> : null}
                    {this.props.arrow == 'horizontal' ? <Icon type="right" className="arrow"/> : null}
                    {this.props.children}
                </div>
            </div>
        }
        return <div className={"weui_card "+collapseCls+' '+arrowCls+' '+this.props.className}
                    onClick={this.props.onClick}>
            <div ref="weui_card_wrap" className="wrap">
                {this.props.triangle ? <div className="triangle"></div> : null}
                {this.props.arrow == 'horizontal' ? <Icon type="right" className="arrow"/> : null}
                {this.props.children}
            </div>
            {this.state.collapseVisible ? <Icon type='xiala' className="cursor" onClick={this.toggleCollapse}/> : null}
        </div>
    }
}
