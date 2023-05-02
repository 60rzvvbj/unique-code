import { checkCode, createCode } from "..";

test("test 1", async () => {
  let code = createCode("test");
  console.log(code);
  expect(checkCode("test", code)).toBe(true);
  expect(checkCode("test", "asdas")).toBe(false);
});
