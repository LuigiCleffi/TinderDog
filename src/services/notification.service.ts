export function notifyError(message: string): void {
  console.error("Error:", message);
}

export function renderErrors(errors: string[]): void {
  console.log("Errors:", errors);
}

export function notifySuccess(message: string): void {
  console.log("Success:", message);
}