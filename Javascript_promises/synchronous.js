function delay() {
  for (let i = 1; i < 1e10; i++) {
    console.log("Second");
  }
}
console.log("first");
delay();
console.log("Third");
console.log("fourth");
