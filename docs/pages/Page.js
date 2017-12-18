
import React from 'react'
import BasePage from './BasePage'
import {List} from '../../build/packages'

export default class ExamplePage extends React.Component {

    render = () => {
        return <BasePage title="页面" animate="slide-in">

            <List>
                <List.Header>
                    使用说明
                </List.Header>
                <List.Item href="#button">
                    Page组件展现内容为App的一个页面,一个应用由多个Page构成,具体使用见代码演示
                </List.Item>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {Page} from "react-zui"
export default class Example extends React.Component {

    render = () => {
        return <Page>
            <h3>Welcome to React ZUI!</h3>
            <p>this is the first page</p>
        </Page>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item  extra="页面header的标题">
                    title
                </List.Item>
                <List.Item  extra="页面header左上角是否显示返回按钮">
                    backVisible
                </List.Item>
                <List.Item  extra="是否显示 '返回顶部'组件">
                    returnTopVisible
                </List.Item>
                <List.Item  extra="class name">
                    className
                </List.Item>
                <List.Item  extra="页面内容">
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