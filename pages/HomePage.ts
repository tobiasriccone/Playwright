import { Locator, Page } from "@playwright/test"

export class HomePage {
    public readonly logo: Locator

    constructor(page: Page) {
        this.logo = page.locator("//div[@class='app_logo']")
    }
}