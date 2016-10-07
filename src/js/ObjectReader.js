class ObjectReader {
  constructor(data) {
    this.data = data;
  }

  read(keyChain) {
    return keyChain.split('.').reduce((previous, key) => {
      return previous && previous.hasOwnProperty(key) ? previous[key] : (key == 'this' ? previous : null);
    }, this.data);
  }
}

export default ObjectReader;
