// console.log("Hello world!"); testing

// todo - need to store my image data

const images = [
    {
        url: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "A photo of the Petronas Twin Towers in Kuala Lumpur, Malaysia at night brightly lit",
        srcset: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400, https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800" 
    },
    {
        url: "https://images.unsplash.com/photo-1470087167738-6aa485ff65dc?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "A photo of the hills in Cameron Highlands, Malaysia, carpeted with the virbrant green of the tea plantation",
        srcset: "https://images.unsplash.com/photo-1470087167738-6aa485ff65dc?w=400, https://images.unsplash.com/photo-1470087167738-6aa485ff65dc?w=800",
    },
    {
        url: "https://images.unsplash.com/photo-1671364978178-002a8dc97362?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "Aerial view of a five-star hotel in Mabul Island, located in Borneo, Sabah, Malaysia, sitting in the blue sea",
        srcset: "https://images.unsplash.com/photo-1671364978178-002a8dc97362?w=400, https://images.unsplash.com/photo-1671364978178-002a8dc97362?w=800",
    },
    {
        url: "https://images.unsplash.com/photo-1713861627036-ede5909170af?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "A photo of a colourful temple at Batu Caves in Selangor, Malaysia,",
        srcset: "https://images.unsplash.com/photo-1713861627036-ede5909170af?w=400, https://images.unsplash.com/photo-1713861627036-ede5909170af?w=800",
    },
    {
        url: "https://images.unsplash.com/photo-1585747477469-502ca39d8a08?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "A photo of a famous street art in Penang, Malaysia that shows a brother and sister on a swing",
        srcset: "https://images.unsplash.com/photo-1585747477469-502ca39d8a08?w=400, https://images.unsplash.com/photo-1585747477469-502ca39d8a08?w=800",
    },
    {
        url: "https://images.unsplash.com/photo-1743328255564-393c83cc0881?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "A photo of the Darul Hana Bridge in Kuching, Malaysia across the Sarawak River",
        srcset: "https://images.unsplash.com/photo-1743328255564-393c83cc0881?w=400, https://images.unsplash.com/photo-1743328255564-393c83cc0881?w=800",
    }
];

// todo - need to create my thumbnail images

function createThumbnails (images) {
    const thumbnailImageContainer = document.getElementById("thumbnail-container");

    // loop through our array
    for (let i = 0; i < images.length; i++) {
        const thumbnailImage = document.createElement("img");

        thumbnailImage.src = images[i].url;
        thumbnailImage.alt = images[i].altText;
        
        if (images[i].srcset) {
            thumbnailImage.setAttribute("srcset", images[i].srcset);
        }

        thumbnailImage.className = "thumbnail";

        //event listener 
        thumbnailImage.addEventListener("click", createLargeImageHandler);

        thumbnailImageContainer.appendChild(thumbnailImage);
    }
}

// todo - need to create my large images

function createLargeImageHandler (event) {
    const largeImagePopup = document.getElementById("large-image-popup");
    const largeImageContainer = document.getElementById("large-image-container");
    largeImageContainer.innerHTML = "";

    const largeImage = document.createElement("img");

    // get the src and alt from the clicked thumbnail
    const clickedThumbnail = event.target;
    largeImage.src = clickedThumbnail.src;
    largeImage.alt = clickedThumbnail.alt;
    
    const srcset = clickedThumbnail.getAttribute("data-srcset");
    if (srcset) {
        largeImage.srcset = srcset;
    }

    largeImage.className = "large-image";

    largeImageContainer.appendChild(largeImage);
    largeImagePopup.classList.remove("hidden");
}

createThumbnails(images);

// todo - close the large image popup

const closeButton = document.querySelector(".close-btn");
closeButton.addEventListener("click", function() {
    const largeImagePopup = document.getElementById("large-image-popup");
    largeImagePopup.classList.add("hidden");

    const largeImageContainer = document.getElementById("large-image-container");
    largeImageContainer.innerHTML = "";
})

// todo - add keyboard button navigation 

window.addEventListener("keydown", function (event) {
    const popup = document.getElementById("large-image-popup");
    if (popup.classList.contains("hidden")) 
    return;

    const largeImage = document.querySelector(".large-image");
    if (!largeImage) 
        return;

    const currentIndex = images.findIndex (image => image.url === largeImage.src);
    if (currentIndex === -1) 
        return;

    switch(event.key) {
        case "Escape":
            popup.classList.add("hidden");
            document.getElementById("large-image-container").innerHTML = "";
            break;

        case "ArrowRight":
            const nextIndex = (currentIndex + 1) % images.length;
            updateLargeImage(nextIndex);
            break;

        case "ArrowLeft":
            const prevIndex = (currentIndex - 1 + images.length) % images.length;
            updateLargeImage(prevIndex);
            break;

        default:
            return;
    }
})

function updateLargeImage(index) {
    const largeImage = document.querySelector(".large-image");
    largeImage.src = images[index].url;
    largeImage.alt = images[index].altText;
}


