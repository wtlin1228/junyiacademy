// 1.A 請寫一個程式把裡面的字串反過來
function reverseString(s) {
  // split 將輸入拆解成單一字元陣列
  // reverse 將陣列反轉
  // join 將單一字元陣列組合成字串
  return s.split('').reverse().join('');
}

// 1.B 請寫一個程式把裡面的字串，每個單字本身做反轉，但是單字的順序不變
function reverseWords(s) {
  // split 將輸入以空白拆解為陣列
  // reduce 使用 reverseString 將單字反轉並合併起來
  // trim 將前後的空白都去掉
  return s.split(' ')
          .reduce(function reverseWord(result, word) {
            result += reverseString(word) + ' ';
            return result;
          }, '')
          .trim();
}

console.log(reverseString('junyiacademy') == 'ymedacaiynuj');
console.log(reverseWords('flipped class room is important') == 'deppilf ssalc moor si tnatropmi');

// 2 請寫一個程式，Input 是一個數字，Output 是從 1 到這個數字，
//   扣除掉所有 3 的 倍數以及 5 的倍數，但是需要保留同時是 3 和 5 的倍數的總數字數
function getCount(n) {
  // 因為三和五的公倍數被扣除了兩次, 所以要將加兩倍的三和五的公倍數回來
  return n - Math.floor(n / 3) - Math.floor(n / 5) + 2 * Math.floor(n / 15);
}

console.log(getCount(15) == 9);

// 3
// 先拿混合的, 因為標示為混合的袋子不能同時放鉛筆以及原子筆, 所以只有兩種情況, 我會拿到鉛筆或原子筆.
// 情況 1. 拿到鉛筆, 表示有一個袋子只裝原子筆, 而標示為原子筆的袋子不能只裝原子筆, 
//        所以標示為原子筆的袋子一定是混合的, 而標示為鉛筆的袋子裝的就是原子筆.
//        標示   /  實際
//        混合   /  鉛筆
//        鉛筆   /  原子筆
//        原子筆  / 混合
// 情況 2. 拿到原子筆, 用上面的邏輯推論
//        標示   /  實際
//        混合   /  原子筆
//        鉛筆   /  混合
//        原子筆  / 鉛筆

// 4
// 這個問題可以簡化為, 因為客人以為套餐價格是 810 元, 所以三個人各出 270 元, 共付了 810 元, 
// 但是套餐其實只要 750 元, 所以原本應該要找 60 元, 但這 60 元被服務生私吞了!
// 因此應該是 270 * 3 - 60 = 750 也就是套餐實際的價錢.
// 如果看題目原本的算法 270 * 3 + 60 = 810 + 60 = 870, 可以想成三人都出 270, 服務生再幫忙出 60 元,
// 所以可以買 870 元的套餐, 跟 900 元相差 30 元就是認知的套餐價格差異, 900 - 870 = 30.