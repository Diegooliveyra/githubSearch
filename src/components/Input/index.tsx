import * as S from './styles';

export type InputProps = React.ComponentProps<'input'> & {
  disabled?: boolean;
  value: string;
  label?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Input = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  ...rest
}: InputProps) => {
  return (
    <S.Wrapper>
      {label && <label htmlFor={name}>{label}</label>}
      <S.InputField
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
    </S.Wrapper>
  );
};

export default Input;
