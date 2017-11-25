import './less/home.less'
import React from 'react'
import {Page, List} from '../../build/packages'

export default class HomePage extends React.Component {
    static defaultProps = {
        switchRoutes: []
    }

    render = () => {
        const switchRoutes = this.props.switchRoutes
        return <Page title="React ZUI" className="example-page" backVisible={false}>
            <h2>
                React ZUI
            </h2>
            <p>
                移动端 Web App 组件库
            </p>

            <List>
                {switchRoutes.props.children.map((item, key)=>{
                    const path = item.props.path.substr(1)
                    return item.props.component===null?<List.Header key={key}>
                        {item.props.name}
                    </List.Header>:<List.Item key={key} href={'#'+path}>
                        {path[0].toUpperCase()+path.substr(1)} {item.props.name}
                    </List.Item>
                })}
            </List>
        </Page>
    }
}