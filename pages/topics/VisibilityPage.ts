import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class VisibilityPage extends BasePage {
  readonly topicId = 'visibility';
  readonly target: Locator;
  readonly coverOverlay: Locator;
  readonly resetButton: Locator;

  constructor(page: Page) {
    super(page);
    this.target = page.getByTestId('target');
    this.coverOverlay = page.getByTestId('cover-overlay');
    this.resetButton = page.getByTestId('visibility-reset');
  }

  async isTargetVisibleToUser(): Promise<boolean> {
    const isDomVisible = await this.target.isVisible();
    if (!isDomVisible) return false;

    const style = await this.target.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        opacity: parseFloat(computed.opacity),
        visibility: computed.visibility,
        display: computed.display,
      };
    });

    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === 0) {
      return false;
    }

    const box = await this.target.boundingBox();
    if (!box || box.width === 0 || box.height === 0 || box.x + box.width < 0 || box.y + box.height < 0) {
      return false;
    }

    const hasOverlay = await this.coverOverlay.isVisible().catch(() => false);
    if (hasOverlay) return false;

    return true;
  }

  async hideWithTechnique(techniqueId: string): Promise<void> {
    await this.page.getByTestId(techniqueId).click();
  }

  async reset(): Promise<void> {
    await this.resetButton.click();
  }
}
