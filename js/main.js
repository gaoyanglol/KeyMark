// 1.初始化数据
var instance = init()
var keys = instance['keys']
var hash = instance['hash']


//2.生成键盘
//遍历 keys，生成 kbd 标签
generateKbd(keys, hash)


//3.监听键盘
listenToKbd(hash)


//工具函数
function getLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name) || 'null')
}

function tag(tagName) {
  return document.createElement(tagName)
}

function createButton(id) {
  var button = tag('button')
  button.textContent = 'E'
  button.id = id
  button.onclick = function (xzkjcnxlkcjlk) {
    var hashKey = xzkjcnxlkcjlk.target.id
    var img2 = xzkjcnxlkcjlk.target.previousSibling
    hash[hashKey] = prompt('请输入要修改的网址')
    localStorage.setItem('zzz', JSON.stringify(hash))
    img2.src = "http://www." + hash[hashKey] + "/favicon.ico"
    img2.onerror = function (event) {
      event.target.src = "./images/holder.png"
    }
  }
  return button
}

function createImg(domain) {
  var img = tag("img")
  img.className = "fav-ico"
  if (domain) {
    img.src = "https://www." + domain + "/favicon.ico"
  } else {
    img.src = "./images/holder.png"
  }
  img.onerror = function (event) {
    event.target.src = "./images/holder.png"
  }
  return img
}

function init() {
  var keys = [['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], ['z', 'x', 'c', 'v', 'b', 'n', 'm']]

  var hash = { 'q': 'qq.com', 'w': 'weibo.com', 'e': 'ele.me', 'r': 'mozilla.com', 't': 'opera.com', 'y': 'zhihu.com', 'u': 'tianya.com' }
  // 取出 localStorage 种的 zzz 对应的 hash
  var hashInLocalStorage = getLocalStorage('zzz')
  if (hashInLocalStorage) {
    hash = hashInLocalStorage
  }
  return {
    "keys": keys,
    "hash": hash
  }
}

function generateKbd(keys, hash) {
  for (var i = 0; i < keys.length; i++) {
    var div = tag('div')
    main.appendChild(div)
    for (var j = 0; j < keys[i].length; j++) {
      var button = createButton(keys[i][j])
  
      var img = createImg(hash[keys[i][j]])
  
      var kbd = tag('kbd')
      kbd.textContent = keys[i][j]
  
      kbd.appendChild(img)
      kbd.appendChild(button)
      div.appendChild(kbd)
    }
  }
}

function listenToKbd(hash) {
  document.onkeypress = function (xzkjcnxlkcjlk) {
    var key = xzkjcnxlkcjlk['key']
    var address = hash[key]
    // this.location.href = 'http://' + website
    window.open('http://' + address, '_blank')
  }
}