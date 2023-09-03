export { updateItems, changeIds };
const updateItems = () => {};

function changeIds(data) {
  

  if (Array.isArray(data)) {
    return data.map((item) => changeIds(item));
  } else if (typeof data === "object") {
    if ("id" in data) {
      data.id = makeId();
    }
    if ("items" in data) {
      data.items = changeIds(data.items);
    }
    return data;
  }
  return data;
}

function makeId(length = 6) {
  var txt = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return txt;
}
