import Navigation from "./components/Navigation";
import style from "./styles/style.module.scss";
import appContext from "./store/store";
import NavHeader from "./components/NavHeader";
import { useState } from "react";

const navItems = [
  {
    id: "b5h2dV",
    url: "products",
    title: "Products",
    items: [
      {
        id: "8Iuxhd",
        url: "women",
        title: "Women",
        items: [
          { id: "uj92Gm", url: "blouse", title: "Blouse" },
          { id: "bftQGf", url: "sweater", title: "Sweater" },
        ],
      },
      { id: "imbOV0", url: "man", title: "Man" },
      { id: "5hSQzx", url: "children", title: "Children" },
    ],
  },
  { id: "Q2BCYV", url: "contact-us", title: "Contact Us" },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contextValue = {
    isMenuOpen,
    setIsMenuOpen,
  };
  return (
    <div className={style.appContainer}>
      <appContext.Provider value={contextValue}>
        <NavHeader navItems={navItems} />
      </appContext.Provider>
    </div>
  );
}

export default App;
