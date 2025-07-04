function validateForm(name, email, message) {
  const errors = [];
  if (!name || name.length < 2) errors.push('Imię musi mieć co najmniej 2 znaki');
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) errors.push('Nieprawidłowy adres email');
  // Add more validations as needed
  return {
    isValid: errors.length === 0,
    errors,
  };
}

module.exports = { validateForm };