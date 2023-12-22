//auxiliar database to save documents and emails
import mysql from 'mysql2'

const database = {
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'auth-example'
}

const connect = async () => {
    //@ts-ignore
    if (global.connection && global.connection.state !== "disconnected")
        //@ts-ignore
        return global.connection;

    //@ts-ignore
    const connection = mysql.createPool(database);

    console.log(`Connection sucessfully on DB ${database.database}`);
    //@ts-ignore
    global.connection = connection.promise();
    return connection;
};

connect();

export default connect;