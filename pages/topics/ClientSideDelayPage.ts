import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class ClientSideDelayPage extends BasePage {
  readonly topicId = 'client-side-delay';
  readonly startButton: Locator;
  readonly resultMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.startButton = page.getByTestId('start');
    this.resultMessage = page.getByTestId('result');
  }

  async startComputation(): Promise<void> {
    await this.startButton.click();
  }

  async waitForResult(timeoutMs = 12000): Promise<void> {
    await expect(this.resultMessage).toBeVisible({ timeout: timeoutMs });
  }

  async getResultText(): Promise<string> {
    return (await this.resultMessage.innerText()).trim();
  }
}
