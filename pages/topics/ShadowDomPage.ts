import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class ShadowDomPage extends BasePage {
  readonly topicId = 'shadow-dom';
  readonly shadowHost: Locator;
  readonly shadowInput: Locator;
  readonly shadowSubmit: Locator;
  readonly outerEcho: Locator;

  constructor(page: Page) {
    super(page);
    this.shadowHost = page.getByTestId('shadow-host');
    this.shadowInput = this.shadowHost.getByTestId('shadow-input');
    this.shadowSubmit = this.shadowHost.getByTestId('shadow-submit');
    this.outerEcho = page.getByTestId('outer-echo');
  }

  async submitValue(text: string): Promise<void> {
    await this.shadowInput.fill(text);
    await this.shadowSubmit.click();
  }

  async getOuterEchoText(): Promise<string> {
    await expect(this.outerEcho).toBeVisible();
    return (await this.outerEcho.innerText()).trim();
  }
}
