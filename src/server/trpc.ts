import { initTRPC } from "@trpc/server";

const api = initTRPC.create()

export const router = api.router;
export const procedure = api.procedure;