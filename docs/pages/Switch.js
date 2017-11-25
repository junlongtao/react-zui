
import React from 'react'
import {Page, List, Switch} from '../../build/packages'

export default class ExamplePage extends React.Component {

    render = () => {
        return <Page title="切换器">
            <List>
                <List.Item extra={<Switch value="1"/>}>
                    公开简历
                </List.Item>
            </List>

            <List>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {List, Switch} from "react-zui"
export default class ExamplePage extends React.Component {

    render = () => {
        return <List>
            <List.Item extra={<Switch value="1"/>}>
                公开简历
            </List.Item>
        </List>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item  extra="switch打开或关闭, 1/true为打开, 0/false为关闭">
                    value
                </List.Item>
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item extra="value发生改变时的回调事件">
                    onChange(value)
                </List.Item>
            </List>
        </Page>
    }
}