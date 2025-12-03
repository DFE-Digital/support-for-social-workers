
import { test, expect } from '@playwright/test';

test.describe('Link Card', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/demo/link-card');
    });

    test('Borders and Margins', async ({ page }) => {
        let linkCardContainer = page.getByTestId('link-card').locator('nth=0');

        await expect(linkCardContainer).toBeVisible();
        await expect(linkCardContainer).toHaveClass('dfe-card card-stretch');
        await expect(linkCardContainer).toHaveCSS('border', '1px solid rgb(177, 180, 182)');
        await expect(linkCardContainer).toHaveCSS('display', 'flex');
        await expect(linkCardContainer).toHaveCSS('flex', '1 1 0%');
        await expect(linkCardContainer).toHaveCSS('flex-direction', 'column');

        let linkCard = linkCardContainer.locator('div');

        await expect(linkCard).toBeVisible();
        await expect(linkCard).toHaveClass('dfe-card-container');
        await expect(linkCard).toHaveCSS('padding', '20px');
        await expect(linkCard).toHaveCSS('display', 'flex');
        await expect(linkCard).toHaveCSS('flex-grow', '1');
        await expect(linkCard).toHaveCSS('flex-direction', 'column');

        let link = linkCard.locator('h3');
        await expect(link).toBeVisible();
        await expect(link).toHaveClass('govuk-heading-m');
        await expect(link).toHaveCSS('margin-bottom', '24px');

        let text = linkCard.locator('p');

        await expect(text).toBeVisible();
        await expect(text).toHaveCSS('margin-bottom', '5px');
    });

    test('Styles', async ({ page }) => {
        let linkCardContainer = page.getByTestId('link-card').locator('nth=0');

        let link = linkCardContainer.locator('a');

        await expect(link).toBeVisible();
        await expect(link).toHaveClass('govuk-link govuk-link--no-visited-state dfe-card-link--header content-link--with-icon');
        await expect(link).toHaveCSS('color', 'rgb(29, 112, 184)');
        await expect(link).toHaveCSS('cursor', 'pointer');
        await expect(link).toHaveCSS('font-size', '24px');
        await expect(link).toHaveCSS('font-weight', '700');
        await expect(link).toHaveCSS('line-height', '31.9999px');

        let text = linkCardContainer.locator('p');

        await expect(text).toBeVisible();
        await expect(text).toHaveClass('govuk-!-margin-bottom-1');
        await expect(text).toHaveCSS('color', 'rgb(11, 12, 12)');
        await expect(text).toHaveCSS('font-size', '19px');
        await expect(text).toHaveCSS('font-weight', '400');
        await expect(text).toHaveCSS('line-height', '25.3333px');
    });
});