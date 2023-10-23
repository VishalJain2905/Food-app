// const phone = document.querySelector("p");
// const widthSize = window.matchMedia("(max-width: 880px)");

// function home(e) {
//     if (e.matches) {
//       /* the viewport is 600 pixels wide or less */
//       phone.img = "This is a narrow screen — 600px wide or less.";
//       document.body.style.backgroundColor = "pink";
//     } else {
//       /* the viewport is more than 600 pixels wide */
//       phone.textContent = "This is a wide screen — more than 600px wide.";
//       document.body.style.backgroundColor = "aquamarine";
//     }
//   }

// widthSize.addEventListener ('home')

// const media =() => {
//   let q = matchMedia("(max-width:700px)");
//   if (q.matches) {
//     document.querySelector("foote")
//     HTMLBaseElement.
//   }
// }

let text;
if (window.matchMedia("(max-width: 700px)").matches) {
  text = "Most calendars are  designed for teams. ";
}
 else {
  text = "Available on your favorite store. Start your premium experience now";
}
document.getElementById("foote").innerHTML = text;
