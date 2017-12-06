import React from 'react'
import BasePage from './BasePage'
import {List, Loading} from '../../build/packages'

export default class ExamplePage extends React.Component {
    render = () => {
        return <BasePage title="请求加载中">
            <Loading/>
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
import {Loading} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <Loading/>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="element id">
                    id
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