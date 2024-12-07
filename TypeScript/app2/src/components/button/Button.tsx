import './button.css';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'principal' | 'secondary' | 'outline';
  corner?: 'smooth' | 'pill';
  handleClick?: () => void;
}

function Button({
  children,
  // type,
  handleClick,
}: ButtonProps) {
  return <button onClick={handleClick}>{children}</button>;
}

export default Button;
