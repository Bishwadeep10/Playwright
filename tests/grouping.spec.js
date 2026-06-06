import { test } from '@playwright/test';

test.beforeAll("Before All",async ()=>{
    console.log("Before All");
});

test.afterAll("After All",async ()=>{
    console.log("After All");
});

test.beforeEach("Before Each",async ()=>{
    console.log("Before Each");
});

test.afterEach("After Each",async ()=>{
    console.log("After Each");
});

test.describe.configure({mode:"serial"});

test.describe("Group1",{tag : "@reg"},async ()=>{
    test("Dummy1 @sanity",async ()=>{
        console.log("Dummy1");
    })
    test("Dummy2",async ()=>{
        console.log("Dummy2");
    })
});
test.describe("Group2",async ()=>{
    test("Dummy3",async ()=>{
        console.log("Dummy3");
    })
    test("Dummy4",async ()=>{
        console.log("Dummy4");
    })
});