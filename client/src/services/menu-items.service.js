import axios from "axios";

export { readRootItems, readMenuItems, deleteMenuItem, addMenuItem };

const API_URL = process.env.REACT_APP_API_URL;

const readRootItems = async () => {
  const root = await axios.get(`${API_URL}menu-items`);
  return root.data;
};

const readMenuItems = async (id) => {
  const subMenuItems = await axios.get(`${API_URL}menu-items/${id}`);
  return subMenuItems.data;
};

const addMenuItem = async (menuItem) => {
  const newMenuItem = await axios.post(`${API_URL}menu-items`, menuItem);
  return newMenuItem.data;
};

const deleteMenuItem = async ({ id, parentId }) => {
  const deletedItem = await axios.delete(`${API_URL}menu-items`, {
    params: { id, parentId },
  });
  return deletedItem.data;
};
