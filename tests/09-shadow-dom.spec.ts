import { test, expect } from '../fixtures/baseTest';

test.describe('09 - Shadow DOM', () => {
  test('interacts with elements encapsulated inside custom web component shadow root', async ({ shadowDomPage }) => {
    await shadowDomPage.goto();

    const sampleText = 'Shadow DOM Piercing Verified';
    await shadowDomPage.submitValue(sampleText);
    
    const echoText = await shadowDomPage.getOuterEchoText();
    expect(echoText).toContain(`Outer page received: ${sampleText}`);
  });
});
