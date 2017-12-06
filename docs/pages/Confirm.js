
import React from 'react'
import BasePage from './BasePage'
import {List, Button, Confirm} from '../../build/packages'

export default class ExamplePage extends React.Component {
    state = {}

    render = () => {
        return <BasePage title="操作确认">
            <Button type="plain" padding="10px" onClick={()=>{
                this.setState({confirmVisible: true})
            }}>下载简历</Button>
            <Confirm
                top="33%"
                title="认证身份"
                visible={this.state.confirmVisible}
                onCancel={()=>{
                    this.setState({confirmVisible: false})
                }}
                onSubmit={()=>{
                    this.setState({confirmVisible: false})
                }}
            >
                <div style={{padding: '25px'}}>认证企业身份后才能下载简历, 是否去认证</div>
            </Confirm>
            <List>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {Confirm} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <div>
            <Button padding="10px" onClick={()=>{
                this.setState({confirmVisible: true})
            }}>下载简历</Button>
            <Confirm
                top="33%"
                title="认证身份"
                visible={this.state.confirmVisible}
                onCancel={()=>{
                    this.setState({confirmVisible: false})
                }}
                onSubmit={()=>{
                    this.setState({confirmVisible: false})
                }}
            >
                <div style={{padding: '25px'}}>认证企业身份后才能下载简历, 是否去认证</div>
            </Confirm>
        </div>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="confirm距离顶部的距离, 如:100px">
                    top
                </List.Item>
                <List.Item extra="confirm是否显示, true or false">
                    visible
                </List.Item>
                <List.Item extra="confirm header的标题">
                    title
                    </List.Item>
                <List.Item extra="confirm content的内容">
                    children
                </List.Item>
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item extra="点击取消时的回调事件">
                    onCancel()
                </List.Item>
                <List.Item extra="点击确认时的回调事件">
                    onSubmit()
                </List.Item>
            </List>
        </BasePage>
    }
}