import './less/message.less'
import React from 'react'
import ReactDOM from 'react-dom'

class Message extends React.Component {

    static defaultProps = {
        prefix: 'zui', 
    }

    render = () => {
        const prefix = this.props.prefix
        return <div className={prefix+'-message'}>
            {this.props.children}
        </div>
    }
}

Message.info = (text, time, callback) => {
    clearTimeout(window.messageTimeout)

    let message = document.getElementById('message-div')
    if (!message) {
        message = document.createElement('div')
        message.id = 'message-div'
        document.body.appendChild(message)
    }
    ReactDOM.render(
        <Message>{text}</Message>,
        message
    )
    window.messageTimeout = setTimeout(()=> {
        const message = document.getElementById('message-div')
        message && document.body.removeChild(message)
        if(callback){
            callback.call()
        }
    }, (time || 1.5) * 1000)
}

export default Message