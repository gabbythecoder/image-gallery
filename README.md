# Accessible Image Gallery 

Week 2 assignment - Build an Accessible Image Gallery

Created a fictional webpage with an accessible image gallery as part of the Tech Educators course.

This is built on VSCode using HTML, CSS and JavaScript.

## Requirements
* 🎯 Implement responsive design methods to ensure the website works well on both small mobile screens and larger desktop screens (e.g., above 800px). ✅
* 🎯 Implement at least one meaningful media query so that there is a noticeable change between mobile and desktop view (an example is to change where the ‘thumbnail bar’ is positioned). ✅
* 🎯 Ensure all images have appropriate alt text attributes for accessibility. ✅
* 🎯 Correctly use event handlers to switch images based on user interactions. ✅

## Stretch Requirements
* 🏹 Use ‘srcset’ to specify which image will be used based on the size of the screen for optimal viewing experience. ✅
* 🏹 Add ARIA elements to improve accessibility, such as aria-label, aria-live, and other relevant attributes. ❌
* 🏹 Implement key bindings for buttons to enhance navigation, such as using arrow keys to switch between images. ✅

## Resources 

### Images 
All images used in this project was from Unsplash. I have referenced them below:
* Petronas Twin Towers - Photo by Esmonde Yong on Unsplash
* Cameron Highlands - Photo by Paul-Vincent Roll on Unsplash
* Mabul Island - Photo by Ernests Vaga on Unsplash
* Batu Caves - Photo by Hery Agus on Unsplash
* Street Art in Penang, Malaysia - Photo by Yaopey Yong on Unsplash
* Darul Hana Bridge - Photo by Muhamed Sukry on Unsplash

### Links I found useful 
I have done a lot of research during this assignment and I have linked the websites and YouTube tutorial that I found very helpful. I also used the resources that was provided to us during class and on Moodle. 
* https://www.w3schools.com/jsref/event_target.asp
* https://www.youtube.com/watch?v=v_8CmC6cwUs
* https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar
* https://www.youtube.com/watch?v=QghhoJBdw7A
* https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event

## Reflection 

I have successfully completed the requirements (minus one of the stretch goals) for this project. I have to admit, this assignment really tested my coding abilities, particularly the JavaScript side of it. 

I initially struggled with the createLargeImageHandler function. For some reason, I was not able to link my images array to the function, and the console kept coming up with errors. I added an event parameter in the function, and now everytime I click on a thumbnail, the large image showed up. I continuously console.log() throughout my JavaScript to debug my code, to ensure there was no new error popping up. 

I added a media query for my thumbnail container. When the device size shrinks, it moves to the bottom of the page instead for better accessibility, especially for mobile devices. I particularly focused this assignment for mobile devices, but it is responsive and works for larger desktop screens. I know there are a lot of whitespace when viewing my webpage in desktop, but I didn't want to waste too much time trying to fill it up as I primarily wanted to focus on the JavaScript and making sure the website is responsive for other devices. 

All my images have appropriate alt text attributes. I also used a colour contrast checker to make sure the colours I used, especially in my header and footer have good contrast ratio for better accessibility. I have added srcset and when copying the image address, I know it works, however, I am not sure how to check it properly in the code. 

I have added buttons for navigation when the large image pops up after clicking on the thumbnail. The code I have written for each prevButton and nextButton event listener is very repetitive but I am not so sure how to simplify it. If I could get your feedback on this, that would be great as I do want try to incorporate the DRY method to keep my codes clear and concise. 

I added keyboard navigation for when my large image pops up using the arrowkey left and right to navigate between the pictures in the pop up. I also added escape to toggle out of the pop up rather than clicking the 'x' in the top right corner. Both works to exit out of the pop up. This was the most difficult part I found when doing the assignment. 

With the stretch requirements, adding ARIA elements is one I wasn't able to accomplish. I know what it is asking me to do, but I am struggling to understand the JavaScript side of it. I left this out because I feel I will need more support and research for this when implementing it into my assignments. 

Overall, I found this assignment to be very tricky. Numerous tutorials and research have gone into this assignment and I have now managed to create an accessible image gallery. I do feel very proud of myself with how much I have achieved already, given it is only the second week of the course.

Any feedback will be appreciated as I am always looking for ways to continuously improve. I hope you enjoy the image gallery I have created. 