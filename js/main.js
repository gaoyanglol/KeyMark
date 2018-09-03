var keys = [['q','w','e','r','t','y','u','i','o','p'], ['a','s','d','f','g','h','j','k','l'], ['z','x','c','v','b','n','m']]

var hash = {'q': 'qq.com', 'w': 'weibo.com','e': 'ele.me', 'r': 'renren.com', 't': 'tianya.com', 'y': 'youku.com', 'u': 'uc.com', 'i': 'iqiyi.com', 'o': 'opera.com', 'p': 'pinterest.com', 'a': 'acfun.com', 's': 'sohu.com', 'z': 'zhihu.com', 'm': 'mozilla.com'}

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
    button.textContent = '编辑'
    button.id = keys[i][j]
    button.onclick = function(xzkjcnxlkcjlk) {
      hashKey = xzkjcnxlkcjlk.target.id
      hash[hashKey] = prompt('请输入要修改的网址')
      localStorage.setItem('zzz', JSON.stringify(hash))
      console.log(hash)
    }
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