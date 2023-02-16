const namesArray = [
  { name: "Rashid" },
  { name: "Fatima" },
  { name: "Ali" },
  { name: "Ziba" },
  { name: "Hassan" },
  { name: "Aysel" },
  { name: "Jamil" },
  { name: "Narmin" },
  { name: "Nadir" },
  { name: "Leyla" },
  { name: "Nasim" },
  { name: "Arif" },
  { name: "Zahra" },
  { name: "Mustafa" },
  { name: "Amina" },
  { name: "Omar" },
  { name: "Samira" },
  { name: "Ahsan" },
  { name: "Saida" },
  { name: "Hamza" },
  { name: "Naseem" },
  { name: "Fawad" },
  { name: "Farzana" },
  { name: "Khalid" },
  { name: "Nadia" },
  { name: "Imran" },
  { name: "Aisha" },
  { name: "Zaki" },
  { name: "Sadia" },
  { name: "Akbar" },
  { name: "Shabnam" },
  { name: "Adil" },
  { name: "Laila" },
  { name: "Rizwan" },
  { name: "Zainab" },
  { name: "Asif" },
  { name: "Yasmeen" },
  { name: "Jawad" },
  { name: "Nargis" },
  { name: "Bilal" },
  { name: "Najma" },
  { name: "Ismail" },
  { name: "Aaliyah" },
  { name: "Tariq" },
  { name: "Tasneem" },
];

let input = document.querySelector("#searchTerm");
let btn = document.querySelector("#searchButton");

function displayNames(x) {
  let list = document.querySelector("#nameslist");
  list.innerHTML = "";

  x.forEach((e) => {
    let li = document.createElement("li");
    li.textContent = e.name;
    list.append(li);
  });
}

displayNames(namesArray);

input.addEventListener("input", () => {
  let filteredArr = namesArray.filter((e) => {
    return e.name.toLowerCase().includes(input.value.toLowerCase());
  });
  displayNames(filteredArr);
});

// btn.addEventListener("click", () => {
//     let filteredArr = namesArray.filter((e) => {
//       return e.name.toLowerCase().includes(input.value.toLowerCase());
//     });
//     displayNames(filteredArr);
//   })



// input.addEventListener("keydown", (e) =>{
//     if(e === "Enter"){
//         let filteredArr = namesArray.filter((e) => {
//           return e.name.toLowerCase().includes(input.value.toLowerCase());
//         });
//         displayNames(filteredArr);
//       }
//       else{
//         btn.click()
//       }
// })