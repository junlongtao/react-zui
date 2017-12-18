
import React from 'react'
import BasePage from './BasePage'
import {List} from '../../build/packages'

export default class ExamplePage extends React.Component {

    render = () => {
        return <BasePage title="页头">

            <List>
                <List.Header>
                    使用说明
                </List.Header>
                <List.Item>
                    Header组件展示内容为页面头部,一般不单独使用,因为Page中默认包含Header(当Page的title为空时不显示Header)
                </List.Item>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {Header} from "react-zui"
export default class Example extends React.Component {

    render = () => {
        return <Header>
            首页
        </Header>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item  extra="是否显示返回按钮">
                    backVisible
                </List.Item>
                <List.Item  extra="header内容">
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