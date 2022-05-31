/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";
import Layout from "../components/Layout";

import CollaboratorDetails from "../components/CollaboratorDetails";
import PositionsDetails from "../components/PositionsDetails";

const components = [
  {
    slug: "positions-details",
    label: "positions-details",
    component: <PositionsDetails />,
  },
  {
    slug: "collaborator-details",
    label: "collaborator-details",
    component: <CollaboratorDetails />,
  },
];

const Page = () => {
  const router = useRouter();
  const currentPath = router.query.route;

  const findSlugMatchingCmp = () => {
    return components.find((cmp) => {
      return cmp.slug === currentPath;
    });
  };

  useEffect(() => {
    const foundComponent = findSlugMatchingCmp();

    if (currentPath && !foundComponent) {
      router.push("/404");
    }
  }, [router]);

  const cmp = findSlugMatchingCmp();

  return cmp?.component;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
