import _ from 'lodash';

export const menuItemsService = {
  updateTarget,
};

async function updateTarget(menu, id, updateData) {
  try {
    const target = await getTarget(menu, id);
    Object.assign(target, updateData);
    return menu;
  } catch (err) {
    throw new Error(err);
  }
}

async function getTarget(targetMenu, id) {
  const res = await findTarget(targetMenu);
  return res;
  function findTarget(targetMenu) {
    try {
      if (targetMenu?.id === id) {
        return targetMenu;
      }
      return (targetMenu?.items || [])
        .map((item) => findTarget(item))
        .filter((res) => _.isObject(res))[0];
    } catch (err) {
      throw new Error(err);
    }
  }
}
