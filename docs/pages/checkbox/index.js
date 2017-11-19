import './index.less'
import React from 'react'
import {Page, List, Checkbox} from '../../../build/packages'

export default class IndexPage extends React.Component {

    state = {
        value: true
    }

    render = () => {
        return <Page title="复选框">
            <List>
                <List.Item>
                    <Checkbox value={this.state.value} onChange={(value)=>this.setState({value: value})}/>
                    同意用户服务协议
                </List.Item>
            </List>
            <List>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {Checkbox} from "react-zui"
export default class Example extends React.Component {

    state = {
        value: true
    }

    render = () => {
        return <Checkbox value={this.state.value} onChange={(value)=>this.setState({value: value})}/>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="是否选中">
                    value
                </List.Item>
                <List.Item extra="样式表">
                    style
                </List.Item>
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item extra="value值改变的回调事件">
                    onChange(value)
                </List.Item>
            </List>
        </Page>
    }
}