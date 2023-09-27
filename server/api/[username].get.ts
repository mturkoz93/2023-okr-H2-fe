export default defineEventHandler(async (event) => {
  const username = getRouterParam(event, "username");
  const config = useRuntimeConfig();

  if(!username) throw createError('username is required')

  return {
    user: await getEvents(username),
    config,
    commit: 'hello world'
  }
});


async function getEvents(username:string) {
  const users: { name: string; team: string }[] = [{name: 'mustafa', team: 'GS'}, {name: 'ali', team: 'FB'}]

  const findedUser = users.find((user: { name: string; team: string }) => user.name === username)

  return findedUser
}