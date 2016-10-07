import ObjectReader from './ObjectReader';

class SimpleTemplate {
  static matchRegex = /\{\{\s([a-z0-9A-Z_][\.a-z0-9A-Z_]*)\s\}\}/g;

  static format(templateString, data) {
    let objectReader = new ObjectReader(data);
    return templateString.replace(SimpleTemplate.matchRegex, (match, key) => {
      let result = objectReader.read(key);
      return result === null || result === undefined ? "" : result;
    });
  }
}

export default SimpleTemplate;
