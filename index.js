function validateEmail() {
  const email = document.getElementById('email').value;
  const confirmEmail = document.getElementById('confirm-email').value;

  if (email !== confirmEmail) {
    alert('Email addresses do not match. Please check your entries.');
    return false;
  }

  return true;
}
