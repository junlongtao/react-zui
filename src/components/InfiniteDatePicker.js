'use strict'

import './less/infinite-date-picker.less'
import React from 'react'
import Mask from './Mask'

import format from 'date-fns/format'
import zh_cn from 'date-fns/locale/zh_cn'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'

export default class InfiniteDatePicker extends React.Component {
    static defaultProps = {
        prefixCls: 'weui',
        visible: true,
        onClose: () => {
        },
        onChange: () => {
        },
    }

    render = () => {
        const display = this.props.visible ? 'block' : 'none'
        const locale = {
            locale: zh_cn,
            todayLabel: {
                long: "今天",
                short: "今天",
            },
            weekdays: ['日', '一', '二', '三', '四', '五', '六'],
            weekStartsOn: 1
        }
        const theme = {
            accentColor: '#6ac2b6',
            floatingNav: {
                background: '#3aa593',
                chevron: '#FFA726',
                color: '#FFF',
            },
            headerColor: '#6ac2b6',
            selectionColor: '#6ac2b6',
            textColor: {
                active: '#FFF',
                default: '#333',
            },
            todayColor: '#6ac2b6',
            weekdayColor: '#6ac2b6',
        }
        const prefixCls = this.props.prefixCls
        return this.props.visible?<div className={prefixCls+"-infinite-date-picker"}>
            <Mask onClick={this.props.onClose}/>
            <InfiniteCalendar
                width={'95%'}
                height={400}
                theme={theme}
                locale={locale}
                minDate={this.props.minDate}
                maxDate={this.props.maxDate}
                selected={this.props.selected}
                onSelect={(val)=>{
                    this.props.onChange(format(val, 'YYYY-MM-DD'))
                }}/>
        </div>:null
    }
}