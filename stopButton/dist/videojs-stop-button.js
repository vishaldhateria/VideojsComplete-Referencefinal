/**
 * videojs-stop-button
 * @version 0.0.0
 * @copyright 2016 
 * @license Apache-2.0
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.videojsStopButton = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

var defaults = {};
var Button = _videoJs2['default'].getComponent('Button');

var StopButtonToggle = (function (_Button) {
  _inherits(StopButtonToggle, _Button);

  function StopButtonToggle(player, options) {
    _classCallCheck(this, StopButtonToggle);

    _get(Object.getPrototypeOf(StopButtonToggle.prototype), 'constructor', this).call(this, player, options);
  }

  _createClass(StopButtonToggle, [{
    key: 'buildCSSClass',
    value: function buildCSSClass() {
      return 'vjs-stop-button vjs-icon-square vjs-button vjs-control ${super.buildCSSClass()}';
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var player = this.player();
      player.pause();
      player.currentTime(0);
      player.bigPlayButton.show();
      player.posterImage.show();
      this.trigger('stopped');
    }
  }]);

  return StopButtonToggle;
})(Button);

var stopButton = function stopButton(options) {
  var _this = this;

  var player = this;
  this.ready(function () {
    var stopButtonToggle = _this.controlBar.addChild('StopButton', options);
    var volumeMenuButton = document.getElementsByClassName('vjs-volume-menu-button')[0];
    player.controlBar.el().insertBefore(stopButtonToggle.el(), volumeMenuButton);
  });
};

_videoJs2['default'].registerComponent('StopButton', StopButtonToggle);
_videoJs2['default'].plugin('stopButton', stopButton);

stopButton.VERSION = '0.0.0';

exports['default'] = stopButton;
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});