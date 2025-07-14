
import { test, expect } from '@playwright/test';

test.describe('Accordion', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/demo/accordion');
    });

    test('Margins, Padding, and Borders', async ({ page }) => {
    });

    test('Click events', async ({ page }) => {
    });
});