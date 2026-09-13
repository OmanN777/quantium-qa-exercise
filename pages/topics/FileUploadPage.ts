import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class FileUploadPage extends BasePage {
  readonly topicId = 'file-upload';
  readonly fileInput: Locator;
  readonly uploadedFilesContainer: Locator;

  constructor(page: Page) {
    super(page);
    this.fileInput = page.getByTestId('file-input');
    this.uploadedFilesContainer = page.getByTestId('uploaded-files');
  }

  async uploadFile(filePath: string): Promise<void> {
    await this.fileInput.setInputFiles(filePath);
  }

  async getUploadedFileNames(): Promise<string[]> {
    await expect(this.uploadedFilesContainer).toBeVisible();
    const fileElements = this.uploadedFilesContainer.getByTestId('uploaded-file');
    return await fileElements.allInnerTexts();
  }
}
