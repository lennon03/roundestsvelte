import { drizzle } from 'drizzle-orm/node-postgres';
// import { eq } from 'drizzle-orm';
import { usersTable } from '../db/schema';
import { Pool } from "pg";
import 'dotenv/config';


const pool = new Pool({
//    connectionString: process.env.HYPERDRIVE.connectionString!,
    connectionString: process.env.DEV_DB!,
});
const db = drizzle({ client: pool });


export async function load() {
    const users = await db.select().from(usersTable);
    console.log(process.env!);
    console.log('Getting all users from the database: ', users);
    /*
     */
    console.log(users)
    return users[0];
}
