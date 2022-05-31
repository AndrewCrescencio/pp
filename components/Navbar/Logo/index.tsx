import Image from "next/image";
import * as S from "./styles";
type LogoProps = {
  src: any;
  alt: string;
};
const Logo = ({ src, alt }: LogoProps) => {
  return (
    <S.Container>
      <Image src={src} alt={alt} />
    </S.Container>
  );
};

export default Logo;
