class OutdatedCitiesMunsError extends Error {
  constructor(libName) {
    super(`List of cities and municipalities for ${libName} is outdated.`);
    this.libName = libName;
  }
}

export default OutdatedCitiesMunsError;
