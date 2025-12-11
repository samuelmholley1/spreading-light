import { test, expect } from '@playwright/test';

// Test all main pages for basic functionality
const pages = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
  { path: '/find-us', name: 'Find Us' },
  { path: '/subscriptions', name: 'Subscriptions' },
  { path: '/wholesale', name: 'Wholesale' },
  { path: '/general-newsletter', name: 'General Newsletter' },
  { path: '/schools-newsletter', name: 'Schools Newsletter' },
  { path: '/restaurants-newsletter', name: 'Restaurants Newsletter' },
  { path: '/admin', name: 'Admin' },
];

test.describe('Essential Page Tests', () => {
  for (const page of pages) {
    test(`${page.name} page loads and works`, async ({ page: browserPage }) => {
      // Navigate and check basic loading
      const response = await browserPage.goto(page.path);
      expect(response?.status()).toBe(200);
      
      // Wait for page to be ready
      await browserPage.waitForLoadState('networkidle');
      
      // Check basic content
      const title = await browserPage.title();
      expect(title).toBeTruthy();
      
      // Check navigation is present
      const navbar = browserPage.locator('nav');
      await expect(navbar).toBeVisible();
      
      // Check that main navigation links work (use .first() to avoid duplicates)
      const subscriptionsLink = browserPage.locator('a[href="/subscriptions"]').first();
      await expect(subscriptionsLink).toBeVisible();
      
      // Test mobile responsiveness
      await browserPage.setViewportSize({ width: 375, height: 667 });
      await expect(navbar).toBeVisible();
    });
  }
});

test.describe('Key Functionality', () => {
  test('subscription form works', async ({ page }) => {
    await page.goto('/subscriptions');
    
    const planOptions = page.locator('[class*="border-2 rounded-lg p-4 cursor-pointer"]');
    await expect(planOptions.first()).toBeVisible();
  });

  test('contact form elements present', async ({ page }) => {
    await page.goto('/contact');
    
    const emailInput = page.locator('input[type="email"]');
    const submitButton = page.locator('button[type="submit"]');
    
    await expect(emailInput).toBeVisible();
    await expect(submitButton).toBeVisible();
  });

  test('newsletter navigation dropdown works', async ({ page }) => {
    await page.goto('/');
    
    // Check that newsletter dropdown exists on desktop
    const newsletterButton = page.locator('button:has-text("Newsletter")');
    await expect(newsletterButton).toBeVisible();
    
    // Hover to show dropdown
    await newsletterButton.hover();
    
    // Check dropdown links are present
    const generalLink = page.locator('a[href="/general-newsletter"]');
    await expect(generalLink).toBeVisible();
  });

  test('newsletter subscription forms work', async ({ page }) => {
    // Test general newsletter subscription
    await page.goto('/general-newsletter');
    
    const emailInput = page.locator('input[type="email"]').first();
    const subscribeButton = page.locator('button:has-text("Subscribe")').first();
    
    await expect(emailInput).toBeVisible();
    await expect(subscribeButton).toBeVisible();
    
    // Test restaurants newsletter has SMS option
    await page.goto('/restaurants-newsletter');
    
    const smsInput = page.locator('input[type="tel"]');
    const smsButton = page.locator('button:has-text("Subscribe to SMS")');
    
    await expect(smsInput).toBeVisible();
    await expect(smsButton).toBeVisible();
  });

  test('admin dashboard loads correctly', async ({ page }) => {
    await page.goto('/admin');
    
    // Check main admin elements are present
    const dashboardTitle = page.locator('h1:has-text("Admin Dashboard")');
    const emailSection = page.locator('h2:has-text("Email Newsletters")');
    const smsSection = page.locator('h2:has-text("SMS Communications")');
    
    await expect(dashboardTitle).toBeVisible();
    await expect(emailSection).toBeVisible();
    await expect(smsSection).toBeVisible();
    
    // Check that send buttons are present
    const sendButtons = page.locator('button:has-text("Send")');
    expect(await sendButtons.count()).toBeGreaterThan(0);
  });

  test('sample newsletter page loads', async ({ page }) => {
    await page.goto('/general-newsletter/2025-08-30-complete-growing-guide');
    
    // Check main newsletter content
    const title = page.locator('h1:has-text("Complete Guide")');
    const backLink = page.locator('a:has-text("Back to Newsletter Archive")');
    
    await expect(title).toBeVisible();
    await expect(backLink).toBeVisible();
  });
});
