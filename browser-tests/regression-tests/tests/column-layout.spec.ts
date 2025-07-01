
import { test, expect } from '@playwright/test';

test.describe('Column Layout', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/demo/column-layout');
    });

    test('Layouts on page', async ({ page }) => {

        // the container for the whole nav
        await expect(page.getByTestId('column-layout-container')).toHaveCount(4);
    });

    test('Two-column layout', async ({ page }) => {
        let layout = page.getByTestId('column-layout-container').locator('nth=0');

        await expect(layout.getByTestId('column-layout-column')).toHaveCount(2);

        await expect(layout.getByTestId('column-layout-column').locator('nth=0')).toHaveClass(/govuk-grid-column-one-half/);
        await expect(layout.getByTestId('column-layout-column').locator('nth=0')).toContainText('This is a Rich Text Block within a 2 column Column Layout.');

        await expect(layout.getByTestId('column-layout-column').locator('nth=1')).toHaveClass(/govuk-grid-column-one-half/);
        await expect(layout.getByTestId('column-layout-column').locator('nth=1')).toContainText('This is a Content Link, within a Link Card, within a Column Layout');
        await expect(layout.getByTestId('column-layout-column').locator('nth=1')).toContainText('This is the text of the Link Card.');
    });

    test('Three-column layout', async ({ page }) => {
        let layout = page.getByTestId('column-layout-container').locator('nth=1');

        await expect(layout.getByTestId('column-layout-column')).toHaveCount(3);
        await expect(layout.getByTestId('column-layout-column').locator('nth=0')).toHaveClass(/govuk-grid-column-one-third/);
        await expect(layout.getByTestId('column-layout-column').locator('nth=0')).toContainText('This is a Rich Text Block within a 3 column Column Layout.');

        await expect(layout.getByTestId('column-layout-column').locator('nth=1')).toHaveClass(/govuk-grid-column-one-third/);
        await expect(layout.getByTestId('column-layout-column').locator('nth=1')).toContainText('This is a Rich Text Block within a 3 column Column Layout.');

        await expect(layout.getByTestId('column-layout-column').locator('nth=2')).toHaveClass(/govuk-grid-column-one-third/);
        await expect(layout.getByTestId('column-layout-column').locator('nth=2')).toContainText('This is a Rich Text Block within a 3 column Column Layout.');
    });

    test('Four-column layout', async ({ page }) => {
        let layout = page.getByTestId('column-layout-container').locator('nth=2');

        await expect(layout.getByTestId('column-layout-column')).toHaveCount(4);
        await expect(layout.getByTestId('column-layout-column').locator('nth=0')).toHaveClass(/govuk-grid-column-one-quarter/);
        await expect(layout.getByTestId('column-layout-column').locator('nth=0')).toContainText('This is a Rich Text Block within a 4 column Column Layout.');
        
        await expect(layout.getByTestId('column-layout-column').locator('nth=1')).toHaveClass(/govuk-grid-column-one-quarter/);
        await expect(layout.getByTestId('column-layout-column').locator('nth=1')).toContainText('This is a Rich Text Block within a 4 column Column Layout.');

        await expect(layout.getByTestId('column-layout-column').locator('nth=2')).toHaveClass(/govuk-grid-column-one-quarter/);
        await expect(layout.getByTestId('column-layout-column').locator('nth=2')).toContainText('This is a Rich Text Block within a 4 column Column Layout.');

        await expect(layout.getByTestId('column-layout-column').locator('nth=3')).toHaveClass(/govuk-grid-column-one-quarter/);
        await expect(layout.getByTestId('column-layout-column').locator('nth=3')).toContainText('This is a Rich Text Block within a 4 column Column Layout.');
    });

    test('Three-column layout with two populated columns', async ({ page }) => {
        let layout = page.getByTestId('column-layout-container').locator('nth=3');

        await expect(layout.getByTestId('column-layout-column')).toHaveCount(2); // only two columns
        await expect(layout.getByTestId('column-layout-column').locator('nth=0')).toHaveClass(/govuk-grid-column-one-third/); // each column is a third width
        await expect(layout.getByTestId('column-layout-column').locator('nth=0')).toContainText('This is a Rich Text Block within a 3 column Column Layout, which has only 2 items added.');

        await expect(layout.getByTestId('column-layout-column').locator('nth=1')).toHaveClass(/govuk-grid-column-one-third/);
        await expect(layout.getByTestId('column-layout-column').locator('nth=1')).toContainText('This is a Rich Text Block within a 3 column Column Layout, which has only 2 items added.');
    });

});