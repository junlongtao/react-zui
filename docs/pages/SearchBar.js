import React from 'react'
import BasePage from './BasePage'
import {List, SearchBar} from '../../build/packages'

export default class ExamplePage extends React.Component {
    render = () => {
        return <BasePage title="搜索框">
            <SearchBar placeholder="搜索更多简历, 多个关键词空格隔开"/>
            <List>
                <List.Header>
                    使用说明
                </List.Header>
                <List.Item>
                    暂无
                </List.Item>

                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {SearchBar} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <SearchBar placeholder="搜索更多简历, 多个关键词空格隔开"/>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="input value">
                    value
                </List.Item>
                <List.Item extra="input placeholder">
                    placeholder
                </List.Item>
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item extra="value改变时的回调事件">
                    onChange(value)
                </List.Item>
            </List>
        </BasePage>
    }
}