import { Container, Text, Description, Name } from "./styles";
import Image from "next/image";
import avatar from "../../../public/images/navbar/avatar.svg";
type AvatarProps = {
  name?: string;
  description?: string;
};

const Avatar = ({
  name = "Andrew Crescencio",
  description = "meus dados",
}: AvatarProps) => {
  return (
    <Container>
      <Image src={avatar} alt="Avatar Image" />
      <Text>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Text>
    </Container>
  );
};

export default Avatar;

// <Image /> poderias estar envolvido por um link
