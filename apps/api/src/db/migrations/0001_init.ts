import { change } from '../dbScript';

change(async (db) => {
  await db.createTable('user', (t) => ({
    id: t.serial().primaryKey(),
    name: t.string(),
    email: t.string().unique(),
    isVerified: t.boolean(),
    profilePicture: t.string(),
    mobileNumber: t.string().nullable(),
    address: t.string().nullable(),
  }));

  await db.createTable('items', (t) => ({
    id: t.serial().primaryKey(),
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
    userId: t.integer(),
    cartId: t.integer().unique(),
    status: t.string(),
    dueDays: t.integer(),
  }));

  await db.createTable('cart', (t) => ({
    id: t.serial().primaryKey(),
    userId: t.integer(),
    itemId: t.integer(),
    quantity: t.integer(),
    grandTotal: t.decimal(),
  }));

  await db.createTable('categories', (t) => ({
    id: t.serial().primaryKey(),
    name: t.string(),
  }));
});
