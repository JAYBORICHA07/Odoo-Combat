import { Queryable, Selectable, Updatable } from "orchid-orm";
import { BaseTable } from "./baseTable";
import { CategoriesTable } from "./categories.table";
import { CartTable } from "./cart.table";
import { UserTable } from "./user.table";

export class ItemsTable extends BaseTable {
  readonly table = "items";
  columns = this.setColumns((t) => ({
    id: t.autoId(),
    userId: t.integer().foreignKey("user", "id"),
    categoryId: t.integer(),
    name: t.string().trim(),
    description: t.text().trim(),
    rentalPrice: t.numeric(),
    availabilityStatus: t.boolean(),
    location: t.string().trim(),
    image: t.string().trim(),
  }));

  relations = {
    user: this.belongsTo(() => UserTable, {
      required: true,
      columns: ["userId"],
      references: ["id"],
    }),
    category: this.belongsTo(() => CategoriesTable, {
      required: true,
      columns: ["categoryId"],
      references: ["id"],
    }),
    cart: this.belongsTo(() => CartTable, {
      required: false,
      columns: ["id"],
      references: ["id"],
    }),
  };
}

export type Item = Selectable<ItemsTable>;
export type ItemUpdate = Updatable<ItemsTable>;
export type ItemForQuery = Queryable<ItemsTable>;
