import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
  getProducts: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.product.findMany();
  }),
  getProduct: publicProcedure
    .input(z.object({ productID: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.product.findUnique({ where: { id: input.productID } });
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
