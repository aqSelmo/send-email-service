if (process.env.NODE_ENV === 'test') {
  module.exports = {
    type: 'mongodb',
    host: process.env.MONGODB_HOST,
    port: process.env.MONGODB_PORT,
    username: process.env.MONGODB_USERNAME,
    password: process.env.MONGODB_PASSWORD,
    migrations: ['src/database/migrations/*.ts'],
    entities: ['src/database/entities/*.entity.ts'],
    logging: false,
    synchronize: false,
    cli: {
      migrationsDir: ['src/database/migrations'],
      entitiesDir: ['src/database/entities'],
    },
  };
} else {
  module.exports = {
    type: 'mongodb',
    host: process.env.MONGODB_HOST,
    port: process.env.MONGODB_PORT,
    username: process.env.MONGODB_USERNAME,
    password: process.env.MONGODB_PASSWORD,
    reconnectTries: 3,
    migrationsRun: true,
    entities: ['src/database/entities/*.entity.ts'],
    migrations: ['src/database/migrations/*.ts'],
    cli: {
      migrationsDir: 'src/database/migrations',
    },
  };
}
