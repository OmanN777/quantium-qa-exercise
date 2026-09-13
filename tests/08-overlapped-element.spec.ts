import { test, expect } from '../fixtures/baseTest';

test.describe('08 - Overlapped Element', () => {
  test('clicks email field to gain focus before typing', async ({ overlappedElementPage }) => {
    await overlappedElementPage.goto();

    const candidateEmail = 'candidate@quantium.pe';
    await overlappedElementPage.fillEmailWithFocus(candidateEmail);
    expect(await overlappedElementPage.isSuccessful()).toBe(true);
    
    const resultText = await overlappedElementPage.getResultText();
    expect(resultText).toContain(`Email captured: ${candidateEmail}`);
  });
});
