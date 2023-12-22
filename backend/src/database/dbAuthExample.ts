import connect from "./config/authExample";

export const findUserDB = async (username: string) => {
    const conn = await connect();
    const sql = "SELECT * FROM `users` LEFT JOIN `roles` ON users.role = roles.id WHERE `username` = ?"
    const [result] = await conn.query(sql, username)
    return result;
};