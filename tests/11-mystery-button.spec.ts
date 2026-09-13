import { test, expect } from '../fixtures/baseTest';

test.describe('11 - Mystery Button', () => {
  test('locates and clicks button inside sandboxed iframe to increment outer counter', async ({ mysteryButtonPage }) => {
    await mysteryButtonPage.goto();
    expect(await mysteryButtonPage.getCounterText()).toContain('Counter: 0');
    await mysteryButtonPage.clickFrameButton();
    expect(await mysteryButtonPage.isSuccessful()).toBe(true);
    expect(await mysteryButtonPage.getCounterText()).toContain('Counter: 1');
  });
});
