import { Queryable, Selectable, Updatable } from "orchid-orm";
import { BaseTable } from "./baseTable";
import { OrderTable } from "./order.table";
import { CartTable } from "./cart.table";

export class UserTable extends BaseTable {
  readonly table = "user";
  columns = this.setColumns((t) => ({
    id: t.autoId(),
    name: t.string().trim(),
    email: t.string().trim().unique(),
    isVerified: t.boolean(),
    profilePicture: t.string(),
    mobileNumber: t.string().nullable(),
    address: t.string().trim().nullable(),
  }));

  relations = {
    orders: this.hasMany(() => OrderTable, {
      required: false,
      columns: ["id"],
      references: ["userId"],
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }),
    carts: this.hasMany(() => CartTable, {
      required: false,
      columns: ["id"],
      references: ["userId"],
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }),
  };
}

export type User = Selectable<UserTable>;
export type UserUpdate = Updatable<UserTable>;
export type UserForQuery = Queryable<UserTable>;
