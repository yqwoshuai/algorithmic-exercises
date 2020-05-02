// 创建随机数组
function createArr(n, rangel, ranger) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let num = Math.round(Math.random() * (ranger - rangel) + rangel);
    arr.push(num);
  }
  return arr;
}

// 创建近乎有序数组
function createOrderArr(n, x) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }
  for (let i = 0; i <= x; i++) {
    let changeA = Math.ceil(Math.random() * n)
    let changeB = Math.ceil(Math.random() * n)
    let mid = arr[changeA]
    arr[changeA] = arr[changeB]
    arr[changeB] = mid
  }
  return arr;
}

// 检测算法时间
function countTime(name, fun, arr) {
  let startTime = Date.now();
  let checkArr = fun(arr);
  let endTime = Date.now();

  if (validateArr(checkArr)) {
    appendBody(name + '：' + (endTime - startTime) / 1000 + '秒')
  } else {
    appendBody('排序错误');
  }
}

// 验证排序成功
function validateArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// 页面显示排序时间
function appendBody(str) {
  let p = document.createElement('p');
  p.innerText = str;
  document.body.appendChild(p)
}