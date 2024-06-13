import { Command, CommandRunner } from 'nest-commander';
import { DeleteDirectoryUseCase } from '../../application';
import { Logger } from '@nestjs/common';
import { DefaultDirectoriesModuleError } from '../../domain/model';

@Command({
  name: 'DELETE',
  arguments: '<path>',
  description: 'A CLI utility to DELETE folders',
})
export class DeleteDirectoriesCommand extends CommandRunner {
  constructor(private readonly deleteDirectoryUseCase: DeleteDirectoryUseCase) {
    super();
  }

  async run(passedParam: string[]): Promise<void> {
    const [path] = passedParam;

    if (!path) {
      Logger.error('No valid path provided', 'DeleteDirectoriesCommand.run');

      throw new DefaultDirectoriesModuleError('invalid arguments');
    }

    const result = await this.deleteDirectoryUseCase.execute(path);

    Logger.debug(result, 'DeleteDirectoriesCommand.run');

    console.log(JSON.stringify(result));
  }
}
