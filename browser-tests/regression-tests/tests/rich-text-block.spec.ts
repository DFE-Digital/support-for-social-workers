
import { test, expect } from '@playwright/test';

test.describe('Rich Text Block', () => {

    let elements = [];

    test.beforeEach(async ({ page }) => {
        await page.goto('/demo/rich-text');

        elements["header"] = page.getByText('Rich Text Block demo');
        elements["text"] = page.getByText('This is an example of a rich text block with Display Title: Yes and Title Level: 2.');
    });

    test('Padding and Margins', async ({ page }) => {
        await expect(elements["header"]).toBeVisible();
        await expect(elements["header"]).toHaveCSS('padding-top', '10px');
        await expect(elements["header"]).toHaveCSS('margin-bottom', '24px');

        await expect(elements["text"]).toBeVisible();
        await expect(elements["text"]).toHaveCSS('margin-bottom', '20px');
    });

    test('Title formatting', async ({ page }) => {
        await expect(elements["header"]).toHaveClass('govuk-heading-m');
        await expect(elements["header"]).toHaveCSS('font-size', '24px');
        await expect(elements["header"]).toHaveCSS('font-weight', '700');
        await expect(elements["header"]).toHaveCSS('line-height', '31.9999px');
    });
    
    test('Normal text formatting', async ({ page }) => {
        await expect(elements["text"]).toHaveClass('govuk-body-m');
        await expect(elements["text"]).toHaveCSS('font-size', '19px');
        await expect(elements["text"]).toHaveCSS('font-weight', '400');
        await expect(elements["text"]).toHaveCSS('line-height', '25px');
    });

    test('Italic text formatting', async ({ page }) => {
        let italicText = await page.locator('li > i');

        await expect(italicText).toBeVisible();
        await expect(italicText).toHaveCSS('font-style', 'italic');
        await expect(italicText).toHaveCSS('font-weight', '400');
        await expect(italicText).toHaveCSS('font-size', '19px');        
        await expect(italicText).toHaveCSS('line-height', '25px');
    });

    test('Bold text formatting', async ({ page }) => {
        let boldText = await page.locator('li > strong');

        await expect(boldText).toBeVisible();
        await expect(boldText).toHaveCSS('font-weight', '700');
        await expect(boldText).toHaveCSS('font-size', '19px');
        await expect(boldText).toHaveCSS('line-height', '25px');
    });

    test('Underlined text formatting', async ({ page }) => {
        let underlinedText = await page.locator('li > u');

        await expect(underlinedText).toBeVisible();
        await expect(underlinedText).toHaveCSS('font-weight', '400');
        await expect(underlinedText).toHaveCSS('font-size', '19px');
        await expect(underlinedText).toHaveCSS('text-decoration', 'underline solid rgb(11, 12, 12)');
        await expect(underlinedText).toHaveCSS('line-height', '25px');
    });

    test('Subscript text formatting', async ({ page }) => {
        let subscriptText = await page.locator('li > sub');

        await expect(subscriptText).toBeVisible();
        await expect(subscriptText).toHaveCSS('font-weight', '400');
        await expect(subscriptText).toHaveCSS('font-size', '15.8333px');
        await expect(subscriptText).toHaveCSS('vertical-align', 'sub');
        await expect(subscriptText).toHaveCSS('line-height', '20.8333px');
    });

    test('Superscript text formatting', async ({ page }) => {
        let superscriptText = await page.locator('li > sup');

        await expect(superscriptText).toBeVisible();
        await expect(superscriptText).toHaveCSS('font-weight', '400');
        await expect(superscriptText).toHaveCSS('font-size', '15.8333px');
        await expect(superscriptText).toHaveCSS('vertical-align', 'super');
        await expect(superscriptText).toHaveCSS('line-height', '20.8333px');
    });

    test('Code text formatting', async ({ page }) => {
        let codeText = await page.locator('li > code');

        await expect(codeText).toBeVisible();
        await expect(codeText).toHaveCSS('font-weight', '400');
        await expect(codeText).toHaveCSS('font-size', '19px');
        await expect(codeText).toHaveCSS('line-height', '25px');
    });

    test('Content separator formatting', async ({ page }) => {
        let separator = await page
            .locator('hr:below(:text("embedded content separator"))')
            .locator('nth=0');

        await expect(separator).toBeVisible();
        await expect(separator).toHaveClass('govuk-section-break govuk-section-break--m govuk-section-break--visible');
        await expect(separator).toHaveCSS('border-bottom', '1px solid rgb(177, 180, 182)');
        await expect(separator).toHaveCSS('margin-bottom', '20px');
        await expect(separator).toHaveCSS('margin-top', '20px');
    });

    test('H1 text formatting', async ({ page }) => {
        let h1Text = await page
            .locator('h1')
            .filter({ hasText: "This is a Heading 1"});

        await expect(h1Text).toBeVisible();
        await expect(h1Text).toHaveCSS('font-weight', '700');
        await expect(h1Text).toHaveCSS('font-size', '48px');
        await expect(h1Text).toHaveCSS('line-height', '63.9998px');
        await expect(h1Text).toHaveCSS('margin-bottom', '30px');
    });

    test('H2 text formatting', async ({ page }) => {
        let h2Text = await page
            .locator('h2')
            .filter({ hasText: "This is a Heading 2"});

        await expect(h2Text).toBeVisible();
        await expect(h2Text).toHaveCSS('font-weight', '700');
        await expect(h2Text).toHaveCSS('font-size', '32px');
        await expect(h2Text).toHaveCSS('line-height', '42.6666px');
        await expect(h2Text).toHaveCSS('margin-bottom', '24px');
    });

    test('H3 text formatting', async ({ page }) => {
        let h3Text = await page
            .locator('h3')
            .filter({ hasText: "This is a Heading 3"});

        await expect(h3Text).toBeVisible();
        await expect(h3Text).toHaveCSS('font-weight', '700');
        await expect(h3Text).toHaveCSS('font-size', '24px');
        await expect(h3Text).toHaveCSS('line-height', '31.9999px');
        await expect(h3Text).toHaveCSS('margin-bottom', '24px');
    });

    test('Link text formatting', async ({ page }) => {
        let linkText = await page
            .locator('a')
            .filter({ hasText: "this"});

        await expect(linkText).toBeVisible();
        await expect(linkText).toHaveClass('govuk-link');
        await expect(linkText).toHaveCSS('font-weight', '400');
        await expect(linkText).toHaveCSS('font-size', '19px');
        await expect(linkText).toHaveCSS('line-height', '25px');
        await expect(linkText).toHaveCSS('color', 'rgb(29, 112, 184)');
        await expect(linkText).toHaveCSS('text-decoration', 'underline 1px solid rgb(29, 112, 184)');
    });

    test('Block quote text formatting', async ({ page }) => {
        let blockQuoteText = await page.getByText(/^Block quotes$/);
        let blockQuoteContainer = page.locator('div.govuk-inset-text').filter({ has: blockQuoteText });

        await expect(blockQuoteContainer).toBeVisible();
        await expect(blockQuoteContainer).toHaveClass('govuk-inset-text');
        await expect(blockQuoteContainer).toHaveCSS('border-left', '10px solid rgb(52, 124, 169)');
        await expect(blockQuoteContainer).toHaveCSS('margin-bottom', '30px');
        await expect(blockQuoteContainer).toHaveCSS('margin-top', '30px');
        await expect(blockQuoteContainer).toHaveCSS('padding', '15px');

        await expect(blockQuoteText).toBeVisible();
        await expect(blockQuoteText).toHaveClass('govuk-body-m');
        await expect(blockQuoteText).toHaveCSS('font-weight', '400');
        await expect(blockQuoteText).toHaveCSS('font-size', '19px');
        await expect(blockQuoteText).toHaveCSS('line-height', '25px');
    });

    test('Numbered list text formatting', async ({ page }) => {
        let numberedListContainer = await page.locator('ol');
        let numberedListItems = await numberedListContainer.locator('li');

        await expect(numberedListContainer).toBeVisible();
        await expect(numberedListContainer).toHaveClass('govuk-list govuk-list--number');
        await expect(numberedListContainer).toHaveCSS('margin-bottom', '20px');
        await expect(numberedListContainer).toHaveCSS('padding-left', '20px');
        await expect(numberedListContainer).toHaveCSS('list-style-type', 'decimal');

        await expect(numberedListItems).toHaveCount(2);
        await expect(numberedListItems.locator("nth=0")).toHaveText('Dog');
        await expect(numberedListItems.locator("nth=0")).toHaveCSS('font-weight', '400');
        await expect(numberedListItems.locator("nth=0")).toHaveCSS('font-size', '19px');
        await expect(numberedListItems.locator("nth=0")).toHaveCSS('line-height', '25px');

        await expect(numberedListItems.locator("nth=1")).toHaveText('Cat');
        await expect(numberedListItems.locator("nth=1")).toHaveCSS('font-weight', '400');
        await expect(numberedListItems.locator("nth=1")).toHaveCSS('font-size', '19px');
        await expect(numberedListItems.locator("nth=1")).toHaveCSS('line-height', '25px');
    });

    test('Table formatting', async ({ page }) => {
        let table = page.locator('table');
        let tableHeaderRow = table.locator('thead');
        let tableHeaderElements = tableHeaderRow.locator('th');
        let tableBody = table.locator('tbody').locator('nth=0');
        let tableBodyElements = tableBody.locator('td');
        let tableCell = tableBodyElements.locator('nth=0');
        let tableCellText = tableCell.locator('p');


        await expect(table).toBeVisible();
        await expect(table).toHaveClass('govuk-table');
        await expect(table).toHaveCSS('border-collapse', 'collapse');

        await expect(tableHeaderRow).toBeVisible();
        await expect(tableHeaderRow).toHaveCount(1);
        await expect(tableHeaderRow).toHaveClass('govuk-table__head');

        await expect(tableHeaderElements).toHaveCount(2);
        await expect(tableHeaderElements.locator('nth=0')).toBeVisible();
        await expect(tableHeaderElements.locator('nth=0')).toHaveClass('govuk-table__header');
        await expect(tableHeaderElements.locator('nth=0')).toHaveCSS('font-weight', '700');
        await expect(tableHeaderElements.locator('nth=0')).toHaveCSS('padding', '10px 20px 10px 0px');
        await expect(tableHeaderElements.locator('nth=0')).toHaveCSS('border-bottom', '1px solid rgb(177, 180, 182)');
        await expect(tableHeaderElements.locator('nth=0')).toHaveCSS('text-align', 'left');
        await expect(tableHeaderElements.locator('nth=0')).toHaveCSS('vertical-align', 'top');

        await expect(tableBody).toBeVisible();
        await expect(tableBody).toHaveClass('govuk-table__body');

        await expect(tableBodyElements).toHaveCount(2);

        await expect(tableCell).toHaveClass('govuk-table__cell');
        await expect(tableCell).toHaveCSS('border-bottom', '1px solid rgb(177, 180, 182)');
        await expect(tableCell).toHaveCSS('padding', '10px 20px 10px 0px');
        await expect(tableCell).toHaveCSS('text-align', 'left');
        await expect(tableCell).toHaveCSS('vertical-align', 'top');

        await expect(tableCellText).toBeVisible();
        await expect(tableCellText).toHaveClass('govuk-body-m');
        await expect(tableCellText).toHaveCSS('font-size', '19px');
        await expect(tableCellText).toHaveCSS('font-weight', '400');
        await expect(tableCellText).toHaveCSS('line-height', '25px');
        await expect(tableCellText).toHaveCSS('margin-bottom', '20px');
    });

    test('Embedded image formatting', async ({ page }) => {
        let image = page.getByAltText('A white goose with a slice of pizza in its mouth.');
        await expect(image).toBeVisible();
    });
});