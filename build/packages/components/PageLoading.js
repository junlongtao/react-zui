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

require('./less/page-loading.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageLoading = function (_React$Component) {
    (0, _inherits3.default)(PageLoading, _React$Component);

    function PageLoading() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, PageLoading);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PageLoading.__proto__ || (0, _getPrototypeOf2.default)(PageLoading)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var prefix = _this.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + '-page-loading' },
                _react2.default.createElement(
                    'div',
                    { className: prefix + '-page-loading-content' },
                    _react2.default.createElement('div', { className: 'mask' }),
                    _react2.default.createElement(
                        'h4',
                        { className: 'title' },
                        _this.props.title
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'slogan' },
                        _this.props.slogan
                    )
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return PageLoading;
}(_react2.default.Component);

PageLoading.defaultProps = {
    prefix: 'zui',
    title: 'ZHICHOU',
    slogan: '互联网高级人才一站式直租平台'
};
exports.default = PageLoading;