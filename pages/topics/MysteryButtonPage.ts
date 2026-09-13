import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class MysteryButtonPage extends BasePage {
  readonly topicId = 'mystery-button';
  readonly sandboxFrame: FrameLocator;
  readonly frameButton: Locator;
  readonly outerCounter: Locator;

  constructor(page: Page) {
    super(page);
    this.sandboxFrame = page.frameLocator('[data-testid="sandbox-frame"]');
    this.frameButton = this.sandboxFrame.getByTestId('frame-button');
    this.outerCounter = page.getByTestId('outer-counter');
  }

  async clickFrameButton(): Promise<void> {
    await this.frameButton.click();
  }

  async getCounterText(): Promise<string> {
    return (await this.outerCounter.innerText()).trim();
  }

  async isSuccessful(): Promise<boolean> {
    await expect(this.outerCounter).toHaveClass(/success/);
    return true;
  }
}
