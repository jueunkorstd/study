// 금칙어 : 콜라
// includes
// 문자가 있으면 true
// 없으면 false 반환
function hasCola(str) {
  if (str.includes("콜라")) {
    console.log("금칙어가 포함되어 있습니다.");
  } else {
    console.log("통과");
  }
}

hasCola("와 사이다가 짱이야!");
hasCola("무슨소리, 콜라가 최고");
hasCola("콜라");