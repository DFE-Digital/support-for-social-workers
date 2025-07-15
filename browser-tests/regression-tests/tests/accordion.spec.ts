
import { test, expect } from '@playwright/test';

test.describe('Accordion', () => {

    let elements = [];

    test.beforeEach(async ({ page }) => {
        await page.goto('/demo/accordion');
        elements['accordionContainer'] = page.getByTestId('accordion');
        elements['accordionSections'] = await elements['accordionContainer'].getByTestId('accordion-section');

    });

    test('Component structure', async ({ page }) => {

        await expect(elements['accordionContainer']).toBeVisible();
        await expect(elements['accordionSections']).toHaveCount(2);
    });

    test('Margins, Padding, Borders, Styles', async ({ page }) => {
        await expect(elements['accordionContainer']).toHaveClass('govuk-accordion');
        await expect(elements['accordionContainer']).toHaveCSS('margin-bottom', '30px');
        await expect(elements['accordionContainer']).toHaveCSS('border-bottom', '1px solid rgb(177, 180, 182)');
    });

    test('Click events', async ({ page }) => {
    });
});