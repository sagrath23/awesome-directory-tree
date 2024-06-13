import { Command, CommandRunner } from 'nest-commander';
import { MoveDirectoryUseCase } from '../../application';
import { Logger } from '@nestjs/common';
import { DefaultDirectoriesModuleError } from '../../domain/model';

@Command({
  name: 'MOVE',
  arguments: '<source> <destination>',
  description: 'A CLI utility to MOVE folders',
})
export class MoveDirectoriesCommand extends CommandRunner {
  constructor(private readonly moveDirectoryUseCase: MoveDirectoryUseCase) {
    super();
  }

  async run(passedParam: string[]): Promise<void> {
    const [source, destination] = passedParam;

    if (!source || !destination) {
      Logger.error('No valid argument provided', 'DirectoriesCommand.run');

      throw new DefaultDirectoriesModuleError('invalid arguments');
    }

    const result = await this.moveDirectoryUseCase.execute(source, destination);

    Logger.debug(result, 'DirectoriesCommand.run');

    console.log(JSON.stringify(result));
  }
}
