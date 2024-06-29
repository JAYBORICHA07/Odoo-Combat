import { change } from '../dbScript';

change(async (db) => {
  await db.changeTable('categories', (t) => ({
    ...t.add(
      t.unique(['name'])
    ),
  }));
});
