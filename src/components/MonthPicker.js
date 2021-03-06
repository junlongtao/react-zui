/**
 * 标签选择
 */
"use strict"

import './less/month-picker.less'
import React from 'react'

import Icon from './Icon'
import Picker from './Picker'

const YearData = ['至今']
for (let i = (new Date()).getFullYear(); i > 1970; i--) {
    YearData.push(i)
}

const MonthData = []
for (let i = 1; i <= 12; i++) {
    i = (i < 10 ? '0' + i : i)
    MonthData.push(i)
}

export default class MonthPicker extends React.Component {

    static defaultProps = {
        status: '',
        prefix: 'zui',
        name: '选择日期',
        onChange: () => {},
    }

    state = {
        year: (new Date()).getFullYear()
    } 

    render = () => {
        const prefix = this.props.prefix
        const status = this.props.status 
        const value = this.props.value||'-'
        return <Picker className={prefix+'-month-picker'} status={status}>
            <ul className={prefix+'-month-picker-year-list'}>
                {YearData.map((item, key)=> {
                    const cls = item == this.state.year ? 'active' : ''
                    return <li className={prefix+'-month-picker-year-list-item '+cls} key={key} onClick={()=>{
                        this.setState({year: item, month: '01'})
                        item=='至今' && this.props.onChange('至今')
                    }}>{item}</li>
                })}
            </ul>
            <ul className={prefix+'-month-picker-month-list'}>
                {this.state.year == '至今' ? null : MonthData.map((item, key)=> {
                    const cls = item == value.split('-')[1] ? 'active' : ''
                    return <li className={prefix+'-month-picker-month-list-item '+cls} key={key} onClick={()=>{
                        this.props.onChange(this.state.year+'-'+item)
                    }}>
                        {item}月
                        {cls == 'active' ? <Icon type="check"/> : null}
                    </li>
                })}
            </ul>
        </Picker>
    }
}
