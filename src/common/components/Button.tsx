type ButtonProps = {
  children: React.ReactNode;
  onClick: (event: React.PointerEvent<HTMLButtonElement>) => void;
};

function Button({ children, onClick }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
