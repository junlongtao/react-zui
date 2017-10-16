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

var TopNotice = function (_React$Component) {
    (0, _inherits3.default)(TopNotice, _React$Component);

    function TopNotice() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, TopNotice);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TopNotice.__proto__ || (0, _getPrototypeOf2.default)(TopNotice)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            visible: true
        }, _this.onCloseClick = function () {
            _this.setState({
                visible: false
            });
        }, _this.render = function () {
            var closeIcon = _this.props.mode === 'closable' ? _react2.default.createElement(_Icon2.default, { type: 'guanbi', className: 'cursor', onClick: _this.onCloseClick }) : null;
            return _this.state.visible ? _react2.default.createElement(
                'div',
                { className: 'weui_top_notice yellow_color' },
                _react2.default.createElement(_Icon2.default, { type: 'tishi' }),
                _this.props.children,
                closeIcon
            ) : null;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return TopNotice;
}(_react2.default.Component); /**
                               *顶部提示
                               */


TopNotice.defaultProps = {
    mode: 'closable'
};
exports.default = TopNotice;
module.exports = exports['default'];