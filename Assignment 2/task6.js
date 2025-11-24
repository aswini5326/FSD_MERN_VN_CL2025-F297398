let totalSeats = 120;
let bookedSeats = 78;
let seats_left = totalSeats - bookedSeats;

let status =
  seats_left < 20
    ? "Almost Full"
    : seats_left <= 60
    ? "Moderate Availability"
    : "Plenty of Seats Available";

console.log("Seats left : ", seats_left);
console.log("Status message :", status);
