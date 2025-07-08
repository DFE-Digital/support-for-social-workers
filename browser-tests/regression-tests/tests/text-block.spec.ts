
import { test, expect } from '@playwright/test';

test.describe('Text Block', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/demo/text');
    });

    test('Header has correct styles', async ({ page }) => {
        let header = page.getByText('Text Block demo');
        await expect(header).toBeVisible();
        await expect(header).toHaveCSS('font-size', '24px');
        await expect(header).toHaveCSS('font-weight', '700');
        await expect(header).toHaveCSS('padding-top', '8px');
        await expect(header).toHaveCSS('margin-bottom', '24px');
    });

    test('Text has correct styles', async ({ page }) => {
        let text = page.getByText('This is an example of a text block with \'Display Title\': Yes and Title Level: 3.');
        await expect(text).toBeVisible();
        await expect(text).toHaveClass('govuk-body-m');
        await expect(text).toHaveCSS('margin-bottom', '20px');
        await expect(text).toHaveCSS('font-size', '19px');
        await expect(text).toHaveCSS('font-weight', '400');
    });
});