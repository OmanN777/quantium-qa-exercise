import { test, expect } from '../fixtures/baseTest';

test.describe('06 - Progress Bar', () => {
  test('stops the progress bar at exactly 75%', async ({ progressBarPage }) => {
    await progressBarPage.goto();
    await progressBarPage.start();
    await progressBarPage.stopAt(75);
    expect(await progressBarPage.isSuccessful()).toBe(true);
    
    const resultText = await progressBarPage.getResultText();
    expect(resultText).toContain('Stopped at exactly 75%.');
  });
});
