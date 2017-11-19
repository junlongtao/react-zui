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

require('./less/date-picker.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YearData = [];
for (var i = new Date().getFullYear(); i > 1970; i--) {
    YearData.push(i);
}

var MonthData = [];
for (var _i = 1; _i <= 12; _i++) {
    MonthData.push(_i < 10 ? '0' + _i : _i);
}

var DatePicker = function (_React$Component) {
    (0, _inherits3.default)(DatePicker, _React$Component);

    function DatePicker() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, DatePicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DatePicker.__proto__ || (0, _getPrototypeOf2.default)(DatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            year: '',
            days: []
        }, _this.componentDidMount = function () {
            var year = new Date().getFullYear();
            _this.setState({
                year: year,
                days: _this.getMonthDays(year)
            });
        }, _this.componentWillReceiveProps = function (nextProps) {
            var value = nextProps.value;
            value && _this.setState({
                year: value.split('-')[0]
            });
        }, _this.getMonthDays = function (year) {
            var days = [];
            for (var j = 1; j <= 12; j++) {
                var monthDayCount = (0, _util.getMonthDayCount)(year + '-' + j);
                for (var k = 1; k < monthDayCount; k++) {
                    days.push(j + '-' + k);
                }
            }
            return days;
        }, _this.renderMonthDays = function (month) {
            var days = [];
            var max = (0, _util.getMonthDayCount)(_this.state.year + '-' + month);
            for (var _i2 = 1; _i2 <= max; _i2++) {
                days.push(_i2);
            }

            return days.map(function (item, key) {
                item = item < 10 ? '0' + item : item;
                var date = new Date(_this.state.year + '-' + month + '-' + item);
                var valueDate = new Date(_this.props.value);
                var active = date.getTime() == valueDate.getTime() ? 'active' : '';
                return _react2.default.createElement(
                    'li',
                    { className: _this.props.prefix + '-date-picker-day-item ' + active, key: key, onClick: function onClick() {
                            _this.props.onChange(_this.state.year + '-' + month + '-' + item);
                        } },
                    item
                );
            });
        }, _this.render = function () {
            var prefix = _this.props.prefix;
            var status = _this.props.visible ? 'open' : '';
            return _react2.default.createElement(
                'div',
                { className: prefix + '-date-picker ' + status },
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-date-picker-name" },
                    _react2.default.createElement(_Icon2.default, { type: 'back', onClick: _this.props.onBackClick }),
                    _this.props.name
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + '-date-picker-content' },
                    _react2.default.createElement(
                        'ul',
                        { className: prefix + '-date-picker-year-list' },
                        YearData.map(function (item, key) {
                            var cls = item == _this.state.year ? 'active' : '';
                            return _react2.default.createElement(
                                'li',
                                { className: prefix + '-date-picker-year-item ' + cls, key: key, onClick: function onClick() {
                                        _this.setState({
                                            year: item,
                                            days: _this.getMonthDays(item)
                                        });
                                    } },
                                item
                            );
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: prefix + '-date-picker-month-list' },
                        MonthData.map(function (item, key) {
                            return _react2.default.createElement(
                                'div',
                                { className: prefix + '-date-picker-month-item', key: key },
                                _react2.default.createElement(
                                    'div',
                                    { className: prefix + '-date-picker-month-name' },
                                    item,
                                    '\u6708'
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: prefix + '-date-picker-day-list' },
                                    _this.renderMonthDays(item)
                                )
                            );
                        })
                    )
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return DatePicker;
}(_react2.default.Component);

DatePicker.defaultProps = {
    status: '',
    prefix: 'zui',
    name: '选择日期'
};
exports.default = DatePicker;