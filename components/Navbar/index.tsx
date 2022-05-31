import * as S from "./styles";
import logo from "../../public/images/navbar/pedido-pago-logo.svg";
import Logo from "./Logo";
import Avatar from "./Avatar";
const Navbar = () => {
  return (
    <S.Navbar>
      <Logo src={logo} alt="Pedido Pago Logo" />
      <Avatar />    
    </S.Navbar>
  );
};

export default Navbar;
