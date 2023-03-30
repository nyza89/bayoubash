function getKd() {
  const kills = document.getElementById("kills").value;
  const deaths = document.getElementById("deaths").value;
  document.getElementById("result").innerHTML = (kills <= 0 || deaths <= 0) ? "invalid. Please enter positive values for kills and deaths." : kills / deaths;
};

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
});