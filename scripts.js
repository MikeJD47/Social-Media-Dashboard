/*DARK*/
/*Neutral*/
const veryDarkBlue = "hsl(230, 17%, 14%)"; /*(BG) or Light ext*/
const darkBlue = "hsl(232, 19%, 15%)"; /*(Top BG Pattern)*/
const darkDesaturatedBlue = "hsl(228, 28%, 20%)"; /*(Card BG)*/
const desaturatedBlue = "hsl(228, 34%, 66%)"; /*(Text)*/
const white = "hsl(0, 0%, 100%)"; /*(Text) || Light BG*/

/*LIGHT*/
/*Neutral*/
const veryPaleBlue = "hsl(225, 100%, 98%)"; /*(Top BG Pattern)*/
const lightGrayishBlue = "hsl(227, 47%, 96%)"; /*(Card BG)*/
const darkGrayishBlue = "hsl(228, 12%, 44%)"; /*(Text)*/

let isDarkMode = document.getElementById("toggle").checked;
let toggleBox = document.getElementById("toggle");
let bodyClass = document.querySelector("body").className;

// if (bodyClass === "dark") {
//   document.body.style.setProperty("--very-dark-blue", veryDarkBlue);
//   document.body.style.setProperty("--dark-blue", darkBlue);
//   document.body.style.setProperty(
//     "--dark-desaturated-blue",
//     darkDesaturatedBlue
//   );
//   document.body.style.setProperty("--desaturated-blue", desaturatedBlue);
//   document.body.style.setProperty("--dark-white", white);
// }

// if (bodyClass === "light") {
//   document.body.style.setProperty("--very-dark-blue", white);
//   document.body.style.setProperty("--dark-blue", veryPaleBlue);
//   document.body.style.setProperty("--dark-desaturated-blue", lightGrayishBlue);
//   document.body.style.setProperty("--desaturated-blue", darkGrayishBlue);
//   document.body.style.setProperty("--dark-white", veryDarkBlue);
// }

toggleBox.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  document.querySelector("body").className = isDarkMode ? "light" : "dark";
  document.body.style.setProperty(
    "--very-dark-blue",
    isDarkMode ? white : veryDarkBlue
  );
  document.body.style.setProperty(
    "--dark-blue",
    isDarkMode ? veryPaleBlue : darkBlue
  );
  document.body.style.setProperty(
    "--dark-desaturated-blue",
    isDarkMode ? lightGrayishBlue : darkDesaturatedBlue
  );
  document.body.style.setProperty(
    "--desaturated-blue",
    isDarkMode ? darkGrayishBlue : desaturatedBlue
  );
  document.body.style.setProperty(
    "--dark-white",
    isDarkMode ? veryDarkBlue : white
  );
});

() =>
  toggleBox.removeEventListener("click", () => {
    isDarkMode = !isDarkMode;
    document.querySelector("body").className = isDarkMode ? "light" : "dark";
  });
