/**
 * page组件
 */
"use strict";

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

require('./less/page.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _ReturnTop = require('./ReturnTop');

var _ReturnTop2 = _interopRequireDefault(_ReturnTop);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function (_React$Component) {
    (0, _inherits3.default)(Page, _React$Component);

    function Page() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Page);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillMount = function () {
            (0, _util.setDocumentTitle)(_this.props.title);
        }, _this.componentDidMount = function () {
            window.scrollTo(0, 0);
        }, _this.render = function () {
            var prefix = _this.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + '-page ' + _this.props.className },
                _react2.default.createElement(
                    _Header2.default,
                    { backVisible: _this.props.backVisible },
                    _this.props.title
                ),
                _this.props.children,
                _this.props.returnTopVisible ? _react2.default.createElement(_ReturnTop2.default, null) : null
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Page;
}(_react2.default.Component);

Page.defaultProps = {
    prefix: 'zui',
    className: '',
    returnTopVisible: false
};
exports.default = Page;