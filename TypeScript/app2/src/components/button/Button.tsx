import './button.css';
import { ButtonStyled } from './Button.styled';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'primary' | 'secondary' | 'outline';
  corner?: 'smooth' | 'pill';
  disabled?: boolean;
  onClick?: () => void;
}

function Button({ children, type, corner, disabled, onClick }: ButtonProps) {
  return (
    <ButtonStyled
      onClick={onClick}
      $type={type}
      $corner={corner}
      $disabled={disabled}
    >
      {' '}
      {children}
    </ButtonStyled>
  );
}

export default Button;
