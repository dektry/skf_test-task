const MenuAPI = {
  Obtain: async () => {
    const response = await fetch(process.env.MENU_DATA_URL);
    return response.json();
  },
};

export default MenuAPI;
