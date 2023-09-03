import fs from "fs";

export { getRootMenu }

const getRootMenu = async () => {
    fs.readFile("data/menu-items.json", "utf8", (err, data) => {
             if(err) throw new Error(err);
             const menuItems = JSON.parse(data);
             for (const item in menuItems) { 
                 if (menuItems[item].parentId === null) {
                     res.send(menuItems[item]);
                 }
             }
         });
 }