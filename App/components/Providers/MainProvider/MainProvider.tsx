import { FC, PropsWithChildren } from "react";
import { Layout } from "../../layout/Layout";
import { HeadProvider } from "../HeadProvider/HeadProvider";

export const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <HeadProvider>
        <Layout>{children}</Layout>
      </HeadProvider>
    </>
  );
};
