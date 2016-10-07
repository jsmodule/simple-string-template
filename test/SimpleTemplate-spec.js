import { expect } from 'chai';
import SimpleTemplate from '../src/js/SimpleTemplate';

describe('SimpleTemplate', () => {
  let simpleTemplate;

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
});
