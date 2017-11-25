
import React from 'react'
import {Page, List, ReturnTop} from '../../build/packages'

export default class ExamplePage extends React.Component {
    state = {}

    render = () => {
        return <Page title="返回顶部">
            <div style={{height: '1000px'}}>
                测试内容....<br/>
                滚动至底部时,自动显示返回顶部
            </div>
            <ReturnTop/>
            <List>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {ReturnTop} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <ReturnTop/>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="当前激活的tab index">
                    active
                </List.Item>
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item extra="index改变时的回调事件">
                    onChange(active)
                </List.Item>
            </List>
        </Page>
    }
}