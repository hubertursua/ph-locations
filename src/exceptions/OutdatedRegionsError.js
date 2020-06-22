class OutdatedRegionsError extends Error {
  constructor(libName) {
    super(`List of regions for ${libName} is outdated.`);
    this.libName = libName;
  }
}

export default OutdatedRegionsError;
