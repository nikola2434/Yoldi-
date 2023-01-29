import { FC, PropsWithChildren } from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import style from "./Layout.module.scss";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const user = null;
  return (
    <div className={style.layout}>
      <Header />
      {children}
      {!user && <Footer />}
    </div>
  );
};
