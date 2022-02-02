function init() {
  document.getElementById('send-message').onclick = function (ev) {
    console.log(document.getElementById('get-in-touch').valid);
    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('emailaddress').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('comments').value;
    console.log({
      fullName,
      email,
      subject,
      message,
    });
  };
}

document.addEventListener('readystatechange', function () {
  if (document.readyState === 'complete') {
    init();
  }
});
