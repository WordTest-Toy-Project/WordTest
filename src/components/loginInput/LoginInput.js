import {
  Container
} from './style';
export default function LoginInput({type, placeholder}){
  return (
    <Container type={type} placeholder={placeholder} />
  );
}