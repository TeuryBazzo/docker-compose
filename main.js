const postgres = require('postgres');

console.log("variable: " + process.env.POSTGRES_HOST);

const sql = postgres({
    host: process.env.POSTGRES_HOST,
    db: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
}) // will use psql environment variables

console.log("Iniciando programa..");

insertUser().then(x => {
    console.log(x);
}).catch(e => {
    console.error(e);
})

async function insertUser() {
    const users = await sql`SELECT 1`
    // users = Result [{ name: "Murray", age: 68 }]
    return users
}