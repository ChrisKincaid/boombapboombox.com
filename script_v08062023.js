// Hide nav items toggle -- Start

const navHBEL = document.querySelector('.nav-hamburger');
    const hamburgerEL = document.querySelector('.hamburger');

    hamburgerEL.addEventListener('click', () => {
    navHBEL.classList.toggle('nav-hamburger--open');
    });

// Hide nav items toggle -- End
// Flying tapes -- Start

// Function to generate a random integer between min and max (inclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to generate a random decimal between min and max (inclusive)
  function getRandomDecimal(min, max) {
    return (Math.random() * (max - min) + min).toFixed(1);
  }
  
  // Function to set random styles for each image
  function setRandomStyles() {

    const tapesFloatDiv = document.querySelector('.tapes-float');
    const images = tapesFloatDiv.querySelectorAll('img');
  
    images.forEach((img) => {
        const randomChild = getRandomInteger(1, 12);
        const randomSize = getRandomInteger(35, 95);
        const randomDelay = getRandomDecimal(5, 30);
        const randomRotation = getRandomInteger(-360, 360);
        const randomAnimationDuration = getRandomInteger(5, 12);

  
        img.style.animation = `tapes ${randomAnimationDuration}s linear infinite`;
        img.style.animationDelay = `${randomDelay}s`;
        img.style.width = `${randomSize}px`;
        img.style.order = randomChild;
        img.style.display = 'flex';

        // img.style.bottom = '0';
    });
  }
  
  // Call the function to set random styles on  after page load
  window.onload = function () {
    setRandomStyles();
  }
  // document.addEventListener('DOMContentLoaded', function () {
  //   setRandomStyles();
  // });

// Flying tapes -- End

