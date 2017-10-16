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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Mask = require('./Mask');

var _Mask2 = _interopRequireDefault(_Mask);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by jf on 15/10/27.
 */

var Toast = function (_React$Component) {
    (0, _inherits3.default)(Toast, _React$Component);

    function Toast() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Toast);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Toast.__proto__ || (0, _getPrototypeOf2.default)(Toast)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var _this$props = _this.props,
                icon = _this$props.icon,
                show = _this$props.show,
                children = _this$props.children;


            return _react2.default.createElement(
                'div',
                { className: icon === 'loading' ? 'weui_loading_toast' : '', style: { display: show ? 'block' : 'none' } },
                _react2.default.createElement(_Mask2.default, { transparent: true }),
                _react2.default.createElement(
                    'div',
                    { className: 'weui_toast' },
                    _react2.default.createElement(_Icon2.default, { value: icon }),
                    _react2.default.createElement(
                        'p',
                        { className: 'weui_toast_content' },
                        children
                    )
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Toast;
}(_react2.default.Component);

Toast.propTypes = {
    icon: _react2.default.PropTypes.string,
    show: _react2.default.PropTypes.bool
};
Toast.defaultProps = {
    icon: 'toast',
    show: false
};
exports.default = Toast;
module.exports = exports['default'];