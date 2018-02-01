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

require('./less/message.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Loading = require('./Loading');

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function (_React$Component) {
    (0, _inherits3.default)(Message, _React$Component);

    function Message() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Message);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Message.__proto__ || (0, _getPrototypeOf2.default)(Message)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var prefix = _this.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + '-message' },
                _this.props.children
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Message;
}(_react2.default.Component);

Message.defaultProps = {
    prefix: 'zui'
};


Message.info = function (text, time, callback) {
    clearTimeout(window.messageTimeout);

    var message = document.getElementById('message-div');
    if (!message) {
        message = document.createElement('div');
        message.id = 'message-div';
        document.body.appendChild(message);
    }
    _reactDom2.default.render(_react2.default.createElement(
        Message,
        null,
        text
    ), message);
    window.messageTimeout = setTimeout(function () {
        var message = document.getElementById('message-div');
        message && document.body.removeChild(message);
        if (callback) {
            callback.call();
        }
    }, (time || 1.5) * 1000);
};

Message.loading = function () {
    var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    if (!visible) {
        var _message = document.getElementById('message-div');
        _message && document.body.removeChild(_message);
        return false;
    }

    clearTimeout(window.messageTimeout);

    var message = document.getElementById('message-div');
    if (!message) {
        message = document.createElement('div');
        message.id = 'message-div';
        document.body.appendChild(message);
    }
    _reactDom2.default.render(_react2.default.createElement(_Loading2.default, null), message);
};

exports.default = Message;