class OutdatedProvincesError extends Error {
  constructor(libName) {
    super(`List of provinces for ${libName} is outdated.`);
    this.libName = libName;
  }
}

export default OutdatedProvincesError;
