function submit(ev) {
  if (isValid()) {
    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('emailaddress').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('comments').value;
    axios
      .post('api/contact-us', { fullName, email, subject, message })
      .catch((err) => {
        console.log(err);
      });
  } else {
    onBlur();
  }
}

function isValid() {
  const fullName = document.getElementById('fullname').value;
  const email = document.getElementById('emailaddress').value;
  const subject = document.getElementById('subject').value;
  const validEmail = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  ).test(email);

  return fullName && email && subject && validEmail;
}

function onBlur() {
  document.getElementById('send-message').disabled = !isValid();
}
function init() {
  document.getElementById('send-message').onclick = submit;
  document.getElementById('send-message').disabled = isValid;
  document.getElementById('fullname').onblur = onBlur;
  document.getElementById('emailaddress').onblur = onBlur;
  document.getElementById('subject').onblur = onBlur;
  document.getElementById('comments').onblur = onBlur;
}

document.addEventListener('readystatechange', function () {
  if (document.readyState === 'complete') {
    init();
  }
});
