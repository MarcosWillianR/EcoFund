import { Button as PaperButton, ButtonProps as PaperButtonProps } from 'react-native-paper';

interface ButtonProps extends PaperButtonProps {
  height?: number;
}

export function Button({ height = 52, children, ...rest }: ButtonProps) {
  return (
    <PaperButton style={{ borderRadius: 4, height, justifyContent: 'center' }} {...rest}>
      {children}
    </PaperButton>
  );
}