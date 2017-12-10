
import React from 'react'
import BasePage from './BasePage'
import {List, Button, Modal} from '../../build/packages'

export default class ExamplePage extends React.Component {
    state = {}

    render = () => {
        return <BasePage title="对话框">
            <Button type="plain" padding="10px" onClick={()=>{
                this.setState({modalVisible: true})
            }}>立即预约</Button>
            <Modal title="1分钟描述职位, 马上开聊" visible={this.state.modalVisible}>
                <List>
                    <List.InputItem>
                        岗位名称
                    </List.InputItem>
                    <List.TextAreaItem>
                        工作内容
                    </List.TextAreaItem>
                    <List.CityPickerItem>
                        工作地点
                    </List.CityPickerItem>
                    <List.TextAreaItem>
                        公司介绍
                    </List.TextAreaItem>
                </List>
                <Button padding="10px">提交, 立即开聊</Button>
            </Modal>

            <List>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {Modal, List} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <Modal title="1分钟描述职位, 马上开聊" visible={this.state.modalVisible}>
            <List>
                <List.InputItem>
                    岗位名称
                </List.InputItem>
                <List.TextAreaItem>
                    工作内容
                </List.TextAreaItem>
                <List.CityPickerItem>
                    工作地点
                </List.CityPickerItem>
                <List.TextAreaItem>
                    公司介绍
                </List.TextAreaItem>
            </List>
            <Button padding="10px">提交, 立即开聊</Button>
        </Modal>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="modal header内容">
                    title
                </List.Item>
                <List.Item extra="显示或隐藏, true/false">
                    visible
                </List.Item>
                <List.Item extra="对话框内容">
                    children
                </List.Item>
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item extra="modal关闭时的回调事件">
                    onClose()
                </List.Item>
            </List>
        </BasePage>
    }
}