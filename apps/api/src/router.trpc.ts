import { inferRouterOutputs } from "@trpc/server";
// import * as packageJson from "../package.json";
import { publicProcedure, router, protectedProcedure } from "./context.trpc";
import { db } from "./db/db.config";

export const trpcRouter = router({
  user: protectedProcedure.query(async ({ ctx }) => {
    console.log(ctx.user);
    const user = ctx.user;
    return user;
  }),
  version: publicProcedure.query(() => ({
    // beVersion: packageJson.version,
    // forceLogoutBelowFrontendVersion:
    // packageJson.force_logout_below_frontend_version,
    // forceUpdateBelowFrontendVersion:
    // packageJson.force_update_below_frontend_version,
  })),
  getProduct: publicProcedure.query(async () => {
    const product = await db.items.selectAll();
    return product;
  }),
});

// export type definition of API
export type ApiRouter = typeof trpcRouter;
export type RouterOutputs = inferRouterOutputs<ApiRouter>;
