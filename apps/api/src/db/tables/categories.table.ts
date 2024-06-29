import { Queryable, Selectable, Updatable } from "orchid-orm";
import { BaseTable } from "./baseTable";
import { ItemsTable } from "./items.table";
import { UserTable } from "./user.table";

export class CategoriesTable extends BaseTable {
  readonly table = "categories";
  columns = this.setColumns((t) => ({
    id: t.autoId(),
    name: t.string().trim().unique(),
  }));

  relations = {
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
