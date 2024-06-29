import { Queryable, Selectable, Updatable } from "orchid-orm";
import { BaseTable } from "./baseTable";
import { ItemsTable } from "./items.table";
import { OrderTable } from "./order.table";
import { CategoriesTable } from "./categories.table";
import { CartTable } from "./cart.table";

export class UserTable extends BaseTable {
  readonly table = "user";
  columns = this.setColumns((t) => ({
    id: t.autoId(),
    name: t.string().trim(),
    email: t.string().trim().unique(),
    isVerified: t.boolean(),
    profilePicture: t.string(),
    mobileNumber: t.string().default("0000000000"),
  }));

  relations = {
    items: this.hasMany(() => ItemsTable, {
      required: false,
      columns: ["id"],
      references: ["userId"],
    }),
    orders: this.hasMany(() => OrderTable, {
      required: false,
      columns: ["id"],
      references: ["userId"],
    }),
    categories: this.hasMany(() => CategoriesTable, {
      required: false,
      columns: ["id"],
      references: ["userId"],
    }),
    carts: this.hasMany(() => CartTable, {
      required: false,
      columns: ["id"],
      references: ["userId"],
    }),
  };
}

export type User = Selectable<UserTable>;
export type UserUpdate = Updatable<UserTable>;
export type UserForQuery = Queryable<UserTable>;
