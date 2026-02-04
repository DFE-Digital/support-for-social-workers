
import { test, expect } from '@playwright/test';

test.describe('Breadcrumbs', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/demo/breadcrumbs2');
    });

    test('Borders and Margins', async ({ page }) => {
        let breadcrumbsContainer = page.getByTestId('breadcrumbs');

        await expect(breadcrumbsContainer).toBeVisible();
        await expect(breadcrumbsContainer).toHaveClass('govuk-breadcrumbs govuk-breadcrumbs--collapse-on-mobile');
        await expect(breadcrumbsContainer).toHaveCSS('margin-bottom', '10px');
        await expect(breadcrumbsContainer).toHaveCSS('padding-top', '15px');

        let breadcrumbList = breadcrumbsContainer.locator('ul');

        await expect(breadcrumbList).toBeVisible();
        await expect(breadcrumbList).toHaveCSS('margin-bottom', '15px');

        let breadcrumbItem = breadcrumbList.locator('li').locator('nth=0');

        await expect(breadcrumbItem).toBeVisible();
        await expect(breadcrumbItem).toHaveClass('govuk-breadcrumbs__list-item');
        await expect(breadcrumbItem).toHaveCSS('margin-bottom', '5px');
    });

    test('Styles', async ({ page }) => {

        let breadcrumbItem = page
            .getByTestId('breadcrumbs')
            .locator('li')
            .locator('nth=0');

        await expect(breadcrumbItem).toHaveCSS('font-size', '19px');
        await expect(breadcrumbItem).toHaveCSS('font-weight', '400');
        await expect(breadcrumbItem).toHaveCSS('line-height', '25.3333px');

        let breadcrumbLink = breadcrumbItem.locator('a');

        await expect(breadcrumbLink).toHaveClass('govuk-breadcrumbs__link');
        await expect(breadcrumbLink).toHaveCSS('text-decoration', 'underline 1px solid rgb(11, 12, 12)');
    });

    test('Interaction 1', async ({ page }) => {
        let breadcrumbItem = page
            .getByTestId('breadcrumbs')
            .locator('li')
            .locator('nth=0');

        await breadcrumbItem.click();
        await page.waitForURL('**/demo');
    });

    test('Interaction 2', async ({ page }) => {
        let breadcrumbItem = page
            .getByTestId('breadcrumbs')
            .locator('li')
            .locator('nth=1');

        await breadcrumbItem.click();
        await page.waitForURL('**/demo/breadcrumbs');
    });
});