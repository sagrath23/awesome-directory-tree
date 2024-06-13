import { Command, CommandRunner } from 'nest-commander';
import { CreateDirectoryUseCase } from '../../application';
import { Logger } from '@nestjs/common';
import { DefaultDirectoriesModuleError } from '../../domain/model';

@Command({
  name: 'CREATE',
  arguments: '<path>',
  description: 'A CLI utility to CREATE folders',
})
export class CreateDirectoriesCommand extends CommandRunner {
  constructor(private readonly createDirectoryUseCase: CreateDirectoryUseCase) {
    super();
  }

  async run(passedParam: string[]): Promise<void> {
    const [path] = passedParam;

    if (!path) {
      const errorMessage = 'You should provide a valid path';
      Logger.error(errorMessage, 'DirectoriesCommand.run');

      throw new DefaultDirectoriesModuleError(errorMessage);
    }

    const result = await this.createDirectoryUseCase.execute(path);

    Logger.debug(result, 'DirectoriesCommand.run');

    console.log(JSON.stringify(result));
  }
}
