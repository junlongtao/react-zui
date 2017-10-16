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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Mask = require('./Mask');

var _Mask2 = _interopRequireDefault(_Mask);

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

var _zh_cn = require('date-fns/locale/zh_cn');

var _zh_cn2 = _interopRequireDefault(_zh_cn);

var _reactInfiniteCalendar = require('react-infinite-calendar');

var _reactInfiniteCalendar2 = _interopRequireDefault(_reactInfiniteCalendar);

require('react-infinite-calendar/styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfiniteDatePicker = function (_React$Component) {
    (0, _inherits3.default)(InfiniteDatePicker, _React$Component);

    function InfiniteDatePicker() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, InfiniteDatePicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = InfiniteDatePicker.__proto__ || (0, _getPrototypeOf2.default)(InfiniteDatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var display = _this.props.visible ? 'block' : 'none';
            var locale = {
                locale: _zh_cn2.default,
                todayLabel: {
                    long: "今天",
                    short: "今天"
                },
                weekdays: ['日', '一', '二', '三', '四', '五', '六'],
                weekStartsOn: 1
            };
            var theme = {
                accentColor: '#6ac2b6',
                floatingNav: {
                    background: '#3aa593',
                    chevron: '#FFA726',
                    color: '#FFF'
                },
                headerColor: '#6ac2b6',
                selectionColor: '#6ac2b6',
                textColor: {
                    active: '#FFF',
                    default: '#333'
                },
                todayColor: '#6ac2b6',
                weekdayColor: '#6ac2b6'
            };
            var prefixCls = _this.props.prefixCls;
            return _this.props.visible ? _react2.default.createElement(
                'div',
                { className: prefixCls + "-infinite-date-picker" },
                _react2.default.createElement(_Mask2.default, { onClick: _this.props.onClose }),
                _react2.default.createElement(_reactInfiniteCalendar2.default, {
                    width: '95%',
                    height: 400,
                    theme: theme,
                    locale: locale,
                    minDate: _this.props.minDate,
                    maxDate: _this.props.maxDate,
                    selected: _this.props.selected,
                    onSelect: function onSelect(val) {
                        _this.props.onChange((0, _format2.default)(val, 'YYYY-MM-DD'));
                    } })
            ) : null;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return InfiniteDatePicker;
}(_react2.default.Component);

InfiniteDatePicker.defaultProps = {
    prefixCls: 'weui',
    visible: true,
    onClose: function onClose() {},
    onChange: function onChange() {}
};
exports.default = InfiniteDatePicker;
module.exports = exports['default'];