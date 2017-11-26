import './less/qr-code.less'
import React from 'react'
import {Page, List, QRCode} from '../../build/packages'

export default class ExamplePage extends React.Component {
    render = () => {
        return <Page title="二维码" className="example-page">

            <QRCode text="http://zui.zhichou.com"/>
            <List>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {Tabs} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <Tabs>
            <Tabs.TabPane name="项目管理">
                <div style={}>项目管理内容...</div>
            </Tabs.TabPane>
            <Tabs.TabPane name="服务管理">
                服务管理内容...
            </Tabs.TabPane>
            <Tabs.TabPane name="需求管理">
                需求管理内容...
            </Tabs.TabPane>
        </Tabs>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="需要转换为二维码的文本内容">
                    text
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
        </Page>
    }
}