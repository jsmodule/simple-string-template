import fs from 'fs';
import ObjectReader from './ObjectReader';

class SimpleTemplate {
  static matchString = '\\s*(\\w+(\\.\\w+)*)\\s*';

  static defaultTemplate() {
    return new SimpleTemplate('\\{\\{', '\\}\\}');
  }

  static render(templatePath, data) {
    return SimpleTemplate.defaultTemplate().render(templatePath, data);
  }

  static format(templateString, data) {
    return SimpleTemplate.defaultTemplate().format(templateString, data);
  }

  constructor(startRegexp, endRegexp) {
    this.matchRegex = new RegExp(startRegexp.toString() + SimpleTemplate.matchString + endRegexp.toString(), 'g');
  }

  render(templatePath, data) {
    return this.format(fs.readFileSync(templatePath).toString(), data);
  }

  format(templateString, data) {
    let objectReader = new ObjectReader(data);
    return templateString.replace(this.matchRegex, (match, key) => {
      let result = objectReader.read(key);
      return result === null || result === undefined ? "" : result;
    });
  }
}

export default SimpleTemplate;
