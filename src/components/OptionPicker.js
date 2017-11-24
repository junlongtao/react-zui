'use strict'

import './less/option-picker.less'
import React from 'react'
import Icon from './Icon'
import Picker from './Picker'

export default class OptionPicker extends React.Component {

    static defaultProps = {
        data: [],
        status: '',
        prefix: 'zui',
        onChange: () => {}
    } 

    render = () => {
        const value = this.props.value
        const prefix = this.props.prefix
        const status = this.props.status
        return <Picker className={prefix+'-option-picker'} name="请选择" status={status}>
            <div className={prefix+'-option-picker-option-list'}>
                {this.props.data.map((item, key)=> {
                    return <div key={key} className={prefix+"-option-picker-option-item"} onClick={()=>{
                        this.props.onChange(item)
                    }}>
                        {item}
                        {item == value ? <Icon type="check"/> : null}
                    </div>
                })}
            </div>
        </Picker>
    }
}