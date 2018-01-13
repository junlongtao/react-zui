import React from 'react'
import ReactDOM from 'react-dom'
import FastClick from 'fastclick' 
import {HashRouter, BrowserRouter, Route, Switch} from 'react-router-dom'
import {Page, List} from '../../react-zui/build/packages'
import asyncComponent from './asyncComponent'
import './pages/less/home-page.less'

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/">
                <Page title="React ZUI" className="home-page" backVisible={false}>
                    <h2 style={{padding:'50px 0 0 0',textAlign:'center'}}>
                        React ZUI
                    </h2>
                    <p style={{padding:'0 0 50px 0',textAlign:'center'}}>
                        移动端 Web App 组件库
                    </p>

                    <List>
                        <List.Header>布局 Layout</List.Header>
                        <List.Item arrow="horizontal" href="#page?page_animate=slidein">Page 页面</List.Item>
                        <List.Item arrow="horizontal" href="#header?page_animate=slidein">Header 页头</List.Item>

                        <List.Header>导航 Navigation</List.Header>
                        <List.Item arrow="horizontal" href="#tabs?page_animate=slidein">Tabs 标签页</List.Item>
                        <List.Item arrow="horizontal" href="#tab-bar?page_animate=slidein">TabBar 导航栏</List.Item>

                        <List.Header>数据展示 Data Display</List.Header>
                        <List.Item arrow="horizontal" href="#tag?page_animate=slidein">Tag 标签</List.Item>
                        <List.Item arrow="horizontal" href="#icon?page_animate=slidein">Icon 图标</List.Item>
                        <List.Item arrow="horizontal" href="#card?page_animate=slidein">Card 卡片</List.Item>
                        <List.Item arrow="horizontal" href="#label?page_animate=slidein">Label 书签</List.Item>
                        <List.Item arrow="horizontal" href="#avatar?page_animate=slidein">Avatar 头像</List.Item>
                        <List.Item arrow="horizontal" href="#notice-bar?page_animate=slidein">NoticeBar 通告栏</List.Item>
                        <List.Item arrow="horizontal" href="#countdown?page_animate=slidein">Countdown 倒计时</List.Item>
                        <List.Item arrow="horizontal" href="#paragraph?page_animate=slidein">Paragraph 富文本</List.Item>
                        <List.Item arrow="horizontal" href="#text-tip?page_animate=slidein">TextTip 提示文本</List.Item>
                        <List.Item arrow="horizontal" href="#qr-code?page_animate=slidein">QrCode 二维码</List.Item>
                        <List.Item arrow="horizontal" href="#empty-tip?page_animate=slidein">EmptyTip 内容为空提示</List.Item>
                        <List.Item arrow="horizontal" href="#list-loading?page_animate=slidein">ListLoading 列表加载中</List.Item>
                        <List.Item arrow="horizontal" href="#loading?page_animate=slidein">Loading 请求加载中</List.Item>

                        <List.Header>数据录入 Data Entry</List.Header>
                        <List.Item arrow="horizontal" href="#list?page_animate=slidein">List 表单</List.Item>
                        <List.Item arrow="horizontal" href="#rater?page_animate=slidein">Rater 评分器</List.Item>
                        <List.Item arrow="horizontal" href="#button?page_animate=slidein">Button 按钮</List.Item>
                        <List.Item arrow="horizontal" href="#switch?page_animate=slidein">Switch 切换器</List.Item>
                        <List.Item arrow="horizontal" href="#checkbox?page_animate=slidein">Checkbox 复选框</List.Item>
                        <List.Item arrow="horizontal" href="#search-bar?page_animate=slidein">SearchBar 搜索框</List.Item>
                        <List.Item arrow="horizontal" href="#option-picker?page_animate=slidein">OptionPicker 选择器</List.Item>
                        <List.Item arrow="horizontal" href="#date-picker?page_animate=slidein">DatePicker 日期选择器</List.Item>
                        <List.Item arrow="horizontal" href="#month-picker?page_animate=slidein">MonthPicker 月份选择器</List.Item>
                        <List.Item arrow="horizontal" href="#city-picker?page_animate=slidein">CityPicker 城市选择器</List.Item>
                        <List.Item arrow="horizontal" href="#tag-picker?page_animate=slidein">TagPicker 标签选择器</List.Item>

                        <List.Header>操作反馈 Feedback</List.Header>
                        <List.Item arrow="horizontal" href="#modal?page_animate=slidein">Modal 对话框</List.Item>
                        <List.Item arrow="horizontal" href="#confirm?page_animate=slidein">Confirm 操作确认</List.Item>

                        <List.Header>其他 Other</List.Header>
                        <List.Item arrow="horizontal" href="#mask?page_animate=slidein">Mask 遮罩</List.Item>
                        <List.Item arrow="horizontal" href="#return-top?page_animate=slidein">ReturnTop 返回顶部</List.Item>
                    </List>
                </Page>
            </Route>

            <Route exact path='/page' component={asyncComponent(() => import('./pages/Page'))}/>
            <Route exact path='/header' component={asyncComponent(() => import('./pages/Header'))}/>

            <Route exact path='/tabs' component={asyncComponent(() => import('./pages/Tabs'))}/>
            <Route exact path='/tab-bar' component={asyncComponent(() => import('./pages/TabBar'))}/>

            <Route exact path='/tag' component={asyncComponent(() => import('./pages/Tag'))}/>
            <Route exact path='/icon' component={asyncComponent(() => import('./pages/Icon'))}/>
            <Route exact path='/card' component={asyncComponent(() => import('./pages/Card'))}/>
            <Route exact path='/label' component={asyncComponent(() => import('./pages/Label'))}/>
            <Route exact path='/avatar' component={asyncComponent(() => import('./pages/Avatar'))}/>
            <Route exact path='/notice-bar' component={asyncComponent(() => import('./pages/NoticeBar'))}/>
            <Route exact path='/countdown' component={asyncComponent(() => import('./pages/Countdown'))}/>
            <Route exact path='/paragraph' component={asyncComponent(() => import('./pages/Paragraph'))}/>
            <Route exact path='/text-tip' component={asyncComponent(() => import('./pages/TextTip'))}/>
            <Route exact path='/qr-code' component={asyncComponent(() => import('./pages/QRCode'))}/>
            <Route exact path='/empty-tip' component={asyncComponent(() => import('./pages/EmptyTip'))}/>
            <Route exact path='/list-loading' component={asyncComponent(() => import('./pages/ListLoading'))}/>
            <Route exact path='/loading' component={asyncComponent(() => import('./pages/Loading'))}/>

            <Route exact path='/button' component={asyncComponent(() => import('./pages/Button'))}/>
            <Route exact path='/list' component={asyncComponent(() => import('./pages/List'))}/>
            <Route exact path='/rater' component={asyncComponent(() => import('./pages/Rater'))}/>
            <Route exact path='/switch' component={asyncComponent(() => import('./pages/Switch'))}/>
            <Route exact path='/checkbox' component={asyncComponent(() => import('./pages/Checkbox'))}/>
            <Route exact path='/search-bar' component={asyncComponent(() => import('./pages/SearchBar'))}/>
            <Route exact path='/option-picker' component={asyncComponent(() => import('./pages/OptionPicker'))}/>
            <Route exact path='/date-picker' component={asyncComponent(() => import('./pages/DatePicker'))}/>
            <Route exact path='/month-picker' component={asyncComponent(() => import('./pages/MonthPicker'))}/>
            <Route exact path='/city-picker' component={asyncComponent(() => import('./pages/CityPicker'))}/>
            <Route exact path='/tag-picker' component={asyncComponent(() => import('./pages/TagPicker'))}/>

            <Route exact path='/modal' component={asyncComponent(() => import('./pages/Modal'))}/>
            <Route exact path='/confirm' component={asyncComponent(() => import('./pages/Confirm'))}/>

            <Route exact path='/mask' component={asyncComponent(() => import('./pages/Mask'))}/>
            <Route exact path='/return-top' component={asyncComponent(() => import('./pages/ReturnTop'))}/>


        </Switch>
    </HashRouter>,
    document.getElementById('container')
)


FastClick.attach(document.body)