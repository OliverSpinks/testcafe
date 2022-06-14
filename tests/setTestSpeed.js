import { Selector } from "testcafe";

fixture("Speed Test Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

const nameInput = Selector('#developer-name');

test('Set Test Speed Test', async t => {
    await t 
    .setTestSpeed(0.01)
    .typeText(nameInput, 'Oliver')
    .typeText(nameInput, ' Spinks');

});