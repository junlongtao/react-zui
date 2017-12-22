/**
 * 标签选择
 */
"use strict"

import './less/tag-picker.less'
import React from 'react'
import Button from './Button'
import Picker from './Picker'
import EmptyTip from './EmptyTip'
import {parsejson} from '../util'

export default class TagPicker extends React.Component {

    static defaultProps = {
        status: '',
        prefix: 'zui',
        name: '请选择标签',
        multiCategory: false,
        data: {
            '技术': [
                '技术总监', 'CTO', '项目经理', '测试', '架构师', '微信开发',
                '前端开发', '后端开发', '运维', '硬件研发', 'AR/VR', '算法', 
                'Android', 'iOS', 'Java', 'PHP', 'C/C++', 'HTML5', '.NET/C#', 'unity3d'
            ], 
            '产品': [
                '产品总监', '产品经理', '数据产品经理', '游戏策划', '需求疏理', '产品顾问'
            ], 
            '设计': [
                '设计总监', 'UI设计', 'UE/UX', '平面设计师', '动画设计', '工业设计', '结构设计'
            ], 
            '运营': [ 
                '运营总监', 'COO', '用户运营', '产品运营', '数据运营', '新媒体运营', '文案策划','内容编辑', 'SEO'
            ], 
            '市场与销售': [
                '市场总监', '销售总监', '市场策划', '市场推广', '地面推广', 'BD', '品牌建设', '渠道资源'
            ], 
            '其他': [
                '创业教练', '创业导师', '法律', '融资辅导', '融资顾问', '招聘', '财务', '其他'
            ],
        },
        onChange: ()=>{},
        onBackClick: ()=>{},
        onSubmitClick: ()=>{},
    }

    state = { 
        category: '',
    }   

    renderCategoryList = () => {
        const categoryList = []
        for (let i in this.props.data) {
            categoryList.push(i)
        }

        const prefix = this.props.prefix
        return categoryList.map((item, key)=> {
            const cls = item === this.state.category ? 'active' : ''
            return <li className={prefix+'-tag-picker-category-item '+cls} key={key} onClick={()=>{
                this.setState({category: item})
            }}>{item}</li>
        })
    }

    renderTagList = () => {
        const value = parsejson(this.props.value)
        const valueTags = value[this.state.category] || []
        const categoryTags = this.props.data[this.state.category]||[]

        const prefix = this.props.prefix
        return categoryTags.map((item, key)=> { 
            const cls = valueTags.indexOf(item) === -1 ? '' : 'active'
            return <li className={prefix+'-tag-picker-tag-item '+cls} key={key} onClick={()=>{ 
                if(valueTags.indexOf(item)===-1){
                    valueTags.push(item)
                }else{
                    valueTags.splice(valueTags.indexOf(item),1)
                }
                value[this.state.category] = valueTags
                this.props.onChange(JSON.stringify(value))
            }}>
                {item}
            </li>
        })
    }

    renderActiveTagList = () => {
        let tags = []
        const prefix = this.props.prefix
        const value = parsejson(this.props.value)
        for(let i in value){ 
            tags = tags.concat(value[i].map((item, key)=>{
                return <li className={prefix+'-tag-picker-tag-item active'} key={i+key} onClick={()=>{
                    value[i].splice(key, 1)
                    this.props.onChange(JSON.stringify(value))
                }}>{item}</li>
            }))
        }

        return tags.length>0?tags:<EmptyTip>~ 您暂未选择标签 ~</EmptyTip>
    }

    render = () => {
        const prefix = this.props.prefix
        const status = this.props.status 
        return <Picker className={prefix+'-tag-picker'} status={status} onBackClick={this.props.onBackClick}>
            <ul className={prefix+'-tag-picker-category-list'}>
                {this.renderCategoryList()}
            </ul>
            <ul className={prefix+'-tag-picker-tag-list'}>
                {this.renderTagList()}
            </ul> 
            <ul className={prefix+'-tag-picker-active-tag-list'}>
                <li className={prefix+'-tag-picker-active-tag-list-title'}>已选择标签</li>
                {this.renderActiveTagList()}
            </ul>
            <Button type="plain" className={prefix+'-tag-picker-submit-button'} onClick={this.props.onSubmitClick}>
                确定
            </Button>
        </Picker>
    }
}
