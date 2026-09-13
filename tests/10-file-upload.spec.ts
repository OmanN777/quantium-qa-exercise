import { test, expect } from '../fixtures/baseTest';

test.describe('10 - File Upload', () => {
  test('uploads file and verifies presence in uploaded list', async ({ fileUploadPage }) => {
    await fileUploadPage.goto();

    const testFilePath = 'test-data/sample_document.txt';
    await fileUploadPage.uploadFile(testFilePath);
    
    const uploadedFiles = await fileUploadPage.getUploadedFileNames();
    expect(uploadedFiles.some((name) => name.includes('sample_document.txt'))).toBe(true);
  });
});
