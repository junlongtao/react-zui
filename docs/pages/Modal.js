
import React from 'react'
import {Page, List, Button, Modal} from '../../build/packages'

export default class ExamplePage extends React.Component {
    state = {}

    render = () => {
        return <Page title="对话框">
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
import {Tabs} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <Tabs>
            <Tabs.TabPane name="项目管理">
                <div style={}>项目管理内容...</div>
            </Tabs.TabPane>
            <Tabs.TabPane name="服务管理">
                服务管理内容...
            </Tabs.TabPane>
            <Tabs.TabPane name="需求管理">
                需求管理内容...
            </Tabs.TabPane>
        </Tabs>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="当前激活的tab index">
                    active
                </List.Item>
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item extra="index改变时的回调事件">
                    onChange(active)
                </List.Item>
            </List>
        </Page>
    }
}