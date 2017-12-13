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

require('./less/tabs.less');

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
            var prefix = _this.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + '-tab-pane' },
                _this.props.children
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return TabPane;
}(_react2.default.Component);

TabPane.defaultProps = {
    prefix: 'zui-tabs'
};

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
            activeIndex: ''
        }, _this2.componentDidMount = function () {
            _this2.setState({ activeIndex: parseInt(_this2.props.activeIndex) });
        }, _this2.componentWillReceiveProps = function (nextProps) {
            _this2.setState({ activeIndex: parseInt(nextProps.activeIndex) });
        }, _this2.render = function () {
            var prefix = _this2.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + '-tabs ' + _this2.props.className },
                _react2.default.createElement(
                    'ul',
                    { className: prefix + '-tabs-nav' },
                    _this2.props.children.map(function (item, key) {
                        var activeCls = key === _this2.state.activeIndex ? 'active' : '';
                        return _react2.default.createElement(
                            'li',
                            { key: key, className: prefix + '-tabs-nav-item ' + activeCls, onClick: function onClick() {
                                    key = key === _this2.state.activeIndex ? '' : key;
                                    _this2.setState({ activeIndex: key });
                                    _this2.props.onChange(key);
                                } },
                            item.props.name
                        );
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + '-tabs-content' },
                    _this2.props.children.map(function (item, key) {
                        return key === _this2.state.activeIndex ? item : null;
                    })
                )
            );
        }, _temp2), (0, _possibleConstructorReturn3.default)(_this2, _ret2);
    }

    return Tabs;
}(_react2.default.Component);

Tabs.defaultProps = {
    prefix: 'zui',
    className: '',
    activeIndex: '',
    onChange: function onChange() {}
};

Tabs.TabPane = TabPane;
exports.default = Tabs;