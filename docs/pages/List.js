
import React from 'react'
import BasePage from './BasePage'
import {List, Tabs} from '../../build/packages'

export default class ExamplePage extends React.Component {

    static defaultProps = {
        rules: {
            mobile: [
                {required: true, message: '请输入手机号码'},
                {type: 'mobile'}
            ]
        }
    }

    state = {
        startCountdown: false
    }

    render = () => {
        return <BasePage title="表单">
            <Tabs activeIndex={0}>
                <Tabs.TabPane name="InputItem">
                    <List ref="form" rules={this.props.rules}>
                        <List.Header>
                            输入框
                        </List.Header>
                        <List.InputItem type="tel" value="" placeholder="请输入手机号码">
                            手机号码
                        </List.InputItem>

                        <List.Header>
                            使用说明
                        </List.Header>
                        <List.Item>
                             暂无
                        </List.Item>

                        <List.Header>
                            代码演示
                        </List.Header>
                        <List.PreItem>{`
import React from 'react'
import {List} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <List>
            <List.InputItem type="tel" value="" placeholder="请输入手机号码">
                手机号码
            </List.InputItem>
        </List>

    }
}
                        `}</List.PreItem>

                        <List.Header>
                            属性
                        </List.Header>
                        <List.Item extra="input value">
                            value
                        </List.Item>
                        <List.Item extra="input type, 如text, tel, password">
                            type
                        </List.Item>
                        <List.Item extra="input placeholder, 默认值:请输入">
                            placeholder
                        </List.Item>

                        <List.Header>
                            事件
                        </List.Header>
                        <List.Item extra="input value 改变时的回调事件">
                            onChange(value)
                        </List.Item>
                        <List.Item extra="input 被点击时的回调事件">
                            onClick(value)
                        </List.Item>
                        <List.Item extra="input 失去焦点时的回调事件">
                            onBlur(e)
                        </List.Item>
                    </List>
                </Tabs.TabPane>
                <Tabs.TabPane name="CodeInputItem">
                    <List>
                        <List.Header>
                            验证码输入框
                        </List.Header>
                        <List.CodeInputItem  
                            value="" 
                            type="tel"
                            placeholder="请输入验证码" 
                            startCountdown={this.state.startCountdown}
                            onButtonClick={()=>{
                                this.setState({startCountdown: true})
                            }}
                        >
                            验证码
                        </List.CodeInputItem>

                        <List.Header>
                            使用说明
                        </List.Header>
                        <List.Item>
                             暂无
                        </List.Item>

                        <List.Header>
                            代码演示
                        </List.Header>
                        <List.PreItem>{`
import React from 'react'
import {List} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <List>
            <List.CodeInputItem type="tel" value="" placeholder="请输入验证码">
                验证码
            </List.CodeInputItem>
        </List>

    }
}
                        `}</List.PreItem>

                        <List.Header>
                            属性
                        </List.Header>
                        <List.Item extra="input value">
                            value
                        </List.Item>
                        <List.Item extra="input type, 如text, tel, password">
                            type
                        </List.Item>
                        <List.Item extra="input placeholder, 默认值:请输入">
                            placeholder
                        </List.Item>
                        <List.Item extra="是否开始倒计时, true or false">
                            startCountdown
                        </List.Item>

                        <List.Header>
                            事件
                        </List.Header>
                        <List.Item extra="input value 改变时的回调事件">
                            onChange(value)
                        </List.Item> 
                        <List.Item extra="button 被点击时的回调事件">
                            onButtonClick(e)
                        </List.Item>
                        <List.Item extra="倒计时结束时的回调事件">
                            onCountdownEnd()
                        </List.Item>
                    </List>
                </Tabs.TabPane>
                <Tabs.TabPane name="TextareaItem">
                    <List>
                        <List.Header>
                            文本输入框
                        </List.Header>
                        <List.TextareaItem count="500" rule="required:int">
                            自我介绍
                        </List.TextareaItem>

                        <List.Header>
                            使用说明
                        </List.Header>
                        <List.Item>
                            暂无
                        </List.Item>

                        <List.Header>
                            代码演示
                        </List.Header>
                        <List.PreItem>{`
import React from 'react'
import {List} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <List>
            <List.TextareaItem count="500" rows="10" value="" placeholder="这里是您给需求方留下的第一印象，请把您最最有吸引力的地方展示给全世界吧！">
                自我介绍
            </List.TextareaItem>
        </List>
    }
}
                        `}</List.PreItem>

                        <List.Header>
                            属性
                        </List.Header>
                        <List.Item extra="textarea rows">
                            rows
                        </List.Item>
                        <List.Item extra="最多可输入的字符数">
                            count
                        </List.Item>
                        <List.Item extra="textarea value">
                            value
                        </List.Item>
                        <List.Item extra="textarea placeholder, 默认值:请输入">
                            placeholder
                        </List.Item>

                        <List.Header>
                            事件
                        </List.Header>
                        <List.Item extra="textarea value 改变时的回调事件">
                            onChange(value)
                        </List.Item>
                    </List>
                </Tabs.TabPane>
                <Tabs.TabPane name="FileItem">
                    <List>
                        <List.Header>
                            文件选择器
                        </List.Header>
                        <List.FileItem type="img" maxSize={5*1024*1024}>
                            营业执照
                        </List.FileItem>    

                        <List.Header>
                            使用说明
                        </List.Header>
                        <List.Item>
                            暂无
                        </List.Item>

                        <List.Header>
                            代码演示
                        </List.Header>
                        <List.PreItem>{`
import React from 'react'
import {List} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <List>
            <List.FileItem type="img" maxSize={5*1024*1024}>
                营业执照
            </List.FileItem>
        </List>
    }
}
                        `}</List.PreItem>

                        <List.Header>
                            属性
                        </List.Header>
                        <List.Item extra="文件类型，默认为img，选中图片后可以预览，其他类型选中文件后显示文件名">
                            type
                        </List.Item>
                        <List.Item extra="最大允许上传的文件大小,单位Byte">
                            maxSize
                        </List.Item>
                        <List.Item extra="选中的文件">
                            value
                        </List.Item>
                        <List.Item extra="提示文案, 默认为'请选择'">
                            placeholder
                        </List.Item>

                        <List.Header>
                            事件
                        </List.Header>
                        <List.Item extra="选中的文件改变时的回调事件">
                            onChange(file)
                        </List.Item>
                    </List>
                </Tabs.TabPane>
                <Tabs.TabPane name="RadioItem">
                    <List>
                        <List.Header>
                            单选框
                        </List.Header>
                        <List.RadioItem data={['1年以下', '1~3年', '3~5年', '5~10年', '10年以上']}>
                            从业年限
                        </List.RadioItem>

                        <List.Header>
                            使用说明
                        </List.Header>
                        <List.Item>
                            暂无
                        </List.Item>

                        <List.Header>
                            代码演示
                        </List.Header>
                        <List.PreItem>{`
import React from 'react'
import {List} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <List>
            <List.RadioItem data={['1年以下', '1~3年', '3~5年', '5~10年', '10年以上']}>
                从业年限
            </List.RadioItem>
        </List>
    }
}
                        `}</List.PreItem>

                        <List.Header>
                            属性
                        </List.Header>
                        <List.Item extra="选项数组">
                            data
                        </List.Item>
                        <List.Item extra="选中项的值">
                            value
                        </List.Item>

                        <List.Header>
                            事件
                        </List.Header>
                        <List.Item extra="value改变时的回调事件">
                            onChange(value)
                        </List.Item>
                    </List>
                </Tabs.TabPane>
                <Tabs.TabPane name="RaterItem">
                    <List>
                        <List.Header>
                            评分器
                        </List.Header>
                        <List.RaterItem value="5">
                            服务评价
                        </List.RaterItem>

                        <List.Header>
                            使用说明
                        </List.Header>
                        <List.Item>
                            暂无
                        </List.Item>

                        <List.Header>
                            代码演示
                        </List.Header>
                        <List.PreItem>{`
import React from 'react'
import {List} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <List>
            <List.RaterItem value="5">
                服务评价
            </List.RaterItem>
        </List>
    }
}
                        `}</List.PreItem>

                        <List.Header>
                            属性
                        </List.Header>
                        <List.Item extra="评分分值, 0~10">
                            value
                        </List.Item>

                        <List.Header>
                            事件
                        </List.Header>
                        <List.Item extra="value改变时的回调事件">
                            onChange(value)
                        </List.Item>
                    </List>
                </Tabs.TabPane>
                <Tabs.TabPane name="PikcerItem">
                    <List>
                        <List.Header>
                            选项选择器
                        </List.Header>
                        <List.PickerItem data={['大专', '本科', '研究生', '博士生', '其他']}>
                            学历学位
                        </List.PickerItem>

                        <List.Header>
                            使用说明
                        </List.Header>
                        <List.Item>
                            暂无
                        </List.Item>

                        <List.Header>
                            代码演示
                        </List.Header>
                        <List.PreItem>{`
import React from 'react'
import {List} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <List>
            <List.PickerItem data={['大专', '本科', '研究生', '博士生', '其他']}>
                学历学位
            </List.PickerItem>
        </List>
    }
}
                        `}</List.PreItem>

                        <List.Header>
                            属性
                        </List.Header>
                        <List.Item extra="选中的选项值">
                            value
                        </List.Item>

                        <List.Header>
                            事件
                        </List.Header>
                        <List.Item extra="value改变时的回调事件">
                            onChange(value)
                        </List.Item>
                    </List>
                </Tabs.TabPane>
                <Tabs.TabPane name="CityPickerItem">
                    <List>
                        <List.Header>
                            城市选择器
                        </List.Header>
                        <List.CityPickerItem>
                            所在地
                        </List.CityPickerItem>

                        <List.Header>
                            使用说明
                        </List.Header>
                        <List.Item>
                            List.CityPickerItem封装了CityPicker, 打包时会引入chinese-city-picker(https://www.npmjs.com/package/chinese-city-data),
                            可配置webpack.optimize.CommonsChunkPlugin("citydata"),将citydata单独打包异步载入, 具体配置参考:<br/>
                            https://github.com/jalentao/react-zui/blob/master/webpack.config.docs.js
                        </List.Item>

                        <List.Header>
                            代码演示
                        </List.Header>
                        <List.PreItem>{`
import React from 'react'
import {List} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <List>
            <List.CityPickerItem>
                所在地
            </List.CityPickerItem>
        </List>
    }
}
                        `}</List.PreItem>

                        <List.Header>
                            属性
                        </List.Header>
                        <List.Item extra="选中的城市名, 如:北京">
                            value
                        </List.Item>

                        <List.Header>
                            事件
                        </List.Header>
                        <List.Item extra="value改变时的回调事件">
                            onChange(value)
                        </List.Item>
                    </List>
                </Tabs.TabPane>
                <Tabs.TabPane name="DatePickerItem">
                    <List>
                        <List.Header>
                            日期选择器
                        </List.Header>
                        <List.DatePickerItem>
                            开始日期
                        </List.DatePickerItem>

                        <List.Header>
                            使用说明
                        </List.Header>
                        <List.Item>
                            暂无
                        </List.Item>

                        <List.Header>
                            代码演示
                        </List.Header>
                        <List.PreItem>{`
import React from 'react'
import {List} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <List>
            <List.DatePickerItem>
                开始日期
            </List.DatePickerItem>
        </List>
    }
}
                        `}</List.PreItem>

                        <List.Header>
                            属性
                        </List.Header>
                        <List.Item extra="选中的日期, string类型, 如:2017-09-01, 2017/09/01, 20170901">
                            value
                        </List.Item>

                        <List.Header>
                            事件
                        </List.Header>
                        <List.Item extra="value改变时的回调事件">
                            onChange(value)
                        </List.Item>
                    </List>
                </Tabs.TabPane>
                <Tabs.TabPane name="MonthPickerItem">
                    <List>
                        <List.Header>
                            月份选择器
                        </List.Header>
                        <List.MonthPickerItem>
                            起始工作年份
                        </List.MonthPickerItem>

                        <List.Header>
                            使用说明
                        </List.Header>
                        <List.Item>
                            暂无
                        </List.Item>

                        <List.Header>
                            代码演示
                        </List.Header>
                        <List.PreItem>{`
import React from 'react'
import {List} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <List>
            <List.MonthPickerItem>
                起始工作年份
            </List.MonthPickerItem>
        </List>
    }
}
                        `}</List.PreItem>

                        <List.Header>
                            属性
                        </List.Header>
                        <List.Item extra="选中的月份, String类型, 如:2017-09, 2017/09, 201709, 或'至今'">
                            value
                        </List.Item>

                        <List.Header>
                            事件
                        </List.Header>
                        <List.Item extra="value改变时的回调事件">
                            onChange(value)
                        </List.Item>
                    </List>
                </Tabs.TabPane>
                <Tabs.TabPane name="TagPickerItem">
                    <List>
                        <List.Header>
                            标签选择器
                        </List.Header>
                        <List.TagPickerItem value='{"技术":["硬件研发"]}' onChange={value=>{
                            console.log(value)
                        }}>
                            技能标签
                        </List.TagPickerItem>

                        <List.Header>
                            使用说明
                        </List.Header>
                        <List.Item>
                            暂无
                        </List.Item>

                        <List.Header>
                            代码演示
                        </List.Header>
                        <List.PreItem>{`
import React from 'react'
import {List} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <List>
            <List.TagPickerItem value='{"技术":["硬件研发"]}' onChange={value=>{
                console.log(value)
            }}>
                技能标签
            </List.TagPickerItem>
        </List>
    }
}
                        `}</List.PreItem>

                        <List.Header>
                            属性
                        </List.Header>
                        <List.Item extra='选中的标签, json格式, 如: {"技术":["硬件研发"]}, 注意使用双引号!'>
                            value
                        </List.Item>

                        <List.Header>
                            事件
                        </List.Header>
                        <List.Item extra="value改变时的回调事件, value为选中标签的json格式字符串">
                            onChange(value)
                        </List.Item>
                    </List>
                </Tabs.TabPane>
            </Tabs>
        </BasePage>
    }
}