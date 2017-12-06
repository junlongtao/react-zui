import './less/button.less'
import React from 'react'
import BasePage from './BasePage'
import {List, Button} from '../../build/packages'

export default class ExamplePage extends React.Component {

    render = () => {
        return <BasePage title="按钮" animate="slide-in">
            <Button type="primary" padding="10px">
                primary button
            </Button>
            <Button type="plain" padding="10px">
                plain button
            </Button>
            <Button type="bottom">
                bottom button
            </Button>

            <List>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {Button} from "react-zui"
export default class ExamplePage extends React.Component {

    render = () => {
        return <Button type="primary">示例按钮</Button>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="按钮类型, 包括primary, plain, bottom, 默认为primary">
                    type
                </List.Item>
                <List.Item extra="按钮边距, 如'10px 0 0 0'">
                    padding
                </List.Item>
                <List.Item extra="按钮内容">
                    children
                </List.Item>
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item extra="点击回调事件">
                    onClick()
                </List.Item>
            </List>
        </BasePage>
    }
}