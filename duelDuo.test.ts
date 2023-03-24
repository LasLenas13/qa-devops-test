
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


test('"DUEL!" button is present and displayed', async () => {
    const duelButton = await driver.findElement(By.id('duel'));
    const displayed = await duelButton.isDisplayed();

    expect(displayed).toBe(true);
});

test('"wins" and "losses" headers are present and displayed', async () => {
    const winsHeader = await driver.findElement(By.id('wins'));
    const lossesHeader = await driver.findElement(By.id('losses'));
    const winsDisplayed = await winsHeader.isDisplayed();
    const lossesDisplayed = await lossesHeader.isDisplayed();

    expect(winsDisplayed).toBe(true);
    expect(lossesDisplayed).toBe(true);
});
