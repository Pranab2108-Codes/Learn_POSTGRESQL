import { getClient } from "./utils";


async function getUsers() {

  const client = await getClient();
  const selectUsersText = 'SELECT * FROM users';
  const usersTableResponse = await client.query(selectUsersText);

  console.log("Users: ");
  for(let user of usersTableResponse.rows) {

    console.log(`ID: ${user.id}, Email: ${user.email}`);

  }
  await client.end();

}

async function getUsersFromEmail(email: string) {

  const client = await getClient();
  const selectUserText = 'SELECT * FROM users WHERE email = $1';
  const usersTableResponse = await client.query(selectUserText, [email]);

  console.log("single User details: ");
  for(let user of usersTableResponse.rows) {

    console.log(`ID: ${user.id}, Email: ${user.email}`);

  }
  await client.end();

}

async function getTodosForUser(userId: number) {

  const client = await getClient();
  const selectTodosText = 'SELECT * FROM todos WHERE user_id = $1';
  const todosTableResponse = await client.query(selectTodosText, [userId]);

  console.log(`Todos for User ID ${userId}`);
  for (let todo of todosTableResponse.rows) {

    console.log(`ID: ${todo.id}, Title: ${todo.title}, Description: ${todo.description}, Done: ${todo.done}`);
    
  }
  await client.end();

}
getUsers();
getUsersFromEmail("pranab2108.codes@gmail.com");

const userIdToFetch = 1;
getTodosForUser(userIdToFetch);