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
 
## License

The MIT License([http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT))
