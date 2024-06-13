export class BaseDirectoryError extends Error {
  constructor(message) {
    super(`Directories Module Error: ${message}`);
  }
}

export class DefaultDirectoriesModuleError extends BaseDirectoryError {
  constructor(message) {
    super(message);
  }
}
