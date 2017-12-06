import './less/label.less'
import React from 'react'
import BasePage from './BasePage'
import {List, Label} from '../../build/packages'

export default class ExamplePage extends React.Component {
    render = () => {
        return <BasePage title="书签" className="example-page">
            <div className="label-list">
                <Label>示例书签一</Label>
                <Label>示例书签二</Label>
                <Label>示例书签二</Label>
            </div>
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
import {Label} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <Label>示例书签</Label>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="类型">
                    type
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
        </BasePage>
    }
}