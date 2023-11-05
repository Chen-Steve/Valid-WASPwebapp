import HttpError from '@wasp/core/HttpError.js'

export const getTodos = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Todo.findMany({
    where: {
      user: { id: context.user.id }
    }
  });
}

export const getResources = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  return context.entities.Resource.findMany();
}

export const getJournalEntries = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  return context.entities.JournalEntry.findMany({
    where: {
      user: { id: context.user.id }
    }
  });
}

export const getUser = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  return context.entities.User.findUnique({
    where: { id: context.user.id }
  });
}