import ButtonBox from './style';

const Button = ({ type, state, size, icon, title, ...rest }) => {
  return (
    <ButtonBox type={type} state={state} size={size} {...rest}>
      <img src={icon} />
      <span>{title}</span>
    </ButtonBox>
  );
};

export default Button;
