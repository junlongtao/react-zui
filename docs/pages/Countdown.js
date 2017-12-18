
import React from 'react'
import BasePage from './BasePage'
import {List, Countdown} from '../../build/packages'

export default class ExamplePage extends React.Component {
    render = () => {
        const endtime = new Date()
        endtime.setTime(endtime.getTime()/1000+24*60*60)
        return <BasePage title="倒计时">
            <h4 style={{padding: '10px'}}>
                付款倒计时: <Countdown endtime={endtime}/>
            </h4>

            <List>
                <List.Header>
                    使用说明
                </List.Header>
                <List.Item>
                    暂无
                </List.Item>

                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {Countdown} from "react-zui"
export default class Example extends React.Component {

    render = () => {
        const endtime = new Date()
        endtime.setTime(endtime.getTime()/1000+24*60*60)
        return <Countdown endtime={endtime}/>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item  extra="截止时间戳,单位s">
                    endtime
                </List.Item>
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item>
                    暂无
                </List.Item>
            </List>
        </BasePage>
    }
}