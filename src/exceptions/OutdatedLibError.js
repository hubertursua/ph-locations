class OutdatedLibError extends Error {
  constructor(libName, errors = []) {
    super(`Library ${libName} is outdated.`);
    this.libName = libName;
    this.errors = errors;
  }
}

export default OutdatedLibError;
