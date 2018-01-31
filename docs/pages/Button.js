import React from 'react'
import BasePage from './BasePage'
import {List, Button, Icon} from '../../build/packages'

export default class ExamplePage extends React.Component {

    state = {}

    render = () => {
        return <BasePage title="按钮" animate="slide-in">
            <Button type="primary" padding="10px">
                primary button
            </Button>
            <Button type="plain" padding="0 10px">
                plain button
            </Button>
            <Button type="primary" padding="10px" onFileChange={file=>{
                this.setState({file: file})
            }}>
                <Icon type="uplaod"/>选择文件
            </Button>
            {this.state.file && <div style={{padding:'0 10px'}}>
                已选择的文件：{this.state.file.name}
            </div>}
            <Button type="bottom">
                bottom button
            </Button>
            <div style={{padding:'10px'}}> 
                <Button type="primary" width="auto" padding="0 10px 0 0">
                    width auto
                </Button>
                <Button type="plain" width="auto" padding="0 10px 0 0">
                    width auto
                </Button>
                <Button type="primary" width="auto" padding="0 10px 0 0">
                    width auto
                </Button>
            </div>

            <List>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {Button} from "react-zui"
export default class Example extends React.Component {

    render = () => {
        return <Button type="primary">示例按钮</Button>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra={<span>按钮类型, 包括primary, plain,<br/> bottom, 默认为primary</span>}>
                    type
                </List.Item>
                <List.Item extra="按钮边距, 如'10px 0 0 0'">
                    padding
                </List.Item>
                <List.Item extra={<span>默认为fullfill,按钮占满屏幕，<br/>设为auto则按钮宽度随内容自增</span>}>
                    width
                </List.Item>
                <List.Item extra="按钮内容">
                    children
                </List.Item>
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item extra="点击回调事件">
                    onClick(e)
                </List.Item>
                <List.Item extra="选中文件的回调事件">
                    onFileChange(file)
                </List.Item>
            </List>
        </BasePage>
    }
}