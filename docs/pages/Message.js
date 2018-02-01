import React from 'react'
import BasePage from './BasePage'
import {List, Button, Message} from '../../build/packages'

export default class ExamplePage extends React.Component {

    render = () => {
        return <BasePage title="消息提示">
            <Button padding="10px" onClick={()=>{
                Message.info('测试消息测，3s后关闭，弹出第二个消息', 3, ()=>{
                    Message.info('这是第二个消息')
                })
            }}>弹出提示消息</Button>
            <Button padding="0 10px" onClick={function(){
                Message.loading()
            }}>
                弹出loading提示
            </Button>
            <Button padding="10px" onClick={function(){
                Message.loading(false)
            }}>
                关闭loading提示
            </Button>

            <List>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {Page, Message, Button} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <Page>
            <Button padding="10px" onClick={()=>{
                Message.info('测试消息测，3s后关闭，弹出第二个消息', 3, ()=>{
                    Message.info('这是第二个消息')
                })
            }}>弹出提示消息</Button>
            <Button padding="0 10px" onClick={function(){
                Message.loading()
            }}>
                弹出loading提示
            </Button>
            <Button padding="10px" onClick={function(){
                Message.loading(false)
            }}>
                关闭loading提示
            </Button>
        </Page>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="info(text, timeout, callback)">
                    弹出消息提示,<br/>
                    如:Message.info('测试消息', 2),<br/>
                    text为提示内容, timeout为持续秒数,<br/>
                    callback为timeout回调
                </List.Item>
                <List.Item extra="loading(visible)">
                    弹出loading提示,<br/>
                    如:Message.loading(),<br/>
                    Message.loading(false)关闭loading提示
                </List.Item>
            </List>
        </BasePage>
    }
}