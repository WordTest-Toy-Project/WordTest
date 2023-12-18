import React from 'react';
import {
  Container
} from './style';

export default function LoginInput({ type, placeholder, onChange }) {

  return (
    <Container type={type} placeholder={placeholder} onChange={onChange} />
  );
}
