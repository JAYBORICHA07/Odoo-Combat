import { change } from '../dbScript';

change(async (db) => {
  await db.createTable('items', (t) => ({
    id: t.serial().primaryKey(),
    userId: t.integer().foreignKey('user', 'id'),
    categoryId: t.integer(),
    name: t.string(),
    description: t.text(),
    rentalPrice: t.decimal(),
    availabilityStatus: t.boolean(),
    location: t.string(),
    image: t.string(),
  }));

  await db.createTable('order', (t) => ({
    id: t.serial().primaryKey(),
    userId: t.integer().foreignKey('user', 'id'),
    cartId: t.integer().unique(),
    status: t.string(),
    dueDays: t.integer(),
  }));

  await db.createTable('categories', (t) => ({
    id: t.serial().primaryKey(),
    userId: t.integer().foreignKey('user', 'id'),
    name: t.string(),
  }));

  await db.changeTable('user', (t) => ({
    mobileNumber: t.add(t.string().default('0000000000')),
  }));
});

change(async (db) => {
  await db.createTable('cart', (t) => ({
    id: t.serial().primaryKey(),
    userId: t.integer().foreignKey('user', 'id'),
    itemId: t.integer().foreignKey('items', 'id'),
    quantity: t.integer(),
    grandTotal: t.decimal(),
  }));
});
