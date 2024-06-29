import { change } from '../dbScript';

change(async (db) => {
  await db.createTable('user', (t) => ({
    id: t.serial().primaryKey(),
    name: t.string(),
    email: t.string().unique(),
    isVerified: t.boolean(),
    profilePicture: t.string(),
  }));
});
