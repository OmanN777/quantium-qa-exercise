import { test, expect } from '../fixtures/baseTest';

test.describe('14 - Auto Wait', () => {
  test('waits for target button to reach ready state and clicks exactly once', async ({ autoWaitPage }) => {
    await autoWaitPage.goto();
    await autoWaitPage.startSequence();
    await autoWaitPage.waitForReadyAndClickOnce();
    expect(await autoWaitPage.isSuccessful()).toBe(true);
    
    const resultText = await autoWaitPage.getResultText();
    expect(resultText).toContain('Target clicked exactly once at the right moment.');
  });
});
