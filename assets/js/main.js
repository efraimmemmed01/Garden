document.addEventListener('DOMContentLoaded', function() {
  let rotate1 = document.getElementById('rotate-1');
  let rotate2 = document.getElementById('rotate-2');
  let rotate3 = document.getElementById('rotate-3');

  let angle1 = 0;
  let angle2 = 0;
  let angle3 = 0;

  setInterval(() => {
    angle1 += 360;
    rotate1.style.transform = `rotateY(${angle1}deg)`;

    angle2 += 360;
    rotate2.style.transform = `rotateY(${angle2}deg)`;

    angle3 += 360;
    rotate3.style.transform = `rotateY(${angle3}deg)`;
  }, 3000);
});
console.log(rotate1, rotate2, rotate3);