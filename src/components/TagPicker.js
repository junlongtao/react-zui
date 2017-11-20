/**
 * 标签选择
 */
"use strict"

import './less/tag-picker.less'
import React from 'react'
import Picker from './Picker'

export default class TagPicker extends React.Component {

    static defaultProps = {
        status: '',
        prefix: 'zui',
        name: '请选择标签',
        multiCategory: false,
        data: {
            '技术': ['技术总监', 'CTO', '项目经理', '测试', '架构师', '微信开发',
                '前端开发', '后端开发', '运维', '硬件研发', 'AR/VR', '算法', 'Android',
                'iOS', 'Java', 'PHP', 'C/C++', 'HTML5', '.NET/C#', 'unity3d'],
            // '产品' : ['产品总监', '产品经理', '移动产品经理', '游戏策划'],
            '产品': ['产品总监', '产品经理', '数据产品经理', '游戏策划', '需求疏理', '产品顾问'],
            // '设计' : ['设计总监', 'UI', 'UE', 'APP设计师', '平面设计师'],
            '设计': ['设计总监', 'UI设计', 'UE/UX', '平面设计师', '动画设计', '工业设计', '结构设计'],
            // '运营' : ['运营总监', 'COO', '用户运营', '产品运营', '数据运营', '新媒体运营', '文案策划'],
            '运营': ['运营总监', 'COO', '用户运营', '产品运营', '数据运营', '新媒体运营', '文案策划',
                '内容编辑', 'SEO'],
            // '市场与销售' : ['市场总监', '销售总监', '市场策划', '市场推广', '地推',  'BD', '渠道资源'],
            '市场与销售': ['市场总监', '销售总监', '市场策划', '市场推广', '地面推广', 'BD', '品牌建设', '渠道资源'],
            // '其他' : ['创业教练', '创业导师', '法律', '融资辅导', '融资顾问', '招聘', '其他'],
            '其他': ['创业教练', '创业导师', '法律', '融资辅导', '融资顾问', '招聘', '财务', '其他'],
        }
    }

    state = {
        tagList: [],
        category: '',
    }

    componentWillReceiveProps = (nextProps) => {
        if (!this.state.category) {
            const categoryList = this.getCategoryList()
            const category = categoryList[0]
            this.setState({
                category: category,
                tagList: nextProps.data[category]
            })
        }
    }

    getCategoryList = () => {
        const res = []
        for (let i in this.props.data) {
            res.push(i)
        }
        return res
    }

    getActiveTags = () => {
        const value = this.getValue()
        return value[this.state.category] || []
    }

    getValue = () => {
        try {
            return JSON.parse(this.props.value)
        } catch (e) {
            return {}
        }
    }

    render = () => {
        const prefix = this.props.prefix
        const status = this.props.status
        const categoryList = this.getCategoryList()
        return <Picker className={prefix+'-tag-picker'} status={status}>
            <ul className={prefix+'-tag-picker-category-list'}>
                {categoryList.map((item, key)=> {
                    const cls = item === this.state.category ? 'active' : ''
                    return <li className={prefix+'-tag-picker-category-list-item '+cls} key={key} onClick={()=>{
                        this.setState({
                            category: item,
                            tagList: this.props.data[item]
                        })
                    }}>{item}</li>
                })}
            </ul>
            <ul className={prefix+'-tag-picker-tag-list'}>
                {this.state.tagList.map((item, key)=> {
                    const tags = this.getActiveTags()
                    const cls = tags.indexOf(item) === -1 ? '' : 'active'
                    return <li className={prefix+'-tag-picker-tag-list-item '+cls} key={key} onClick={()=>{
                        const value = this.getValue()
                        const tags = this.getActiveTags()
                        if(tags.indexOf(item)===-1){
                            tags.push(item)
                        }else{
                            tags.splice(tags.indexOf(item),1)
                        }
                        value[this.state.category] = tags
                        this.props.onChange(JSON.stringify(value))
                    }}>{item}</li>
                })}
            </ul>
        </Picker>
    }
}
