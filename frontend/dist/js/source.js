(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _default = (function (_React$Component) {
    _inherits(_default, _React$Component);

    function _default() {
        _classCallCheck(this, _default);

        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
        key: 'render',
        value: function render() {
            var width = this.props.size || 24;
            var height = this.props.size || 24;
            var color = this.props.color || '#333';

            //<path fill={color} d="M4.93,4.93C3.12,6.74 2,9.24 2,12C2,14.76 3.12,17.26 4.93,19.07L6.34,17.66C4.89,16.22 4,14.22 4,12C4,9.79 4.89,7.78 6.34,6.34L4.93,4.93M19.07,4.93L17.66,6.34C19.11,7.78 20,9.79 20,12C20,14.22 19.11,16.22 17.66,17.66L19.07,19.07C20.88,17.26 22,14.76 22,12C22,9.24 20.88,6.74 19.07,4.93M7.76,7.76C6.67,8.85 6,10.35 6,12C6,13.65 6.67,15.15 7.76,16.24L9.17,14.83C8.45,14.11 8,13.11 8,12C8,10.89 8.45,9.89 9.17,9.17L7.76,7.76M16.24,7.76L14.83,9.17C15.55,9.89 16,10.89 16,12C16,13.11 15.55,14.11 14.83,14.83L16.24,16.24C17.33,15.15 18,13.65 18,12C18,10.35 17.33,8.85 16.24,7.76M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" />
            return _react2['default'].createElement(
                'svg',
                { className: 'svg-icon', style: { width: width + 'px', height: height + 'px' }, viewBox: '0 0 24 24' },
                _react2['default'].createElement('path', { fill: color, d: 'M12,10A2,2 0 0,1 14,12C14,12.5 13.82,12.94 13.53,13.29L16.7,22H14.57L12,14.93L9.43,22H7.3L10.47,13.29C10.18,12.94 10,12.5 10,12A2,2 0 0,1 12,10M12,8A4,4 0 0,0 8,12C8,12.5 8.1,13 8.28,13.46L7.4,15.86C6.53,14.81 6,13.47 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12C18,13.47 17.47,14.81 16.6,15.86L15.72,13.46C15.9,13 16,12.5 16,12A4,4 0 0,0 12,8M12,4A8,8 0 0,0 4,12C4,14.36 5,16.5 6.64,17.94L5.92,19.94C3.54,18.11 2,15.23 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12C22,15.23 20.46,18.11 18.08,19.94L17.36,17.94C19,16.5 20,14.36 20,12A8,8 0 0,0 12,4Z' })
            );
        }
    }]);

    return _default;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _default = (function (_React$Component) {
    _inherits(_default, _React$Component);

    function _default() {
        _classCallCheck(this, _default);

        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
        key: 'render',
        value: function render() {
            var width = this.props.size || 24;
            var height = this.props.size || 24;
            var color = this.props.color || '#333';

            return _react2['default'].createElement(
                'svg',
                { className: 'svg-icon', style: { width: width + 'px', height: height + 'px' }, viewBox: '0 0 24 24' },
                _react2['default'].createElement('path', {
                    fill: color,
                    d: 'M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z'
                })
            );
        }
    }]);

    return _default;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _default = (function (_React$Component) {
    _inherits(_default, _React$Component);

    function _default() {
        _classCallCheck(this, _default);

        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
        key: 'render',
        value: function render() {
            var width = this.props.size || 24;
            var height = this.props.size || 24;
            var color = this.props.color || '#333';

            return _react2['default'].createElement(
                'svg',
                { className: 'svg-icon', style: { width: width + 'px', height: height + 'px' }, viewBox: '0 0 24 24' },
                _react2['default'].createElement('path', {
                    fill: color,
                    d: 'M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                })
            );
        }
    }]);

    return _default;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _default = (function (_React$Component) {
    _inherits(_default, _React$Component);

    function _default() {
        _classCallCheck(this, _default);

        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
        key: 'render',
        value: function render() {
            var width = this.props.size || 24;
            var height = this.props.size || 24;
            var color = this.props.color || '#333';

            return _react2['default'].createElement(
                'svg',
                { className: 'svg-icon', style: { width: width + 'px', height: height + 'px' }, viewBox: '0 0 24 24' },
                _react2['default'].createElement('path', {
                    fill: color,
                    d: 'M17,11H15V9H17M13,11H11V9H13M9,11H7V9H9M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z'
                })
            );
        }
    }]);

    return _default;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _default = (function (_React$Component) {
    _inherits(_default, _React$Component);

    function _default() {
        _classCallCheck(this, _default);

        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
        key: 'render',
        value: function render() {
            var width = this.props.size || 24;
            var height = this.props.size || 24;
            var color = this.props.color || '#333';

            return _react2['default'].createElement(
                'svg',
                { className: 'svg-icon', style: { width: width + 'px', height: height + 'px' }, viewBox: '0 0 24 24' },
                _react2['default'].createElement('path', {
                    fill: color,
                    d: 'M13,12H20V13.5H13M13,9.5H20V11H13M13,14.5H20V16H13M21,4H3A2,2 0 0,0 1,6V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V6A2,2 0 0,0 21,4M21,19H12V6H21'
                })
            );
        }
    }]);

    return _default;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _default = (function (_React$Component) {
    _inherits(_default, _React$Component);

    function _default() {
        _classCallCheck(this, _default);

        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
        key: 'render',
        value: function render() {
            var width = this.props.size || 24;
            var height = this.props.size || 24;
            var color = this.props.color || '#333';

            return _react2['default'].createElement(
                'svg',
                { className: 'svg-icon', style: { width: width + 'px', height: height + 'px' }, viewBox: '0 0 24 24' },
                _react2['default'].createElement('path', { fill: color, d: 'M16,9C18.33,9 23,10.17 23,12.5V15H17V12.5C17,11 16.19,9.89 15.04,9.05L16,9M8,9C10.33,9 15,10.17 15,12.5V15H1V12.5C1,10.17 5.67,9 8,9M8,7A3,3 0 0,1 5,4A3,3 0 0,1 8,1A3,3 0 0,1 11,4A3,3 0 0,1 8,7M16,7A3,3 0 0,1 13,4A3,3 0 0,1 16,1A3,3 0 0,1 19,4A3,3 0 0,1 16,7M9,16.75V19H15V16.75L18.25,20L15,23.25V21H9V23.25L5.75,20L9,16.75Z' })
            );
        }
    }]);

    return _default;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _default = (function (_React$Component) {
    _inherits(_default, _React$Component);

    function _default() {
        _classCallCheck(this, _default);

        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
        key: 'render',
        value: function render() {
            var width = this.props.size || 24;
            var height = this.props.size || 24;
            var color = this.props.color || '#333';

            return _react2['default'].createElement(
                'svg',
                { className: 'svg-icon', style: { width: width + 'px', height: height + 'px' }, viewBox: '0 0 24 24' },
                _react2['default'].createElement('path', {
                    fill: color,
                    d: 'M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z'
                })
            );
        }
    }]);

    return _default;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentsSidebar = require('components/sidebar');

var _componentsSidebar2 = _interopRequireDefault(_componentsSidebar);

var _default = (function (_React$Component) {
    _inherits(_default, _React$Component);

    function _default() {
        _classCallCheck(this, _default);

        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
        key: 'render',
        value: function render() {
            var classNames = 'page ' + this.props.className;

            return _react2['default'].createElement(
                'div',
                { className: classNames },
                _react2['default'].createElement(_componentsSidebar2['default'], null),
                _react2['default'].createElement(
                    'main',
                    { className: 'main' },
                    this.props.children
                )
            );
        }
    }]);

    return _default;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"components/sidebar":10,"react":"react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsPage = require('components/page');

var _componentsPage2 = _interopRequireDefault(_componentsPage);

var _pagesHome = require('pages/home');

var _pagesHome2 = _interopRequireDefault(_pagesHome);

var _pagesConnect = require('pages/connect');

var _pagesConnect2 = _interopRequireDefault(_pagesConnect);

var _pagesPodcast = require('pages/podcast');

var _pagesPodcast2 = _interopRequireDefault(_pagesPodcast);

var _pagesSeason = require('pages/season');

var _pagesSeason2 = _interopRequireDefault(_pagesSeason);

var _pagesExplore = require('pages/explore');

var _pagesExplore2 = _interopRequireDefault(_pagesExplore);

var _pagesPlayer = require('pages/player');

var _pagesPlayer2 = _interopRequireDefault(_pagesPlayer);

var _default = (function (_React$Component) {
    _inherits(_default, _React$Component);

    function _default() {
        _classCallCheck(this, _default);

        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                _reactRouter.Router,
                null,
                _react2['default'].createElement(
                    _reactRouter.Route,
                    { path: '/', component: _componentsPage2['default'] },
                    _react2['default'].createElement(_reactRouter.Route, { path: '/connect', component: _pagesConnect2['default'] }),
                    _react2['default'].createElement(_reactRouter.Route, { path: '/podcast/:id', component: _pagesPodcast2['default'] }),
                    _react2['default'].createElement(_reactRouter.Route, { path: '/podcast/:id/:season', component: _pagesSeason2['default'] }),
                    _react2['default'].createElement(_reactRouter.Route, { path: '/explore', component: _pagesExplore2['default'] }),
                    _react2['default'].createElement(_reactRouter.Route, { path: '/player/:podcastId/:episodeId', component: _pagesPlayer2['default'] }),
                    _react2['default'].createElement(_reactRouter.IndexRoute, { component: _pagesExplore2['default'] })
                )
            );
        }
    }]);

    return _default;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"components/page":8,"pages/connect":15,"pages/explore":16,"pages/home":17,"pages/player":18,"pages/podcast":19,"pages/season":20,"react":"react","react-router":"react-router"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsIconsCast = require('components/icons/cast');

var _componentsIconsCast2 = _interopRequireDefault(_componentsIconsCast);

var _componentsIconsPeople = require('components/icons/people');

var _componentsIconsPeople2 = _interopRequireDefault(_componentsIconsPeople);

var _componentsIconsGear = require('components/icons/gear');

var _componentsIconsGear2 = _interopRequireDefault(_componentsIconsGear);

var _componentsIconsPerson = require('components/icons/person');

var _componentsIconsPerson2 = _interopRequireDefault(_componentsIconsPerson);

var _componentsIconsHeart = require('components/icons/heart');

var _componentsIconsHeart2 = _interopRequireDefault(_componentsIconsHeart);

var _componentsIconsNewspaper = require('components/icons/newspaper');

var _componentsIconsNewspaper2 = _interopRequireDefault(_componentsIconsNewspaper);

var _componentsIconsMessages = require('components/icons/messages');

var _componentsIconsMessages2 = _interopRequireDefault(_componentsIconsMessages);

var partials = {
    li: (function (_React$Component) {
        _inherits(li, _React$Component);

        function li() {
            _classCallCheck(this, li);

            _get(Object.getPrototypeOf(li.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(li, [{
            key: 'render',
            value: function render() {
                return _react2['default'].createElement(
                    'li',
                    { className: 'sidebar-item ' + (this.props.className || '') },
                    _react2['default'].createElement(
                        _reactRouter.Link,
                        { className: 'sidebar-link', to: this.props.url, activeClassName: 'active' },
                        _react2['default'].createElement(this.props.icon, { size: this.props.size })
                    )
                );
            }
        }]);

        return li;
    })(_react2['default'].Component)
};

var _default = (function (_React$Component2) {
    _inherits(_default, _React$Component2);

    function _default() {
        _classCallCheck(this, _default);

        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'ul',
                { className: 'sidebar' },
                _react2['default'].createElement(
                    'li',
                    { className: 'sidebar-item large static' },
                    _react2['default'].createElement('i', { className: 'icon logo large' })
                ),
                _react2['default'].createElement(partials.li, { url: '/explore', icon: _componentsIconsCast2['default'], size: 48 }),
                _react2['default'].createElement(partials.li, { url: '/connect', icon: _componentsIconsPeople2['default'], size: 36 }),
                _react2['default'].createElement(partials.li, { url: '/favorites', icon: _componentsIconsHeart2['default'], size: 36 }),
                _react2['default'].createElement(partials.li, { url: '/feed', icon: _componentsIconsNewspaper2['default'], size: 36 }),
                _react2['default'].createElement(partials.li, { url: '/messages', icon: _componentsIconsMessages2['default'], size: 36 }),
                _react2['default'].createElement(partials.li, { url: '/settings', icon: _componentsIconsGear2['default'], size: 36 }),
                _react2['default'].createElement(partials.li, { url: '/account', icon: _componentsIconsPerson2['default'], size: 48, className: 'large' })
            );
        }
    }]);

    return _default;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"components/icons/cast":1,"components/icons/gear":2,"components/icons/heart":3,"components/icons/messages":4,"components/icons/newspaper":5,"components/icons/people":6,"components/icons/person":7,"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentsRouter = require('components/router');

var _componentsRouter2 = _interopRequireDefault(_componentsRouter);

document.addEventListener('DOMContentLoaded', function () {
    _reactDom2['default'].render(_react2['default'].createElement(_componentsRouter2['default'], null), document.querySelector('#react-app-mount'));
});

},{"components/router":9,"react":"react","react-dom":"react-dom"}],12:[function(require,module,exports){
/**
 * Generates an array of the given size, with the given value in each index.
 *
 * @param {number} size The length of the array.
 * @param {Function|*} value Either a map function that should return the value for the given index, or a static value for every index.
 * @returns {Array}
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.generate = generate;

function generate(size, value) {
  var map = typeof value === 'function' ? value : function () {
    return value;
  };

  return Array.apply(null, { length: size }).map(map);
}

},{}],13:[function(require,module,exports){
/**
 * Returns the given JSX if the condition is true. If not, returns an empty string.
 *
 * @param {boolean} condition Determines what to render.
 * @param {XML|Function} jsx The JSX to render if true.
 * @returns {XML|string}
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.jsxIf = jsxIf;

function jsxIf(condition, jsx) {
  var genJsx = typeof jsx === 'function' ? jsx : function () {
    return jsx;
  };
  return condition ? genJsx() : '';
}

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var episode = {
    id: 5,
    name: 'Exploring Clojure - Part 3',
    author: 'Developer Tea',
    released: 1446904545930,
    sources: ['http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg']
};

var podcast = {
    id: 4,
    logo: '/images/placeholders/dev-tea.png',
    title: 'Developer Tea',
    description: 'Lorem ipsum dolor inquit sit amet, inquibus caedus et puella ad vallarta. Vida in Publicum et Gaium sind voll. Lorem ipsum dolor inquit sit amet, inquibus caedus et puella ad vallarta. Vida in Publicum et Gaium sind voll. Lorem ipsum dolor inquit sit amet, inquibus caedus et puella ad vallarta. Vida in Publicum et Gaium sind voll.',
    episodeCount: 44,
    subscribers: 949,
    genres: ['Crime', 'Drama'],
    released: 1446904545930,
    episodes: []
};

var mockCategories = ['Recently Added', 'Art', 'Business', 'Comedy', 'Health', 'Music', 'Sports', 'Technology', 'Television'];

exports.podcast = podcast;
exports.mockCategories = mockCategories;
exports.mockEpisode = episode;

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _default = (function (_React$Component) {
    _inherits(_default, _React$Component);

    function _default() {
        _classCallCheck(this, _default);

        _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(_default, [{
        key: "render",
        value: function render() {
            return _react2["default"].createElement(
                "aside",
                { className: "aside" },
                "Connect"
            );
        }
    }]);

    return _default;
})(_react2["default"].Component);

exports["default"] = _default;
module.exports = exports["default"];

},{"react":"react"}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsPage = require('components/page');

var _componentsPage2 = _interopRequireDefault(_componentsPage);

var _libJsxHelpers = require('lib/jsx-helpers');

var _libMockData = require('lib/mock-data');

var _libArrays = require('lib/arrays');

var arrays = _interopRequireWildcard(_libArrays);

var _render = {
    categories: function categories(_categories) {
        return _categories.map(function (category) {
            return _react2['default'].createElement(partials.PodcastList, { key: category.name, label: category.name, podcasts: category.podcasts });
        });
    }
};

var partials = {
    PodcastList: (function (_React$Component) {
        _inherits(PodcastList, _React$Component);

        function PodcastList() {
            _classCallCheck(this, PodcastList);

            _get(Object.getPrototypeOf(PodcastList.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(PodcastList, [{
            key: 'render',
            value: function render() {
                return _react2['default'].createElement(
                    'div',
                    { className: 'podcast-list' },
                    _react2['default'].createElement(
                        'h2',
                        { className: 'list-title' },
                        this.props.label
                    ),
                    _react2['default'].createElement(
                        'ul',
                        null,
                        this.props.podcasts.map(this.li)
                    )
                );
            }
        }, {
            key: 'li',
            value: function li(podcast, i) {
                return _react2['default'].createElement(
                    'li',
                    { key: i },
                    _react2['default'].createElement(
                        'a',
                        { href: '#/podcast/' + podcast.id },
                        _react2['default'].createElement('div', { className: 'podcast-background', style: { backgroundImage: 'url(' + podcast.logo + ')' } }),
                        _react2['default'].createElement(
                            'div',
                            { className: 'podcast-title' },
                            podcast.title
                        )
                    )
                );
            }
        }]);

        return PodcastList;
    })(_react2['default'].Component)
};

var _default = (function (_React$Component2) {
    _inherits(_default, _React$Component2);

    function _default() {
        _classCallCheck(this, _default);

        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this);

        this.state = {
            categories: null
        };
    }

    _createClass(_default, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;

            var mockData = _libMockData.mockCategories.map(function (category) {
                return {
                    name: category,
                    podcasts: arrays.generate(6, _libMockData.podcast)
                };
            });

            Promise.resolve(mockData).then(function (categories) {
                return _this.setState({ categories: categories });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2['default'].createElement(
                'div',
                { className: 'explore' },
                (0, _libJsxHelpers.jsxIf)(this.state.categories, function () {
                    return _render.categories(_this2.state.categories);
                })
            );
        }
    }]);

    return _default;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"components/page":8,"lib/arrays":12,"lib/jsx-helpers":13,"lib/mock-data":14,"react":"react","react-router":"react-router"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _default = (function (_React$Component) {
    _inherits(_default, _React$Component);

    function _default() {
        _classCallCheck(this, _default);

        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this);
    }

    _createClass(_default, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'home' },
                !this.state.podcast || _react2['default'].createElement(partials.Overview, { podcast: this.state.podcast }),
                jsxIf(this.state.podcast, _react2['default'].createElement(partials.DetailsView, { podcast: this.state.podcast }))
            );
        }
    }]);

    return _default;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react"}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _libJsxHelpers = require('lib/jsx-helpers');

var _libMockData = require('lib/mock-data');

var _render = {
    source: function source(_source, i) {
        var type = 'audio/' + _source.substring(_source.lastIndexOf('.') + 1);
        return _react2['default'].createElement('source', { key: i, src: _source, type: type });
    }
};

var partials = {
    Page: (function (_React$Component) {
        _inherits(Page, _React$Component);

        function Page() {
            _classCallCheck(this, Page);

            _get(Object.getPrototypeOf(Page.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(Page, [{
            key: 'render',
            value: function render() {
                var episode = this.props.episode,
                    podcast = this.props.podcast;

                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(
                        'h2',
                        null,
                        'Episode: ',
                        episode.name
                    ),
                    _react2['default'].createElement(
                        'h3',
                        null,
                        'From: ',
                        podcast.title
                    ),
                    _react2['default'].createElement(
                        'audio',
                        { controls: 'controls' },
                        episode.sources.map(_render.source)
                    )
                );
            }
        }]);

        return Page;
    })(_react2['default'].Component)
};

var _default = (function (_React$Component2) {
    _inherits(_default, _React$Component2);

    function _default() {
        _classCallCheck(this, _default);

        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this);

        this.state = {
            podcast: null,
            episode: null
        };
    }

    _createClass(_default, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;

            Promise.resolve(_libMockData.podcast).then(function (podcast) {
                _this.setState({ podcast: podcast });
            });

            Promise.resolve(_libMockData.mockEpisode).then(function (episode) {
                _this.setState({ episode: episode });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2['default'].createElement(
                'div',
                { className: 'player' },
                (0, _libJsxHelpers.jsxIf)(this.state.podcast && this.state.episode, function () {
                    return _react2['default'].createElement(partials.Page, { episode: _this2.state.episode, podcast: _this2.state.podcast });
                })
            );
        }
    }]);

    return _default;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"lib/jsx-helpers":13,"lib/mock-data":14,"react":"react"}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _libJsxHelpers = require('lib/jsx-helpers');

var _libMockData = require('lib/mock-data');

var _render = {
    podcastLogo: function podcastLogo(source) {
        return _react2['default'].createElement(
            'div',
            { className: 'podcast-logo' },
            _react2['default'].createElement('img', { src: source })
        );
    },
    stat: function stat(_ref) {
        var label = _ref.label;
        var value = _ref.value;
        return _react2['default'].createElement(
            'div',
            { className: 'stat' },
            _react2['default'].createElement(
                'label',
                { className: 'stat-label' },
                label
            ),
            _react2['default'].createElement(
                'span',
                { className: 'stat-value' },
                value
            )
        );
    }
};

var partials = {
    Stat: (function (_React$Component) {
        _inherits(Stat, _React$Component);

        function Stat() {
            _classCallCheck(this, Stat);

            _get(Object.getPrototypeOf(Stat.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(Stat, [{
            key: 'render',
            value: function render() {
                return _react2['default'].createElement(
                    'div',
                    { className: 'stat' },
                    _react2['default'].createElement(
                        'label',
                        { className: 'stat-label' },
                        this.props.label
                    ),
                    _react2['default'].createElement(
                        'span',
                        { className: 'stat-value' },
                        this.props.value
                    )
                );
            }
        }]);

        return Stat;
    })(_react2['default'].Component),
    Overview: (function (_React$Component2) {
        _inherits(Overview, _React$Component2);

        function Overview() {
            _classCallCheck(this, Overview);

            _get(Object.getPrototypeOf(Overview.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(Overview, [{
            key: 'render',
            value: function render() {
                var podcast = this.props.podcast;

                return _react2['default'].createElement(
                    'aside',
                    { className: 'aside' },
                    _render.podcastLogo(podcast.logo),
                    _react2['default'].createElement(
                        'div',
                        { className: 'container' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'button-pair large margin-top-large' },
                            _react2['default'].createElement(
                                'button',
                                { className: 'button primary' },
                                'Subscribe'
                            ),
                            _react2['default'].createElement(
                                'button',
                                { className: 'button' },
                                'Latest Episode'
                            )
                        ),
                        _react2['default'].createElement(
                            'h2',
                            { className: 'margin-top' },
                            'Similar'
                        )
                    )
                );
            }
        }]);

        return Overview;
    })(_react2['default'].Component),
    DetailsView: (function (_React$Component3) {
        _inherits(DetailsView, _React$Component3);

        function DetailsView() {
            _classCallCheck(this, DetailsView);

            _get(Object.getPrototypeOf(DetailsView.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(DetailsView, [{
            key: 'render',
            value: function render() {
                var podcast = this.props.podcast;

                return _react2['default'].createElement(
                    'article',
                    { className: 'article' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'container' },
                        _react2['default'].createElement(
                            'h1',
                            { className: 'margin-top-small' },
                            podcast.title
                        ),
                        _react2['default'].createElement(
                            'p',
                            null,
                            podcast.description
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'stats' },
                            _render.stat({ label: 'Episodes', value: podcast.episodeCount }),
                            _render.stat({ label: 'Subscribers', value: podcast.subscribers }),
                            _react2['default'].createElement(partials.Stat, { label: 'Genre', value: podcast.genres.join(', ') }),
                            _react2['default'].createElement(partials.Stat, { label: 'Release Date', value: new Date(podcast.released).toDateString() })
                        )
                    )
                );
            }
        }]);

        return DetailsView;
    })(_react2['default'].Component)
};

var _default = (function (_React$Component4) {
    _inherits(_default, _React$Component4);

    function _default() {
        _classCallCheck(this, _default);

        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this);

        this.state = {
            podcast: null
        };
    }

    _createClass(_default, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;

            Promise.resolve(_libMockData.podcast).then(function (podcast) {
                _this.setState({ podcast: podcast });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2['default'].createElement(
                'div',
                { className: 'home' },
                !this.state.podcast || _react2['default'].createElement(partials.Overview, { podcast: this.state.podcast }),
                (0, _libJsxHelpers.jsxIf)(this.state.podcast, function () {
                    return _react2['default'].createElement(partials.DetailsView, { podcast: _this2.state.podcast });
                })
            );
        }
    }]);

    return _default;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"lib/jsx-helpers":13,"lib/mock-data":14,"react":"react"}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _libJsxHelpers = require('lib/jsx-helpers');

var _libMockData = require('lib/mock-data');

var _render = {
    podcastLogo: function podcastLogo(source) {
        return _react2['default'].createElement(
            'div',
            { className: 'podcast-logo' },
            _react2['default'].createElement('img', { src: source })
        );
    },
    stat: function stat(_ref) {
        var label = _ref.label;
        var value = _ref.value;
        return _react2['default'].createElement(
            'div',
            { className: 'stat' },
            _react2['default'].createElement(
                'label',
                { className: 'stat-label' },
                label
            ),
            _react2['default'].createElement(
                'span',
                { className: 'stat-value' },
                value
            )
        );
    }
};

var partials = {
    Stat: (function (_React$Component) {
        _inherits(Stat, _React$Component);

        function Stat() {
            _classCallCheck(this, Stat);

            _get(Object.getPrototypeOf(Stat.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(Stat, [{
            key: 'render',
            value: function render() {
                return _react2['default'].createElement(
                    'div',
                    { className: 'stat' },
                    _react2['default'].createElement(
                        'label',
                        { className: 'stat-label' },
                        this.props.label
                    ),
                    _react2['default'].createElement(
                        'span',
                        { className: 'stat-value' },
                        this.props.value
                    )
                );
            }
        }]);

        return Stat;
    })(_react2['default'].Component),
    Overview: (function (_React$Component2) {
        _inherits(Overview, _React$Component2);

        function Overview() {
            _classCallCheck(this, Overview);

            _get(Object.getPrototypeOf(Overview.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(Overview, [{
            key: 'render',
            value: function render() {
                var podcast = this.props.podcast;

                return _react2['default'].createElement(
                    'aside',
                    { className: 'aside' },
                    _render.podcastLogo(podcast.logo),
                    _react2['default'].createElement(
                        'div',
                        { className: 'container' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'button-pair large margin-top-large' },
                            _react2['default'].createElement(
                                'button',
                                { className: 'button primary' },
                                'Subscribe'
                            ),
                            _react2['default'].createElement(
                                'button',
                                { className: 'button' },
                                'Latest Episode'
                            )
                        ),
                        _react2['default'].createElement(
                            'h2',
                            { className: 'margin-top' },
                            'Similar'
                        )
                    )
                );
            }
        }]);

        return Overview;
    })(_react2['default'].Component),
    DetailsView: (function (_React$Component3) {
        _inherits(DetailsView, _React$Component3);

        function DetailsView() {
            _classCallCheck(this, DetailsView);

            _get(Object.getPrototypeOf(DetailsView.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(DetailsView, [{
            key: 'render',
            value: function render() {
                var podcast = this.props.podcast;

                return _react2['default'].createElement(
                    'article',
                    { className: 'article' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'container' },
                        _react2['default'].createElement(
                            'h1',
                            { className: 'margin-top-small' },
                            podcast.title
                        ),
                        _react2['default'].createElement(
                            'p',
                            null,
                            podcast.description
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'stats' },
                            _render.stat({ label: 'Episodes', value: podcast.episodeCount }),
                            _render.stat({ label: 'Subscribers', value: podcast.subscribers }),
                            _react2['default'].createElement(partials.Stat, { label: 'Genre', value: podcast.genres.join(', ') }),
                            _react2['default'].createElement(partials.Stat, { label: 'Release Date', value: new Date(podcast.released).toDateString() })
                        )
                    )
                );
            }
        }]);

        return DetailsView;
    })(_react2['default'].Component)
};

var _default = (function (_React$Component4) {
    _inherits(_default, _React$Component4);

    function _default() {
        _classCallCheck(this, _default);

        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this);

        this.state = {
            podcast: null
        };
    }

    _createClass(_default, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;

            Promise.resolve(_libMockData.podcast).then(function (podcast) {
                _this.setState({ podcast: podcast });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2['default'].createElement(
                'div',
                { className: 'home' },
                !this.state.podcast || _react2['default'].createElement(partials.Overview, { podcast: this.state.podcast }),
                (0, _libJsxHelpers.jsxIf)(this.state.podcast, function () {
                    return _react2['default'].createElement(partials.DetailsView, { podcast: _this2.state.podcast });
                })
            );
        }
    }]);

    return _default;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"lib/jsx-helpers":13,"lib/mock-data":14,"react":"react"}]},{},[11]);
