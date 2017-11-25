import React from 'react'
import {Page, List, Card, Paragraph} from '../../build/packages'

export default class ExamplePage extends React.Component {
    state = {}

    render = () => {
        return <Page title="文本段落">
            <Card title="服务介绍">
                <Paragraph>{`
【如果您有这些问题】
•	初创项目或传统转型，想要和资本结合，但不知道怎么开始；
•	不了解自己的商业模式是否适合与资本结合；
•	不了解风险投资相关的游戏规则和流程。

【与我沟通后，您将得到】
•	了解启动融资的基本步骤
•	结合您的项目，提出针对性的融资建议
•	判断适合您的融资渠道、手段
•	后续深度合作，可对接融资渠道及资源

【服务地域】：
线上对接可全国，限电话咨询。
线下对接限北京中关村或朝阳大悦城附近。

【我的服务承诺】：
不满意全额退款（含预约费）。
                `}</Paragraph>
            </Card>

            <List>
                <List.Header>
                   使用说明
                </List.Header>
                <List.Item>
                    Paragraph是对react dangerouslyHtml的封装,用于展示富文本编辑器编辑的带有换行,html标记的大段文本
                </List.Item>

                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {Card, Paragraph} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <Card title="服务介绍">
            <Paragraph>
                【如果您有这些问题】
                •	初创项目或传统转型，想要和资本结合，但不知道怎么开始；
                •	不了解自己的商业模式是否适合与资本结合；
                •	不了解风险投资相关的游戏规则和流程。

                【与我沟通后，您将得到】
                •	了解启动融资的基本步骤
                •	结合您的项目，提出针对性的融资建议
                •	判断适合您的融资渠道、手段
                •	后续深度合作，可对接融资渠道及资源

                【服务地域】：
                线上对接可全国，限电话咨询。
                线下对接限北京中关村或朝阳大悦城附近。

                【我的服务承诺】：
                不满意全额退款（含预约费）。
            </Paragraph>
        </Card>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="class name">
                    className
                </List.Item>
                <List.Item extra="显示内容">
                    children
                </List.Item>
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item>
                    暂无
                </List.Item>
            </List>
        </Page>
    }
}