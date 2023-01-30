import { UsersList } from "@/App/components/screens/UsersList/UsersList";
import { UsersApi } from "@/App/services/UsersApi/UsersApi";
import { IUser } from "@/App/shared/interfaces/user.interface";
import { GetStaticProps, NextPage } from "next";
import useSWR from "swr";

const HomePage: NextPage<{ users: IUser[] }> = ({ users }) => {
  return <UsersList users={users} />;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const users = await UsersApi.getUsers();

    return {
      props: { users },
      revalidate: 10,
    };
  } catch (error) {
    return {
      props: { users: [] },
      revalidate: 10,
    };
  }
};

export default HomePage;
