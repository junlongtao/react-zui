
import React from 'react'
import BasePage from './BasePage'
import {List, EmptyTip} from '../../build/packages'

export default class ExamplePage extends React.Component {
    render = () => {
        return <BasePage title="内容为空提示">
            <EmptyTip>~ 您暂未收到新消息 ~</EmptyTip>

            <List>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {EmptyTip} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <EmptyTip>~ 您暂未收到新消息 ~</EmptyTip>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="提示文案">
                    children
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