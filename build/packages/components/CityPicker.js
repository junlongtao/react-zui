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

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            cityData: [],
            letterListMarginLeft: 0
        }, _this.componentWillReceiveProps = function (nextProps) {
            var prefixCls = _this.props.prefixCls;
            _this.setState({
                cityData: CityData.slice(0, 2),
                letterListMarginLeft: document.getElementById(prefixCls + '-city-picker').scrollWidth / 2 - 40 + 'px'
            });
            if (nextProps.status === 'open') {
                window.setTimeout(function () {
                    _this.setState({
                        cityData: CityData
                    });
                }, 500);
            }
            document.getElementById(prefixCls + '-city-picker').scrollTop = 0;
        }, _this.render = function () {
            var scrollTop = 0;
            var scrollMap = {};
            var status = _this.props.status;
            var prefixCls = _this.props.prefixCls;
            var letters = ['★', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'];
            return _react2.default.createElement(
                'div',
                { id: prefixCls + '-city-picker', className: prefixCls + '-city-picker ' + status },
                _react2.default.createElement(
                    'div',
                    { className: prefixCls + "-city-picker-name" },
                    _react2.default.createElement(_Icon2.default, { type: 'back', onClick: _this.props.onBackClick }),
                    _this.props.name
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefixCls + "-city-picker-list", id: prefixCls + '-city-picker-list' },
                    _this.state.cityData.map(function (item, key) {
                        scrollMap[item.initial] = scrollTop;
                        scrollTop = scrollTop + 40;
                        return _react2.default.createElement(
                            'div',
                            { key: key, className: prefixCls + "-city-picker-set" },
                            _react2.default.createElement(
                                'div',
                                { className: prefixCls + "-city-picker-first-word" },
                                item.initial === '★' ? '★ 热门城市' : item.initial
                            ),
                            item.list.map(function (item, key) {
                                scrollTop = scrollTop + 40;
                                return _react2.default.createElement(
                                    'div',
                                    { key: key, className: prefixCls + "-city-picker-item", onClick: function onClick() {
                                            _this.props.onChange(item.name);
                                            _this.props.onBackClick();
                                        } },
                                    item.name
                                );
                            })
                        );
                    })
                ),
                status === 'open' ? _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-city-picker-letter-list',
                        style: { marginLeft: _this.state.letterListMarginLeft } },
                    letters.map(function (item, key) {
                        return _react2.default.createElement(
                            'div',
                            { key: key, className: prefixCls + '-city-picker-letter-item', onClick: function onClick() {
                                    document.getElementById(prefixCls + '-city-picker-list').scrollTop = scrollMap[item];
                                } },
                            item
                        );
                    })
                ) : null
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return CityPicker;
}(_react2.default.Component);

CityPicker.defaultProps = {
    prefixCls: 'weui',
    status: ''
};
exports.default = CityPicker;
module.exports = exports['default'];