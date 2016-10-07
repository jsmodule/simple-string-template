import path from 'path';
import { expect } from 'chai';
import SimpleTemplate from '../src/js/SimpleTemplate';

describe('SimpleTemplate', () => {
  describe('#format', () => {
    it('should format a template string with data', () => {
      let templateString = "Hello {{ name }}";
      let data = { name: 'World' }
      expect(SimpleTemplate.format(templateString, data)).to.be.eq('Hello World');
    });

    it('should use empty string to instead a value which can not be found', () => {
      let templateString = "Hello {{ firstName }} {{ lastName }}";
      let data = { lastName: 'Cao' }
      expect(SimpleTemplate.format(templateString, data)).to.be.eq('Hello  Cao');
    });

    it('should not replace the empty condition', () => {
      let templateString = "Hello {{  }} {{ lastName }}";
      let data = { lastName: 'Cao' }
      expect(SimpleTemplate.format(templateString, data)).to.be.eq('Hello {{  }} Cao');
    });
  });

  describe('#render', () => {
    it('should render a template file with data', () => {
      let templatePath = path.join(__dirname, './fixtures/hello.template');
      let data = { name: 'World' }
      expect(SimpleTemplate.render(templatePath, data)).to.be.eq('Hello World\n');
    });
  });

  describe('#constructor', () => {
    let simpleTemplate;

    beforeEach(() => {
      simpleTemplate = new SimpleTemplate('\\$\\{', '\\}');
    });

    it('should render a different template file with data', () => {
      let templatePath = path.join(__dirname, './fixtures/hello-diff.template');
      let data = { name: 'World' }
      expect(simpleTemplate.render(templatePath, data)).to.be.eq('Hello World\n');
    });

    it('should format a different template string with data', () => {
      let templateString = "Hello ${ name }";
      let data = { name: 'World' }
      expect(simpleTemplate.format(templateString, data)).to.be.eq('Hello World');
    });
  });
});
