
import React from 'react'
import {Page, List, Card} from '../../build/packages'

export default class ExamplePage extends React.Component {
    render = () => {
        return <Page title="卡片">
            <Card title="示例卡片" collapseVisible={true} collapsed={true}>
                1
                他送了一篮子异域水果和一张卡片。
                He sent a basket of exotic fruit and a card
                《柯林斯高阶英汉双解学习词典》
                2
                同窗和老师们来看望他，送了一大堆礼物和卡片。
                His school friends and his teachers visited him and he got loads of presents and cards
                《柯林斯高阶英汉双解学习词典》
                3
                卡片是根据作者和书名排的。
                The cards are arranged by author and subject.
                《汉英大词典》
                4
                把下列数字和你卡片上的数字比照一下。
                Check the numbers below against the numbers on your card.
                《柯林斯高阶英汉双解学习词典》
                5
                声援的信件和卡片成袋成袋地涌来。
                Letters and cards of support have been pouring in by the sackful.
                《柯林斯高阶英汉双解学习词典》

                1
                他送了一篮子异域水果和一张卡片。
                He sent a basket of exotic fruit and a card
                《柯林斯高阶英汉双解学习词典》
                2
                同窗和老师们来看望他，送了一大堆礼物和卡片。
                His school friends and his teachers visited him and he got loads of presents and cards
                《柯林斯高阶英汉双解学习词典》
                3
                卡片是根据作者和书名排的。
                The cards are arranged by author and subject.
                《汉英大词典》
                4
                把下列数字和你卡片上的数字比照一下。
                Check the numbers below against the numbers on your card.
                《柯林斯高阶英汉双解学习词典》
                5
                声援的信件和卡片成袋成袋地涌来。
                Letters and cards of support have been pouring in by the sackful.
                《柯林斯高阶英汉双解学习词典》
            </Card>
            <List>
                <List.Header>
                    使用说明
                </List.Header>
                <List.Item>
                    可折叠的卡片组件
                </List.Item>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {Card} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <Card title="示例卡片" collapseVisible={true} collapsed={true}>
            1
            他送了一篮子异域水果和一张卡片。
            He sent a basket of exotic fruit and a card
            《柯林斯高阶英汉双解学习词典》
            2
            同窗和老师们来看望他，送了一大堆礼物和卡片。
            His school friends and his teachers visited him and he got loads of presents and cards
            《柯林斯高阶英汉双解学习词典》
            3
            卡片是根据作者和书名排的。
            The cards are arranged by author and subject.
            《汉英大词典》
            4
            把下列数字和你卡片上的数字比照一下。
            Check the numbers below against the numbers on your card.
            《柯林斯高阶英汉双解学习词典》
            5
            声援的信件和卡片成袋成袋地涌来。
            Letters and cards of support have been pouring in by the sackful.
            《柯林斯高阶英汉双解学习词典》

            1
            他送了一篮子异域水果和一张卡片。
            He sent a basket of exotic fruit and a card
            《柯林斯高阶英汉双解学习词典》
            2
            同窗和老师们来看望他，送了一大堆礼物和卡片。
            His school friends and his teachers visited him and he got loads of presents and cards
            《柯林斯高阶英汉双解学习词典》
            3
            卡片是根据作者和书名排的。
            The cards are arranged by author and subject.
            《汉英大词典》
            4
            把下列数字和你卡片上的数字比照一下。
            Check the numbers below against the numbers on your card.
            《柯林斯高阶英汉双解学习词典》
            5
            声援的信件和卡片成袋成袋地涌来。
            Letters and cards of support have been pouring in by the sackful.
            《柯林斯高阶英汉双解学习词典》
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
                <List.Item extra="标题">
                    title
                </List.Item>
                <List.Item extra="内容">
                    children
                </List.Item>
                <List.Item extra="是否折叠">
                    collapsed
                </List.Item>
                <List.Item extra="是否显示折叠图标">
                    collapseVisible
                </List.Item>
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item extra="点击事件">
                    onClick()
                </List.Item>
            </List>
        </Page>
    }
}