import { test, expect } from '../fixtures/baseTest';

test.describe('07 - Visibility', () => {
  const hideTechniques = [
    { id: 'hide-display', name: 'Display None' },
    { id: 'hide-visibility', name: 'Visibility Hidden' },
    { id: 'hide-opacity', name: 'Zero Opacity' },
    { id: 'hide-offscreen', name: 'Off-screen Positioning' },
    { id: 'hide-zero-size', name: 'Zero Dimensions' },
    { id: 'hide-covered', name: 'Covered Overlay' },
  ];

  for (const technique of hideTechniques) {
    test(`detects element hidden via ${technique.name}`, async ({ visibilityPage }) => {
      await visibilityPage.goto();
      expect(await visibilityPage.isTargetVisibleToUser()).toBe(true);
      await visibilityPage.hideWithTechnique(technique.id);
      expect(await visibilityPage.isTargetVisibleToUser()).toBe(false);
      await visibilityPage.reset();
      expect(await visibilityPage.isTargetVisibleToUser()).toBe(true);
    });
  }
});
