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
  { name: "Äijien maailmanloppu", text: "Kaikki juovat juomansa loppuun!",                       image: "maailmanloppu.png" },
  { name: "Turaani",             text: "Suu napsaa tarttee tapsaa. Juo yksi (1) shotti.",        image: "Turaani.png" },
  { name: "Koronkiskuri",        text: "Tarjoa janoiselle pelaajalle yksi (1) kulaus omaa juomaasi. Peri häneltä kaksi (2) kulausta.", image: "koronkiskuri.png" },
  { name: "Röhnääjä",            text: "Saat valita nukkumapaikan.",             image: "röhnääjä.jpg" },
  { name: "Totuus noussut ilmiöksi", text: "Kerro jokin väite. Pelaajat joiden mielestä puhut totta nostavat kätensä. Kerro sitten puhuitko totta. Väärin äänestäneet juovat.", image: "Totuus noussut ilmiöksi.png" },
  { name: "Häyhä",               text: "Vastapäätäsi istuva pelaaja peruttaa seinää vasten. Jos osut häntä päähän pingispallolla, hän juo.", image: "häyhä.png" },
  { name: "Kuka näin on sanonu?", text: "Sano tunnettu lausahdus: lausujan arvannut pelaaja ei juo. Muut juovat.", image: "kuka.mp4" },
  { name: " ", text: "Anna vasemmalla puolella istuvalle pelaajalle hörppy omaa juomaasi.", image: "imetän.jpg" },
  { name: "Velho",               text: "Kerro jotain mitä et ole tehnyt tänä vuonna. Pelaajat jotka ovat sitä tehneet, juovat.", image: "velho.png" },
  { name: "Rotutohtori",         text: "Mittaa oikealla ja vasemmalla puolellasi istuvien nenät. Isompi nenä juo kolme (3) huikkaa.", image: "tohtori.png" },
  { name: "Homo neekeri",         text: "Älä anna vihalle valtaa. Juo jos nauroit.", image: "jani.jpg" },
  { name: "Arvaa kuka?",         text: "Esitä jotakin toista pelaajaa. Ensimmäisenä oikein arvannut ei juo. Muut juovat.", image: "arvaa.png" },
  { name: "Huhhuh pitkä teksti", text: "Lue yksi lause kirjasta sönköttämättä tai juo kolme (3) huikkaa.",         image: "kirja.png" },
  { name: "Sääntö",              text: "Jokaisen lauseen jälkeen täytyy sanoa \"wallah\" tai pelaaja juo kolme (3) huikkaa. Sääntö kestää yhden (1) kierroksen ajan.", image: "saanto.png" },
  { name: "Employim",              text: "Tällä viikolla töitä tehneet juovat kolme (3) huikkaa.", image: "bää.jpg" },
  { name: "Himo läski homer",              text: "Vasemmalla puolella istuva pelaaja juo kolme (3) huikkaa, jos hän painaa sinua vähemmän. Muuten juot itse.", image: "homer.png" },
  { name: " ",              text: " ", image: "johtaja.png" },
  { name: " ",              text: " ", image: "hitler1.png" },
  { name: " ",              text: " ", image: "hitler2.png" },
  { name: " ",              text: " ", image: "hitler3.png" },
  { name: "Juo vettä",       text: "Juo vettä.",                image: "vettä.mp4" },
  { name: "Matut vittuun",       text: "Viimeksi ulkomailla käynyt pelaaja juo kolme (3) huikkaa.",                image: "gandalf.mp4" },
  { name: "Nauti kehostasi ja itsestäsi", text: "Voit tyydyttää tarpeesi (taukokortti).", image: "nauti.jpg" },
  { name: "Ykäsonni", text: "Juo, jos olet vanhempi kuin vasemmalla istuva pelaaja. Jos olet nuorempi, hän juo.", image: "ykä.png" },
  { name: "Palantir", text: "Juoko vasemmanpuoleinen pelaaja seuraavalla vuorolla? Jos ennustat oikein: hän juo tuplasti. Muuten sinä juot.", image: "ennusta.png" },

  // Special card: draw:true replaces the image with a canvas the player draws on.
  { name: "Maalari", text: "Piirrä jokin esine tästä huoneesta. Ensimmäisenä oikein arvannut pelaaja ei juo. Muut juovat.", draw: true },
];
