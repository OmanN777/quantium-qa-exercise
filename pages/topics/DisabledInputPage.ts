import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class DisabledInputPage extends BasePage {
  readonly topicId = 'disabled-input';
  readonly activateButton: Locator;
  readonly disabledInput: Locator;
  readonly resultMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.activateButton = page.getByTestId('activate');
    this.disabledInput = page.getByTestId('disabled-input');
    this.resultMessage = page.getByTestId('result');
  }

  async activate(): Promise<void> {
    await this.activateButton.click();
  }

  async waitForEnabledAndFill(text: string, timeoutMs = 12000): Promise<void> {
    await expect(this.disabledInput).toBeEnabled({ timeout: timeoutMs });
    await this.disabledInput.fill(text);
  }

  async getResultText(): Promise<string> {
    await expect(this.resultMessage).toBeVisible();
    return (await this.resultMessage.innerText()).trim();
  }
}
