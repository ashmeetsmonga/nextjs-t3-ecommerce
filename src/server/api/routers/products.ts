import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
  getProducts: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.product.findMany();
  }),
  addProduct: publicProcedure
    .input(
      z.object({
        title: z.string(),
        desc: z.string(),
        price: z.number(),
        img: z.number(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.product.create({ data: input });
    }),
});
