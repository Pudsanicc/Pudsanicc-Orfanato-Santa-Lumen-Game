function navTo(screenId) {
  document.querySelectorAll('.monitor > div:not(.header)').forEach(div => {
    div.classList.add('hidden');
  });
  document.getElementById(screenId).classList.remove('hidden');

  if (screenId === 'screen-login') document.getElementById('pass-input').focus();
  if (screenId === 'screen-login-a') document.getElementById('pass-input-a').focus();
}

const passInputA = document.getElementById('pass-input-a');
passInputA.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if (passInputA.value === '11071980') {
      navTo('screen-files');
    } else {
      document.getElementById('login-error-a').classList.remove('hidden');
      passInputA.value = '';
    }
  }
});

const passInput = document.getElementById('pass-input');
passInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if (passInput.value === '29071996') {
      navTo('screen-secret');
    } else {
      document.getElementById('login-error').classList.remove('hidden');
      passInput.value = '';
    }
  }
});
