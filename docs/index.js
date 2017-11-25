import React from 'react'
import ReactDOM from 'react-dom'
import FastClick from 'fastclick'
import {HashRouter, BrowserRouter, Route, Switch} from 'react-router-dom'
import {Page, List} from '../../react-zui/build/packages'
import asyncComponent from './asyncComponent'

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/">
                <Page title="React ZUI" className="example-page" backVisible={false}>
                    <h2 style={{padding:'50px 0 0 0',textAlign:'center'}}>
                        React ZUI
                    </h2>
                    <p style={{padding:'0 0 50px 0',textAlign:'center'}}>
                        移动端 Web App 组件库
                    </p>

                    <List>
                        <List.Header>导航 Navigation</List.Header>
                        <List.Item arrow="horizontal" href="#tabs">标签页</List.Item>
                        <List.Item arrow="horizontal" href="#tab-bar">导航栏</List.Item>

                        <List.Header>数据展示 Data Display</List.Header>
                        <List.Item arrow="horizontal" href="#tag">标签</List.Item>
                        <List.Item arrow="horizontal" href="#icon">图标</List.Item>
                        <List.Item arrow="horizontal" href="#card">卡片</List.Item>
                        <List.Item arrow="horizontal" href="#label">书签</List.Item>
                        <List.Item arrow="horizontal" href="#avatar">头像</List.Item>
                        <List.Item arrow="horizontal" href="#notice-bar">通告栏</List.Item>
                        <List.Item arrow="horizontal" href="#countdown">倒计时</List.Item>
                        <List.Item arrow="horizontal" href="#paragraph">富文本</List.Item>

                        <List.Header>数据录入 Data Entry</List.Header>
                        <List.Item arrow="horizontal" href="#checkbox">复选框</List.Item>
                        <List.Item arrow="horizontal" href="#list">表单</List.Item>

                        <List.Header>操作反馈 Feedback</List.Header>
                        <List.Item arrow="horizontal" href="#modal">对话框</List.Item>
                        <List.Item arrow="horizontal" href="#confirm">操作确认</List.Item>

                        <List.Header>其他 Other</List.Header>
                        <List.Item arrow="horizontal" href="#mask">遮罩</List.Item>
                        <List.Item arrow="horizontal" href="#return-top">返回顶部</List.Item>
                    </List>
                </Page>
            </Route>

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

            <Route exact path='/checkbox' component={asyncComponent(() => import('./pages/Checkbox'))}/>
            <Route exact path='/list' component={asyncComponent(() => import('./pages/List'))}/>

            <Route exact path='/modal' component={asyncComponent(() => import('./pages/Modal'))}/>
            <Route exact path='/confirm' component={asyncComponent(() => import('./pages/Confirm'))}/>

            <Route exact path='/mask' component={asyncComponent(() => import('./pages/Mask'))}/>
            <Route exact path='/return-top' component={asyncComponent(() => import('./pages/ReturnTop'))}/>


        </Switch>
    </HashRouter>,
    document.getElementById('container')
)