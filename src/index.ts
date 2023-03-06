import * as dotenv from 'dotenv';
import {AgileNexusServerApplication, ApplicationConfig} from './application';

export * from './application';

export async function main(options: ApplicationConfig = {}) {
  dotenv.config({path: __dirname + '../../.env'});

  const app = new AgileNexusServerApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}

if (require.main === module) {
  const dotenv = require('dotenv');
  dotenv.config();

  // Run the application
  const config = {
    rest: {
      port: +(process.env.SERVER_PORT || 3000),
      host: process.env.HOST,
      gracePeriodForClose: 5000, // 5 seconds
      openApiSpec: {
        setServersFromRequest: true,
      },
    },
  };
  main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
