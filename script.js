

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

});



const hotelMenu = document.querySelector(".hotel-menu");
const hotelLink = document.querySelector(".hotel-link");

hotelLink.addEventListener("click", function (event) {

    if (window.innerWidth <= 700) {

        event.preventDefault();

        hotelMenu.classList.toggle("open");

    }

});




let bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];




const searchBtn =
    document.getElementById("searchBtn");

const bookingList =
    document.getElementById("bookingList");




function displayBookings() {

    // Clear current list

    bookingList.innerHTML = "";


    

    if (bookings.length === 0) {

        bookingList.innerHTML = `
            <p id="emptyMessage">
                No bookings added yet.
            </p>
        `;

        return;
    }


   

    bookings.forEach(function (booking, index) {

        const bookingCard =
            document.createElement("div");

        bookingCard.classList.add("booking-item");


        bookingCard.innerHTML = `

            <h3>
                ${booking.bookingType} Booking
            </h3>

            <p>
                <b>Destination:</b>
                ${booking.destination}
            </p>

            <p>
                <b>Travel Date:</b>
                ${booking.travelDate}
            </p>

            <p>
                <b>Rooms:</b>
                ${booking.rooms}
            </p>

            <p>
                <b>Adults:</b>
                ${booking.adults}
            </p>

            <p>
                <b>Children:</b>
                ${booking.children}
            </p>

            <button
                type="button"
                onclick="deleteBooking(${index})"
            >
                DELETE
            </button>

        `;


        bookingList.appendChild(bookingCard);

    });

}




searchBtn.addEventListener("click", function () {


   

    const bookingType =
        document.getElementById("bookingType").value;


  

    const destination =
        document.getElementById("destination").value.trim();


  

    const travelDate =
        document.getElementById("travelDate").value;


   

    const rooms =
        document.getElementById("rooms").value;


    

    const adults =
        document.getElementById("adults").value;


    

    const children =
        document.getElementById("children").value;


    

    if (destination === "") {

        alert("Please enter your destination.");

        return;
    }


    if (travelDate === "") {

        alert("Please select your travel date.");

        return;
    }


    if (rooms === "") {

        alert("Please select number of rooms.");

        return;
    }


    if (adults === "") {

        alert("Please select number of adults.");

        return;
    }


    if (children === "") {

        alert("Please select number of children.");

        return;
    }


  

    const newBooking = {

        bookingType: bookingType,

        destination: destination,

        travelDate: travelDate,

        rooms: rooms,

        adults: adults,

        children: children

    };


  

    bookings.push(newBooking);


   

    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );



    displayBookings();


   

    alert("Booking added successfully!");


  

    document.getElementById("destination").value = "";

    document.getElementById("travelDate").value = "";

    document.getElementById("rooms").value = "";

    document.getElementById("adults").value = "";

    document.getElementById("children").value = "";

});




function deleteBooking(index) {


    const confirmDelete =
        confirm("Are you sure you want to delete this booking?");


    if (!confirmDelete) {

        return;

    }


    

    bookings.splice(index, 1);


   

    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );


   

    displayBookings();

}



const subscribeBtn =
    document.getElementById("subscribeBtn");


subscribeBtn.addEventListener("click", function () {


    const email =
        document.getElementById("email").value.trim();


    if (email === "") {

        alert("Please enter your email address.");

        return;
    }


    if (!email.includes("@")) {

        alert("Please enter a valid email address.");

        return;
    }


    alert("Thank you for subscribing!");


    document.getElementById("email").value = "";

});





const hotelContainer =
    document.getElementById("hotelContainer");


const nextBtn =
    document.getElementById("nextBtn");


const previousBtn =
    document.getElementById("previousBtn");


nextBtn.addEventListener("click", function () {

    hotelContainer.scrollBy({

        left: 300,

        behavior: "smooth"

    });

});


previousBtn.addEventListener("click", function () {

    hotelContainer.scrollBy({

        left: -300,

        behavior: "smooth"

    });

});




const travelDateInput =
    document.getElementById("travelDate");


const today =
    new Date().toISOString().split("T")[0];


travelDateInput.setAttribute(
    "min",
    today
);



displayBookings();