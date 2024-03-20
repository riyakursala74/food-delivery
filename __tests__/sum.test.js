import sum from "../components/sum";
test("test the function sum", () => {
  const res = sum(2, 3);
  expect(res).toBe(5);
});
