import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getAllPosts: publicProcedure.query(({ ctx }) => {
    const allPosts = ctx.db.post.findMany({
      orderBy: { createdAt: "asc" },
      select: {
        id: true,
        name: true,
        text: true,
      },
    });
    return allPosts;
  }),
  getMyPosts: publicProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .query(({ ctx, input }) => {
      const allPosts = ctx.db.post.findMany({
        where: {
          name: input.name,
        },
        select: {
          name: true,
          text: true,
        },
        orderBy: { createdAt: "asc" },
      });
      return allPosts;
    }),
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        text: z.string().min(1).max(256),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          name: input.name,
          text: input.text,
        },
      });
    }),
  delete: publicProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.delete({
        where: {
          name: input.name,
          id: input.id,
        },
      });
    }),
});
