const GameService = require('./game-service');

test('Tester', async() => {
    const testResult = await GameService.getAll();

    expect(testResult.code).toBe("200")
})