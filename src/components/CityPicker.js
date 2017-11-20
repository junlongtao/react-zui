'use strict'

import './less/city-picker.less'
import React from 'react'
import Picker from './Picker'

export default class CityPicker extends React.Component {

    static defaultProps = {
        prefix: 'zui'
    }

    state = {
        cityData: [],
        letterListMarginLeft: 0
    }

    componentWillReceiveProps = (nextProps) => {
        const prefix = this.props.prefix
        this.setState({
            status: nextProps.status,
            cityData: CityData.slice(0, 2),
            letterListMarginLeft: document.getElementById(prefix + '-city-picker').scrollWidth / 2 - 40 + 'px'
        })
        //延迟加载CityData,首次打开只渲染第一页
        if (nextProps.status === 'open') {
            window.setTimeout(()=> {
                this.setState({
                    cityData: CityData
                })
            }, 500)
        } 
    }

    render = () => {
        let scrollTop = 0
        const scrollMap = {}
        const status = this.state.status
        const prefix = this.props.prefix
        const letters = ['★', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
            'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T',
            'W', 'X', 'Y', 'Z']
        return <Picker id={prefix+'-city-picker'} className={prefix+'-city-picker'} status={status}>
            <div className={prefix+"-city-picker-city-list"} id={prefix+'-city-picker-city-list'}>
                {this.state.cityData.map((item, key)=> {
                    scrollMap[item.initial] = scrollTop
                    scrollTop = scrollTop + 40
                    return <div key={key} className={prefix+"-city-picker-city-set"}>
                        <div className={prefix+"-city-picker-city-letter"}>
                            {item.initial === '★' ? '★ 热门城市' : item.initial}
                        </div>
                        {item.list.map((item, key)=> {
                            scrollTop = scrollTop + 40
                            return <div key={key} className={prefix+"-city-picker-city-item"} onClick={()=>{
                                this.props.onChange(item.name)
                            }}>
                                {item.name}
                            </div>
                        })}
                    </div>
                })}
            </div>
            <div className={prefix+'-city-picker-letter-list'} style={{marginLeft: this.state.letterListMarginLeft}}>
                {letters.map((item, key)=> {
                    return <div key={key} className={prefix+'-city-picker-letter-item'} onClick={()=>{
                        document.getElementById(prefix+'-city-picker-city-list').scrollTop = scrollMap[item]
                    }}>{item}</div>
                })}
            </div>
        </Picker>
    }
}