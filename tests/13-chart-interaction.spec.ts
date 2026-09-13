import { test, expect } from '../fixtures/baseTest';

test.describe('13 - Chart Interaction', () => {
  test('hovers over each chart column and validates hovered value against legend', async ({ chartInteractionPage }) => {
    await chartInteractionPage.goto();
    await chartInteractionPage.waitForChart();

    const totalDays = await chartInteractionPage.getLegendCount();
    expect(totalDays).toBe(7);

    for (let i = 0; i < totalDays; i++) {
      const { category, value } = await chartInteractionPage.getExpectedDetails(i);
      await chartInteractionPage.hoverColumn(i);
      await expect(chartInteractionPage.hoveredValueMessage).toHaveAttribute('data-category', category);
      await expect(chartInteractionPage.hoveredValueMessage).toHaveAttribute('data-value', value);
      await expect(chartInteractionPage.hoveredValueMessage).toContainText(`Hovering ${category}`);
      await expect(chartInteractionPage.hoveredValueMessage).toContainText(`value ${value}`);
    }
  });
});
