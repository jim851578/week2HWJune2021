let position = 0;

       const nextSlide = function () {
        // grab the element from the DOM
        const imageSlider = document.getElementById('imageSlider2')
        //decrement the position by the width of the image
        position -= 300;
        //access the style transforn on the element and apply position
        imageSlider.style.transform = `translateX(${position}px)`;
       }

       const previousSlide = function () {
              // grab the element from the DOM
              const imageSlider = document.getElementById('imageSlider2')
              //decrement the position by the width of the image
              position += 300;
              //access the style transforn on the element and apply position
              imageSlider.style.transform = `translateX(${position}px)`;
             }