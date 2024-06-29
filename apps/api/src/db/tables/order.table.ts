import { Queryable, Selectable, Updatable } from "orchid-orm";
import { BaseTable } from "./baseTable";
import { CartTable } from "./cart.table";
import { UserTable } from "./user.table";

export class OrderTable extends BaseTable {
  readonly table = "order";
  columns = this.setColumns((t) => ({
    id: t.autoId(),
    userId: t.integer(),
    cartId: t.integer().unique(),
    status: t.string().trim(),
    dueDays: t.integer(),
  }));

  relations = {
    user: this.belongsTo(() => UserTable, {
      required: false,
      columns: ["userId"],
      references: ["id"],
    }),
    cart: this.belongsTo(() => CartTable, {
      required: false,
      columns: ["cartId"],
      references: ["id"],
    }),
  };
}

export type Order = Selectable<OrderTable>;
export type OrderUpdate = Updatable<OrderTable>;
export type OrderForQuery = Queryable<OrderTable>;
