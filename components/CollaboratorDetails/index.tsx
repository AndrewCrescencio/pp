import { Text } from "@chakra-ui/react";
import * as S from "./styles";
import Image from "next/image";
import backIcon from "../../public/images/back-icon.svg";
import avatarIcon from "../../public/images/details-avatar-icon.svg";
import cpfIcon from "../../public/images/personal-info-details-icon-cpf.svg";
import dateIcon from "../../public/images/personal-info-details-icon-date.svg";
import phoneIcon from "../../public/images/personal-info-details-icon-phone.svg";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
const CollaboratorDetails = () => {
  return (
    <S.Container>
      <S.Header>
        <Link href="/">
          <Image src={backIcon} alt="back icon" width={36} height={36} />
        </Link>
        <Text fontSize="32px" fontWeight={600} color="#34423D">
          Detalhes do colaborador
        </Text>
      </S.Header>
      <S.InfoContainer>
        <S.InfoHeader>
          <Image src={avatarIcon} alt="avatar icon" width={80} height={80} />
          <S.InfoHeaderDetails>
            <Text fontSize="18px" color="#34423D" fontWeight={600}>
              Mothra Fernandes
            </Text>
            <Text fontSize="16px" color="#587169" fontWeight={400}>
              email@email.com
            </Text>
          </S.InfoHeaderDetails>
        </S.InfoHeader>
        <S.PersonalInfo>
          <Text color="#34423D" fontWeight={600} fontSize="18px">
            Informações pessoais
          </Text>
          <S.PersonalInfoDetails>
            <S.PersonalInfoDetailsItem>
              <Image src={cpfIcon} alt="cpf icon" />
              <Box>
                <Text fontWeight={400} color="#587169" fontSize="12px">
                  CPF
                </Text>
                <Text fontWeight={600} color="#587169" fontSize="14px">
                  601 189 760 60
                </Text>
              </Box>
            </S.PersonalInfoDetailsItem>

            <S.PersonalInfoDetailsItem>
              <Image src={phoneIcon} alt="phone icon" />
              <Box>
                <Text fontWeight={400} color="#587169" fontSize="12px">
                  Telefone
                </Text>
                <Text fontWeight={600} color="#587169" fontSize="14px">
                  +55 89 2635 5467
                </Text>
              </Box>
            </S.PersonalInfoDetailsItem>

            <S.PersonalInfoDetailsItem>
              <Image src={dateIcon} alt="date icon" />
              <Box>
                <Text fontWeight={400} color="#587169" fontSize="12px">
                  Nascimento
                </Text>
                <Text fontWeight={600} color="#587169" fontSize="14px">
                  29/11/1990
                </Text>
              </Box>
            </S.PersonalInfoDetailsItem>
          </S.PersonalInfoDetails>
        </S.PersonalInfo>
        <S.OrganizationalInfo>
          <Text mb="24px" color="#34423D" fontSize="18px" fontWeight={600}>
            Dados organizacionais
          </Text>
          <S.OrganizationalInfoDetails>
            <S.OrganizationalInfoDetailsItem>
              <Text color="#587169" fontSize="16px" fontWeight={500}>
                Comercial
              </Text>
            </S.OrganizationalInfoDetailsItem>
            <S.OrganizationalInfoDetailsItem>
              <Text color="#587169" fontSize="16px" fontWeight={500}>
                Gerente
              </Text>
            </S.OrganizationalInfoDetailsItem>
            <S.OrganizationalInfoDetailsItem>
              <Text color="#587169" fontSize="16px" fontWeight={500}>
                Unidade 1
              </Text>
            </S.OrganizationalInfoDetailsItem>
            <S.OrganizationalInfoDetailsItem>
              <Text color="#587169" fontSize="16px" fontWeight={500}>
                Ativo
              </Text>
            </S.OrganizationalInfoDetailsItem>
          </S.OrganizationalInfoDetails>
        </S.OrganizationalInfo>
      </S.InfoContainer>
    </S.Container>
  );
};

export default CollaboratorDetails;
