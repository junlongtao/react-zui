import './index.less'
import React from 'react'
import {Page, List} from '../../../build/packages'

export default class IndexPage extends React.Component {
    render = () => {
        return <Page title="表单">
            <List>
                <List.Header>
                    输入框(type="tel", 只允许输入数字)
                </List.Header>
                <List.InputItem type="tel">
                    手机号码
                </List.InputItem>

                <List.Header>
                    密码输入框(type="password")
                </List.Header>
                <List.InputItem type="password">
                    登录密码
                </List.InputItem>

                <List.Header>
                    验证码输入框(type="tel", 只允许输入数字验证码)
                </List.Header>
                <List.CodeInputItem type="tel" mobile="">
                    验证码
                </List.CodeInputItem>

                <List.Header>
                    当传入的mobile属性为合法手机号时, 按钮可点击
                </List.Header>
                <List.CodeInputItem type="tel" mobile="15001374270">
                    验证码
                </List.CodeInputItem>

                <List.Header>
                    文本输入框
                </List.Header>
                <List.TextareaItem type="text" textAlign="right">
                    反馈内容
                </List.TextareaItem>

                <List.Header>
                    选择器
                </List.Header>
                <List.PickerItem data={[
                    '博士', '硕士', '本科', '大专'
                ]} value="本科">
                    学历学位
                </List.PickerItem>

                <List.Header>
                    城市选择器
                </List.Header>
                <List.CityPickerItem>
                    所在地
                </List.CityPickerItem>

                <List.Header>
                    月份选择器
                </List.Header>
                <List.MonthPickerItem>
                    起始工作年份
                </List.MonthPickerItem>

                <List.Header>
                    单选框
                </List.Header>
                <List.RadioItem data={['10年以上', '5-10年', '3-5年', '1-3年', '1年以下', '暂无经验']}>
                    工作经验
                </List.RadioItem>
            </List>
            <List>
                <List.Header>
                    使用说明
                </List.Header>
                <List.Item>
                    当加载的图片不存在时会显示默认头像
                </List.Item>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
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
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="选项数组">
                    data
                </List.Item>
                <List.Item extra="选中的值">
                    value
                </List.Item>
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item extra="选中的值改变时触发的事件">
                    onChange(item)
                </List.Item>
            </List>
        </Page>
    }
}