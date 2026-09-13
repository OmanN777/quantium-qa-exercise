import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TextInputPage } from '../pages/topics/TextInputPage';
import { ClientSideDelayPage } from '../pages/topics/ClientSideDelayPage';
import { AjaxDataPage } from '../pages/topics/AjaxDataPage';
import { ScrollbarsPage } from '../pages/topics/ScrollbarsPage';
import { DynamicTablePage } from '../pages/topics/DynamicTablePage';
import { ProgressBarPage } from '../pages/topics/ProgressBarPage';
import { VisibilityPage } from '../pages/topics/VisibilityPage';
import { OverlappedElementPage } from '../pages/topics/OverlappedElementPage';
import { ShadowDomPage } from '../pages/topics/ShadowDomPage';
import { FileUploadPage } from '../pages/topics/FileUploadPage';
import { MysteryButtonPage } from '../pages/topics/MysteryButtonPage';
import { DisabledInputPage } from '../pages/topics/DisabledInputPage';
import { ChartInteractionPage } from '../pages/topics/ChartInteractionPage';
import { AutoWaitPage } from '../pages/topics/AutoWaitPage';

type TestFixtures = {
  loginPage: LoginPage;
  textInputPage: TextInputPage;
  clientSideDelayPage: ClientSideDelayPage;
  ajaxDataPage: AjaxDataPage;
  scrollbarsPage: ScrollbarsPage;
  dynamicTablePage: DynamicTablePage;
  progressBarPage: ProgressBarPage;
  visibilityPage: VisibilityPage;
  overlappedElementPage: OverlappedElementPage;
  shadowDomPage: ShadowDomPage;
  fileUploadPage: FileUploadPage;
  mysteryButtonPage: MysteryButtonPage;
  disabledInputPage: DisabledInputPage;
  chartInteractionPage: ChartInteractionPage;
  autoWaitPage: AutoWaitPage;
};

export const test = base.extend<TestFixtures>({
  context: async ({ context }, use) => {
    // Authenticate session via initial script injection
    await context.addInitScript(() => {
      sessionStorage.setItem('qa.user', 'Candidate');
    });
    await use(context);
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  textInputPage: async ({ page }, use) => {
    await use(new TextInputPage(page));
  },
  clientSideDelayPage: async ({ page }, use) => {
    await use(new ClientSideDelayPage(page));
  },
  ajaxDataPage: async ({ page }, use) => {
    await use(new AjaxDataPage(page));
  },
  scrollbarsPage: async ({ page }, use) => {
    await use(new ScrollbarsPage(page));
  },
  dynamicTablePage: async ({ page }, use) => {
    await use(new DynamicTablePage(page));
  },
  progressBarPage: async ({ page }, use) => {
    await use(new ProgressBarPage(page));
  },
  visibilityPage: async ({ page }, use) => {
    await use(new VisibilityPage(page));
  },
  overlappedElementPage: async ({ page }, use) => {
    await use(new OverlappedElementPage(page));
  },
  shadowDomPage: async ({ page }, use) => {
    await use(new ShadowDomPage(page));
  },
  fileUploadPage: async ({ page }, use) => {
    await use(new FileUploadPage(page));
  },
  mysteryButtonPage: async ({ page }, use) => {
    await use(new MysteryButtonPage(page));
  },
  disabledInputPage: async ({ page }, use) => {
    await use(new DisabledInputPage(page));
  },
  chartInteractionPage: async ({ page }, use) => {
    await use(new ChartInteractionPage(page));
  },
  autoWaitPage: async ({ page }, use) => {
    await use(new AutoWaitPage(page));
  },
});

export { expect };
