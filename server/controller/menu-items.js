import fs from "fs";

export { getItems, getRootItems, deleteItem };

const getItems = (req, res, next) => {
  const { id } = req.params;
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

const getRootItems = (req, res, next) => {
  fs.readFile("data/menu-items.json", "utf8", (err, data) => {
    if (err) throw new Error(err);
    const menuItems = JSON.parse(data);
    let rootItem = null;
    for (const item in menuItems) {
      if (menuItems[item].isRoot) {
        rootItem = menuItems[item];
      }
    }
    if (rootItem?.children && Object.keys(rootItem?.children).length > 0) {
      let childrens = {};
      if (rootItem) {
        for (const item in rootItem.children) {
          childrens[item] = menuItems[item];
        }
        res.send(childrens);
      }
    }
  });
};

const deleteItem = (req, res, next) => {
  const { id, parentId } = req.params;
  fs.readFile("data/menu-items.json", "utf8", (err, data) => {
    if (err) throw new Error(err);
    const menuItems = JSON.parse(data);
    if (menuItems[id]) delete menuItems[id];
    for (const item in menuItems[parentId]) {
      if (menuItems[parentId][id]) {
        delete menuItems[parentId][id];
      }
    }
    fs.writeFile("data/menu-items.json", JSON.stringify(menuItems), (err) => {
      if (err) throw new Error(err);
      res.send({ message: "Item deleted" });
    });
  });
};
