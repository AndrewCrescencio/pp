import Autocomplete from "react-autocomplete";
import { useRouter } from "next/router";
import axios from "axios";
import {
  Tabs as Ctabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import Image from "next/image";

import { useEffect, useRef, useState } from "react";

import PositionsList from "../PositionsList";
import CollaboratorsList from "../CollaboratorsList";

import * as S from "./styles";

import moreVertical from "../../public/images/more-vertical.svg";

import type { Tagent, Trole } from "../../pages/index";

type TabsProps = {
  agents: Tagent[];
  roles: Trole[];
};
const Tabs = ({ agents, roles }: TabsProps): JSX.Element => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const handleWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    handleWindowWidth();
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const [inputValue, setInputValue] = useState<String | null>("");
  const router = useRouter();
  // const autocompleteStyles = {
  //   width: "100%",
  // };
  return (
    <>
      <Box
        __css={{
          boxShadow: "0px 4px 8px rgba(165, 171, 179, 0.16)",
          padding: ["40px 16px", "40px 16px", "50px 24px"],
          marginBottom: "80px",
        }}
        overflowX="auto"
        borderRadius={8}
        backgroundColor="#fff"
      >
        <Ctabs p={0} index={tabIndex} onChange={handleTabsChange}>
          {windowWidth >= 1280 ? (
            <TabList p={0} borderBottomColor="#EAEFED">
              <Tab
                width="196px"
                paddingBottom={4}
                paddingTop={0}
                color="#A3B8B0"
                _active={{ borderColor: "#22E0A1", color: "#34423D" }}
                _selected={{ borderColor: "#22E0A1", color: "#34423D" }}
              >
                Colaboradores
              </Tab>
              <Tab
                width="196px"
                paddingBottom={4}
                paddingTop={0}
                color="#A3B8B0"
                _active={{ borderColor: "#22E0A1", color: "#34423D" }}
                _selected={{ borderColor: "#22E0A1", color: "#34423D" }}
              >
                Cargos
              </Tab>
            </TabList>
          ) : (
            <Box backgroundColor="transparent">
              <S.MobileTabsControl ref={btnRef} onClick={onOpen}>
                <Text fontSize="16px" fontWeight={500} color="#587169">
                  {tabIndex === 0 ? "Colaboradores" : "Cargos"}
                </Text>
                <Image src={moreVertical} alt="More" />
              </S.MobileTabsControl>
            </Box>
          )}
          <S.AutocompleteWrapper>
            <span>Pesquisar por</span>
            <Autocomplete
              inputProps={{ placeholder: "Pesquise por nome" }}
              getItemValue={(item) => item.name}
              items={agents}
              shouldItemRender={(item, value) =>
                item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
              }
              renderItem={(item, isHighlighted) => (
                <div
                  style={{
                    background: isHighlighted ? "lightgray" : "white",
                  }}
                >
                  {item.name}
                </div>
              )}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onSelect={(val) => router.push("/collaborator-details")}
            />
          </S.AutocompleteWrapper>
          <TabPanels p={0}>
            <TabPanel p={0}>
              <CollaboratorsList agents={agents} />
            </TabPanel>
            <TabPanel p={0}>
              <PositionsList roles={roles} />
            </TabPanel>
          </TabPanels>
        </Ctabs>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          width="328px"
          margin="0 auto"
          borderRadius="12px 12px 0 0"
          boxShadow="0px 8px 24px rgba(165, 171, 179, 0.4)"
        >
          <DrawerCloseButton />
          <DrawerHeader>
            <Text fontWeight={600} fontSize="18px" color="#34423D">
              Categorias
            </Text>
          </DrawerHeader>

          <DrawerBody>
            <Text
              fontWeight={500}
              fontSize="16px"
              color="#34423D"
              mb="34px"
              cursor="pointer"
              onClick={() => {
                handleTabsChange(0), onClose();
              }}
            >
              Colaboradores
            </Text>
            <Text
              fontWeight={500}
              fontSize="16px"
              color="#34423D"
              mb="65px"
              cursor="pointer"
              onClick={() => {
                handleTabsChange(1), onClose();
              }}
            >
              Cargos
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Tabs;
