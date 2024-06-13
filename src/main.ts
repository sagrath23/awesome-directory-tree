import { CommandFactory } from 'nest-commander';
import { DirectoriesModule } from './directories';

async function bootstrap() {
  const enableDebug = false; // process.env.ENABLE_DEBUG == 'true';

  if (enableDebug) {
    await CommandFactory.run(DirectoriesModule, ['log', 'warn', 'error']);
  } else {
    await CommandFactory.run(DirectoriesModule, []);
  }
}
bootstrap();
