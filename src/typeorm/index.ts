import { getConnectionOptions, createConnection, Connection } from 'typeorm';

createConnection();

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      database: defaultOptions.database,
    }),
  );
};
