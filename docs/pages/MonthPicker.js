import React from 'react'
import BasePage from './BasePage'
import {List, Button, MonthPicker} from '../../build/packages'

export default class ExamplePage extends React.Component {

    state = {
        status: '',
        value: ''
    }

    render = () => {
        return <BasePage title="月份选择器">
            <Button type="plain" padding="10px" onClick={()=>{
                this.setState({status: 'open'})
            }}>
                选择起始工作年份
            </Button>
            <MonthPicker
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
import {MonthPicker} from "react-zui"
export default class ExamplePage extends React.Component {

    render = () => {
        return <MonthPicker
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
                <List.Item extra="选中的年月份, 格式为YYYY-MM">
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
        </BasePage>
    }
}