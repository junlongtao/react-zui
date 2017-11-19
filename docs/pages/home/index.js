
import './index.less'
import React from 'react'
import {Page, List} from '../../../build/packages'

export default class IndexPage extends React.Component {
    render = () => {
        return <Page title="React-ZUI" className="home-page" backVisible={false}>
            <h2>
                React ZUI
            </h2>
            <p>
                移动端 Web App 组件库
            </p>

            <List>
                <List.Header>
                    导航 Navigation
                </List.Header>
                <List.Item href="#tabs" arrow="right">
                    Tabs 标签页
                </List.Item>
                <List.Item href="#tab-bar" arrow="right">
                    TabBar 标签栏
                </List.Item>
                <List.Item href="#avatar" arrow="right">
                    Avatar 头像
                </List.Item>

                <List.Header>
                    数据展示 Data Display
                </List.Header>
                <List.Item href="#card" arrow="right">
                    Card 卡片
                </List.Item>
                <List.Item href="#icon" arrow="right">
                    Icon 图标
                </List.Item>
                <List.Item href="#tag" arrow="right">
                    Tag 标签
                </List.Item>
                <List.Item href="#label" arrow="right">
                    Label 书签
                </List.Item>
                <List.Item href="#notice-bar" arrow="right">
                    NoticeBar 通告栏
                </List.Item>

                <List.Header>
                    数据录入 Data Input
                </List.Header>
                <List.Item href="#list" arrow="right">
                    List 表单
                </List.Item>
            </List>
        </Page>
    }
}