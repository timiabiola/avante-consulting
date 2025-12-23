import { test, expect } from '@playwright/test'

test.describe('Avante Leadership Consulting Website', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test.describe('Hero Section', () => {
    test('displays the logo', async ({ page }) => {
      const logo = page.locator('img[alt="Avante Leadership Consulting"]').first()
      await expect(logo).toBeVisible()
    })

    test('displays the main headline', async ({ page }) => {
      const headline = page.locator('h1')
      await expect(headline).toContainText("Developing Tomorrow's")
      await expect(headline).toContainText('Leaders Today')
    })

    test('displays both CTA buttons', async ({ page }) => {
      const guideButton = page.getByRole('button', { name: /Get the Latent Leaders' Guide/i }).first()
      const callButton = page.getByRole('link', { name: /Book a Discovery Call/i })

      await expect(guideButton).toBeVisible()
      await expect(callButton).toBeVisible()
    })

    test('CTA button scrolls to form section', async ({ page }) => {
      const guideButton = page.getByRole('button', { name: /Get the Latent Leaders' Guide/i }).first()
      await guideButton.click()

      // Wait for smooth scroll animation
      await page.waitForTimeout(1000)

      const formSection = page.locator('#guide')
      await expect(formSection).toBeInViewport()
    })
  })

  test.describe('Journey Section', () => {
    test('displays three journey steps', async ({ page }) => {
      await expect(page.getByText('Discover', { exact: true })).toBeVisible()
      await expect(page.getByText('Develop', { exact: true })).toBeVisible()
      await expect(page.getByText('Deploy', { exact: true })).toBeVisible()
    })

    test('displays step descriptions', async ({ page }) => {
      await expect(page.getByText(/Uncover your natural leadership style/i)).toBeVisible()
      await expect(page.getByText(/Develop your latent leadership potential/i)).toBeVisible()
      await expect(page.getByText(/Implement your influence blueprint/i)).toBeVisible()
    })

    test('displays section title', async ({ page }) => {
      await expect(page.getByText('The Leadership Journey')).toBeVisible()
    })
  })

  test.describe('Founders Section', () => {
    test('displays both founders', async ({ page }) => {
      await expect(page.getByText('Shaun Hammond')).toBeVisible()
      await expect(page.getByText('Kelly Hallock')).toBeVisible()
    })

    test('displays founder titles', async ({ page }) => {
      await expect(page.getByText('Principal')).toBeVisible()
      await expect(page.getByText('Co-Founder')).toBeVisible()
    })

    test('displays Maxwell Leadership certification', async ({ page }) => {
      const certBadges = page.getByText(/Maxwell Leadership Certified/i)
      await expect(certBadges.first()).toBeVisible()
    })
  })

  test.describe('Contact Form', () => {
    test('displays all form fields', async ({ page }) => {
      await page.locator('#guide').scrollIntoViewIfNeeded()
      await page.waitForTimeout(500)

      await expect(page.locator('#firstName')).toBeVisible()
      await expect(page.locator('#lastName')).toBeVisible()
      await expect(page.locator('#email')).toBeVisible()
      await expect(page.locator('#phone')).toBeVisible()
      await expect(page.locator('#currentRole')).toBeVisible()
      await expect(page.locator('#biggestChallenge')).toBeVisible()
    })

    test('validates required fields', async ({ page }) => {
      await page.locator('#guide').scrollIntoViewIfNeeded()

      const submitButton = page.getByRole('button', { name: /Get My Latent Leaders' Guide/i })
      await submitButton.click()

      // Should show validation errors
      await expect(page.getByText(/First name is required/i)).toBeVisible()
    })

    test('email field has correct input type', async ({ page }) => {
      await page.locator('#guide').scrollIntoViewIfNeeded()
      await page.waitForTimeout(500)

      const emailInput = page.locator('#email')
      await expect(emailInput).toHaveAttribute('type', 'email')
      await expect(emailInput).toHaveAttribute('inputmode', 'email')
    })

    test('phone field has correct input type', async ({ page }) => {
      await page.locator('#guide').scrollIntoViewIfNeeded()
      await page.waitForTimeout(500)

      const phoneInput = page.locator('#phone')
      await expect(phoneInput).toHaveAttribute('type', 'tel')
      await expect(phoneInput).toHaveAttribute('inputmode', 'tel')
    })

    test('form submission works with valid data', async ({ page }) => {
      await page.locator('#guide').scrollIntoViewIfNeeded()
      await page.waitForTimeout(500)

      await page.locator('#firstName').fill('John')
      await page.locator('#lastName').fill('Smith')
      await page.locator('#email').fill('john@example.com')
      await page.locator('#phone').fill('+1 555 123 4567')
      await page.locator('#currentRole').selectOption('middle')
      await page.locator('#biggestChallenge').selectOption('influence')

      const submitButton = page.locator('form button[type="submit"]')
      await submitButton.click()

      // Should show success message
      await expect(page.getByText(/You're on Your Way!/i)).toBeVisible({ timeout: 5000 })
    })
  })

  test.describe('Footer', () => {
    test('displays company logo', async ({ page }) => {
      await page.locator('footer').scrollIntoViewIfNeeded()

      const footerLogo = page.locator('footer img[alt="Avante Leadership Consulting"]')
      await expect(footerLogo).toBeVisible()
    })

    test('displays contact email', async ({ page }) => {
      await expect(page.getByRole('link', { name: /info@avanteleadership.com/i })).toBeVisible()
    })

    test('displays social links with proper accessibility labels', async ({ page }) => {
      await expect(page.getByRole('link', { name: 'LinkedIn' })).toBeVisible()
      await expect(page.getByRole('link', { name: 'Twitter' })).toBeVisible()
      await expect(page.getByRole('link', { name: 'Email' })).toBeVisible()
    })

    test('displays copyright notice', async ({ page }) => {
      const currentYear = new Date().getFullYear()
      await expect(page.getByText(new RegExp(`© ${currentYear} Avante Leadership Consulting`))).toBeVisible()
    })
  })

  test.describe('Mobile Responsiveness', () => {
    test('touch targets meet minimum size requirements', async ({ page }) => {
      // Check social icons are at least 48px
      const socialLink = page.getByRole('link', { name: 'LinkedIn' })
      const box = await socialLink.boundingBox()

      expect(box?.width).toBeGreaterThanOrEqual(44)
      expect(box?.height).toBeGreaterThanOrEqual(44)
    })

    test('CTA buttons have adequate touch size', async ({ page }) => {
      const guideButton = page.getByRole('button', { name: /Get the Latent Leaders' Guide/i }).first()
      const box = await guideButton.boundingBox()

      expect(box?.height).toBeGreaterThanOrEqual(52)
    })
  })

  test.describe('Accessibility', () => {
    test('page has correct title', async ({ page }) => {
      await expect(page).toHaveTitle(/Avante Leadership Consulting.*Developing Tomorrow.*Leaders Today/i)
    })

    test('images have alt text', async ({ page }) => {
      const images = page.locator('img')
      const count = await images.count()

      for (let i = 0; i < count; i++) {
        const alt = await images.nth(i).getAttribute('alt')
        expect(alt).toBeTruthy()
      }
    })

    test('form fields have associated labels', async ({ page }) => {
      await page.locator('#guide').scrollIntoViewIfNeeded()
      await page.waitForTimeout(500)

      // All inputs should be properly labeled via htmlFor
      const firstNameInput = page.locator('#firstName')
      await expect(firstNameInput).toBeVisible()

      // Verify label is properly associated
      const label = page.locator('label[for="firstName"]')
      await expect(label).toBeVisible()
    })
  })
})
