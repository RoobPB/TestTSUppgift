import { getUsers } from '../src/users';

describe('getUsers', () => {
  it('returns a list of users', async () => {
    const expectedUsers = [
      { "name": "Erik", "group": 1 },
      { "name": "Lisa", "group": 2 },
      { "name": "Hampus", "group": 2 },
      { "name": "Linda", "group": 3 },
      { "name": "Eva", "group": 1 },
      { "name": "Anna", "group": 3 }
    ];

    const users = await getUsers();
    console.log(users);
    expect(users).toEqual(expectedUsers);
  });
});
