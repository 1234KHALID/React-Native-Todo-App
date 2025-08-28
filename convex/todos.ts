import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getTodos = query({
  handler: async (ctx) => {
    return await ctx.db.query("todos").order("desc").collect();
  },
});

export const addTodos = mutation({
  args: { taskName: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.insert("todos", {
      taskName: args.taskName,
      isCompleted: false,
    });
  },
});

export const toggleTodo = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    const todos = await ctx.db.get(args.id);

    if (!todos) {
      throw new ConvexError("todos is not found!");
    }

    return await ctx.db.patch(args.id, {
      isCompleted: !todos.isCompleted,
    });
  },
});

export const deleteTodo = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});

export const updateTodo = mutation({
  args: { id: v.id("todos"), taskName: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.id, {
      taskName: args.taskName,
    });
  },
});

export const clearAllTodo = mutation({
  handler: async (ctx) => {
    const todos = await ctx.db.query("todos").collect();

    for (const todo of todos) {
      await ctx.db.delete(todo._id);
    }

    return { deletedCount: todos.length };
  },
});
