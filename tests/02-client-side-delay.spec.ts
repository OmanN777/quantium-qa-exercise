import { test, expect } from '../fixtures/baseTest';

test.describe('02 - Client Side Delay', () => {
  test('waits for long asynchronous computation to complete', async ({ clientSideDelayPage }) => {
    await clientSideDelayPage.goto();
    await clientSideDelayPage.startComputation();
    await clientSideDelayPage.waitForResult(12000);

    const resultText = await clientSideDelayPage.getResultText();
    expect(resultText).toContain('Computation complete');
  });
});
