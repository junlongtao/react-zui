/**
 * 单选框组件
 */
"use strict";

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

require('./less/check-list.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Message = require('./Message');

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckList = function (_React$Component) {
    (0, _inherits3.default)(CheckList, _React$Component);

    function CheckList() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CheckList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CheckList.__proto__ || (0, _getPrototypeOf2.default)(CheckList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: []
        }, _this.componentWillReceiveProps = function (nextProps) {
            var value = nextProps.value;
            value && _this.setState({ value: value });
        }, _this.onOptionClick = function (item) {
            var value = _this.state.value;
            var index = value.indexOf(item);
            if (index === -1 && value.length >= _this.props.max) {
                _Message2.default.info('最多同时选择' + _this.props.max + '项');
                return false;
            }
            if (index === -1) {
                value.push(item);
            } else {
                value.splice(index, 1);
            }
            _this.setState({ value: value });
            _this.props.onChange(value);
        }, _this.render = function () {
            var prefix = _this.props.prefix;
            var value = _this.state.value;
            return _react2.default.createElement(
                'div',
                { className: prefix + '-check-list' + _this.props.className },
                _react2.default.createElement(
                    'div',
                    { className: prefix + '-check-list-name' },
                    _this.props.name
                ),
                _react2.default.createElement(
                    'ul',
                    { className: prefix + '-check-list-option-list' },
                    _this.props.data.map(function (item) {
                        var cls = value.indexOf(item) !== -1 ? 'active' : '';
                        return _react2.default.createElement(
                            'li',
                            { key: item,
                                className: prefix + '-check-list-option ' + cls,
                                onClick: function onClick() {
                                    _this.onOptionClick(item);
                                } },
                            _react2.default.createElement(
                                'span',
                                { className: prefix + '-check-list-square' },
                                cls === 'active' && _react2.default.createElement('span', { className: prefix + '-check-list-square-inner' })
                            ),
                            _react2.default.createElement(
                                'span',
                                null,
                                item
                            )
                        );
                    })
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return CheckList;
}(_react2.default.Component);

CheckList.defaultProps = {
    value: [],
    prefix: 'zui',
    name: '请选择',
    className: '',
    max: Infinity,
    onChange: function onChange() {}
};
exports.default = CheckList;