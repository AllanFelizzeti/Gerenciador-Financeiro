import { HeaderContainer, HeaderContent, NewTrasationButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import logoImg from '../../assets/logo.svg';
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
      <img src={logoImg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
          <NewTrasationButton>Nova Transação</NewTrasationButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
        
      </HeaderContent>
    </HeaderContainer>
  )
}