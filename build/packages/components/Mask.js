'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mask = function (_React$Component) {
    (0, _inherits3.default)(Mask, _React$Component);

    function Mask() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Mask);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Mask.__proto__ || (0, _getPrototypeOf2.default)(Mask)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var _this$props = _this.props,
                transparent = _this$props.transparent,
                others = (0, _objectWithoutProperties3.default)(_this$props, ['transparent']);

            var className = (0, _classnames2.default)({
                'weui_mask': !transparent,
                'weui_mask_transparent': transparent
            });

            return _react2.default.createElement('div', (0, _extends3.default)({ className: className }, others));
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Mask;
}(_react2.default.Component);

Mask.propTypes = {
    transparent: _react2.default.PropTypes.bool
};
Mask.defaultProps = {
    transparent: false
};
exports.default = Mask;
module.exports = exports['default'];