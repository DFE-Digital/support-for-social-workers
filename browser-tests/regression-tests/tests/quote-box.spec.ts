
import { test, expect } from '@playwright/test';

test.describe('Column Layout', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/demo/quote-box');
    });

    test('Margins and Padding', async ({ page }) => {
    });

    test('Styling - right aligned attribution', async ({ page }) => {
    });

    test('Styling - left aligned attribution', async ({ page }) => {
    });

    test('Styling - centre aligned attribution', async ({ page }) => {
    });

    test('Styling - no attribution', async ({ page }) => {
    });

});