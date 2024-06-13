export interface DirectoriesRepository {
  // TODO: add return type
  createDirectory(path: string);

  listDirectoryContent();

  moveDirectoryContent(source: string, destination: string);

  deleteDirectory(path: string);
}
