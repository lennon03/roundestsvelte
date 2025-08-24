import { drizzle } from 'drizzle-orm/node-postgres';
import { usersTable } from '../db/schema';
import { Pool } from 'pg';

export async function load({ request, platform }) {
	const pool = new Pool({
		connectionString: platform!.env?.HYPERDRIVE?.connectionString
	});

	const db = drizzle({ client: pool });

	const users = await db.select().from(usersTable);
	console.log(platform!.env?.HYPERDRIVE?.connectionString);
	console.log('Getting all users from the database: ', users);
	console.log(users);
	return users[0];
}
