import { expect } from 'chai';
import HelloWorld from '../src/js/HelloWorld';

describe('HelloWorld', () => {
  let helloWorld;

  describe('#show', () => {
    beforeEach(() => {
      helloWorld = new HelloWorld();
    });

    it('should show a hello world message', () => {
      let message = helloWorld.show('World');
      expect(message).to.be.eq('Hello World');
    });
  });
});
