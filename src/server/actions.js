import HttpError from '@wasp/core/HttpError.js'

export const createTodo = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const newTodo = await context.entities.Todo.create({
    data: {
      content: args.content,
      isDone: false,
      userId: context.user.id
    }
  });

  return newTodo;
}

export const completeTodo = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Todo.update({
    where: { id: args.todoId },
    data: { isDone: true }
  });
}

export const createJournalEntry = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.JournalEntry.create({
    data: {
      content: args.content,
      user: { connect: { id: context.user.id } }
    }
  });
}

export const saveResource = async ({ resourceId }, context) => {
  if (!context.user) { throw new HttpError(401) };

  const resource = await context.entities.Resource.findUnique({
    where: { id: resourceId }
  });

  if (!resource) { throw new HttpError(404) };

  const savedResource = await context.entities.Resource.create({
    data: {
      title: resource.title,
      url: resource.url,
      topic: resource.topic,
      userId: context.user.id
    }
  });

  return savedResource;
}

export const updatePreferences = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };
  const updatedUser = await context.entities.User.update({
    where: { id: context.user.id },
    data: { preferences: args.preferences }
  });
  return updatedUser;
}