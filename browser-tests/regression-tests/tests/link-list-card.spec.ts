
import { test, expect } from '@playwright/test';

test.describe('Link List Card', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/demo/link-list-card');
    });

    test('Borders and Margins', async ({ page }) => {
        let linkListCardContainer = page.getByTestId('link-list-card').locator('nth=0');

        await expect(linkListCardContainer).toBeVisible();

        let header = linkListCardContainer.locator('h2');

        await expect(header).toBeVisible();
        await expect(header).toHaveClass('govuk-heading-m');
        await expect(header).toHaveCSS('margin-bottom', '24px');

        let list = linkListCardContainer.locator('ul');

        await expect(list).toBeVisible();
        await expect(list).toHaveClass('govuk-list');
        await expect(list).toHaveCSS('margin-bottom', '20px');

        let listItem = list.locator('li').locator('nth=0');

        await expect(listItem).toBeVisible();
        await expect(listItem).toHaveCSS('margin-bottom', '5px');
    });

    test('Styles', async ({ page }) => {
        let linkListCardContainer = page.getByTestId('link-list-card').locator('nth=0');
        let header = linkListCardContainer.locator('h2');

        await expect(header).toBeVisible();
        await expect(header).toHaveClass('govuk-heading-m');
        await expect(header).toHaveCSS('font-size', '24px');
        await expect(header).toHaveCSS('font-weight', '700');
        await expect(header).toHaveCSS('line-height', '31.9999px');

        let listItem = linkListCardContainer.locator('li').locator('nth=0');

        await expect(listItem).toBeVisible();
        await expect(listItem).toHaveCSS('display', 'list-item');

        let link = listItem.locator('a');
        await expect(link).toBeVisible();
        await expect(link).toHaveClass('govuk-link content-link--with-icon');
        await expect(link).toHaveCSS('font-size', '24px');
        await expect(link).toHaveCSS('font-weight', '700');
        await expect(link).toHaveCSS('line-height', '31.9999px');
        await expect(link).toHaveCSS('color', 'rgb(29, 112, 184)');
        await expect(link).toHaveCSS('text-decoration', 'underline 1px solid rgb(29, 112, 184)');
    });
});