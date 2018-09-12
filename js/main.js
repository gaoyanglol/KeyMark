var keys = [['q','w','e','r','t','y','u','i','o','p'], ['a','s','d','f','g','h','j','k','l'], ['z','x','c','v','b','n','m']]

var hash = {'q': 'qq.com', 'w': 'weibo.com','e': 'ele.me', 'r': 'mozilla.com', 't': 'opera.com', 'y': 'zhihu.com','u': 'tianya.com'}

var hashInLocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null')
if(hashInLocalStorage) {
  hash = hashInLocalStorage
}

i = 0
while (i < keys.length) {
  div1 = document.createElement('div')
  main.appendChild(div1)
  j = 0
  while (j < keys[i].length) {
    kbd = document.createElement('kbd')
    kbd.textContent = keys[i][j]
    button = document.createElement('button')
    button.textContent = 'E'
    button.id = keys[i][j]
    img = document.createElement("img")
    img.className = "fav-ico"
    if (hash[keys[i][j]]) {
      img.src = "https://www." + hash[keys[i][j]] + "/favicon.ico"
    } else {
      img.src = "./images/holder.png"
    }
    img.onerror = function(event) {
      event.target.src = "./images/holder.png"
    }
    button.onclick = function(xzkjcnxlkcjlk) {
      hashKey = xzkjcnxlkcjlk.target.id
      img2 = xzkjcnxlkcjlk.target.previousSibling
      hash[hashKey] = prompt('请输入要修改的网址')
      localStorage.setItem('zzz', JSON.stringify(hash))
      console.log(hash)
    }
    kbd.appendChild(img)
    kbd.appendChild(button)
    div1.appendChild(kbd)
    j = j + 1
  }
  i = i + 1
}

document.onkeypress = function (xzkjcnxlkcjlk) {
  key = xzkjcnxlkcjlk['key']
  address = hash[key]
  // this.location.href = 'http://' + website
  window.open('http://' + address, '_blank')
}