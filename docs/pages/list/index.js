import './index.less'
import React from 'react'
import {Page, List, Tabs} from '../../../build/packages'

export default class IndexPage extends React.Component {
    render = () => {
        return <Page title="表单">
            <Tabs>
                <Tabs.TabPane name="InputItem">
                    <List>
                        <List.Header>
                            输入框(type="tel", 只允许输入数字,手机号)
                        </List.Header>
                        <List.InputItem type="tel">
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
            <List.PickerItem data={[
                '北京', '上海', '广州', '深圳', '杭州', '成都', '武汉', '南京'
            ]} value="上海"/>
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
                        <List.Item extra="选中的值改变时触发的事件">
                            onChange(item)
                        </List.Item>
                    </List>
                </Tabs.TabPane>
                <Tabs.TabPane name="CodeInputItem">
                    <List>
                        <List.Header>
                            验证码输入框
                        </List.Header>
                        <List.CodeInputItem type="tel">
                            验证码
                        </List.CodeInputItem>
                    </List>
                </Tabs.TabPane>
                <Tabs.TabPane name="TextareaItem">
                    <List>
                        <List.Header>
                            文本输入框
                        </List.Header>
                        <List.TextareaItem count="500">
                            自我介绍
                        </List.TextareaItem>
                    </List>
                </Tabs.TabPane>
                <Tabs.TabPane name="FileItem">
                    <List>
                        <List.Header>
                            文件选择器
                        </List.Header>
                        <List.FileItem>
                            营业执照
                        </List.FileItem>
                    </List>
                </Tabs.TabPane>
                <Tabs.TabPane name="RadioItem">
                    <List>
                        <List.Header>
                            单选框
                        </List.Header>
                        <List.RadioItem data={['1~3年', '3~5年', '5~10年', '10年以上']}>
                            从业年限
                        </List.RadioItem>
                    </List>
                </Tabs.TabPane>
                <Tabs.TabPane name="RaterItem">
                    <List>
                        <List.Header>
                            评分器
                        </List.Header>
                        <List.RaterItem>
                            服务评价
                        </List.RaterItem>
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
                    </List>
                </Tabs.TabPane>
                <Tabs.TabPane name="TagPickerItem">
                    <List>
                        <List.Header>
                            标签选择器
                        </List.Header>
                        <List.TagPickerItem>
                            技能标签
                        </List.TagPickerItem>
                    </List>
                </Tabs.TabPane>
            </Tabs>
        </Page>
    }
}