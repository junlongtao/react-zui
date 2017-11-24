# React-ZUI 

Mobile Web App Components build with [React@16](http://facebook.github.io/react/).
 
## Docs

[documentation](http://zui.zhichou.com) with live examples.

## Installation

With [npm](http://npmjs.com/):

If React is not installed

```
npm install --save react react-dom
npm install --save react-zui
```

With React Installed

```
npm install react-zui --save
```

```
## Example

We have several examples on the documentation. Here is the first one to get you started:
```javascript
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-zui'; 

const App = () => <Button>hello world</Button>;

ReactDOM.render((
    <App/>
), document.getElementById('container'));

```

## Mobile Demo

![react-zui](./docs/qrcode.png)

[1.0.0](http://zui.zhichou.com)

## License

The MIT License([http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT))
