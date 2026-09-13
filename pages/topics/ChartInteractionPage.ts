import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class ChartInteractionPage extends BasePage {
  readonly topicId = 'chart-interaction';
  readonly chartSvg: Locator;
  readonly chartBars: Locator;
  readonly legendItems: Locator;
  readonly hoveredValueMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.chartSvg = page.locator('[data-testid="chart"] svg');
    this.chartBars = page.locator('[data-testid="chart"] svg rect[fill="#4f46e5"]');
    this.legendItems = page.locator('[data-testid="expected-values"] li');
    this.hoveredValueMessage = page.getByTestId('hovered-value');
  }

  async waitForChart(): Promise<void> {
    await expect(this.chartSvg).toBeVisible({ timeout: 15000 });
    await expect(this.chartBars).toHaveCount(7);
    await expect(this.chartBars.first()).toBeVisible();
  }

  async getLegendCount(): Promise<number> {
    return await this.legendItems.count();
  }

  async hoverColumn(index: number): Promise<void> {
    const bar = this.chartBars.nth(index);
    await expect(bar).toBeVisible();
    await bar.hover();
  }

  async getExpectedDetails(index: number): Promise<{ category: string; value: string }> {
    const item = this.legendItems.nth(index);
    const category = (await item.getAttribute('data-category')) || '';
    const value = (await item.getAttribute('data-value')) || '';
    return { category, value };
  }
}
