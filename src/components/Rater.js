/**
 * 评分组件
 */
"use strict"
import './less/rater.less'
import React from 'react'
import Icon from './Icon'

export default class Rater extends React.Component {

    static defaultProps = {
        value: 0,
        max: 5,
        static: false
    }

    onChange = (value) => {
        if (this.props.static) {
            return false
        }
        this.props.onChange(value)
    }

    renderStars = () => {
        let stars = []
        for (let i = 1; i < 10; i++) {
            let is_active = (i < this.props.value ? true : false)
            let cls = "star " + (i % 2 == 0 ? 'left' : 'right') + ' ' + (is_active ? 'active' : '')
            stars.push(<div key={i} className={cls} onClick={()=>{
                this.onChange(i+1)
            }} onMouseOver={()=>{
                this.onChange(i+1)
            }}>
                <Icon type="star"/>
            </div>)
        }
        return stars
    }

    onFirstClick = () => {
        if (this.props.static) {
            return false
        }
        if (this.props.value > 1) {
            this.props.onChange(1)
        } else if (this.props.value == 1) {
            this.props.onChange(0)
        } else {
            this.props.onChange(1)
        }
    }

    render = () => {
        return <div className="weui_rater clear">
            <div className={"star left "+(this.props.value>0?'active':'')} onClick={this.onFirstClick}
                 onMouseEnter={()=>{
                    this.onChange(1)
                }}
                 onMouseLeave={()=>{
                    this.onChange(0)
                }}>
                <Icon type="star"/>
            </div>
            {this.renderStars()}
            <span>
                {this.props.value + '分'}
            </span>
        </div>
    }
}
