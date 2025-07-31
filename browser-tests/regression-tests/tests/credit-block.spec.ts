
import { test, expect } from '@playwright/test';

test.describe('Credit block', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/demo/credit-block');
    });

    test('Margins and Padding', async ({ page }) => {
        let creditBlockContainer = await page.getByTestId('credit-block').locator('nth=0');

        await expect(creditBlockContainer).toBeVisible();
        await expect(creditBlockContainer).toHaveClass('credit-block govuk-details');
        await expect(creditBlockContainer).toHaveCSS('margin-bottom', '30px');
    });

    test('Styling', async ({ page }) => {
        let creditBlockContainer = await page.getByTestId('credit-block').locator('nth=1');
        await expect(creditBlockContainer).toHaveCSS('font-size', '19px');
        await expect(creditBlockContainer).toHaveCSS('font-weight', '400');
        await expect(creditBlockContainer).toHaveCSS('line-height', '25px');

        let link = creditBlockContainer.locator('a');

        await expect(link).toHaveClass('govuk-link');
        await expect(link).toHaveCSS('color', 'rgb(29, 112, 184)');
        await expect(link).toHaveCSS('text-decoration', 'underline 1px solid rgb(29, 112, 184)');
        await expect(link).toHaveCSS('cursor', 'pointer');
        await expect(link).toHaveCSS('font-size', '19px');
        await expect(link).toHaveCSS('font-weight', '400');
        await expect(link).toHaveCSS('line-height', '25px');
    });
});