import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class AutoWaitPage extends BasePage {
  readonly topicId = 'auto-wait';
  readonly startButton: Locator;
  readonly targetButton: Locator;
  readonly resultMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.startButton = page.getByTestId('start');
    this.targetButton = page.getByTestId('target');
    this.resultMessage = page.getByTestId('result');
  }

  async startSequence(): Promise<void> {
    await this.startButton.click();
  }

  async waitForReadyAndClickOnce(timeoutMs = 15000): Promise<void> {
    await expect(this.targetButton).toHaveText('Click me now', { timeout: timeoutMs });
    await expect(this.targetButton).toBeEnabled();
    await this.targetButton.click();
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
