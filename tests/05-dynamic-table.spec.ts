import { test, expect } from '../fixtures/baseTest';

test.describe('05 - Dynamic Table', () => {
  test('dynamically locates CPU value for Chrome regardless of column order', async ({ dynamicTablePage }) => {
    await dynamicTablePage.goto();
    
    const expectedCpu = await dynamicTablePage.getExpectedChromeCpu();
    const actualCpu = await dynamicTablePage.getCpuForBrowser('Chrome');
    expect(actualCpu).toBe(expectedCpu);
  });
});
