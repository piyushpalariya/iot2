import {device, element, by, waitFor} from "detox"

describe("Splash Screen", () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  // beforeEach(async () => {
  //   //await device.reloadReactNative()
  // })
  it("should have splashscreen", async () => {
    await expect(element(by.id("splashscreen"))).toBeVisible()
  })
  it("should have activity indicator", async () => {
    await expect(element(by.id("loading"))).toBeVisible()
  })
})

describe("Login Screen", () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  // beforeEach(async () => {
  //   //await device.reloadReactNative()
  // })

  it("should have login screen", async () => {
    await waitFor(element(by.id("login screen"))).toBeVisible()
  })
  it("should have email input", async () => {
    await waitFor(element(by.id("email"))).toBeVisible()
  })
  it("should have password input", async () => {
    await waitFor(element(by.id("password"))).toBeVisible()
  })
  it("should have login button", async () => {
    await waitFor(element(by.id("login button"))).toBeVisible()
  })
})
