/**
 * Tabs组件
 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabPane = function (_React$Component) {
    (0, _inherits3.default)(TabPane, _React$Component);

    function TabPane() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, TabPane);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TabPane.__proto__ || (0, _getPrototypeOf2.default)(TabPane)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: "tab_pane " + _this.props.className },
                _this.props.children
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return TabPane;
}(_react2.default.Component);

var Tabs = function (_React$Component2) {
    (0, _inherits3.default)(Tabs, _React$Component2);

    function Tabs() {
        var _ref2;

        var _temp2, _this2, _ret2;

        (0, _classCallCheck3.default)(this, Tabs);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {
            active: ''
        }, _this2.componentWillReceiveProps = function (nextProps) {
            if (!_this2.state.active) {
                _this2.setState({
                    active: nextProps.children[0].props.tab
                });
            }
        }, _this2.calActiveLineLeft = function () {
            if (_this2.state.active === '') {
                return 0;
            }
            var children = _this2.props.children;
            var distance = 1 / children.length * 100;
            var left = 0;
            for (var i = 0; i < children.length; i++) {
                if (children[i].props.tab === _this2.state.active) {
                    return left + '%';
                }
                left += distance;
            }
            return left + '%';
        }, _this2.calActiveLineWidth = function () {
            var children = _this2.props.children;
            var distance = 1 / children.length * 100;
            return distance + '%';
        }, _this2.render = function () {
            return _react2.default.createElement(
                'div',
                { className: 'weui_tabs' },
                _react2.default.createElement(
                    'ul',
                    { className: 'tabs_nav flex-h flex-hc' },
                    _this2.props.children.map(function (item, key) {
                        var cls = "flex1 cursor " + (item.props.tab === _this2.state.active ? 'active' : '');
                        return _react2.default.createElement(
                            'li',
                            { className: cls, key: key, onClick: function onClick() {
                                    _this2.setState({ active: item.props.tab });
                                    _this2.props.onChange && _this2.props.onChange(item.props.tab);
                                } },
                            item.props.tab
                        );
                    })
                ),
                _react2.default.createElement('div', { className: 'active_line', style: {
                        left: _this2.calActiveLineLeft(),
                        width: _this2.calActiveLineWidth()
                    } }),
                _this2.props.children.map(function (item, key) {
                    return item.props.tab === _this2.state.active ? item : null;
                })
            );
        }, _temp2), (0, _possibleConstructorReturn3.default)(_this2, _ret2);
    }

    return Tabs;
}(_react2.default.Component);

Tabs.TabPane = TabPane;
exports.default = Tabs;
module.exports = exports['default'];