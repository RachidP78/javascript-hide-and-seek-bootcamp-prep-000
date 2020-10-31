
function getFirstSelector(selector) {
  // accepts a selector and returns the first element that matches.
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML)) + n
  }
}

function deepestChild() {
  let gNode = document.querySelector('#grand-node')
  let nextNode = gNode.children[0]

  while (nextNode) {
    gNode = nextNode
    nextNode = gNode.children[0]
  }
  return (gNode)
}
