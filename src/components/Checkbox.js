/**
 * 单选框组件
 */
"use strict"

import './less/checkbox.less'
import React from 'react'
import checked from './checkbox_checked.png'
import uncheck from './checkbox_uncheck.png'

export default class Checkbox extends React.Component {

    componentWillMount = () => {
        this.setState({
            checked: this.props.checked
        })
    }

    toggleCheck = () => {
        const checked = !this.state.checked
        this.setState({
            checked: checked
        })
        this.props.onChange(checked)
    }

    render() {
        const checkImg = this.state.checked ? checked : uncheck
        return (
            <div className="weui_checkbox" onClick={this.toggleCheck}>
                <img src={checkImg}/>
            </div>
        )
    }
}
