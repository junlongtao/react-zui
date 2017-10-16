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

//import networkimg from './img/network.jpg'

var NetworkStatusCheck = function (_React$Component) {
    (0, _inherits3.default)(NetworkStatusCheck, _React$Component);

    function NetworkStatusCheck() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, NetworkStatusCheck);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NetworkStatusCheck.__proto__ || (0, _getPrototypeOf2.default)(NetworkStatusCheck)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            online: true
        }, _this.componentDidMount = function () {
            //监听网络状态
            window.addEventListener("online", function () {
                _this.setState({
                    online: true
                });
            }, false);
            window.addEventListener("offline", function () {
                _this.setState({
                    online: false
                });
            }, false);
        }, _this.render = function () {
            return !_this.state.online ? _react2.default.createElement(
                'div',
                { className: 'network_status_check' },
                _react2.default.createElement(
                    'div',
                    { className: 'network_error' },
                    _react2.default.createElement('img', { src: networkimg }),
                    _react2.default.createElement(
                        'div',
                        { className: 'tip_text' },
                        '\u7F51\u7EDC\u4E0D\u53EF\u7528'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'tip_text small' },
                        '\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5'
                    ),
                    _react2.default.createElement(
                        Button,
                        { onClick: function onClick() {
                                window.location.reload();
                            } },
                        '\u70B9\u51FB\u91CD\u8BD5'
                    )
                )
            ) : null;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return NetworkStatusCheck;
}(_react2.default.Component);

exports.default = NetworkStatusCheck;
module.exports = exports['default'];