const left = document.querySelector('.left');
const right = document.querySelector('.right');

const slider = document.querySelector('.slider');

const indicatorParent = document.querySelector('.control ul'); 
const indicators = document.querySelectorAll('.control li');
index = 0;

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.control .selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform = 'translateX(' + (i) * -25 + '%)';  
    index = i;
  });
});

left.addEventListener('click', function() {
  index = (index > 0) ? index -1 : 3;
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateX(' + (index) * -25 + '%)';
});

right.addEventListener('click', function() {
  index = (index < 3) ? index+1 : 0;
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateX(' + (index) * -25 + '%)';
});

// 	const left = document.querySelector('.left');
// 	const right = document.querySelector('.right');

//  const carousel = document.querySelector('.carousel');
// 	const slider = document.querySelector('.slider');
//  let direction;

// 	const indicatorParent = document.querySelector('.control ul'); 
// 	const indicators = document.querySelectorAll('.control li');
// 	index = 0;

// 	left.addEventListener('click', function() {
// 	index = (index > 0) ? index -1 : 3;
// 	document.querySelector('.control .selected').classList.remove('selected');
// 	indicatorParent.children[index].classList.add('selected');
//   if (direction === -1) {
//     direction = 1;
//     slider.appendChild(slider.firstElementChild);
//   }
//   carousel.style.justifyContent = 'flex-end';    
//   slider.style.transform = 'translate(25%)';  
// });

// 	right.addEventListener('click', function() {
// 	index = (index < 3) ? index+1 : 0;
// 	document.querySelector('.control .selected').classList.remove('selected');
// 	indicatorParent.children[index].classList.add('selected');
//   direction = -1;
//   carousel.style.justifyContent = 'flex-start';
//   slider.style.transform = 'translate(-25%)';
// });

//   slider.addEventListener('transitionend', function() {
//     // get the last element and append it to the front
    
//     if (direction === 1) {
//       slider.prepend(slider.lastElementChild);
//     } else {
//       slider.appendChild(slider.firstElementChild);
//     }
    
//     slider.style.transition = 'none';
//     slider.style.transform = 'translate(0)';
//     setTimeout(() => {
//       slider.style.transition = 'all 2s';
//     })
//   }, false);