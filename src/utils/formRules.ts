export const required = (value: string) => {
  return !!value || 'Campo obrigatório';
};

export const validateEmail = (value: string) => {
  const errorMessage = 'Email inválido';
  const formattedValue = String(value).trim().toLowerCase();

  if (!value) return errorMessage;
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(formattedValue) || errorMessage;
};


export const minLength = (minLength = 6) => {
  return (value: string) => value.length >= minLength || `Mínimo de ${minLength} caracteres`;
};
