import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class OverlappedElementPage extends BasePage {
  readonly topicId = 'overlapped-element';
  readonly emailInput: Locator;
  readonly resultMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.getByTestId('overlapped-input');
    this.resultMessage = page.getByTestId('result');
  }

  async fillEmailWithFocus(email: string): Promise<void> {
    await this.emailInput.click();
    await this.emailInput.fill(email);
  }

  async getResultText(): Promise<string> {
    await expect(this.resultMessage).toBeVisible();
    return (await this.resultMessage.innerText()).trim();
  }

  async isSuccessful(): Promise<boolean> {
    await expect(this.resultMessage).toBeVisible();
    const className = await this.resultMessage.getAttribute('class');
    return className ? className.includes('success') : false;
  }
}
