
var pogrub = document.querySelectorAll("p .pogrub");

function animateLines() {
    const lines = document.querySelectorAll('.hr-line');
    lines.forEach(line => {
      line.classList.add('animate');
      line.addEventListener('animationend', () => {
        line.classList.remove('animate');
      }, { once: true });
    });
    const lines2 = document.querySelectorAll('.hr-line2');
    lines2.forEach(line => {
        line.classList.add('animate2');
        line.addEventListener('animationend', () => {
          line.classList.remove('animate2');
        }, { once: true });
      });
  }