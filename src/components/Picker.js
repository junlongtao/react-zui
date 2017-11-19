'use strict'

import './less/picker.less'
import React from 'react'
import Icon from './Icon'

export default class Picker extends React.Component {

    static defaultProps = {
        status: '',
        prefix: 'zui',
        onChange: () => {}
    }

    render = () => {
        const status = this.props.status
        const prefix = this.props.prefix
        const value = this.props.value ? this.props.value : this.props.data[0]
        return <div className={prefix+'-picker '+status}>
            <div className={prefix+"-picker-name"}>
                <Icon type="back" onClick={this.props.onBackClick}/>
                {this.props.name}
            </div>
            {this.props.data.map((item, key)=> {
                return <div key={key} className={prefix+"-picker-option"} onClick={()=>{
                    this.props.onChange(item)
                    this.props.onBackClick()
                }}>
                    {item}
                    {item == value ? <Icon type="xuanze"/> : null}
                </div>
            })}
        </div>
    }
}