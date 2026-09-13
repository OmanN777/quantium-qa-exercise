import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class ProgressBarPage extends BasePage {
  readonly topicId = 'progress-bar';
  readonly progressBar: Locator;
  readonly startButton: Locator;
  readonly stopButton: Locator;
  readonly resultMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.progressBar = page.getByTestId('progress-bar');
    this.startButton = page.getByTestId('start');
    this.stopButton = page.getByTestId('stop');
    this.resultMessage = page.getByTestId('result');
  }

  async start(): Promise<void> {
    await this.startButton.click();
  }

  async stopAt(targetPercentage = 75): Promise<void> {
    await this.page.waitForFunction(
      (target) => {
        const bar = document.querySelector('[data-testid="progress-bar"]');
        return bar && Number(bar.getAttribute('aria-valuenow')) >= target;
      },
      targetPercentage
    );
    await this.stopButton.click();
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
