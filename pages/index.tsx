import { Heading } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import { GetStaticProps } from "next";
import { ReactElement, useState } from "react";
import Layout from "../components/Layout";
import Tabs from "../components/Tabs";

import * as S from "../styles/styles";

export type Trole = {
  name: number;
  departament: string;
  agents_quantity: number;
};

type TrolesItems = {
  roles: Trole[];
};

export type Tstatus = "active" | "inactive";

export type Tagent = {
  agent_id: number;
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: Tstatus;
};

type TagentsItems = {
  items: Tagent[];
};

export type HomeProps = {
  agents: Tagent[];
  roles: Trole[];
};

const Home = ({ agents, roles }: HomeProps) => {
  const [initialTab, setInitialTab] = useState<boolean>(true);

  return (
    <S.Container>
      <Heading
        fontSize={32}
        color="#34423d"
        mb={6}
        ml={["10px", null, "0"]}
      ></Heading>

      <Tabs agents={agents} roles={roles} />
    </S.Container>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: resAgents }: AxiosResponse<TagentsItems> = await axios.get(
    "https://pp-api-desafio.herokuapp.com/agents"
  );
  const { data: resRoles }: AxiosResponse<TrolesItems> = await axios.get(
    "https://pp-api-desafio.herokuapp.com/roles"
  );
  const agents = resAgents.items;
  const roles = resRoles.roles;

  return {
    props: {
      agents,
      roles,
    },
  };
};

export default Home;
