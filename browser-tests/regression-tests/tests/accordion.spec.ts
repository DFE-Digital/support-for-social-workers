
import { test, expect } from '@playwright/test';

test.describe('Accordion', () => {

    let elements = [];

    test.beforeEach(async ({ page }) => {
        await page.goto('/demo/accordion');
        elements['accordionContainer'] = page.getByTestId('accordion');
        elements['accordionSections'] = await elements['accordionContainer'].getByTestId('accordion-section');
        elements['buttons'] = await elements['accordionContainer'].locator('button');

    });

    test('Component structure', async ({ page }) => {
        await expect(elements['accordionContainer']).toBeVisible();
        await expect(elements['accordionSections']).toHaveCount(2);
        await expect(elements['buttons']).toHaveCount(3);
    });

    test('Margins, Padding, Borders, Styles', async ({ page }) => {
        await expect(elements['accordionContainer']).toHaveClass('govuk-accordion');
        await expect(elements['accordionContainer']).toHaveCSS('margin-bottom', '30px');
        await expect(elements['accordionContainer']).toHaveCSS('border-bottom', '1px solid rgb(177, 180, 182)');

        let section = elements['accordionSections'].locator('nth=0');
        let sectionHeading = section.locator('h2');

        await expect(sectionHeading).toHaveClass('govuk-accordion__section-heading');
        await expect(sectionHeading).toHaveCSS('font-size', '32px');
        await expect(sectionHeading).toHaveCSS('line-height', '42.6666px');
        await expect(sectionHeading).toHaveCSS('font-weight', '700');
        
        let sectionSummary = section.getByText('This is an accordion section summary line');

        await expect(sectionSummary).toHaveClass('govuk-accordion__section-summary-focus');
        await expect(sectionSummary).toHaveCSS('font-size', '19px');
        await expect(sectionSummary).toHaveCSS('line-height', '25px');
        await expect(sectionSummary).toHaveCSS('font-weight', '400');
    });

    test('Click events', async ({ page }) => {
        let showHideAllButton = elements['buttons'].locator('nth=0');
        let showHideFirstButton = elements['buttons'].locator('nth=1');
        let showHideSecondButton = elements['buttons'].locator('nth=2');
        let firstSectionContent = elements['accordionSections'].locator('nth=0').getByText('This is an accordion section content item.');
        let secondSectionContent = elements['accordionSections'].locator('nth=1').getByText('This is another accordion section content item.');

        // clicking show/hide on first section
        await expect(firstSectionContent).not.toBeVisible();
        await expect(secondSectionContent).not.toBeVisible();
        await showHideFirstButton.click();
        await expect(firstSectionContent).toBeVisible();
        await expect(secondSectionContent).not.toBeVisible();
        await showHideFirstButton.click();
        await expect(firstSectionContent).not.toBeVisible();
        await expect(secondSectionContent).not.toBeVisible();

        // clicking show/hide on second section
        await expect(firstSectionContent).not.toBeVisible();
        await expect(secondSectionContent).not.toBeVisible();
        await showHideSecondButton.click();
        await expect(firstSectionContent).not.toBeVisible();
        await expect(secondSectionContent).toBeVisible();
        await showHideSecondButton.click();
        await expect(firstSectionContent).not.toBeVisible();
        await expect(secondSectionContent).not.toBeVisible();

        // clicking show/hide all
        await expect(firstSectionContent).not.toBeVisible();
        await expect(secondSectionContent).not.toBeVisible();
        await showHideAllButton.click();
        await expect(firstSectionContent).toBeVisible();
        await expect(secondSectionContent).toBeVisible();
        await showHideAllButton.click();
        await expect(firstSectionContent).not.toBeVisible();
        await expect(secondSectionContent).not.toBeVisible();

    });
});