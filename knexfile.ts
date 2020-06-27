import path from 'path'
import { CreateTableBuilder } from 'knex'

// Update with your config settings.

// Aparentemente só funciona com o module.exports
module.exports = {

  development: {
    client: "pg",
    connection: {
      user: 'postgres', 
      database: 'knex_test',
      password: 'mamute'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
      extension: 'ts'
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
  },

  onUpdateTrigger: (table: CreateTableBuilder) => {
    return `
  CREATE TRIGGER ${table}_updated_at
  BEFORE UPDATE ON ${table}
  FOR EACH ROW
  EXECUTE PROCEDURE on_update_timestamp();
  `;
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
