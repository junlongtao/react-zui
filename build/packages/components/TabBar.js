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

require('./less/tab-bar.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabBarItem = function (_React$Component) {
    (0, _inherits3.default)(TabBarItem, _React$Component);

    function TabBarItem() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, TabBarItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TabBarItem.__proto__ || (0, _getPrototypeOf2.default)(TabBarItem)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var prefix = _this.props.prefix;
            var active = _this.props.active ? 'active' : '';
            return _react2.default.createElement(
                'div',
                { className: prefix + '-item ' + active, onClick: _this.props.onClick },
                _this.props.children
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return TabBarItem;
}(_react2.default.Component);

TabBarItem.defaultProps = {
    active: false,
    prefix: 'zui-tab-bar',
    onClick: function onClick() {}
};

var TabBar = function (_React$Component2) {
    (0, _inherits3.default)(TabBar, _React$Component2);

    function TabBar() {
        var _ref2;

        var _temp2, _this2, _ret2;

        (0, _classCallCheck3.default)(this, TabBar);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref2 = TabBar.__proto__ || (0, _getPrototypeOf2.default)(TabBar)).call.apply(_ref2, [this].concat(args))), _this2), _this2.render = function () {
            var prefix = _this2.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + '-tab-bar ' + _this2.props.className, style: _this2.props.style },
                _this2.props.children.map(function (item, key) {
                    return _react2.default.createElement(
                        TabBarItem,
                        { key: key, active: item.props.active, onClick: function onClick() {
                                _this2.props.onChange(key);
                            } },
                        item.props.children
                    );
                })
            );
        }, _temp2), (0, _possibleConstructorReturn3.default)(_this2, _ret2);
    }

    return TabBar;
}(_react2.default.Component);

TabBar.defaultProps = {
    prefix: 'zui',
    className: '',
    onChange: function onChange() {}
};


TabBar.Item = TabBarItem;
exports.default = TabBar;