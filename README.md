# React-ZUI

Mobile web app 组件库， 基于[React@16](http://facebook.github.io/react/).
 
## 文档及代码演示

![react-zui](./docs/qrcode.png)

[http://zui.zhichou.com](http://zui.zhichou.com) 

## 安装和使用

``` 
npm install --save react-zui
```  

## 代码示例

```javascript 

import React from 'react';
import ReactDOM from 'react-dom';
import {Page, List} from 'react-zui'; 

const App = () => <Page title="hello page" className="hello-page">
    <List>
        <List.Item>
            Hello World!
        </List.Item>
    </List>
</Page>;

ReactDOM.render((
    <App/>
), document.getElementById('container'));

```

## 结合React Router 4.0

```javascript
//index.js
import React from 'react'
import ReactDOM from 'react-dom'
import FastClick from 'fastclick'
import {HashRouter, BrowserRouter, Route, Switch} from 'react-router-dom' 
import asyncComponent from './asyncComponent'

ReactDOM.render(
    <HashRouter>
        <Switch> 
            <Route exact path='/' component={asyncComponent(() => import('./pages/HomePage'))}/>
            <Route exact path='/me' component={asyncComponent(() => import('./pages/MePage'))}/>
            <Route exact path='/login' component={asyncComponent(() => import('./pages/LoginPage'))}/>
        </Switch>
    </HashRouter>,
    document.getElementById('container')
)
FastClick.attach(document.body)


//HomePage.js 
import React from 'react' 
import {Page, List, Button} from 'react-zui'

export default class HomePage extends React.Component {

    render = () => {
        return <Page title="home">
            <Button type="primary" padding="10px">
                hello, this is home page.
            </Button> 
        </Page>
    }
    
}
```

## 使用帮助

wechat t782570386

mobile 15001374270

email 782570386@qq.com

欢迎骚扰 ^_^
 
## License

The MIT License([http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT))

北京公司
第一梯队，阿里，腾讯，百度 

第二梯队，小米，京东，美团，360，头条，滴滴，饿了么，网易，新浪，搜狐 

第三梯队，去哪，链家，携程，摩拜，ofo，便利蜂，高德，face++，商汤，
格灵深瞳，智行者，图森未来，创新工厂ai工程院，知乎，平安银行，搜狗，
优酷，一点资讯， 快手，猫眼电影，懒投资，VIPkid，

第四梯队，拉钩，boss直聘，多点，蘑菇街，楚楚街，好未来，瓜子二手车，
一起作业网，顺丰，快看漫画，马蜂窝，学霸君，作业盒子，宜信，陌陌，
爱奇艺，熊猫直播，斗鱼TV，春雨移动健康，

第五梯队，乔达数据，惠金所，美篇，贝壳金控，万题库

成都公司
第一梯队，美团点评，蚂蚁金服，腾讯云，京东金融，京东，tap4fun,logicmonitor,
聚美优品，兰亭集势，奇异果，iBaby，鲁大师，果小美，宜高美，百词斩，
remark holdings, 中电进出口，BBD，麦客CRM，雅唐控股，有利网，第一车贷，

第二梯队，奇点云，成都卓航，裴讯技术，四维图新，知道创宇，100课堂，
创家live，万一能源，掌麦科技，鸿特普惠，嗨学网，Clips，Ehanjia, 
柠檬科技，梦想加，龙源美生，小蜗置家，希氏异构，企鹅医生，猫图科技，
据马科技，库币科技，

