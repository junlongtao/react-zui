/**
 * 返回顶部组件
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

require('./less/return-top.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReturnTop = function (_React$Component) {
    (0, _inherits3.default)(ReturnTop, _React$Component);

    function ReturnTop() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ReturnTop);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ReturnTop.__proto__ || (0, _getPrototypeOf2.default)(ReturnTop)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            status: ''
        }, _this.componentDidMount = function () {
            _this.returnTopMounted = true;
            (0, _util.onWindowScroll)(function () {
                _this.returnTopMounted && _this.setState({ status: '' });
            }, function () {
                _this.returnTopMounted && _this.setState({ status: 'ready' });
            });
        }, _this.componentWillUnmount = function () {
            _this.returnTopMounted = false;
        }, _this.onClick = function () {
            var step = (document.documentElement.scrollTop || document.body.scrollTop) / 10;
            window.returnTopInterval = setInterval(function () {
                var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
                window.scrollTo(0, currentPosition - step);
                if (currentPosition - step <= 0) {
                    clearInterval(window.returnTopInterval);
                }
            }, 10);
            _this.setState({ status: 'fly-out' });
        }, _this.render = function () {
            var prefix = _this.props.prefix;
            var cls = _this.props.className;
            var status = _this.state.status;
            return _react2.default.createElement(
                'div',
                { className: prefix + "-return-top " + cls + ' ' + status, onClick: _this.onClick },
                _react2.default.createElement(_Icon2.default, { type: 'rocket' })
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return ReturnTop;
}(_react2.default.Component);

ReturnTop.defaultProps = {
    prefix: 'zui',
    className: ''
};
exports.default = ReturnTop;