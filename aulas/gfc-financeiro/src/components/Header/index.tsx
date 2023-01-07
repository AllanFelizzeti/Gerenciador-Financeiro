import { HeaderContainer, HeaderContent, NewTrasationButton } from "./styles";

import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
      <img src={logoImg} alt="" />

        <NewTrasationButton>Nova Transação</NewTrasationButton>
      </HeaderContent>
    </HeaderContainer>
  )
}