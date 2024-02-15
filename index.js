let books = [
  {
    title: "skulden man bår",
    author: "Hans Rosenfeldt",
    year: "2023",
    language: "Svenska",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo cum odit maxime, reprehenderit consequuntur tenetur! Earum ea hic molestias quibusdam. Ipsa illo porro, veritatis ab minima inventore? Cumque, cum modi?",
    price: { bound: 119, eBok: 117, audio: "" },
    img: "https://s1.adlibris.com/images/67013766/skulden-man-bar.jpg",
  },
  {
    title: "Tre systrar",
    author: "Heather Morris",
    year: "2022",
    language: "Svenska",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo cum odit maxime, reprehenderit consequuntur tenetur! Earum ea hic molestias quibusdam. Ipsa illo porro, veritatis ab minima inventore? Cumque, cum modi?",
    price: { bound: 39, eBok: 139, audio: 128 },
    img: "https://s1.adlibris.com/images/67090676/tre-systrar.jpg",
  },
  {
    title: "Skuggläge",
    author: "Kristina Ohlsson",
    year: "2021",
    language: "Svenska",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo cum odit maxime, reprehenderit consequuntur tenetur! Earum ea hic molestias quibusdam. Ipsa illo porro, veritatis ab minima inventore? Cumque, cum modi?",
    price: { bound: 89, eBok: 136, audio: 136 },
    img: "https://s1.adlibris.com/images/68358583/skugglage.jpg",
  },
  {
    title: "Den blodiga tiaran",
    author: "Veronica Sjöstrand",
    year: "2019",
    language: "Engelska",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo cum odit maxime, reprehenderit consequuntur tenetur! Earum ea hic molestias quibusdam. Ipsa illo porro, veritatis ab minima inventore? Cumque, cum modi?",
    price: { bound: 219, eBok: 150, audio: 150 },
    img: "https://s2.adlibris.com/images/63672527/den-blodiga-tiaran.jpg",
  },
  {
    title: "A Court of thorns and Roses",
    author: "Sara J. Maas",
    year: "2020",
    language: "Engelska",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo cum odit maxime, reprehenderit consequuntur tenetur! Earum ea hic molestias quibusdam. Ipsa illo porro, veritatis ab minima inventore? Cumque, cum modi?",
    price: { bound: 115, eBok: "", audio: "" },
    img: "https://s2.adlibris.com/images/55443963/a-court-of-thorns-and-roses.jpg",
  },
  {
    title: "One Day",
    author: "David Nichols",
    year: "2024",
    language: "Engelska",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo cum odit maxime, reprehenderit consequuntur tenetur! Earum ea hic molestias quibusdam. Ipsa illo porro, veritatis ab minima inventore? Cumque, cum modi?",
    price: { bound: 155, eBok: "", audio: "" },
    img: "https://s2.adlibris.com/images/68990227/one-day.jpg",
  },

  {
    title: "Stöld",
    author: "Ann-Helen Laestadius",
    year: "2022",
    language: "Svenska",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo cum odit maxime, reprehenderit consequuntur tenetur! Earum ea hic molestias quibusdam. Ipsa illo porro, veritatis ab minima inventore? Cumque, cum modi?",
    price: { bound: 89, eBok: 88, audio: 108 },
    img: "https://s1.adlibris.com/images/62352422/stold.jpg",
  },

  {
    title: "Havsörnens Skrik",
    author: "Karin Smirnof",
    year: "2022",
    language: "Svenska",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo cum odit maxime, reprehenderit consequuntur tenetur! Earum ea hic molestias quibusdam. Ipsa illo porro, veritatis ab minima inventore? Cumque, cum modi?",
    price: { bound: 79, eBok: 59, audio: 148 },
    img: "https://s2.adlibris.com/images/63728133/havsornens-skrik.jpg",
  },

  {
    title: "Unfortunate side Effects of Heartbreak and Magic",
    author: "Breane Randall",
    year: "2023",
    language: "Engelska",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo cum odit maxime, reprehenderit consequuntur tenetur! Earum ea hic molestias quibusdam. Ipsa illo porro, veritatis ab minima inventore? Cumque, cum modi?",
    price: { bound: 85, eBok: "", audio: "" },
    img: "https://s2.adlibris.com/images/67700465/unfortunate-side-effects-of-heartbreak-and-magic.jpg",
  },

  {
    title: "Ett litet liv",
    author: "Hanya Yanagihara",
    year: "2023",
    language: "Svenska",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo cum odit maxime, reprehenderit consequuntur tenetur! Earum ea hic molestias quibusdam. Ipsa illo porro, veritatis ab minima inventore? Cumque, cum modi?",
    price: { bound: 136, eBok: 88, audio: 136 },
    img: "https://s2.adlibris.com/images/67896541/ett-litet-liv.jpg",
  },
];

console.log(books);
books.forEach((book) => {
  console.log(book.title);
});

let cardContainer = document.querySelector(".cardContainer");

function renderBook() {
  books.forEach((book) => {
    let bookCard = document.createElement("div");
    bookCard.classList.add("card");

    let bookTitle = document.createElement("a");
    bookTitle.innerText = book.title;
    bookTitle.href = "#";

    let bookImg = document.createElement("img");
    bookImg.src = book.img;

    let bookAuthor = document.createElement("p");
    bookAuthor.innerText = book.author;

    let bookButton = document.createElement("button");
    bookButton.classList.add("btn");
    bookButton.innerText = book.price.bound + " " + "kr";

    cardContainer.append(bookCard);
    bookCard.append(bookImg, bookTitle, bookAuthor, bookButton);
  });
}
renderBook();
