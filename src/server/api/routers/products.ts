import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
  getProducts: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.product.findMany();
  }),
});
