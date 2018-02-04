/**
 * 头像组件
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

require('./less/avatar.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _avatarMale = require('./img/avatar-male.svg');

var _avatarMale2 = _interopRequireDefault(_avatarMale);

var _avatarFemale = require('./img/avatar-female.svg');

var _avatarFemale2 = _interopRequireDefault(_avatarFemale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = function (_React$Component) {
    (0, _inherits3.default)(Avatar, _React$Component);

    function Avatar() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Avatar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Avatar.__proto__ || (0, _getPrototypeOf2.default)(Avatar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            src: ''
        }, _this.renderSrc = function () {
            if (_this.state.src) {
                return _this.state.src;
            }

            return _this.props.sex === 'male' ? _avatarMale2.default : _avatarFemale2.default;
        }, _this.render = function () {
            var prefix = _this.props.prefix;
            var cls = prefix + '-avatar ' + _this.props.className + ' ' + _this.props.sex;
            return _react2.default.createElement('img', { className: cls,
                src: _this.renderSrc(),
                style: _this.props.style,
                width: _this.props.width,
                height: _this.props.width || _this.props.height,
                onClick: _this.props.onClick });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Avatar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.renderExamSrc(this.props.src);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.renderExamSrc(nextProps.src);
        }
    }, {
        key: 'renderExamSrc',
        value: function renderExamSrc(src) {
            var _this2 = this;

            var img = document.createElement('img');
            img.onload = function () {
                _this2.setState({ src: src });
                document.body.removeChild(img);
            };
            img.onerror = function () {
                document.body.removeChild(img);
            };
            img.src = src;
            img.style = 'opacity: 0;';
            document.body.appendChild(img);
        }
    }]);
    return Avatar;
}(_react2.default.Component);

Avatar.defaultProps = {
    src: '',
    style: {},
    sex: 'male',
    prefix: 'zui',
    width: '70px',
    className: '',
    onClick: function onClick() {}
};
exports.default = Avatar;