
import React from 'react'
import {Page, List, Avatar} from '../../build/packages'

export default class ExamplePage extends React.Component {
    render = () => {
        return <Page title="头像">
            <Avatar src="" width="60px" style={{display: 'block', margin: '50px auto'}}/>
            <List>
                <List.Header>
                    使用说明
                </List.Header>
                <List.Item>
                    当加载的图片不存在时会显示默认头像
                </List.Item>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {Avatar} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <Avatar src="user avatar img src value"
            width="60px" style={{display: 'block', margin: '50px auto'}}/>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="图片地址">
                    src
                </List.Item>
                <List.Item extra="图片宽度">
                    width
                </List.Item>
                <List.Item extra="样式表">
                    style
                </List.Item>
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item extra="点击事件">
                    onClick()
                </List.Item>
            </List>
        </Page>
    }
}