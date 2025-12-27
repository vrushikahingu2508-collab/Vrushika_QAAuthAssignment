import { test, expect } from '@playwright/test';

const baseURL = 'http://localhost:3000';

test('Successful registration', async ({ page }) => {
  await page.goto(`${baseURL}/register`);
  await page.fill('#name', 'Juli Sharma');
  await page.fill('#email', 'juli.sharma@gmail.com');
  await page.fill('#password', 'Juli@12345678');
  await page.fill('#confirmPassword', 'Juli@12345678');
  await page.click('#register');

  await expect(page.locator('.success')).toBeVisible();
});

test('Registration with duplicate email', async ({ page }) => {
  await page.goto(`${baseURL}/register`);
  await page.fill('#name', 'Juli Sharma');
  await page.fill('#email', 'juli.sharma@gmail.com');
  await page.fill('#password', 'Juli@12345678');
  await page.fill('#confirmPassword', 'Juli@12345678');
  await page.click('#register');

  await expect(page.locator('.error')).toContainText('already exists');
});

test('Successful login', async ({ page }) => {
  await page.goto(`${baseURL}/login`);
  await page.fill('#email', 'juli.sharma@gmail.com');
  await page.fill('#password', 'Juli@12345678');
  await page.click('#login');

  await expect(page).toHaveURL(`${baseURL}/dashboard`);
});

test('Login with invalid password', async ({ page }) => {
  await page.goto(`${baseURL}/login`);
  await page.fill('#email', 'juli.sharma@gmail.com');
  await page.fill('#password', 'Test@qw8734923');
  await page.click('#login');

  await expect(page.locator('.error')).toBeVisible();
});

test('Access dashboard without login', async ({ page }) => {
  await page.goto(`${baseURL}/dashboard`);
  await expect(page).toHaveURL(`${baseURL}/login`);
});
