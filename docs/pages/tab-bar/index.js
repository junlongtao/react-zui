import './index.less'
import React from 'react'
import {Page, List, Icon, TabBar} from '../../../build/packages'

export default class IndexPage extends React.Component {
    render = () => {
        return <Page title="标签栏" className="tab-bar-page">
            <TabBar>
                <TabBar.Item>
                    <Icon type="home"/>首页
                </TabBar.Item>
                <TabBar.Item>
                    <Icon type="haoyou"/>社区
                </TabBar.Item>
                <TabBar.Item>
                    <Icon type="xiaoxi"/>消息
                </TabBar.Item>
                <TabBar.Item>
                    <Icon type="wode"/>我的
                </TabBar.Item>
            </TabBar>

            <List>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {TabBar} from "react-zui"
export default class TabBarExample extends React.Component {
    render = () => {
        return <TabBar>
            <TabBar.Item>
                <Icon type="home"/>首页
            </TabBar.Item>
            <TabBar.Item>
                <Icon type="haoyou"/>社区
            </TabBar.Item>
            <TabBar.Item>
                <Icon type="xiaoxi"/>消息
            </TabBar.Item>
            <TabBar.Item>
                <Icon type="wode"/>我的
            </TabBar.Item>
        </TabBar>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item  extra="当前激活的tab index">
                    activeIndex
                </List.Item>
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item extra="activeIndex发生改变时的回调事件">
                    onChange(index)
                </List.Item>
            </List>
        </Page>
    }
}