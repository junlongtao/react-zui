
import React from 'react'
import {Page, List, Button, Mask} from '../../build/packages'

export default class ExamplePage extends React.Component {
    state = {}

    render = () => {
        return <Page title="遮罩">
            <Button type="plain" padding="10px" onClick={()=>{
                this.setState({maskVisible: true})
            }}>显示遮罩</Button>
            {this.state.maskVisible?<Mask onClick={()=>{
                this.setState({maskVisible:false})
            }}/>:null}
            <List>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {Mask} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <Mask/>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item>
                    暂无
                </List.Item>
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item extra="被点击时的回调事件">
                    onClick()
                </List.Item>
            </List>
        </Page>
    }
}