'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _ObjectReader = require('./ObjectReader');

var _ObjectReader2 = _interopRequireDefault(_ObjectReader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimpleTemplate = function () {
  _createClass(SimpleTemplate, null, [{
    key: 'defaultTemplate',
    value: function defaultTemplate() {
      return new SimpleTemplate('\\{\\{', '\\}\\}');
    }
  }, {
    key: 'render',
    value: function render(templatePath, data) {
      return SimpleTemplate.defaultTemplate().render(templatePath, data);
    }
  }, {
    key: 'format',
    value: function format(templateString, data) {
      return SimpleTemplate.defaultTemplate().format(templateString, data);
    }
  }]);

  function SimpleTemplate(startRegexp, endRegexp) {
    _classCallCheck(this, SimpleTemplate);

    this.matchRegex = new RegExp(startRegexp.toString() + SimpleTemplate.matchString + endRegexp.toString(), 'g');
  }

  _createClass(SimpleTemplate, [{
    key: 'render',
    value: function render(templatePath, data) {
      return this.format(_fs2.default.readFileSync(templatePath).toString(), data);
    }
  }, {
    key: 'format',
    value: function format(templateString, data) {
      var objectReader = new _ObjectReader2.default(data);
      return templateString.replace(this.matchRegex, function (match, key) {
        var result = objectReader.read(key);
        return result === null || result === undefined ? "" : result;
      });
    }
  }]);

  return SimpleTemplate;
}();

SimpleTemplate.matchString = '\\s*(\\w+(\\.\\w+)*)\\s*';
exports.default = SimpleTemplate;