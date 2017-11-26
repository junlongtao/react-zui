import React from 'react'
import {Page, List, Button, CityPicker} from '../../build/packages'

export default class ExamplePage extends React.Component {

    state = {
        status: '',
        value: ''
    }

    render = () => {
        return <Page title="城市选择器">
            <Button type="plain" padding="10px" onClick={()=>{
                this.setState({status: 'open'})
            }}>
                选择所在地
            </Button>
            <CityPicker
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
                    使用说明
                </List.Header>
                <List.Item>
                    CityPicker引入了城市数据来源citydata(https://www.npmjs.com/package/chinese-city-data), 可配置webpack.optimize.CommonsChunkPlugin("citydata"),将citydata单独打包异步载入, 具体配置参考:
                    https://github.com/jalentao/react-zui/blob/master/webpack.config.docs.js
                </List.Item>

                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {CityPicker} from "react-zui"
export default class ExamplePage extends React.Component {

    render = () => {
        return <CityPicker
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
                <List.Item extra="选中的城市,如: 深圳">
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
        </Page>
    }
}