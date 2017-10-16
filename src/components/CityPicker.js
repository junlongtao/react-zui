'use strict'

import './less/city-picker.less'
import React from 'react'
import Icon from './Icon'

export default class CityPicker extends React.Component {

    static defaultProps = {
        prefixCls: 'weui',
        status: ''
    }

    state = {
        cityData: [],
        letterListMarginLeft: 0
    }

    componentWillReceiveProps = (nextProps) => {
        const prefixCls = this.props.prefixCls
        this.setState({
            cityData: CityData.slice(0, 2),
            letterListMarginLeft: document.getElementById(prefixCls + '-city-picker').scrollWidth / 2 - 40 + 'px'
        })
        if (nextProps.status === 'open') {
            window.setTimeout(()=> {
                this.setState({
                    cityData: CityData
                })
            }, 500)
        }
        document.getElementById(prefixCls + '-city-picker').scrollTop = 0
    }

    render = () => {
        let scrollTop = 0
        const scrollMap = {}
        const status = this.props.status
        const prefixCls = this.props.prefixCls
        const letters = ['★', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
            'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T',
            'W', 'X', 'Y', 'Z']
        return <div id={prefixCls+'-city-picker'} className={prefixCls+'-city-picker '+status}>
            <div className={prefixCls+"-city-picker-name"}>
                <Icon type="back" onClick={this.props.onBackClick}/>
                {this.props.name}
            </div>
            <div className={prefixCls+"-city-picker-list"} id={prefixCls+'-city-picker-list'}>
                {this.state.cityData.map((item, key)=> {
                    scrollMap[item.initial] = scrollTop
                    scrollTop = scrollTop + 40
                    return <div key={key} className={prefixCls+"-city-picker-set"}>
                        <div className={prefixCls+"-city-picker-first-word"}>
                            {item.initial === '★' ? '★ 热门城市' : item.initial}
                        </div>
                        {item.list.map((item, key)=> {
                            scrollTop = scrollTop + 40
                            return <div key={key} className={prefixCls+"-city-picker-item"} onClick={()=>{
                                this.props.onChange(item.name)
                                this.props.onBackClick()
                            }}>
                                {item.name}
                            </div>
                        })}
                    </div>
                })}
            </div>
            {status === 'open' ? <div className={prefixCls+'-city-picker-letter-list'}
                                      style={{marginLeft: this.state.letterListMarginLeft}}>
                {letters.map((item, key)=> {
                    return <div key={key} className={prefixCls+'-city-picker-letter-item'} onClick={()=>{
                        document.getElementById(prefixCls+'-city-picker-list').scrollTop = scrollMap[item]
                    }}>{item}</div>
                })}
            </div> : null}
        </div>
    }
}