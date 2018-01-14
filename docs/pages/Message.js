import React from 'react'
import BasePage from './BasePage'
import {List, Button, Message} from '../../build/packages'

export default class ExamplePage extends React.Component {

    render = () => {
        return <BasePage title="消息提示">
            <Button padding="10px" onClick={()=>{
                Message.info('测试提示消息测试提示消息测试提示消息测试提示消息测试提示消息测试提示消息测试提示消息测试提示消息')
            }}>弹出提示消息</Button>

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
            <Button onClick={()=>{
                Message.info('测试消息测试消息测试消息')
            }}>
                弹出消息提示
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
                <List.Item extra="info(text, timeout)">
                    弹出消息提示,<br/>
                    如:Message.info('测试消息', 2),<br/>
                    text为提示内容, timeout为持续秒数<br/>
                </List.Item>
            </List>
        </BasePage>
    }
}