
import './less/rater.less'
import React from 'react'
import BasePage from './BasePage'
import {List, Rater} from '../../build/packages'

export default class ExamplePage extends React.Component {
    state = {
        value: 7
    }

    render = () => {
        return <BasePage title="评分器" className="example-page">
            <List>
                <List.Item extra={<Rater value={this.state.value} onChange={value=>{
                    this.setState({value: value})
                }}/>}>
                    对牛人评分
                </List.Item>
            </List>

            <List>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {List, Rater} from "react-zui"
export default class Example extends React.Component {
    state = {
        value: 7
    }
    
    render = () => {
        return <List>
            <List.Item extra={<Rater value={this.state.value} onChange={value=>{
                this.setState({value: value})
            }}/>}>
                对牛人评分
            </List.Item>
        </List>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item  extra="评分，整型，0~10">
                    value
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