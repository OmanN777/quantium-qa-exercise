import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class TextInputPage extends BasePage {
  readonly topicId = 'text-input';
  readonly inputField: Locator;
  readonly updateButton: Locator;

  constructor(page: Page) {
    super(page);
    this.inputField = page.getByTestId('text-input');
    this.updateButton = page.getByTestId('update-button');
  }

  async fillInput(text: string): Promise<void> {
    await this.inputField.fill(text);
  }

  async clickUpdateButton(): Promise<void> {
    await this.updateButton.click();
  }

  async getButtonLabel(): Promise<string> {
    return (await this.updateButton.innerText()).trim();
  }
}
