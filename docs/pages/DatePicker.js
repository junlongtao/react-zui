import React from 'react'
import {Page, List, Button, DatePicker} from '../../build/packages'

export default class ExamplePage extends React.Component {

    state = {
        status: '',
        value: ''
    }

    render = () => {
        return <Page title="日期选择器">
            <Button type="plain" padding="10px" onClick={()=>{
                this.setState({status: 'open'})
            }}>
                选择开始日期
            </Button>
            <DatePicker
                status={this.state.status}
                value={this.state.value}
                onChange={value=>{
                    this.setState({
                        value: value,
                        status: 'close'
                    })
                }}/>

            <List>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {DatePicker} from "react-zui"
export default class ExamplePage extends React.Component {

    render = () => {
        return <DatePicker
            status={this.state.status}
            value={this.state.value}
            onChange={value=>{
                this.setState({
                    value: value,
                    status: 'close'
                })
            }}/>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="选中的日期, 格式为YYYY-MM-DD">
                    value
                </List.Item>
                <List.Item extra="status为'open'时选择器打开,'close'时选择器关闭">
                    status
                </List.Item>
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item extra="value发生改变时的回调事件">
                    onChange(value)
                </List.Item>
            </List>
        </Page>
    }
}