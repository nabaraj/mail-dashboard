const useLocal = {
  save: function (fieldName, data) {
    window.localStorage.setItem(fieldName, JSON.stringify(data))
  },
  get: function (fieldName) {
    return JSON.parse(window.localStorage.getItem(fieldName));
  },
  removeItem: function (fieldName) {
    window.localStorage.removeItem(fieldName);
  },
  reset: function () {
    window.localStorage.clear();
  }
}
const filterList = function (data) {
  return data.filter(item => !item.opened).length;
}
const ID = function () {
  return Math.random().toString(36).substr(2, 9);
};
const ganerateAvatarStr = function (name) {
  let nameArr = name.split(" ");
  let firstChar = nameArr[0] ? nameArr[0][0] : '';
  let secondChar = nameArr[1] ? nameArr[1][0] : '';
  return firstChar + secondChar;
}


export { useLocal, filterList, ID, ganerateAvatarStr };
