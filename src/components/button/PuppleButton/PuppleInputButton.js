import { PuppleButton } from "./style";

export default function PuppleInputButton({ type, title, onClick }) {
  return (
    <PuppleButton type={type} onClick={onClick}>
      {title}
    </PuppleButton>
  );
}

