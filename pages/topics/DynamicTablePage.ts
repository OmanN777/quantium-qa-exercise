import { Page, Locator } from '@playwright/test';
import { BasePage } from '../BasePage';

export class DynamicTablePage extends BasePage {
  readonly topicId = 'dynamic-table';
  readonly chromeCpuLabel: Locator;
  readonly dataTable: Locator;

  constructor(page: Page) {
    super(page);
    this.chromeCpuLabel = page.getByTestId('chrome-cpu-label');
    this.dataTable = page.getByTestId('data-table');
  }

  async getExpectedChromeCpu(): Promise<string> {
    const label = await this.chromeCpuLabel.innerText();
    return label.replace('Chrome CPU:', '').trim();
  }

  async getCpuForBrowser(browserName: string): Promise<string> {
    const row = this.page.getByTestId(`row-${browserName.toLowerCase()}`);
    const cpuCell = row.locator('td[data-col="cpu"]');
    return (await cpuCell.innerText()).trim();
  }
}
