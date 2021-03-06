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

## 二次开发
```
//克隆到本地
git clone git@github.com:junlongtao/react-zui.git

//安装依赖
cd react-zui & npm install

//构建package
npm run packages-build
 
//构建doc及完整项目示例，自动打开浏览器，开始探索！
npm run start

```

## 使用帮助

email 782570386@qq.com 
 
## License

The MIT License([http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT))
 
