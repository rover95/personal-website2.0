function IsPC() {
  return !/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone|SymbianOS/i.test(navigator.userAgent || navigator.vendor);
}

export default IsPC;