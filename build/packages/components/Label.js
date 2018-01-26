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

require('./less/label.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = function (_React$Component) {
    (0, _inherits3.default)(Label, _React$Component);

    function Label() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Label);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Label.__proto__ || (0, _getPrototypeOf2.default)(Label)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var color = _this.props.color;
            var height = parseInt(_this.props.height) / 2;
            var prefix = _this.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + '-label ' + _this.props.className, style: {
                        marginLeft: _this.props.height
                    }, onClick: _this.props.onClick },
                _react2.default.createElement(
                    'div',
                    { className: prefix + '-label-content', style: {
                            background: color,
                            height: _this.props.height
                        } },
                    _this.props.children
                ),
                _react2.default.createElement('div', { className: prefix + '-label-triangle', style: {
                        left: '-' + height + 'px',
                        border: height + "px solid transparent",
                        borderColor: color + ' transparent',
                        borderStyle: 'solid none solid solid'
                    } })
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Label;
}(_react2.default.Component);

Label.defaultProps = {
    prefix: 'zui',
    className: '',
    height: '20px',
    color: '#ffe133',
    onClick: function onClick() {}
};
exports.default = Label;