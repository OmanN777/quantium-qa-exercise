import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class AjaxDataPage extends BasePage {
  readonly topicId = 'ajax-data';
  readonly fetchButton: Locator;
  readonly resultBox: Locator;

  constructor(page: Page) {
    super(page);
    this.fetchButton = page.getByTestId('fetch');
    this.resultBox = page.getByTestId('ajax-data');
  }

  async triggerFetch(): Promise<void> {
    await this.fetchButton.click();
  }

  async waitForData(timeoutMs = 15000): Promise<void> {
    await expect(this.resultBox).toBeVisible({ timeout: timeoutMs });
  }

  async getRecordCount(): Promise<number> {
    const countAttr = await this.resultBox.getAttribute('data-count');
    return countAttr ? parseInt(countAttr, 10) : 0;
  }

  async getResultText(): Promise<string> {
    return (await this.resultBox.innerText()).trim();
  }
}
