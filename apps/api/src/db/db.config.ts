import { orchidORM } from "orchid-orm";
import { env } from "../configs/env.config";
import { UserTable } from "./tables/user.table";
import { ItemsTable } from "./tables/items.table";
import { OrderTable } from "./tables/order.table";
import { CartTable } from "./tables/cart.table";
import { CategoriesTable } from "./tables/categories.table";

export const db = orchidORM(
  {
    // biome-ignore lint/style/useNamingConvention: <as needed by library>
    databaseURL: env.DB_TEST_URL ?? env.DB_URL,
    max: 100,
    min: 10,
  },
  {
    user: UserTable,
    items: ItemsTable,
    order: OrderTable,
    cart: CartTable,
    categories: CategoriesTable,
  }
);
