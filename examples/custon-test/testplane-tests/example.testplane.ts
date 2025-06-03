describe("dom query test $", () => {
    it("CSP ENABLED git old", async ({ browser }) => {
        await browser.url("https://github.com/gemini-testing/testplane");

        await expect(browser.$(".f4.my-3")).toHaveText(
            "Testplane (ex-hermione) browser test runner based on mocha and wdio",
        );
    });

    it("CSP ENABLED git new", async ({ browser }) => {

        await browser.url("https://github.com/gemini-testing/testplane");

        await expect((await browser.getAllByLabelText("Homepage")).length).toBeGreaterThan(0);
    });

    // it("CSP DIS ya old", async ({browser}) => {
    //     await browser.url("https://ya.ru");
    //
    //     await expect(browser.$("*=Войти")).toHaveText(
    //         "Войти",
    //     );
    // });
    //
    // it("CSP DIS ya new", async ({browser}) => {
    //
    //     await browser.url("https://ya.ru");
    //
    //     await expect((await browser.getAllByLabelText("Алиса")).length).toBeGreaterThan(0);
    // });
});
