import { getGroups } from '../src/groups';

describe('getGroups', () => {
  it('returns a list of groups', async () => {
    const expectedGroups = [
      { "id": 1, "groupName": "Hajarna" },
      { "id": 2, "groupName": "Valarna" },
      { "id": 3, "groupName": "Zebrorna" }
    ];

    const groups = await getGroups();
    console.log(groups);
    expect(groups).toEqual(expectedGroups);
  });
});
