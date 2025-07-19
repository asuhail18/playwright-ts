import { test, expect } from '@playwright/test';

test.describe('Checkboxes & Tooltips', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4300/');
    await page.getByText('Modal & Overlays').click();
  });

  test('should check and uncheck all checkboxes', async ({ page }) => {
    await page.getByText('Toastr').click();
    const hideOnClick = page.getByRole('checkbox', { name: 'Hide on click' });
    await hideOnClick.check({ force: true });
    await expect(hideOnClick).toBeChecked();

    const allboxes = page.getByRole('checkbox');
    for (const box of await allboxes.all()) {
      await box.uncheck({ force: true });
      expect(await box.isChecked()).toBeFalsy();
    }
  });

  test('should show tooltip on hover', async ({ page }) => {
    await page.getByText('Tooltip').click();
    const tooltipcard = page.locator('nb-card', { hasText: 'Tooltip Placements' });
    await tooltipcard.getByRole('button', { name: 'Top' }).hover();
    const tooltipText = await page.locator('nb-tooltip').textContent();
    expect(tooltipText).toEqual('This is a tooltip');
  });
});