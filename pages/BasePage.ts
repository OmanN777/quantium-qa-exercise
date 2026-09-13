import { Page, Locator, expect } from '@playwright/test';

export abstract class BasePage {
  readonly page: Page;
  readonly testArea: Locator;
  readonly topicTitle: Locator;
  readonly explanation: Locator;
  readonly scenario: Locator;

  abstract readonly topicId: string;

  constructor(page: Page) {
    this.page = page;
    this.testArea = page.getByTestId('test-area');
    this.topicTitle = page.getByTestId('topic-title');
    this.explanation = page.getByTestId('explanation');
    this.scenario = page.getByTestId('scenario');
  }

  async goto(): Promise<void> {
    await this.page.goto(`/#/topics/${this.topicId}`);
    await expect(this.testArea).toBeVisible({ timeout: 45000 });
  }
}
