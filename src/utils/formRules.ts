export  const required = (value: string) => {
  return !!value || 'Required field'
}

export const validateEmail = (value: string) => {
  const errorMessage = 'Email is not valid'
  const formattedValue = String(value).trim().toLowerCase()

  if (!value) return errorMessage;
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(formattedValue) || errorMessage
};
