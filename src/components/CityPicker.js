'use strict'

import './less/city-picker.less'
import React from 'react' 
import CityData from 'chinese-city-data'
import Picker from './Picker'
 
const Letters = [
    '★', 'A', 'B', 'C', 'D', 'E', 'F', 
    'G', 'H', 'J', 'K', 'L', 'M', 'N', 
    'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'
]

export default class CityPicker extends React.Component {

    static defaultProps = {
        prefix: 'zui'
    }

    state = {
        letterListMarginLeft: 0
    }

    componentDidMount = () => {
        const prefix = this.props.prefix
        this.setState({  
            letterListMarginLeft: document.getElementById(prefix + '-city-picker-city-list').scrollWidth / 2 - 40 + 'px'
        }) 
    }

    render = () => {
        let scrollTop = 0
        const scrollMap = {}
        const status = this.props.status
        const prefix = this.props.prefix
        return <Picker className={prefix+'-city-picker'} status={status}>
            <div className={prefix+"-city-picker-city-list"} id={prefix+'-city-picker-city-list'}>
                {CityData.map((item, key)=> {
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
                {Letters.map((item, key)=> {
                    return <div key={key} className={prefix+'-city-picker-letter-item'} onClick={()=>{
                        document.getElementById(prefix+'-city-picker-city-list').scrollTop = scrollMap[item]
                    }}>{item}</div>
                })}
            </div>
        </Picker>
    }
}