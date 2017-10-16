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

var ListLoading = function (_React$Component) {
    (0, _inherits3.default)(ListLoading, _React$Component);

    function ListLoading() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ListLoading);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ListLoading.__proto__ || (0, _getPrototypeOf2.default)(ListLoading)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var prefixCls = _this.props.prefixCls;
            return _react2.default.createElement(
                'div',
                { className: prefixCls + '-list-loading', onClick: _this.props.onClick },
                _this.props.hasMore ? _react2.default.createElement(_Icon2.default, { type: 'loading' }) : _react2.default.createElement(
                    'div',
                    { className: 'no_more' },
                    '\u6CA1\u6709\u66F4\u591A\u4E86'
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return ListLoading;
}(_react2.default.Component);

ListLoading.defaultProps = {
    visible: true,
    hasMore: true,
    prefixCls: 'weui'
};
exports.default = ListLoading;
module.exports = exports['default'];