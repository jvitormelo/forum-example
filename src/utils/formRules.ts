import isEmail from 'validator/es/lib/isEmail';

export const required = (value: string) => {
  return !!value || 'Campo obrigatório';
};

export const validateEmail = (value: string) => {
  const errorMessage = 'Email inválido';
  const formattedValue = String(value).trim().toLowerCase();

  if (!value) return errorMessage;
  return isEmail(formattedValue) || errorMessage ;
};

export const minLength = (minLength = 6) => {
  return (value: string) => value.length >= minLength || `Mínimo de ${minLength} caracteres`;
};
