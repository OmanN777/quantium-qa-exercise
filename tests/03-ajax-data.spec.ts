import { test, expect } from '../fixtures/baseTest';

test.describe('03 - AJAX Data', () => {
  test('fetches asynchronous data and verifies response record count', async ({ ajaxDataPage }) => {
    await ajaxDataPage.goto();
    await ajaxDataPage.triggerFetch();
    await ajaxDataPage.waitForData(15000);

    const recordCount = await ajaxDataPage.getRecordCount();
    expect(recordCount).toBeGreaterThan(0);
    
    const resultText = await ajaxDataPage.getResultText();
    expect(resultText).toContain('200 OK');
    expect(resultText).toContain(`Loaded ${recordCount} records`);
  });
});
