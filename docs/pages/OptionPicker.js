import React from 'react'
import BasePage from './BasePage'
import {List, Button, OptionPicker} from '../../build/packages'

export default class ExamplePage extends React.Component {

    state = {
        status: '',
        value: ''
    }

    render = () => {
        return <BasePage title="选择器">
            <Button type="plain" padding="10px" onClick={()=>{
                this.setState({status: 'open'})
            }}>
                打开选择器
            </Button>
            <OptionPicker
                data={['选项一', '选项二', '选项三', '选项四', '其他']}
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
import {OptionPicker} from "react-zui"
export default class ExamplePage extends React.Component {

    render = () => {
        return <OptionPicker
            data={['选项一', '选项二', '选项三', '选项四', '其他']}
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
                <List.Item extra="选项数组, 数组元素为string/number">
                    option
                </List.Item>
                <List.Item extra="选中的选项值">
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