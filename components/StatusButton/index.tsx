import styled from "@emotion/styled";
import type { Tstatus } from "../CollaboratorsList/index";
type StatusButtonProps = {
  active: Tstatus;
};

const Button = styled.button`
  &.active {
    background: #b5f1dd;
  }
  &.inactive {
    background-color: #eaefed;
  }
  border-radius: 80px;
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 116%;
  color: #34423d;
  text-transform: capitalize;
  padding: 4px 18px;
`;
const StatusButton = ({ active }: StatusButtonProps) => {
  return (
    <Button className={active === "active" ? "active" : "inactive"}>
      {active === "active" ? "ativo" : "inativo"}
    </Button>
  );
};

export default StatusButton;
