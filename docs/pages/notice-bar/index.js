import './index.less'
import React from 'react'
import {Page, List, NoticeBar} from '../../../build/packages'

export default class IndexPage extends React.Component {
    render = () => {
        return <Page title="通知条" className="notice-bar-page">
            <NoticeBar>
                注意: 请详细阅读通知内容...
            </NoticeBar>
            <List>
                <List.Header>
                    使用说明
                </List.Header>
                <List.Item>
                    暂无说明
                </List.Item>

                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {NoticeBar} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <NoticeBar>
            注意: 请详细阅读通知内容...
        </NoticeBar>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="通知栏内容">
                    children
                </List.Item>
                <List.Item extra="是否显示, true或false">
                    visible
                </List.Item>
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item extra="关闭事件">
                    onClose()
                </List.Item>
            </List>
        </Page>
    }
}