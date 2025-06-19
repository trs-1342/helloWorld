document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const status = document.querySelector(".form-status");
  status.textContent = "Mesaj gönderildi! (demo)";
  setTimeout(() => {
    status.textContent = "";
    this.reset();
  }, 3000);
});
