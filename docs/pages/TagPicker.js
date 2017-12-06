import React from 'react'
import BasePage from './BasePage'
import {List, Button, TagPicker} from '../../build/packages'

export default class ExamplePage extends React.Component {

    state = {
        status: '',
        value: ''
    }

    render = () => {
        return <BasePage title="标签选择器">
            <Button type="plain" padding="10px" onClick={()=>{
                this.setState({status: 'open'})
            }}>
                选择技能标签
            </Button>
            <TagPicker
                status={this.state.status}
                value={this.state.value}
                onChange={value=>{
                    this.setState({value: value})
                }}/>

            <List>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {TagPicker} from "react-zui"
export default class ExamplePage extends React.Component {

    render = () => {
        return <TagPicker
            status={this.state.status}
            value={this.state.value}
            onChange={value=>{
                this.setState({value: value})
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
                <List.Item extra='配置的供选择的标签选项, json格式, 如: {"技术":["硬件研发", "JAVA"]}, 注意使用双引号!'>
                    data
                </List.Item>
                <List.Item extra='选中的标签, json格式, 如: {"技术":["硬件研发"]}, 注意使用双引号!'>
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