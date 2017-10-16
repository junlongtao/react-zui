'use strict'

import './less/picker.less'
import React from 'react'
import Icon from './Icon'

export default class Picker extends React.Component {

    static defaultProps = {
        prefixCls: 'weui',
        status: ''
    }

    render = () => {
        const status = this.props.status
        const prefixCls = this.props.prefixCls
        const value = this.props.value ? this.props.value : this.props.data[0]
        return <div className={prefixCls+'-picker '+status}>
            <div className={prefixCls+"-picker-name"}>
                <Icon type="back" onClick={this.props.onBackClick}/>
                {this.props.name}
            </div>
            {this.props.data.map((item, key)=> {
                return <div key={key} className={prefixCls+"-picker-option"} onClick={()=>{
                    this.props.onChange(item)
                    this.props.onBackClick()
                }}>
                    {item}
                    {item === value ? <Icon type="xuanze"/> : null}
                </div>
            })}
        </div>
    }
}