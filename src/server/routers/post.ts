import { procedure, router } from "../trpc";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import { prisma } from "../prisma";

export const postRouter = router({
  all: procedure
    .query(async ({ input }) => {
      const posts = await prisma.post.findMany({
        orderBy: {
          createdAt: 'desc'
        },
      })

      return posts
    })
})