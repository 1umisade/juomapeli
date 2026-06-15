// ============================================================
//  CARD DECK  —  edit this file to add your own cards.
//
//  Each card has:
//    name   : the card's name, shown big on top of the image  (required)
//    text   : the task/dare description, shown under the image (optional)
//    image  : the picture filename for the card
//             - put the image file in this same folder, e.g. "huikka.png"
//             - until the file exists, a "Kuva tulossa" placeholder is shown,
//               so you can drop in the real image later with this filename.
//
//  Just copy a line and change the words. Order does not matter —
//  cards are drawn at random during the game.
// ============================================================

const CARDS = [
  { name: "Huikka",              text: "Ota yksi huikka.",                                       image: "huikka.png" },
  { name: "Juomaseura",          text: "Valitse joku juomaan kanssasi.",                         image: "valitse.png" },
  { name: "Pojat",               text: "Kaikki pojat juovat.",                                   image: "pojat.png" },
  { name: "Tytöt",               text: "Kaikki tytöt juovat.",                                   image: "tytot.png" },
  { name: "Vitsi",               text: "Kerro hauska vitsi tai ota huikka.",                     image: "vitsi.png" },
  { name: "Onnenpotku",          text: "Ohita vuorosi!",                                         image: "onni.png" },
  { name: "Sääntö",              text: "Ei etunimiä. Rikkoja juo.",                              image: "saanto.png" },
  { name: "Punnerrus",           text: "Tee 5 punnerrusta tai ota 2 huikkaa.",                   image: "punnerrus.png" },
  { name: "Äijien maailmanloppu", text: "Kaikki juovat juomansa loppuun!",                       image: "maailmanloppu.png" },
  { name: "Turaani",             text: "Suu napsaa tarttee tapsaa. Juo yksi (1) shotti.",        image: "Turaani.png" },
  { name: "Koronkiskuri",        text: "Tarjoa janoiselle pelaajalle yksi (1) kulaus omaa juomaasi. Ota häneltä kaksi (2).", image: "koronkiskuri.png" },
  { name: "Röhnääjä",            text: "Saat poistua pelistä yhden vuoron ajaksi.",             image: "röhnääjä.jpg" },
];
