import { Inject, Injectable, Logger } from '@nestjs/common';
import { DirectoriesRepository } from '../domain/port';

@Injectable()
export class CreateDirectoryUseCase {
  constructor(
    @Inject('DirectoriesRepository')
    private readonly directoriesRepository: DirectoriesRepository,
  ) {}

  async execute(path: string): Promise<string> {
    Logger.log('execute CreateDirectoryUseCase');

    const result = await this.directoriesRepository.createDirectory(path);

    Logger.log(result, 'CreateDirectoryUseCase.execute');

    return result;
  }
}
