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

require('./less/search-bar.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchBar = function (_React$Component) {
    (0, _inherits3.default)(SearchBar, _React$Component);

    function SearchBar() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, SearchBar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SearchBar.__proto__ || (0, _getPrototypeOf2.default)(SearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var prefix = _this.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + '-search-bar ' + _this.props.className },
                _react2.default.createElement(_Icon2.default, { type: 'sousuo', className: prefix + '-search-bar-icon' }),
                _react2.default.createElement('input', {
                    type: 'text',
                    value: _this.props.value,
                    className: prefix + '-search-bar-input',
                    placeholder: _this.props.placeholder,
                    onClick: _this.props.onClick,
                    onFocus: _this.props.onFocus,
                    onChange: function onChange(e) {
                        _this.props.onChange(e.target.value);
                    }
                })
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return SearchBar;
}(_react2.default.Component);

SearchBar.defaultProps = {
    prefix: 'zui',
    className: '',
    onClick: function onClick() {},
    onFocus: function onFocus() {},
    onChange: function onChange() {},
    placeholder: '请输入'
};
exports.default = SearchBar;