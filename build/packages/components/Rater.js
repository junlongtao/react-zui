/**
 * 评分组件
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

require('./less/rater.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rater = function (_React$Component) {
    (0, _inherits3.default)(Rater, _React$Component);

    function Rater() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Rater);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Rater.__proto__ || (0, _getPrototypeOf2.default)(Rater)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (value) {
            if (_this.props.static) {
                return false;
            }
            _this.props.onChange(value);
        }, _this.renderStars = function () {
            var stars = [];

            var _loop = function _loop(i) {
                var is_active = i < _this.props.value ? true : false;
                var cls = _this.props.prefix + "-rater-star " + (i % 2 == 0 ? 'left' : 'right') + ' ' + (is_active ? 'active' : '');
                stars.push(_react2.default.createElement(
                    'div',
                    { key: i, className: cls, onClick: function onClick() {
                            _this.onChange(i + 1);
                        }, onMouseOver: function onMouseOver() {
                            _this.onChange(i + 1);
                        } },
                    _react2.default.createElement(_Icon2.default, { type: 'star' })
                ));
            };

            for (var i = 1; i < 10; i++) {
                _loop(i);
            }
            return stars;
        }, _this.onFirstClick = function () {
            if (_this.props.static) {
                return false;
            }
            if (_this.props.value > 1) {
                _this.props.onChange(1);
            } else if (_this.props.value == 1) {
                _this.props.onChange(0);
            } else {
                _this.props.onChange(1);
            }
        }, _this.render = function () {
            var prefix = _this.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + "-rater clear" },
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-rater-star left " + (_this.props.value > 0 ? 'active' : ''),
                        onClick: _this.onFirstClick,
                        onMouseEnter: function onMouseEnter() {
                            _this.onChange(1);
                        },
                        onMouseLeave: function onMouseLeave() {
                            _this.onChange(0);
                        }
                    },
                    _react2.default.createElement(_Icon2.default, { type: 'star' })
                ),
                _this.renderStars(),
                _react2.default.createElement(
                    'span',
                    null,
                    _this.props.value || '0',
                    '\u5206'
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Rater;
}(_react2.default.Component);

Rater.defaultProps = {
    max: 5,
    value: 0,
    static: false,
    prefix: 'zui',
    onChange: function onChange() {}
};
exports.default = Rater;