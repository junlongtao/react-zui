'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

require('./less/list.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _Rater = require('./Rater');

var _Rater2 = _interopRequireDefault(_Rater);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Switch = require('./Switch');

var _Switch2 = _interopRequireDefault(_Switch);

var _TagPicker = require('./TagPicker');

var _TagPicker2 = _interopRequireDefault(_TagPicker);

var _CityPicker = require('./CityPicker');

var _CityPicker2 = _interopRequireDefault(_CityPicker);

var _DatePicker = require('./DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _MonthPicker = require('./MonthPicker');

var _MonthPicker2 = _interopRequireDefault(_MonthPicker);

var _OptionPicker = require('./OptionPicker');

var _OptionPicker2 = _interopRequireDefault(_OptionPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_React$Component) {
    (0, _inherits3.default)(Header, _React$Component);

    function Header() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Header);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var prefix = _this.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + "-header " + _this.props.className, onClick: _this.props.onClick },
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-content" },
                    _this.props.children
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-extra" },
                    _this.props.extra,
                    _react2.default.createElement(_Icon2.default, { type: _this.props.arrow })
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Header;
}(_react2.default.Component);

Header.defaultProps = {
    className: '',
    prefix: 'zui-list'
};

var Footer = function (_React$Component2) {
    (0, _inherits3.default)(Footer, _React$Component2);

    function Footer() {
        var _ref2;

        var _temp2, _this2, _ret2;

        (0, _classCallCheck3.default)(this, Footer);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).call.apply(_ref2, [this].concat(args))), _this2), _this2.render = function () {
            var prefix = _this2.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + "-footer " + _this2.props.className, onClick: _this2.props.onClick },
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-content" },
                    _this2.props.children
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-extra" },
                    _this2.props.extra,
                    _react2.default.createElement(_Icon2.default, { type: _this2.props.arrow })
                )
            );
        }, _temp2), (0, _possibleConstructorReturn3.default)(_this2, _ret2);
    }

    return Footer;
}(_react2.default.Component);

Footer.defaultProps = {
    className: '',
    prefix: 'zui-list'
};

var ListItem = function (_React$Component3) {
    (0, _inherits3.default)(ListItem, _React$Component3);

    function ListItem() {
        var _ref3;

        var _temp3, _this3, _ret3;

        (0, _classCallCheck3.default)(this, ListItem);

        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        return _ret3 = (_temp3 = (_this3 = (0, _possibleConstructorReturn3.default)(this, (_ref3 = ListItem.__proto__ || (0, _getPrototypeOf2.default)(ListItem)).call.apply(_ref3, [this].concat(args))), _this3), _this3.render = function () {
            var prefix = _this3.props.prefix;
            var checkCls = _this3.props.arrow === 'check' ? 'active ' : ' ';
            var clickCls = _this3.props.onChange || _this3.props.href ? 'clickable ' : ' ';
            return _react2.default.createElement(
                'div',
                { className: prefix + "-item " + checkCls + clickCls + _this3.props.className, style: _this3.props.style, onClick: function onClick() {
                        if (_this3.props.href) {
                            location.assign(_this3.props.href);
                        } else {
                            _this3.props.onClick();
                        }
                    } },
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-content" },
                    _this3.props.children
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-extra" },
                    _this3.props.extra,
                    _react2.default.createElement(_Icon2.default, { type: _this3.props.arrow })
                )
            );
        }, _temp3), (0, _possibleConstructorReturn3.default)(_this3, _ret3);
    }

    return ListItem;
}(_react2.default.Component);

ListItem.defaultProps = {
    href: '',
    style: {},
    arrow: '',
    className: '',
    onClick: function onClick() {},
    prefix: 'zui-list'
};

var PreItem = function (_React$Component4) {
    (0, _inherits3.default)(PreItem, _React$Component4);

    function PreItem() {
        var _ref4;

        var _temp4, _this4, _ret4;

        (0, _classCallCheck3.default)(this, PreItem);

        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
        }

        return _ret4 = (_temp4 = (_this4 = (0, _possibleConstructorReturn3.default)(this, (_ref4 = PreItem.__proto__ || (0, _getPrototypeOf2.default)(PreItem)).call.apply(_ref4, [this].concat(args))), _this4), _this4.render = function () {
            var prefix = _this4.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + "-item " + prefix + "-pre-item" },
                _react2.default.createElement(
                    'pre',
                    { className: prefix + '-content' },
                    _this4.props.children
                )
            );
        }, _temp4), (0, _possibleConstructorReturn3.default)(_this4, _ret4);
    }

    return PreItem;
}(_react2.default.Component);

PreItem.defaultProps = {
    prefix: 'zui-list'
};

var SwitchItem = function (_React$Component5) {
    (0, _inherits3.default)(SwitchItem, _React$Component5);

    function SwitchItem() {
        var _ref5;

        var _temp5, _this5, _ret5;

        (0, _classCallCheck3.default)(this, SwitchItem);

        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
        }

        return _ret5 = (_temp5 = (_this5 = (0, _possibleConstructorReturn3.default)(this, (_ref5 = SwitchItem.__proto__ || (0, _getPrototypeOf2.default)(SwitchItem)).call.apply(_ref5, [this].concat(args))), _this5), _this5.state = {
            value: ''
        }, _this5.componentWillReceiveProps = function (nextProps) {
            _this5.setState({
                value: nextProps.value
            });
        }, _this5.render = function () {
            var prefix = _this5.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + "-item " + prefix + '-switch-item' },
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-content" },
                    _this5.props.children
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-extra" },
                    _react2.default.createElement(_Switch2.default, { value: _this5.state.value, onChange: function onChange(value) {
                            _this5.props.onChange && _this5.props.onChange(value);
                        } })
                )
            );
        }, _temp5), (0, _possibleConstructorReturn3.default)(_this5, _ret5);
    }

    return SwitchItem;
}(_react2.default.Component);

SwitchItem.defaultProps = {
    value: 1,
    onClick: null,
    onChange: null,
    prefix: 'zui-list'
};

var FileItem = function (_React$Component6) {
    (0, _inherits3.default)(FileItem, _React$Component6);

    function FileItem() {
        var _ref6;

        var _temp6, _this6, _ret6;

        (0, _classCallCheck3.default)(this, FileItem);

        for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
        }

        return _ret6 = (_temp6 = (_this6 = (0, _possibleConstructorReturn3.default)(this, (_ref6 = FileItem.__proto__ || (0, _getPrototypeOf2.default)(FileItem)).call.apply(_ref6, [this].concat(args))), _this6), _this6.state = {
            value: ''
        }, _this6.componentWillReceiveProps = function (nextProps) {
            _this6.setState({
                value: nextProps.value
            });
        }, _this6.renderFile = function () {
            var value = _this6.state.value || '';
            var filename = Object.prototype.toString.call(value) == '[object File]' ? value.name : value;
            if (_this6.props.type === 'img') {
                var src = Object.prototype.toString.call(value) == '[object File]' ? window.URL.createObjectURL(value) : value;
                return src ? _react2.default.createElement('img', { src: src }) : _this6.props.placeholder;
            }

            return filename || _this6.props.placeholder;
        }, _this6.render = function () {
            var prefix = _this6.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + "-item " + prefix + "-file-item" },
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-label" },
                    _this6.props.children
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-control" },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('input', { type: 'file', onChange: function onChange(e) {
                                var file = e.target.files[0];
                                if (file.size > _this6.props.maxSize) {
                                    alert('最大支持上传' + _this6.props.maxSize / 1024 / 1024 + 'MB大小的文件');
                                    return false;
                                }
                                _this6.setState({ value: file });
                                _this6.props.onChange(file);
                            } }),
                        _this6.renderFile(),
                        _react2.default.createElement(_Icon2.default, { type: 'horizontal' })
                    )
                )
            );
        }, _temp6), (0, _possibleConstructorReturn3.default)(_this6, _ret6);
    }

    return FileItem;
}(_react2.default.Component);

FileItem.defaultProps = {
    type: 'img',
    prefix: 'zui-list',
    placeholder: '请选择',
    maxSize: 8 * 1024 * 1024,
    onChange: function onChange() {}
};

var InputItem = function (_React$Component7) {
    (0, _inherits3.default)(InputItem, _React$Component7);

    function InputItem() {
        var _ref7;

        var _temp7, _this7, _ret7;

        (0, _classCallCheck3.default)(this, InputItem);

        for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
        }

        return _ret7 = (_temp7 = (_this7 = (0, _possibleConstructorReturn3.default)(this, (_ref7 = InputItem.__proto__ || (0, _getPrototypeOf2.default)(InputItem)).call.apply(_ref7, [this].concat(args))), _this7), _this7.state = {
            value: ''
        }, _this7.componentWillReceiveProps = function (nextProps) {
            _this7.setState({
                value: nextProps.value
            });
        }, _this7.render = function () {
            var prefix = _this7.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + "-item " + prefix + "-input-item" },
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-label" },
                    _this7.props.children
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-control" },
                    _react2.default.createElement('input', {
                        type: _this7.props.type,
                        value: _this7.state.value,
                        placeholder: _this7.props.placeholder,
                        onChange: function onChange(e) {
                            _this7.setState({ value: e.target.value });
                            _this7.props.onChange(e.target.value);
                        },
                        onBlur: function onBlur(e) {
                            _this7.props.onBlur(e.target.value);
                        },
                        onClick: _this7.props.onClick
                    })
                )
            );
        }, _temp7), (0, _possibleConstructorReturn3.default)(_this7, _ret7);
    }

    return InputItem;
}(_react2.default.Component);

InputItem.defaultProps = {
    value: '',
    type: 'text',
    prefix: 'zui-list',
    placeholder: '请输入',
    onChange: function onChange() {},
    onClick: function onClick() {},
    onBlur: function onBlur() {}
};

var CodeInputItem = function (_React$Component8) {
    (0, _inherits3.default)(CodeInputItem, _React$Component8);

    function CodeInputItem() {
        var _ref8;

        var _temp8, _this8, _ret8;

        (0, _classCallCheck3.default)(this, CodeInputItem);

        for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            args[_key8] = arguments[_key8];
        }

        return _ret8 = (_temp8 = (_this8 = (0, _possibleConstructorReturn3.default)(this, (_ref8 = CodeInputItem.__proto__ || (0, _getPrototypeOf2.default)(CodeInputItem)).call.apply(_ref8, [this].concat(args))), _this8), _this8.state = {
            value: '',
            countdown: 30
        }, _this8.componentWillReceiveProps = function (nextProps) {
            _this8.setState({ value: nextProps.value });

            if (nextProps.startCountdown) {
                if (_this8.state.countdown < 30) {
                    return false;
                }

                var countdown = function countdown() {
                    _this8.setState({
                        countdown: _this8.state.countdown === 0 ? 30 : _this8.state.countdown - 1
                    });
                    if (_this8.state.countdown === 30) {
                        _this8.props.onCountdownEnd();
                        window.clearInterval(window.codeBtnInterval);
                    }
                };
                countdown();
                window.clearInterval(window.codeBtnInterval);
                window.codeBtnInterval = window.setInterval(countdown, 1000);
            }
        }, _this8.render = function () {
            var prefix = _this8.props.prefix;
            var countdown = _this8.state.countdown;
            var buttonCls = countdown === 30 ? 'active' : '';
            return _react2.default.createElement(
                'div',
                { className: prefix + "-item " + prefix + "-code-input-item" },
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-label" },
                    _this8.props.children
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-control" },
                    _react2.default.createElement('input', {
                        type: _this8.props.type,
                        value: _this8.state.value,
                        placeholder: _this8.props.placeholder,
                        onChange: function onChange(e) {
                            _this8.props.onChange(e.target.value);
                            _this8.setState({ value: e.target.value });
                        } }),
                    _react2.default.createElement(
                        _Button2.default,
                        { className: prefix + "-code-button " + buttonCls, onClick: _this8.props.onButtonClick },
                        countdown === 30 ? '获取验证码' : countdown + 's'
                    )
                )
            );
        }, _temp8), (0, _possibleConstructorReturn3.default)(_this8, _ret8);
    }

    return CodeInputItem;
}(_react2.default.Component);

CodeInputItem.defaultProps = {
    value: '',
    mobile: '',
    type: 'text',
    prefix: 'zui-list',
    placeholder: '请输入验证码',
    onChange: function onChange() {},
    onButtonClick: function onButtonClick() {},
    onCountdownEnd: function onCountdownEnd() {}
};

var TextAreaItem = function (_React$Component9) {
    (0, _inherits3.default)(TextAreaItem, _React$Component9);

    function TextAreaItem() {
        var _ref9;

        var _temp9, _this9, _ret9;

        (0, _classCallCheck3.default)(this, TextAreaItem);

        for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            args[_key9] = arguments[_key9];
        }

        return _ret9 = (_temp9 = (_this9 = (0, _possibleConstructorReturn3.default)(this, (_ref9 = TextAreaItem.__proto__ || (0, _getPrototypeOf2.default)(TextAreaItem)).call.apply(_ref9, [this].concat(args))), _this9), _this9.state = {
            value: ''
        }, _this9.componentWillReceiveProps = function (nextProps) {
            _this9.setState({
                value: nextProps.value
            });
        }, _this9.render = function () {
            var prefix = _this9.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + "-item " + prefix + "-textarea-item" },
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-label" },
                    _this9.props.children
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-control" },
                    _react2.default.createElement('textarea', { rows: _this9.props.rows, value: _this9.state.value, onChange: function onChange(e) {
                            var value = e.target.value.substr(0, _this9.props.count);
                            localStorage.setItem(_this9.props.prefix + '-textarea-item-value', value);
                            _this9.setState({ value: value });
                            _this9.props.onChange(value);
                        }, style: {
                            textAlign: _this9.props.textAlign
                        }, placeholder: _this9.props.placeholder }),
                    _react2.default.createElement(
                        'p',
                        { className: prefix + '-textarea-counter' },
                        _this9.state.value.length,
                        ' / ',
                        _this9.props.count
                    )
                )
            );
        }, _temp9), (0, _possibleConstructorReturn3.default)(_this9, _ret9);
    }

    return TextAreaItem;
}(_react2.default.Component);

TextAreaItem.defaultProps = {
    rows: 5,
    value: '',
    count: 1000,
    prefix: 'zui-list',
    textAlign: 'left',
    placeholder: '请输入',
    onChange: function onChange() {}
};

var SelectItem = function (_React$Component10) {
    (0, _inherits3.default)(SelectItem, _React$Component10);

    function SelectItem() {
        var _ref10;

        var _temp10, _this10, _ret10;

        (0, _classCallCheck3.default)(this, SelectItem);

        for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
            args[_key10] = arguments[_key10];
        }

        return _ret10 = (_temp10 = (_this10 = (0, _possibleConstructorReturn3.default)(this, (_ref10 = SelectItem.__proto__ || (0, _getPrototypeOf2.default)(SelectItem)).call.apply(_ref10, [this].concat(args))), _this10), _this10.render = function () {
            var prefix = _this10.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + "-item " + prefix + "-select-item" },
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-label" },
                    _this10.props.children
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-control" },
                    _react2.default.createElement(
                        'select',
                        { onChange: function onChange() {
                                _this10.props.onChange;
                            } },
                        _this10.props.data.map(function (item, key) {
                            return _react2.default.createElement(
                                'option',
                                { value: item, key: key },
                                item
                            );
                        })
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        ' ~ '
                    ),
                    _react2.default.createElement(
                        'select',
                        { onChange: function onChange() {
                                _this10.props.onChange;
                            } },
                        _this10.props.data.map(function (item, key) {
                            return _react2.default.createElement(
                                'option',
                                { value: item, key: key },
                                item
                            );
                        })
                    )
                )
            );
        }, _temp10), (0, _possibleConstructorReturn3.default)(_this10, _ret10);
    }

    return SelectItem;
}(_react2.default.Component);

SelectItem.defaultProps = {
    data: [],
    prefix: 'zui-list'
};

var DoubleSelectItem = function (_React$Component11) {
    (0, _inherits3.default)(DoubleSelectItem, _React$Component11);

    function DoubleSelectItem() {
        var _ref11;

        var _temp11, _this11, _ret11;

        (0, _classCallCheck3.default)(this, DoubleSelectItem);

        for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
            args[_key11] = arguments[_key11];
        }

        return _ret11 = (_temp11 = (_this11 = (0, _possibleConstructorReturn3.default)(this, (_ref11 = DoubleSelectItem.__proto__ || (0, _getPrototypeOf2.default)(DoubleSelectItem)).call.apply(_ref11, [this].concat(args))), _this11), _this11.state = {
            value: ''
        }, _this11.componentWillReceiveProps = function (nextProps) {
            _this11.setState({ value: nextProps.value });
        }, _this11.render = function () {
            var prefix = _this11.props.prefix;
            var minValue = (_this11.state.value || '~').split('~')[0];
            var maxValue = (_this11.state.value || '~').split('~')[1];
            return _react2.default.createElement(
                'div',
                { className: prefix + "-item " + prefix + "-double-select-item" },
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-label" },
                    _this11.props.children
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-control" },
                    _react2.default.createElement(_Icon2.default, { type: 'right' }),
                    _react2.default.createElement(
                        'select',
                        { className: 'max-select', value: maxValue, onChange: function onChange(e) {
                                _this11.props.onMaxChange(e.target.value);

                                var value = _this11.state.value || '~';
                                _this11.props.onChange(value.split('~')[0] + '~' + e.target.value);
                            } },
                        _react2.default.createElement(
                            'option',
                            { value: '' },
                            '\u8BF7\u9009\u62E9'
                        ),
                        _this11.props.maxData.map(function (item, key) {
                            return _react2.default.createElement(
                                'option',
                                { value: item, key: key },
                                item
                            );
                        })
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        ' ~ '
                    ),
                    _react2.default.createElement(
                        'select',
                        { className: 'min-select', value: minValue, onChange: function onChange(e) {
                                _this11.props.onMinChange(e.target.value);

                                var value = _this11.state.value || '~';
                                _this11.props.onChange(e.target.value + '~' + value.split('~')[1]);
                            } },
                        _react2.default.createElement(
                            'option',
                            { value: '' },
                            '\u8BF7\u9009\u62E9'
                        ),
                        _this11.props.minData.map(function (item, key) {
                            return _react2.default.createElement(
                                'option',
                                { value: item, key: key },
                                item
                            );
                        })
                    )
                )
            );
        }, _temp11), (0, _possibleConstructorReturn3.default)(_this11, _ret11);
    }

    return DoubleSelectItem;
}(_react2.default.Component);

DoubleSelectItem.defaultProps = {
    data: [],
    prefix: 'zui-list',
    onMaxChange: function onMaxChange() {},
    onMinChange: function onMinChange() {}
};

var RadioItem = function (_React$Component12) {
    (0, _inherits3.default)(RadioItem, _React$Component12);

    function RadioItem() {
        var _ref12;

        var _temp12, _this12, _ret12;

        (0, _classCallCheck3.default)(this, RadioItem);

        for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
            args[_key12] = arguments[_key12];
        }

        return _ret12 = (_temp12 = (_this12 = (0, _possibleConstructorReturn3.default)(this, (_ref12 = RadioItem.__proto__ || (0, _getPrototypeOf2.default)(RadioItem)).call.apply(_ref12, [this].concat(args))), _this12), _this12.state = {
            value: _this12.props.value
        }, _this12.componentWillReceiveProps = function (nextProps) {
            _this12.setState({
                value: nextProps.value || _this12.props.data[0]
            });
        }, _this12.render = function () {
            var prefix = _this12.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + "-item " + prefix + "-radio-item" },
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-label" },
                    _this12.props.children
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-control" },
                    _react2.default.createElement(_Radio2.default, { data: _this12.props.data, value: _this12.state.value, onChange: function onChange(value) {
                            _this12.setState({ value: value });
                            _this12.props.onChange(value);
                        } })
                )
            );
        }, _temp12), (0, _possibleConstructorReturn3.default)(_this12, _ret12);
    }

    return RadioItem;
}(_react2.default.Component);

RadioItem.defaultProps = {
    data: [],
    value: '',
    prefix: 'zui-list',
    onChange: function onChange() {}
};

var PickerItem = function (_React$Component13) {
    (0, _inherits3.default)(PickerItem, _React$Component13);

    function PickerItem() {
        var _ref13;

        var _temp13, _this13, _ret13;

        (0, _classCallCheck3.default)(this, PickerItem);

        for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
            args[_key13] = arguments[_key13];
        }

        return _ret13 = (_temp13 = (_this13 = (0, _possibleConstructorReturn3.default)(this, (_ref13 = PickerItem.__proto__ || (0, _getPrototypeOf2.default)(PickerItem)).call.apply(_ref13, [this].concat(args))), _this13), _this13.state = {
            value: _this13.props.value,
            status: _this13.props.status
        }, _this13.componentWillReceiveProps = function (nextProps) {
            _this13.setState({
                value: nextProps.value
            });
        }, _this13.render = function () {
            var prefix = _this13.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + "-item " + prefix + "-picker-item" },
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-label" },
                    _this13.props.children
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-control" },
                    _react2.default.createElement(
                        'div',
                        { onClick: function onClick() {
                                _this13.setState({ status: 'open' });
                            } },
                        _this13.state.value || '请选择',
                        _react2.default.createElement(_Icon2.default, { type: 'horizontal' })
                    )
                ),
                _react2.default.createElement(_OptionPicker2.default, {
                    name: _this13.props.name,
                    data: _this13.props.data,
                    value: _this13.state.value,
                    status: _this13.state.status,
                    onChange: function onChange(value) {
                        _this13.props.onChange(value);
                        _this13.setState({
                            value: value,
                            status: 'close'
                        });
                    }
                })
            );
        }, _temp13), (0, _possibleConstructorReturn3.default)(_this13, _ret13);
    }

    return PickerItem;
}(_react2.default.Component);

PickerItem.defaultProps = {
    data: [],
    value: '',
    name: '请选择',
    prefix: 'zui-list',
    onChange: function onChange() {}
};

var CityPickerItem = function (_React$Component14) {
    (0, _inherits3.default)(CityPickerItem, _React$Component14);

    function CityPickerItem() {
        var _ref14;

        var _temp14, _this14, _ret14;

        (0, _classCallCheck3.default)(this, CityPickerItem);

        for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
            args[_key14] = arguments[_key14];
        }

        return _ret14 = (_temp14 = (_this14 = (0, _possibleConstructorReturn3.default)(this, (_ref14 = CityPickerItem.__proto__ || (0, _getPrototypeOf2.default)(CityPickerItem)).call.apply(_ref14, [this].concat(args))), _this14), _this14.state = {
            value: _this14.props.value,
            status: _this14.props.status
        }, _this14.componentWillReceiveProps = function (nextProps) {
            _this14.setState({
                value: nextProps.value
            });
        }, _this14.render = function () {
            var prefix = _this14.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + "-item " + prefix + "-picker-item" },
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-label" },
                    _this14.props.children
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-control" },
                    _react2.default.createElement(
                        'div',
                        { onClick: function onClick() {
                                _this14.setState({ status: 'open' });
                            } },
                        _this14.state.value || '请选择',
                        _react2.default.createElement(_Icon2.default, { type: 'horizontal' })
                    )
                ),
                _react2.default.createElement(_CityPicker2.default, {
                    name: _this14.props.name,
                    value: _this14.state.value,
                    status: _this14.state.status,
                    onChange: function onChange(value) {
                        _this14.setState({
                            value: value,
                            status: 'close'
                        });
                        _this14.props.onChange(value);
                    }
                })
            );
        }, _temp14), (0, _possibleConstructorReturn3.default)(_this14, _ret14);
    }

    return CityPickerItem;
}(_react2.default.Component);

CityPickerItem.defaultProps = {
    value: '请选择',
    name: '选择城市',
    prefix: 'zui-list',
    onChange: function onChange() {}
};

var TagPickerItem = function (_React$Component15) {
    (0, _inherits3.default)(TagPickerItem, _React$Component15);

    function TagPickerItem() {
        var _ref15;

        var _temp15, _this15, _ret15;

        (0, _classCallCheck3.default)(this, TagPickerItem);

        for (var _len15 = arguments.length, args = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
            args[_key15] = arguments[_key15];
        }

        return _ret15 = (_temp15 = (_this15 = (0, _possibleConstructorReturn3.default)(this, (_ref15 = TagPickerItem.__proto__ || (0, _getPrototypeOf2.default)(TagPickerItem)).call.apply(_ref15, [this].concat(args))), _this15), _this15.state = {
            value: _this15.props.value,
            status: _this15.props.status
        }, _this15.componentWillReceiveProps = function (nextProps) {
            _this15.setState({
                value: nextProps.value
            });
        }, _this15.renderTags = function () {
            var value = {};
            try {
                value = JSON.parse(_this15.state.value);
            } catch (e) {
                value = {};
            }

            var items = [];
            for (var i in value) {
                items = items.concat(value[i]);
            }

            return items.length > 0 ? items.map(function (item, key) {
                return _react2.default.createElement(
                    'span',
                    { key: key },
                    item
                );
            }) : '请选择';
        }, _this15.render = function () {
            var prefix = _this15.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + "-item " + prefix + "-tag-picker-item" },
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-label" },
                    _this15.props.children
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-control" },
                    _react2.default.createElement(
                        'div',
                        { onClick: function onClick() {
                                _this15.setState({ status: 'open' });
                            } },
                        _this15.renderTags(),
                        _react2.default.createElement(_Icon2.default, { type: 'horizontal' })
                    )
                ),
                _react2.default.createElement(_TagPicker2.default, {
                    name: _this15.props.name,
                    data: _this15.props.data,
                    value: _this15.state.value,
                    status: _this15.state.status,
                    onChange: function onChange(value) {
                        _this15.props.onChange(value);
                        _this15.setState({ value: value });
                    },
                    onBackClick: function onBackClick() {
                        _this15.setState({ status: 'close' });
                    },
                    onSubmitClick: function onSubmitClick() {
                        _this15.props.onSubmitClick();
                        _this15.setState({ status: 'close' });
                    }
                })
            );
        }, _temp15), (0, _possibleConstructorReturn3.default)(_this15, _ret15);
    }

    return TagPickerItem;
}(_react2.default.Component);

TagPickerItem.defaultProps = {
    value: '',
    name: '选择标签',
    prefix: 'zui-list',
    onChange: function onChange() {},
    onSubmitClick: function onSubmitClick() {}
};

var MonthPickerItem = function (_React$Component16) {
    (0, _inherits3.default)(MonthPickerItem, _React$Component16);

    function MonthPickerItem() {
        var _ref16;

        var _temp16, _this16, _ret16;

        (0, _classCallCheck3.default)(this, MonthPickerItem);

        for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
            args[_key16] = arguments[_key16];
        }

        return _ret16 = (_temp16 = (_this16 = (0, _possibleConstructorReturn3.default)(this, (_ref16 = MonthPickerItem.__proto__ || (0, _getPrototypeOf2.default)(MonthPickerItem)).call.apply(_ref16, [this].concat(args))), _this16), _this16.state = {
            value: _this16.props.value,
            status: _this16.props.status
        }, _this16.componentWillReceiveProps = function (nextProps) {
            _this16.setState({
                value: nextProps.value
            });
        }, _this16.render = function () {
            var prefix = _this16.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + "-item " + prefix + "-month-picker-item" },
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-label" },
                    _this16.props.children
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-control" },
                    _react2.default.createElement(
                        'div',
                        { onClick: function onClick() {
                                _this16.setState({ status: 'open' });
                            } },
                        _this16.state.value || '请选择',
                        _react2.default.createElement(_Icon2.default, { type: 'horizontal' })
                    )
                ),
                _react2.default.createElement(_MonthPicker2.default, {
                    value: _this16.state.value,
                    status: _this16.state.status,
                    onChange: function onChange(value) {
                        _this16.props.onChange(value);
                        _this16.setState({
                            value: value,
                            status: 'close'
                        });
                    }
                })
            );
        }, _temp16), (0, _possibleConstructorReturn3.default)(_this16, _ret16);
    }

    return MonthPickerItem;
}(_react2.default.Component);

MonthPickerItem.defaultProps = {
    value: '',
    name: '选择日期',
    prefix: 'zui-list',
    onChange: function onChange() {}
};

var DatePickerItem = function (_React$Component17) {
    (0, _inherits3.default)(DatePickerItem, _React$Component17);

    function DatePickerItem() {
        var _ref17;

        var _temp17, _this17, _ret17;

        (0, _classCallCheck3.default)(this, DatePickerItem);

        for (var _len17 = arguments.length, args = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
            args[_key17] = arguments[_key17];
        }

        return _ret17 = (_temp17 = (_this17 = (0, _possibleConstructorReturn3.default)(this, (_ref17 = DatePickerItem.__proto__ || (0, _getPrototypeOf2.default)(DatePickerItem)).call.apply(_ref17, [this].concat(args))), _this17), _this17.state = {
            value: _this17.props.value,
            status: _this17.props.status
        }, _this17.componentWillReceiveProps = function (nextProps) {
            _this17.setState({
                value: nextProps.value
            });
        }, _this17.render = function () {
            var prefix = _this17.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + "-item " + prefix + "-date-picker-item" },
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-label" },
                    _this17.props.children
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-control", onClick: function onClick() {
                            _this17.setState({ status: 'open' });
                        } },
                    _react2.default.createElement(
                        'div',
                        null,
                        _this17.state.value || '请选择',
                        _react2.default.createElement(_Icon2.default, { type: 'horizontal' })
                    )
                ),
                _react2.default.createElement(_DatePicker2.default, {
                    value: _this17.state.value,
                    status: _this17.state.status,
                    onChange: function onChange(value) {
                        _this17.props.onChange(value);
                        _this17.setState({
                            value: value,
                            status: 'close'
                        });
                    }
                })
            );
        }, _temp17), (0, _possibleConstructorReturn3.default)(_this17, _ret17);
    }

    return DatePickerItem;
}(_react2.default.Component);

DatePickerItem.defaultProps = {
    value: '',
    name: '选择日期',
    prefix: 'zui-list',
    onChange: function onChange() {}
};

var RaterItem = function (_React$Component18) {
    (0, _inherits3.default)(RaterItem, _React$Component18);

    function RaterItem() {
        var _ref18;

        var _temp18, _this18, _ret18;

        (0, _classCallCheck3.default)(this, RaterItem);

        for (var _len18 = arguments.length, args = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
            args[_key18] = arguments[_key18];
        }

        return _ret18 = (_temp18 = (_this18 = (0, _possibleConstructorReturn3.default)(this, (_ref18 = RaterItem.__proto__ || (0, _getPrototypeOf2.default)(RaterItem)).call.apply(_ref18, [this].concat(args))), _this18), _this18.state = {
            value: _this18.props.value
        }, _this18.componentWillReceiveProps = function (nextProps) {
            _this18.setState({
                value: nextProps.value
            });
        }, _this18.render = function () {
            var prefix = _this18.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + "-item " + prefix + "-rater-item" },
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-content" },
                    _this18.props.children
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-extra" },
                    _react2.default.createElement(_Rater2.default, { value: _this18.state.value, onChange: function onChange(value) {
                            _this18.setState({ value: value });
                            _this18.props.onChange(value);
                        } })
                )
            );
        }, _temp18), (0, _possibleConstructorReturn3.default)(_this18, _ret18);
    }

    return RaterItem;
}(_react2.default.Component);

RaterItem.defaultProps = {
    value: '',
    prefix: 'zui-list',
    onChange: function onChange() {}
};

var List = function (_React$Component19) {
    (0, _inherits3.default)(List, _React$Component19);

    function List() {
        var _ref19;

        var _temp19, _this19, _ret19;

        (0, _classCallCheck3.default)(this, List);

        for (var _len19 = arguments.length, args = Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
            args[_key19] = arguments[_key19];
        }

        return _ret19 = (_temp19 = (_this19 = (0, _possibleConstructorReturn3.default)(this, (_ref19 = List.__proto__ || (0, _getPrototypeOf2.default)(List)).call.apply(_ref19, [this].concat(args))), _this19), _this19.render = function () {
            return _react2.default.createElement(
                'div',
                { className: _this19.props.prefix + "-list " + _this19.props.className, style: _this19.props.style },
                _this19.props.children
            );
        }, _temp19), (0, _possibleConstructorReturn3.default)(_this19, _ret19);
    }

    return List;
}(_react2.default.Component);

List.defaultProps = {
    style: {},
    className: '',
    prefix: 'zui'
};


List.Header = Header;
List.Footer = Footer;
List.Item = ListItem;
List.PreItem = PreItem;
List.FileItem = FileItem;
List.InputItem = InputItem;
List.CodeInputItem = CodeInputItem;
List.TextareaItem = List.TextAreaItem = TextAreaItem;
List.SelectItem = SelectItem;
List.DoubleSelectItem = DoubleSelectItem;
List.RaterItem = RaterItem;
List.RadioItem = RadioItem;
List.SwitchItem = SwitchItem;
List.PickerItem = PickerItem;
List.TagPickerItem = TagPickerItem;
List.CityPickerItem = CityPickerItem;
List.DatePickerItem = DatePickerItem;
List.MonthPickerItem = MonthPickerItem;
exports.default = List;