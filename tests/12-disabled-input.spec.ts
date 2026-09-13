import { test, expect } from '../fixtures/baseTest';

test.describe('12 - Disabled Input', () => {
  test('waits for input to transition to enabled state before typing', async ({ disabledInputPage }) => {
    await disabledInputPage.goto();

    const payload = 'Enabled Input Text';
    await disabledInputPage.activate();
    await disabledInputPage.waitForEnabledAndFill(payload);
    
    const resultText = await disabledInputPage.getResultText();
    expect(resultText).toContain(`Captured: ${payload}`);
  });
});
