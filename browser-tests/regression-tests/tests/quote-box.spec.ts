
import { test, expect } from '@playwright/test';

test.describe('Quote box', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/demo/quote-box');
    });

    test('Margins, Padding, and Borders', async ({ page }) => {
        let quoteBoxContainer = await page.getByTestId('quote-box').locator('nth=0');

        await expect(quoteBoxContainer).toBeVisible();
        await expect(quoteBoxContainer).toHaveClass('blockquote-container');
        await expect(quoteBoxContainer).toHaveCSS('padding-top', '10px');
        await expect(quoteBoxContainer).toHaveCSS('padding-bottom', '10px');

        let quoteBox = await quoteBoxContainer.locator('blockquote');

        await expect(quoteBox).toBeVisible();
        await expect(quoteBox).toHaveClass('quote');
        await expect(quoteBox).toHaveCSS('margin', '16px 0px 16px 40px');
        await expect(quoteBox).toHaveCSS('border', '3px solid rgb(11, 12, 12)');
        await expect(quoteBox).toHaveCSS('padding', '20px');

        let pseudoElement = quoteBox.evaluate(el => window.getComputedStyle(el, ':before'));

        expect((await pseudoElement).content).toBe('\"“\"');
        expect((await pseudoElement).fontSize).toBe('128px');
        expect((await pseudoElement).fontFamily).toBe('serif');
        expect((await pseudoElement).height).toBe('50px');
        expect((await pseudoElement).marginTop).toBe('-51.2px');
        expect((await pseudoElement).paddingLeft).toBe('10px');
        expect((await pseudoElement).paddingRight).toBe('10px');

        let quoteBoxText = quoteBox.getByText('This is the Quote Text.');

        await expect(quoteBoxText).toHaveCSS('margin-top', '10px');
        await expect(quoteBoxText).toHaveCSS('margin-bottom', '20px');
        await expect(quoteBoxText).toHaveCSS('padding-left', '60px');
    });

    test('Styling - right aligned attribution', async ({ page }) => {

        let quoteBox = await page
            .getByTestId('quote-box')
            .locator('nth=0')
            .locator('blockquote');

        let quoteBoxText = quoteBox.getByText('This is the Quote Text.');
        let quoteBoxAttributionText = quoteBox.getByText('Maria');

        await expect(quoteBoxText).toBeVisible();
        await expect(quoteBoxText).toHaveCSS('font-size', '19px');
        await expect(quoteBoxText).toHaveCSS('font-weight', '400');
        await expect(quoteBoxText).toHaveCSS('line-height', '25px');

        await expect(quoteBoxAttributionText).toBeVisible();

        await expect(quoteBoxAttributionText).toHaveCSS('font-size', '19px');
        await expect(quoteBoxAttributionText).toHaveCSS('font-weight', '400');
        await expect(quoteBoxAttributionText).toHaveCSS('line-height', '25px');
        await expect(quoteBoxAttributionText).toHaveCSS('padding-right', '75px');
        await expect(quoteBoxAttributionText).toHaveCSS('text-align', 'right');
    });

    test('Styling - left aligned attribution', async ({ page }) => {
        
        let quoteBox = await page
            .getByTestId('quote-box')
            .locator('nth=1')
            .locator('blockquote');

        let quoteBoxText = quoteBox.getByText('the attribution is left-aligned');
        let quoteBoxAttributionText = quoteBox.getByText('Maria');

        await expect(quoteBoxText).toBeVisible();
        await expect(quoteBoxText).toHaveCSS('font-size', '19px');
        await expect(quoteBoxText).toHaveCSS('font-weight', '400');
        await expect(quoteBoxText).toHaveCSS('line-height', '25px');

        await expect(quoteBoxAttributionText).toBeVisible();

        await expect(quoteBoxAttributionText).toHaveCSS('font-size', '19px');
        await expect(quoteBoxAttributionText).toHaveCSS('font-weight', '400');
        await expect(quoteBoxAttributionText).toHaveCSS('line-height', '25px');
        await expect(quoteBoxAttributionText).toHaveCSS('padding-left', '60px');
        await expect(quoteBoxAttributionText).toHaveCSS('text-align', 'left');
    });

    test('Styling - centre aligned attribution', async ({ page }) => {
        
        let quoteBox = await page
            .getByTestId('quote-box')
            .locator('nth=2')
            .locator('blockquote');

        let quoteBoxText = quoteBox.getByText('the attribution is centre-aligned');
        let quoteBoxAttributionText = quoteBox.getByText('Maria');

        await expect(quoteBoxText).toBeVisible();
        await expect(quoteBoxText).toHaveCSS('font-size', '19px');
        await expect(quoteBoxText).toHaveCSS('font-weight', '400');
        await expect(quoteBoxText).toHaveCSS('line-height', '25px');

        await expect(quoteBoxAttributionText).toBeVisible();

        await expect(quoteBoxAttributionText).toHaveCSS('font-size', '19px');
        await expect(quoteBoxAttributionText).toHaveCSS('font-weight', '400');
        await expect(quoteBoxAttributionText).toHaveCSS('line-height', '25px');
        await expect(quoteBoxAttributionText).toHaveCSS('padding-left', '60px');
        await expect(quoteBoxAttributionText).toHaveCSS('text-align', 'center');
    });

    test('Styling - no attribution', async ({ page }) => {
        
        let quoteBox = await page
            .getByTestId('quote-box')
            .locator('nth=3')
            .locator('blockquote');

        let quoteBoxAttributionContainer = quoteBox.locator('div');

        await expect(quoteBoxAttributionContainer).toHaveCount(0);
    });

});