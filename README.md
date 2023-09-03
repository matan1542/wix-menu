# nested-menu
## Server:
  ### API
  	* Add new item - fatherId: string,  title: string
  	* Add new submenu - fatherId: string,  title: string
  	* Rename (update) element - id: string, newName: string
  	* Delete element - id: string
  	* Get Children(parentId: string) => {{id, title}...
    Response:
    ```
    {  "imbOV0": {
    "url": "man",
    "title": "Man"
    },
    "5hSQzx": {
    "url": "children",
    "title": "Children"
    }}
    ```
  ### Utils:
    * save to file
    * update file
    * ...?
  ### save data
    * ItemsObject - id: string, title: string
    * mapObject (parent, chilld mapping) - id: string, parentId: string, childsId: Array
 ## Client:
   ### Components:
     * MenuItem - id: string, title: string, isSubmenu: bool, onClick: () => void
     * MenuItemContainer - itemList: Array
     * RightClickContainer - id: string, isSubmenu: bool
     * AddEditItem - id: string, title: string
  ### Data:
    * ItemsObject - id: string, title: string
    * mapObject (parent, chilld mapping) - id: string, parentId: string, childsId: Array
