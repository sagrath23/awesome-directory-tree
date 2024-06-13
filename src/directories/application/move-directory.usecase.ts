import { Inject, Injectable, Logger } from '@nestjs/common';
import { DirectoriesRepository } from '../domain/port';

@Injectable()
export class MoveDirectoryUseCase {
  constructor(
    @Inject('DirectoriesRepository')
    private readonly directoriesRepository: DirectoriesRepository,
  ) {}

  async execute(source: string, destination: string): Promise<string> {
    Logger.log('execute MoveDirectoryUseCase');

    const result = await this.directoriesRepository.moveDirectoryContent(
      source,
      destination,
    );

    Logger.log(result, 'MoveDirectoryUseCase.execute');

    return result;
  }
}
