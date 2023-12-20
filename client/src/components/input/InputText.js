import { InputValue } from './style';

export default function InputText({value, onChange }) {

  return (
    <InputValue value={value} onChange={onChange} />
  );
}