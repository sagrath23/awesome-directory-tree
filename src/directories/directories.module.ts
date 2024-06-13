import { Module } from '@nestjs/common';
import { FSDirectoriesRepository } from './infrastructure/adapter';
import {
  CreateDirectoryUseCase,
  ListDirectoryUseCase,
  MoveDirectoryUseCase,
  DeleteDirectoryUseCase,
} from './application';
import {
  CreateDirectoriesCommand,
  ListDirectoriesCommand,
  MoveDirectoriesCommand,
  DeleteDirectoriesCommand,
} from './infrastructure/commands';

@Module({
  imports: [],
  providers: [
    {
      provide: 'DirectoriesRepository',
      useClass: FSDirectoriesRepository,
    },
    CreateDirectoryUseCase,
    ListDirectoryUseCase,
    MoveDirectoryUseCase,
    DeleteDirectoryUseCase,
    CreateDirectoriesCommand,
    ListDirectoriesCommand,
    MoveDirectoriesCommand,
    DeleteDirectoriesCommand,
  ],
})
export class DirectoriesModule {}
