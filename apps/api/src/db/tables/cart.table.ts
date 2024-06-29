import { Queryable, Selectable, Updatable } from "orchid-orm";
import { BaseTable } from "./baseTable";
import { ItemsTable } from "./items.table";
import { UserTable } from "./user.table";
import { OrderTable } from "./order.table";

export class CartTable extends BaseTable {
  readonly table = "cart";
  columns = this.setColumns((t) => ({
    id: t.autoId(),
    userId: t.integer().foreignKey("user", "id"),
    itemId: t.integer().foreignKey("items", "id"),
    quantity: t.integer(),
    grandTotal: t.numeric(),
  }));

  relations = {
    user: this.belongsTo(() => UserTable, {
      required: true,
      columns: ["userId"],
      references: ["id"],
    }),
    items: this.hasMany(() => ItemsTable, {
      required: true,
      columns: ["itemId"],
      references: ["id"],
    }),
    order: this.hasOne(() => OrderTable, {
      required: false,
      columns: ["id"],
      references: ["cartId"],
    }),
  };
}

export type Cart = Selectable<CartTable>;
export type CartUpdate = Updatable<CartTable>;
export type CartForQuery = Queryable<CartTable>;
