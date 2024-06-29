import { Queryable, Selectable, Updatable } from "orchid-orm";
import { BaseTable } from "./baseTable";
import { ItemsTable } from "./items.table";
import { UserTable } from "./user.table";

export class CategoriesTable extends BaseTable {
  readonly table = "categories";
  columns = this.setColumns((t) => ({
    id: t.autoId(),
    userId: t.integer().foreignKey("user", "id"),
    name: t.string().trim(),
  }));

  relations = {
    user: this.belongsTo(() => UserTable, {
      required: true,
      columns: ["userId"],
      references: ["id"],
    }),
    items: this.hasMany(() => ItemsTable, {
      required: false,
      columns: ["id"],
      references: ["categoryId"],
    }),
  };
}

export type Category = Selectable<CategoriesTable>;
export type CategoryUpdate = Updatable<CategoriesTable>;
export type CategoryForQuery = Queryable<CategoriesTable>;
