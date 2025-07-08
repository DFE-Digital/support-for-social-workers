
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
});