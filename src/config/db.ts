import { Connection, createConnection } from "typeorm";

export const connectServerInDb = async () => {
    const connection = await createConnection();
    console.log(`App conectado ao DB ${connection.options.database}`);

    process.on('SIGINT', () => {
        connection.close().then(() => console.log('Conexão com o DB fechada'))
    });
};