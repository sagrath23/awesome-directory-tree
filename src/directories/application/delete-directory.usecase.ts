import { Inject, Injectable, Logger } from '@nestjs/common';
import { DirectoriesRepository } from '../domain/port';

@Injectable()
export class DeleteDirectoryUseCase {
  constructor(
    @Inject('DirectoriesRepository')
    private readonly directoriesRepository: DirectoriesRepository,
  ) {}

  async execute(path: string): Promise<string> {
    Logger.log('execute DeleteDirectoryUseCase');

    try {
      const result = await this.directoriesRepository.deleteDirectory(path);

      Logger.log(result, 'DeleteDirectoryUseCase.execute');

      return result;
    } catch (error) {
      console.log(error);
      // TODO: throw error
    }
  }
}
