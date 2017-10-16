/**
 * 悬浮咨询按钮
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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Util = require('../Util');

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConsultPatch = function (_React$Component) {
    (0, _inherits3.default)(ConsultPatch, _React$Component);

    function ConsultPatch() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ConsultPatch);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ConsultPatch.__proto__ || (0, _getPrototypeOf2.default)(ConsultPatch)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
            // const isMobile = Util.os.android||Util.os.iPhone
            // if(!isMobile){
            //     var tenantId='76965df13fc84a05a38d84fb7886ebd1';
            //     document.write(unescape("%3Cscript id='aikfWebMainJs' src='"+((window.location.protocol=="file:")?"http:":window.location.protocol)+"//www.aikf.com/ask/resources/app/ask/webMain.js?_="+Math.random()+"' type='text/javascript'%3E%3C/script%3E"))
            // }
        }, _this.render = function () {
            var isMobile = _Util2.default.os.android || _Util2.default.os.iPhone;
            return isMobile ? _react2.default.createElement(
                'div',
                { className: 'weui_consult_patch', onClick: function onClick() {
                        var url = _Util2.default.os.android || _Util2.default.os.iPhone ? 'http://www.aikf.com/ask/h5/bjzckjyxgs.htm' : 'http://www.aikf.com/ask/bjzckjyxgs.htm';
                        _Util2.default.assign(url);
                    } },
                _react2.default.createElement(_Icon2.default, { type: 'consult' })
            ) : null;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return ConsultPatch;
}(_react2.default.Component);

exports.default = ConsultPatch;
module.exports = exports['default'];