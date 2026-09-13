import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class ScrollbarsPage extends BasePage {
  readonly topicId = 'scrollbars';
  readonly scrollContainer: Locator;
  readonly scrollTargetButton: Locator;
  readonly resultMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.scrollContainer = page.getByTestId('scroll-container');
    this.scrollTargetButton = page.getByTestId('scroll-target');
    this.resultMessage = page.getByTestId('result');
  }

  async bringTargetIntoViewAndClick(): Promise<void> {
    await this.scrollTargetButton.scrollIntoViewIfNeeded();
    await this.scrollTargetButton.click();
  }

  async getResultText(): Promise<string> {
    await expect(this.resultMessage).toBeVisible();
    return (await this.resultMessage.innerText()).trim();
  }
}
