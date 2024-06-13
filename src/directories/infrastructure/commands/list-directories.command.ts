import { Command, CommandRunner } from 'nest-commander';
import { ListDirectoryUseCase } from '../../application';
import { Logger } from '@nestjs/common';

@Command({
  name: 'LIST',
  description: 'A CLI utility to LIST folders',
})
export class ListDirectoriesCommand extends CommandRunner {
  constructor(private readonly listDirectoryUseCase: ListDirectoryUseCase) {
    super();
  }

  async run(): Promise<void> {
    await this.listDirectoryUseCase.execute();

    Logger.debug('DirectoriesCommand.run');
  }
}
