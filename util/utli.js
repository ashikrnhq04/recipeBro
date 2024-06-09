export function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function errorToString(errString) {
  const errorString = new String(errString);
  const regex = /^(.*?: .*?): /;
  const replaceErr = errorString.replace(regex, "");
  return replaceErr;
}

export function serverErrorToReadableError(error) {
  const replacedErrorString = errorToString(error);
  let readableError = [];
  replacedErrorString.split(", ").forEach((fieldError) => {
    readableError.push(errorKeyValue(fieldError));
  });
  return readableError;
}

export function isValidationError(error) {
  const errString = new String(error);
  if (errString.startsWith("Error: ValidationError:")) {
    return true;
  }
  return false;
}

export function errorKeyValue(error) {
  const errString = error.trim().split(": ");
  return { errKey: errString[0], errVal: errString[1] };
}
