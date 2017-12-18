/**
 * 倒计时组件
 */
"use strict"
import './less/countdown.less'
import React from 'react'
import {preZero} from '../util'

export default class Countdown extends React.Component {

    static defaultProps = {
        prefix: 'zui'
    }

    state = {
        leftsec: 0
    }

    componentDidMount = () => {
        window.clearInterval(window.countdownInterval)
        window.countdownInterval = window.setInterval(()=> {
            let current = (new Date()).getTime()
            current = parseInt(current / 1000)
            let leftsec = this.props.endtime - current
            this.setState({
                leftsec: leftsec < 0 ? 0 : leftsec
            });
        }, 1000);
    }

    componentWillUnmount = () => {
        window.clearInterval(window.countdownInterval)
    }

    render = () => {
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

        const prefix = this.props.prefix
        return <span className={prefix+"countdown "+this.props.className}>
            {preZero(day)}天 {preZero(hour)}:{preZero(minute)}:{preZero(second)}
        </span>
    }
}