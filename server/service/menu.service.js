import fs from "fs";

export { getRootMenu, getItems };

const getRootMenu = async () => {
  fs.readFile("data/menu-items.json", "utf8", (err, data) => {
    if (err) throw new Error(err);
    const menuItems = JSON.parse(data);
    for (const item in menuItems) {
      if (menuItems[item].parentId === null) {
        res.send(menuItems[item]);
      }
    }
  });
};

const getItems = (id) => {
  fs.readFile("data/menu-items.json", "utf8", (err, data) => {
    if (err) throw new Error(err);
    const menuItems = JSON.parse(data);
    const parentItem = menuItems[id];
    if (parentItem?.children && Object.keys(parentItem?.children).length > 0) {
      let childrens = {};
      for (const item in parentItem.children) {
        childrens[item] = menuItems[item];
      }
      res.send(childrens);
    }
  });
};
