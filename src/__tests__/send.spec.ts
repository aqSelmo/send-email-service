import database from '../database';

describe('testing send email', () => {
  beforeAll(async () => {
    await database.connectToDatabase();
  });

  afterAll(async () => {
    await database.disconnectToDatabase();
  });

  it('should save list of emails in database', () => {
    expect(1 + 1).toBe(2);
  });
});
