enum dbType { mysql='mysql' , postgres = 'postgres', mariadb = 'mariadb' , sqlite = 'sqlite', mongodb = 'mongodb'}

export const env = {
  port: process.env.PORT!,
  amqp: process.env.AMQP_SERVER!,
  queue: process.env.QUEUE_NAME!,
  socketEvent: process.env.SOCKET_EVENT_NAME!,
  dbPort: process.env.TYPEORM_PORT!,
  dbHost: process.env.TYPEORM_HOST!,
  db: process.env.TYPEORM_DATABASE!,
  dbUser: process.env.TYPEORM_USERNAME!,
  dbPassword: process.env.TYPEORM_PASSWORD!,
  dbType: dbType.postgres
}

