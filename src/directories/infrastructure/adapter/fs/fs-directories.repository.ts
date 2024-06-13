import * as fs from 'fs/promises';
import { DirectoriesRepository } from '../../../domain/port';
import { Logger } from '@nestjs/common';

const rootDirectory = 'root';

export class FSDirectoriesRepository implements DirectoriesRepository {
  async createDirectory(path: string) {
    await fs.mkdir(`${rootDirectory}/${path}`, {
      recursive: true,
    });

    return `CREATE ${path}`;
  }

  async printFolderStructure(path, deep) {
    const files = await fs.readdir(path);

    Logger.log(files, `files at level ${deep}`);

    for (const file of files) {
      const stats = await fs.stat(`${path}/${file}`);

      if (stats.isDirectory()) {
        Logger.log(`expand ${path}/${file}`);

        console.log(`${new Array(deep).fill('  ').join('')}${file}`);

        await this.printFolderStructure(`${path}/${file}`, deep + 1);
      } else {
        // Print file with spaces
        console.log(`${new Array(deep).fill('  ').join('')}${file}`);
      }
    }
  }

  async listDirectoryContent() {
    console.log('LIST');

    await this.printFolderStructure(rootDirectory, 0);
  }

  async moveDirectoryContent(source: string, destination: string) {
    const content = await fs.readdir(`${rootDirectory}/${source}`);

    if (content.length > 0) {
      // source path isn't empty, just copy to destination and delete at source
      await fs.cp(
        `${rootDirectory}/${source}`,
        `${rootDirectory}/${destination}`,
        { recursive: true, force: true },
      );
    } else {
      const folder = source.split('/').pop();

      await fs.mkdir(`${rootDirectory}/${destination}/${folder}`, {
        recursive: true,
      });
    }

    await fs.rm(`${rootDirectory}/${source}`, { recursive: true });

    return `MOVE ${source} ${destination}`;
  }

  async deleteDirectory(path: string) {
    await fs.rm(`${rootDirectory}/${path}`, { recursive: true });

    return `DELETE ${path}`;
  }
}
