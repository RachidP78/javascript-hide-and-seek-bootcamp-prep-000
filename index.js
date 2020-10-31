
function getFirstSelector(selector) {
  // accepts a selector and returns the first element that matches.
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  const increaseRank = document.getElementById('app').querySelectorAll('ul.ranked-list')
  for (let i = 0; i < increaseRank.length; i++) {
    increaseRank[i].innerHTML = ((parseInt(increaseRank[i].innerHTML)) + n)
  }
}

function deepestChild() {

}
