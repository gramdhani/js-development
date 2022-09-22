window.Webflow ||= [];
window.Webflow.push(() => {
  function slider1() {
    const splides = $('.slider1');

    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
      new Splide(splides[i], {
        // Desktop on down
        perPage: 3,
        perMove: 1,
        focus: 0, // 0 = left and 'center' = center
        type: 'loop', // 'loop' or 'slide'
        gap: '2em', // space between slides
        arrows: 'false', // 'slider' or false
        pagination: 'slider', // 'slider' or false
        speed: 600, // transition speed in miliseconds
        dragAngleThreshold: 30, // default is 30
        autoWidth: false, // for cards with differing widths
        rewind: false, // go back to beginning when reach end
        rewindSpeed: 400,
        waitForTransition: false,
        updateOnMove: true,
        trimSpace: false, // true removes empty space from end of list
        breakpoints: {
          991: {
            // Tablet
          },
          767: {
            // Mobile Landscape
          },
          479: {
            // Mobile Portrait
          },
        },
      }).mount();
    }
  }
  slider1();

  function slider2() {
    let splides = $('.slider2');
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
      new Splide(splides[i], {
        // Desktop on down
        perPage: 1,
        perMove: 1,
        focus: 'center', // 0 = left and 'center' = center
        type: 'loop', // 'loop' or 'slide'
        gap: '2em', // space between slides
        arrows: 'false', // 'slider' or false
        pagination: 'slider', // 'slider' or false
        speed: 600, // transition speed in miliseconds
        dragAngleThreshold: 30, // default is 30
        autoWidth: false, // for cards with differing widths
        rewind: false, // go back to beginning when reach end
        rewindSpeed: 400,
        waitForTransition: false,
        updateOnMove: true,
        trimSpace: false, // true removes empty space from end of list
        breakpoints: {
          991: {
            // Tablet
          },
          767: {
            // Mobile Landscape
          },
          479: {
            // Mobile Portrait
          },
        },
      }).mount();
    }
  }
  slider2();

  document.querySelectorAll('.splide__arrows').forEach((target) => target.classList.add('hide'));

  // setting data-foo
  const sliderPrev = document.querySelector('button.splide__arrow--prev');
  const sliderNext = document.querySelector('button.splide__arrow--next');

  sliderPrev.setAttribute('fs-mirrorclick-element', 'target-1');
  sliderNext.setAttribute('fs-mirrorclick-element', 'target-2');
});
