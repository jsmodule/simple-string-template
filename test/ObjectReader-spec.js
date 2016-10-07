import { expect } from 'chai';
import ObjectReader from '../src/js/ObjectReader';

describe('ObjectReader', () => {
  let objectReader, data;

  beforeEach(() => {
    data = {
      id: '123456',
      name: {
        firstName: 'xiaoqi',
        lastName: 'cao'
      }
    };
    objectReader = new ObjectReader(data);
  });

  describe('#read', () => {
    it('should read all value with this', () => {
      expect(objectReader.read('this')).to.be.eq(data);
    });

    it('should read the value with this and key name', () => {
      expect(objectReader.read('this.id')).to.be.eq('123456');
    });

    it('should read the value with first key name', () => {
      expect(objectReader.read('id')).to.be.eq('123456');
    });

    it('should read the value with multi level key name', () => {
      expect(objectReader.read('name.firstName')).to.be.eq('xiaoqi');
    });

    it('should get null when give an empty key', () => {
      expect(objectReader.read('')).to.be.null;
    });

    it('should get null when give an invalid key', () => {
      expect(objectReader.read('invalid.key')).to.be.null;
    });
  });
});
