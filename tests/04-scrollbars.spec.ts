import { test, expect } from '../fixtures/baseTest';

test.describe('04 - Scrollbars', () => {
  test('scrolls to hidden button inside container and registers click', async ({ scrollbarsPage }) => {
    await scrollbarsPage.goto();
    await scrollbarsPage.bringTargetIntoViewAndClick();
    
    const resultText = await scrollbarsPage.getResultText();
    expect(resultText).toContain('Target reached and clicked.');
  });
});
