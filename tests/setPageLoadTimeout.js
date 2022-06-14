fixture("Set page timeout Fixture")
.page("https://devexpress.github.io/testcafe/");

test("Set page timeout Test", async t =>{
    await t
    .setPageLoadTimeout(0)
    .navigateTo("https://devexpress.github.io/testcafe/");
});