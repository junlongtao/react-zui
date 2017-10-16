/**
 * 倒计时组件
 */
"use strict"
import './less/countdown.less'
import React from 'react'
import Util from '../Util'
export default class Countdown extends React.Component {
    state = {
        leftsec: 0
    }
    componentDidMount = () => {
        Util.setInterval(()=> {
            let current = (new Date()).getTime()
            current = parseInt(current / 1000)
            let leftsec = this.props.endtime - current
            this.setState({
                leftsec: leftsec < 0 ? 0 : leftsec
            });
        }, 1000);
    }
    render() {
        let day, hour, minute, second
        const leftsecond = this.state.leftsec
        if (leftsecond < 0) {
            day = hour = minute = second = 0
        } else {
            day = Math.floor(leftsecond / (60 * 60 * 24));
            hour = Math.floor((leftsecond - day * 24 * 60 * 60) / 3600);
            minute = Math.floor((leftsecond - day * 24 * 60 * 60 - hour * 3600) / 60);
            second = Math.floor(leftsecond - day * 24 * 60 * 60 - hour * 3600 - minute * 60);
        }
        return day > 0 ? <span className="weui_countdown">
            {Util.preZero(day)}天{Util.preZero(hour)}小时
        </span> : <span className="weui_countdown">
            {Util.preZero(hour)}:{Util.preZero(minute)}:{Util.preZero(second)}
        </span>
    }
}
