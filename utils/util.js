// 格式化日期
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

// 找寻数组中的元素
const findChild = (key, value, arr) => {
  for (let item of arr) {
    if (item[key] === value) return item
  }
  return {}
}



module.exports = {
  formatTime,
  findChild
}
