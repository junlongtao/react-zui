'use strict'

import './less/list.less'
import React from 'react'
import Icon from './Icon'
import Radio from './Radio'
import Rater from './Rater'
import Picker from './Picker'
import Button from './Button'
import Switch from './Switch'
import TagPicker from './TagPicker'
import CityPicker from './CityPicker'
import MonthPicker from './MonthPicker'
import InfiniteDatePicker from './InfiniteDatePicker'
import Util from '../Util'

class Header extends React.Component {
    static defaultProps = {
        className: '',
        prefixCls: 'weui-list'
    }

    render = () => {
        const prefixCls = this.props.prefixCls
        return <div className={prefixCls+"-header "+this.props.className} onClick={this.props.onClick}>
            <div className={prefixCls+"-content"}>
                {this.props.children}
            </div>
            <div className={prefixCls+"-extra"}>
                {this.props.extra}
                <Icon type={this.props.arrow}/>
            </div>
        </div>
    }
}

class Footer extends React.Component {
    static defaultProps = {
        className: '',
        prefixCls: 'weui-list'
    }

    render = () => {
        const prefixCls = this.props.prefixCls
        return <div className={prefixCls+"-footer "+this.props.className} onClick={this.props.onClick}>
            <div className={prefixCls+"-content"}>
                {this.props.children}
            </div>
            <div className={prefixCls+"-extra"}>
                {this.props.extra}
                <Icon type={this.props.arrow}/>
            </div>
        </div>
    }
}

class ListItem extends React.Component {
    static defaultProps = {
        href: '',
        style: {},
        arrow: '',
        className: '',
        onClick: null,
        prefixCls: 'weui-list'
    }

    render = () => {
        const prefixCls = this.props.prefixCls
        const checkCls = this.props.arrow === 'check' ? 'active ' : ' '
        return <div className={prefixCls+"-item "+checkCls+this.props.className} style={this.props.style} onClick={()=>{
            if(this.props.href){
                Util.slideIn(this.props.href)
                return false
            }
            this.props.onClick && this.props.onClick()
        }}>
            <div className={prefixCls+"-content"}>
                {this.props.children}
            </div>
            <div className={prefixCls+"-extra"}>
                {this.props.extra}
                <Icon type={this.props.arrow}/>
            </div>
        </div>
    }
}

class SwitchItem extends React.Component {
    static defaultProps = {
        value: 1,
        onClick: null,
        onChange: null,
        prefixCls: 'weui-list',
    }

    render = () => {
        const prefixCls = this.props.prefixCls
        return <div className={prefixCls+"-item "+prefixCls+'-switch-item'}>
            <div className={prefixCls+"-content"}>
                {this.props.children}
            </div>
            <div className={prefixCls+"-extra"}>
                <Switch value={this.props.value} onChange={(value)=>{
                    this.props.onChange && this.props.onChange(value)
                }}/>
            </div>
        </div>
    }
}

class FileItem extends React.Component {
    static defaultProps = {
        prefixCls: 'weui-list',
        value: '请选择',
    }

    render = () => {
        const prefixCls = this.props.prefixCls
        return <div className={prefixCls+"-item "+prefixCls+"-file-item"}>
            <div className={prefixCls+"-label"}>
                {this.props.children}
            </div>
            <div className={prefixCls+"-control"}>
                <div>
                    <input type="file" onChange={(e)=>{
                        if (e.target.files[0].size > (8 * 1024 * 1024)) {
                            Util.errorTip('最大支持上传8MB大小的文件')
                            return false
                        }
                        this.props.onChange(e.target.files[0])
                    }}/>
                    {this.props.value == '请选择' ? <span>请选择</span> : <img src={this.props.value}/>}
                    <Icon type="horizontal"/>
                </div>
            </div>
        </div>
    }
}

class InputItem extends React.Component {
    static defaultProps = {
        prefixCls: 'weui-list',
        placeholder: '请输入',
        type: 'text',
        value: ''
    }

    render = () => {
        const prefixCls = this.props.prefixCls
        return <div className={prefixCls+"-item " +prefixCls+"-input-item"}>
            <div className={prefixCls+"-label"}>
                {this.props.children}
            </div>
            <div className={prefixCls+"-control"}>
                <input type={this.props.type} value={this.props.value} onChange={(e)=>{
                    this.props.onChange(e.target.value)
                }} placeholder={this.props.placeholder}/>
            </div>
        </div>
    }
}

class CodeInputItem extends React.Component {
    static defaultProps = {
        value: '',
        mobile: '',
        type: 'text',
        prefixCls: 'weui-list',
        placeholder: '请输入验证码',
        onButtonClick: () => {
        }
    }

    state = {
        countdown: 30
    }

    onButtonClick = ()=> {
        if (this.renderButtonCls() != 'active') {
            return false
        }
        window.codeBtnInterval = window.setInterval(()=> {
            this.setState({
                countdown: this.state.countdown === 0 ? 30 : (this.state.countdown - 1)
            })
            if (this.state.countdown === 30) {
                window.clearInterval(window.codeBtnInterval)
                delete window.codeBtnInterval
            }
        }, 1000)
        this.props.onButtonClick()
    }

    renderButtonCls = () => {
        const mobile = this.props.mobile
        return this.state.countdown === 30 && mobile && /^1[34578]\d{9}$/.test(mobile) ? 'active' : ''
    }

    render = () => {
        const prefixCls = this.props.prefixCls
        const buttonCls = this.renderButtonCls()
        return <div className={prefixCls+"-item " +prefixCls+"-code-input-item"}>
            <div className={prefixCls+"-label"}>
                {this.props.children}
            </div>
            <div className={prefixCls+"-control"}>
                <input type={this.props.type} value={this.props.value} onChange={(e)=>{
                    this.props.onChange(e.target.value)
                }} placeholder={this.props.placeholder}/>
                <Button className={prefixCls+"-code-button "+buttonCls} onClick={this.onButtonClick}>
                    {this.state.countdown === 30 ? '获取验证码' : (this.state.countdown + 's')}
                </Button>
            </div>
        </div>
    }
}

class TextAreaItem extends React.Component {
    static defaultProps = {
        rows: 5,
        count: 1000,
        value: '',
        placeholder: '请输入',
        prefixCls: 'weui-list',
    }

    componentDidMount = () => {
        const value = localStorage.getItem(this.props.prefixCls + '-textarea-item-value')
        value && this.props.onChange(value)
    }

    componentWillUnmount = () => {
        localStorage.removeItem(this.props.prefixCls + '-textarea-item-value')
    }

    render = () => {
        const prefixCls = this.props.prefixCls
        return <div className={prefixCls+"-item " +prefixCls+"-textarea-item"}>
            <div className={prefixCls+"-label"}>
                {this.props.children}
            </div>
            <div className={prefixCls+"-control"}>
                <textarea ref="textarea" rows={this.props.rows} value={this.props.value} onChange={(e)=>{
                    const textarea = this.refs.textarea
                    textarea.style.height = textarea.scrollHeight + 'px'

                    const value = e.target.value.substr(0, this.props.count)
                    localStorage.setItem(this.props.prefixCls+'-textarea-item-value', value)
                    this.props.onChange(value)
                }} placeholder={this.props.placeholder}/>
                <p className={prefixCls+'-textarea-counter'}>
                    {this.props.value.length} / {this.props.count}
                </p>
            </div>
        </div>
    }
}

class SelectItem extends React.Component {
    static defaultProps = {
        data: [],
        prefixCls: 'weui-list'
    }

    render = () => {
        const prefixCls = this.props.prefixCls
        return <div className={prefixCls+"-item " +prefixCls+"-select-item"}>
            <div className={prefixCls+"-label"}>
                {this.props.children}
            </div>
            <div className={prefixCls+"-control"}>
                <select onChange={()=>{
                    this.props.onChange
                }}>
                    {this.props.data.map((item, key)=> {
                        return <option value={item} key={key}>{item}</option>
                    })}
                </select>
                <span> ~ </span>
                <select onChange={()=>{
                    this.props.onChange
                }}>
                    {this.props.data.map((item, key)=> {
                        return <option value={item} key={key}>{item}</option>
                    })}
                </select>
            </div>
        </div>
    }
}

class DoubleSelectItem extends React.Component {
    static defaultProps = {
        data: [],
        prefixCls: 'weui-list',
        onMaxChange: ()=> {

        },
        onMinChange: () => {

        }
    }

    render = () => {
        const prefixCls = this.props.prefixCls
        const minValue = (this.props.value || '~').split('~')[0]
        const maxValue = (this.props.value || '~').split('~')[1]
        return <div className={prefixCls+"-item " +prefixCls+"-double-select-item"}>
            <div className={prefixCls+"-label"}>
                {this.props.children}
            </div>
            <div className={prefixCls+"-control"}>
                <Icon type="right"/>
                <select className="max-select" value={maxValue} onChange={(e)=>{
                    this.props.onMaxChange(e.target.value)

                    const value = this.props.value||'~'
                    this.props.onChange(value.split('~')[0]+'~'+e.target.value)
                }}>
                    <option value=''>请选择</option>
                    {this.props.maxData.map((item, key)=> {
                        return <option value={item} key={key}>{item}</option>
                    })}
                </select>
                <span> ~ </span>
                <select className="min-select" value={minValue} onChange={(e)=>{
                    this.props.onMinChange(e.target.value)

                    const value = this.props.value||'~'
                    this.props.onChange(e.target.value+'~'+value.split('~')[1])
                }}>
                    <option value=''>请选择</option>
                    {this.props.minData.map((item, key)=> {
                        return <option value={item} key={key}>{item}</option>
                    })}
                </select>
            </div>
        </div>
    }
}

class PickerItem extends React.Component {
    static defaultProps = {
        prefixCls: 'weui-list',
        value: '请选择',
        name: '请选择',
        data: []
    }

    state = {
        pickerStatus: ''
    }

    onPickerBackClick = () => {
        this.setState({
            pickerStatus: 'close'
        })
    }

    render = () => {
        const prefixCls = this.props.prefixCls
        return <div className={prefixCls+"-item "+prefixCls+"-picker-item"}>
            <div className={prefixCls+"-label"}>
                {this.props.children}
            </div>
            <div className={prefixCls+"-control"}>
                <div onClick={()=>{
                    this.setState({
                        pickerStatus: 'open'
                    })
                }}>
                    {this.props.value || '请选择'}
                    <Icon type="horizontal"/>
                </div>
            </div>
            <Picker name={this.props.name}
                    data={this.props.data}
                    value={this.props.value}
                    status={this.state.pickerStatus}
                    onChange={this.props.onChange}
                    onBackClick={this.onPickerBackClick}/>
        </div>
    }
}

class RadioItem extends React.Component {
    static defaultProps = {
        prefixCls: 'weui-list',
        value: '',
        data: []
    }

    render = () => {
        const prefixCls = this.props.prefixCls
        return <div className={prefixCls+"-item "+prefixCls+"-radio-item"}>
            <div className={prefixCls+"-label"}>
                {this.props.children}
            </div>
            <div className={prefixCls+"-control"}>
                <Radio onChange={this.props.onChange} value={this.props.value}>
                    {this.props.data.map((item, key)=> {
                        return <Radio.Item key={key} value={item} active={this.props.value===item?true: false}>
                            {item}
                        </Radio.Item>
                    })}
                </Radio>
            </div>
        </div>
    }
}

class CityPickerItem extends React.Component {
    static defaultProps = {
        prefixCls: 'weui-list',
        value: '请选择',
        name: '选择城市'
    }

    state = {
        pickerStatus: ''
    }

    onPickerBackClick = () => {
        this.setState({
            pickerStatus: 'close'
        })
    }

    render = () => {
        const prefixCls = this.props.prefixCls
        return <div className={prefixCls+"-item "+prefixCls+"-picker-item"}>
            <div className={prefixCls+"-label"}>
                {this.props.children}
            </div>
            <div className={prefixCls+"-control"}>
                <div onClick={()=>{
                    this.setState({
                        pickerStatus: 'open'
                    })
                }}>
                    {this.props.value || '请选择'}
                    <Icon type="horizontal"/>
                </div>
            </div>
            <CityPicker name={this.props.name}
                        value={this.props.value}
                        status={this.state.pickerStatus}
                        onChange={this.props.onChange}
                        onBackClick={this.onPickerBackClick}/>
        </div>
    }
}

class TagPickerItem extends React.Component {
    static defaultProps = {
        value: '',
        name: '选择标签',
        prefixCls: 'weui-list',
    }

    state = {
        pickerStatus: ''
    }

    onPickerBackClick = () => {
        this.setState({
            pickerStatus: 'close'
        })
    }

    renderTags = () => {
        let value = {}
        try {
            value = JSON.parse(this.props.value)
        } catch (e) {
            value = {}
        }

        let items = []
        for (let i in value) {
            items = items.concat(value[i])
        }

        return items.length > 0 ? items.map((item, key)=> {
            return <span key={key}>{item}</span>
        }) : '请选择'
    }

    render = () => {
        const prefixCls = this.props.prefixCls
        return <div className={prefixCls+"-item "+prefixCls+"-tag-picker-item"}>
            <div className={prefixCls+"-label"}>
                {this.props.children}
            </div>
            <div className={prefixCls+"-control"}>
                <div onClick={()=>{
                    this.setState({pickerStatus: 'open'})
                }}>
                    {this.renderTags()}
                    <Icon type="horizontal"/>
                </div>
            </div>
            <TagPicker name={this.props.name}
                       data={this.props.data}
                       value={this.props.value}
                       status={this.state.pickerStatus}
                       onChange={this.props.onChange}
                       onBackClick={this.onPickerBackClick}/>
        </div>
    }
}

class MonthPickerItem extends React.Component {
    static defaultProps = {
        value: '',
        name: '选择日期',
        prefixCls: 'weui-list',
    }

    state = {
        pickerStatus: ''
    }

    onPickerBackClick = () => {
        this.setState({
            pickerStatus: 'close'
        })
    }

    render = () => {
        const prefixCls = this.props.prefixCls
        return <div className={prefixCls+"-item "+prefixCls+"-tag-picker-item"}>
            <div className={prefixCls+"-label"}>
                {this.props.children}
            </div>
            <div className={prefixCls+"-control"}>
                <div onClick={()=>{
                    this.setState({pickerStatus: 'open'})
                }}>
                    {this.props.value || '请选择'}
                    <Icon type="horizontal"/>
                </div>
            </div>
            <MonthPicker value={this.props.value} status={this.state.pickerStatus}
                         onChange={this.props.onChange} onBackClick={this.onPickerBackClick}/>
        </div>
    }
}

class DatePickerItem extends React.Component {
    static defaultProps = {
        value: '',
        name: '选择日期',
        prefixCls: 'weui-list',
    }

    state = {
        datePickerVisible: false
    }

    render = () => {
        const prefixCls = this.props.prefixCls
        return <div className={prefixCls+"-item "+prefixCls+"-date-picker-item"}>
            <div className={prefixCls+"-label"}>
                {this.props.children}
            </div>
            <div className={prefixCls+"-control"} onClick={()=>{
                this.setState({datePickerVisible: true})
            }}>
                <div>
                    {this.props.value || '请选择'}
                    <Icon type="horizontal"/>
                </div>
            </div>
            <InfiniteDatePicker visible={this.state.datePickerVisible} onClose={()=>{
                this.setState({
                    datePickerVisible: false
                })
            }} selected={new Date(this.props.value)} onChange={(val)=>{
                this.setState({
                    datePickerVisible: false
                })
                this.props.onChange(val)
            }}/>
        </div>
    }
}

class RaterItem extends React.Component {

    static defaultProps = {
        value: '',
        prefixCls: 'weui-list',
    }

    render = () => {
        const prefixCls = this.props.prefixCls
        return <div className={prefixCls+"-item "+prefixCls+"-rater-item"}>
            <div className={prefixCls+"-content"}>
                {this.props.children}
            </div>
            <div className={prefixCls+"-extra"}>
                <Rater value={this.props.value} onChange={this.props.onChange}/>
            </div>
        </div>
    }
}

class List extends React.Component {
    static defaultProps = {
        style: {},
        className: '',
        prefixCls: 'weui',
    }

    render = () => {
        return <div className={this.props.prefixCls+"-list "+this.props.className} style={this.props.style}>
            {this.props.children}
        </div>
    }
}

List.Header = Header
List.Footer = Footer
List.Item = ListItem
List.FileItem = FileItem
List.InputItem = InputItem
List.CodeInputItem = CodeInputItem
List.TextareaItem = List.TextAreaItem = TextAreaItem
List.SelectItem = SelectItem
List.DoubleSelectItem = DoubleSelectItem
List.RaterItem = RaterItem
List.RadioItem = RadioItem
List.SwitchItem = SwitchItem
List.PickerItem = PickerItem
List.TagPickerItem = TagPickerItem
List.CityPickerItem = CityPickerItem
List.DatePickerItem = DatePickerItem
List.MonthPickerItem = MonthPickerItem
export default List
