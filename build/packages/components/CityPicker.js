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

require('./less/city-picker.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Picker = require('./Picker');

var _Picker2 = _interopRequireDefault(_Picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Letters = ['★', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'];

var CityPicker = function (_React$Component) {
    (0, _inherits3.default)(CityPicker, _React$Component);

    function CityPicker() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CityPicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CityPicker.__proto__ || (0, _getPrototypeOf2.default)(CityPicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            letterListMarginLeft: 0
        }, _this.componentDidMount = function () {
            var prefix = _this.props.prefix;
            _this.setState({
                letterListMarginLeft: document.getElementById(prefix + '-city-picker-city-list').scrollWidth / 2 - 40 + 'px'
            });
        }, _this.render = function () {
            var scrollTop = 0;
            var scrollMap = {};
            var status = _this.props.status;
            var prefix = _this.props.prefix;
            return _react2.default.createElement(
                _Picker2.default,
                { className: prefix + '-city-picker', status: status },
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-city-picker-city-list", id: prefix + '-city-picker-city-list' },
                    CityData.map(function (item, key) {
                        scrollMap[item.initial] = scrollTop;
                        scrollTop = scrollTop + 40;
                        return _react2.default.createElement(
                            'div',
                            { key: key, className: prefix + "-city-picker-city-set" },
                            _react2.default.createElement(
                                'div',
                                { className: prefix + "-city-picker-city-letter" },
                                item.initial === '★' ? '★ 热门城市' : item.initial
                            ),
                            item.list.map(function (item, key) {
                                scrollTop = scrollTop + 40;
                                return _react2.default.createElement(
                                    'div',
                                    { key: key, className: prefix + "-city-picker-city-item", onClick: function onClick() {
                                            _this.props.onChange(item.name);
                                        } },
                                    item.name
                                );
                            })
                        );
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + '-city-picker-letter-list', style: { marginLeft: _this.state.letterListMarginLeft } },
                    Letters.map(function (item, key) {
                        return _react2.default.createElement(
                            'div',
                            { key: key, className: prefix + '-city-picker-letter-item', onClick: function onClick() {
                                    document.getElementById(prefix + '-city-picker-city-list').scrollTop = scrollMap[item];
                                } },
                            item
                        );
                    })
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return CityPicker;
}(_react2.default.Component);

CityPicker.defaultProps = {
    prefix: 'zui'
};
exports.default = CityPicker;