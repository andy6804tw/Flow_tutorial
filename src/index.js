// @flow
function foo(x: number): number { //規定傳入、傳出數字類型
  return x + 10;
}
foo("5"); //錯誤
foo(5); //正確
