import { test, expect } from '../fixtures/baseTest';

test.describe('01 - Text Input', () => {
  test('updates button label to match entered text', async ({ textInputPage }) => {
    await textInputPage.goto();

    const expectedText = 'Automation Test Input';
    await textInputPage.fillInput(expectedText);
    await textInputPage.clickUpdateButton();
    expect(await textInputPage.getButtonLabel()).toBe(expectedText);
  });
});
