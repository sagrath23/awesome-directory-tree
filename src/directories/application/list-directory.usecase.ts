import { Inject, Injectable, Logger } from '@nestjs/common';
import { DirectoriesRepository } from '../domain/port';

@Injectable()
export class ListDirectoryUseCase {
  constructor(
    @Inject('DirectoriesRepository')
    private readonly directoriesRepository: DirectoriesRepository,
  ) {}

  async execute(): Promise<string> {
    Logger.log('execute ListDirectoryUseCase');

    const result = await this.directoriesRepository.listDirectoryContent();

    Logger.log(result, 'ListDirectoryUseCase.execute');

    return result;
  }
}
