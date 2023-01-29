import { FC, PropsWithChildren } from "react";
import { Layout } from "../../layout/Layout";

export const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
};
