import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateWorkSpace = mutation({
    args: v.object({
        message: v.array(v.object({ role: v.string(), content: v.string() })), // Ensure message is an array of objects
        user: v.id("users"),
    }),
    handler: async (ctx, args) => {
        const workspaceId = await ctx.db.insert("workshop", {
            message: args.message,
            user: args.user,
        });
        return workspaceId;
    },
});
