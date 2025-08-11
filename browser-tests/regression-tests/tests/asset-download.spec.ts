
import { test, expect } from '@playwright/test';

test.describe('Asset Download', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/demo/asset-download');
    });

    test('Margins, Padding, Borders, and Styling', async ({ page }) => {
        let componentContainer = await page.getByTestId('asset-download').locator('nth=0');

        await expect(componentContainer).toBeVisible();
        await expect(componentContainer).toHaveClass('gem-c-attachment govuk-!-margin-bottom-6');
        await expect(componentContainer).toHaveCSS('margin-bottom', '30px');

        let iconContainer = componentContainer.getByTestId('asset-download-icon-container');

        await expect(iconContainer).toBeVisible();
        await expect(iconContainer).toHaveClass('gem-c-attachment__thumbnail govuk-!-display-none-print');
        await expect(iconContainer).toHaveCSS('margin-bottom', '15px');
        await expect(iconContainer).toHaveCSS('margin-right', '20px');
        await expect(iconContainer).toHaveCSS('padding', '5px');
        await expect(iconContainer).toHaveCSS('float', 'left');
        await expect(iconContainer).toHaveCSS('position', 'relative');
        await expect(iconContainer).toHaveCSS('width', '110px');
        await expect(iconContainer).toHaveCSS('height', '150px');
        await expect(iconContainer).toHaveCSS('max-width', '140px');

        let icon = iconContainer.locator('svg');
        await expect(icon).toBeVisible();
        await expect(icon).toHaveClass('gem-c-attachment__thumbnail-image gem-c-attachment__thumbnail-image--document');
        await expect(icon).toHaveCSS('border', '0px none rgba(11, 12, 12, 0.1)');
        await expect(icon).toHaveCSS('outline', 'rgba(11, 12, 12, 0.1) solid 5px');
        await expect(icon).toHaveCSS('box-shadow', 'rgba(11, 12, 12, 0.4) 0px 2px 2px 0px');
        await expect(icon).toHaveCSS('fill', 'rgb(177, 180, 182)');
        await expect(icon).toHaveCSS('stroke', 'rgb(177, 180, 182)');

        let detailsContainer = componentContainer.getByTestId('asset-download-details-container');
        await expect(detailsContainer).toBeVisible();
        await expect(detailsContainer).toHaveClass('gem-c-attachment__details');
        await expect(detailsContainer).toHaveCSS('padding-left', '164px');

        let detailsHeader = detailsContainer.locator('h3');
        await expect(detailsHeader).toBeVisible();
        await expect(detailsHeader).toHaveClass('gem-c-attachment__title');
        await expect(detailsHeader).toHaveCSS('margin-bottom', '15px');

        let detailsLink = detailsHeader.locator('a');
        await expect(detailsLink).toBeVisible();
        await expect(detailsLink).toHaveClass('govuk-link gem-c-attachment__link');
        await expect(detailsLink).toHaveCSS('font-size', '27px');
        await expect(detailsLink).toHaveCSS('font-weight', '400');
        await expect(detailsLink).toHaveCSS('color', 'rgb(29, 112, 184)');
        await expect(detailsLink).toHaveCSS('text-decoration', 'underline 1px solid rgb(29, 112, 184)');

        let metadataText = detailsContainer.getByText('MS Word Document');
        await expect(metadataText).toBeVisible();
        await expect(metadataText).toHaveClass('gem-c-attachment__attribute');
        await expect(metadataText).toHaveCSS('font-size', '19px');
        await expect(metadataText).toHaveCSS('font-weight', '400');



    });
});