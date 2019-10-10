// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:

// 输入: "()"
// 输出: true
// 示例 2:

// 输入: "()[]{}"
// 输出: true
// 示例 3:

// 输入: "(]"
// 输出: false
// 示例 4:

// 输入: "([)]"
// 输出: false
// 示例 5:

// 输入: "{[]}"
// 输出: true

/**
 * @param {string} s
 * @return {boolean}
 */

//遇到左括号就入栈 使用map存储括号对
//遇到右括号就判断是否是栈头第一个元素的map值 不是就直接返回false
var isValid = function(s) {
  var map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  var leftArr = [];
  for (var ch of s) {
    if (ch in map) {
      leftArr.push(ch);
    } else {
      if (ch != map[leftArr.pop()]) {
        return false;
      }
    }
  }
  return !leftArr.length;
};
//另一种思路但是比较慢参考rhinoc
//因为括号中开始一定是有一对括号是匹配的 如果没就肯定是false
//所以直接不停替换掉匹配的括号直到数组清空
var isValid = function(s) {
  while (s.length) {
    var temp = s;
    s = s.replace('()', '');
    s = s.replace('[]', '');
    s = s.replace('{}', '');
    if (s == temp) return false;
  }
  return true;
};
