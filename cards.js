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
//    copies : how many of this card go in the shuffled deck (optional, default 1).
//             e.g. copies: 3  makes the card three times as likely to come up.
//
//  Just copy a line and change the words. Order does not matter —
//  cards are drawn at random during the game.
// ============================================================

const CARDS = [
{ name: "Äijien maailmanloppu", text: "Kaikki alkavat juoda. Lopettaa saa vasta, kun oikealla puolella istuva pelaaja lopettaa. (Vesiputous)", image: "maailmanloppu.png", copies: 1 },

{ name: "Turaani", text: "Suu napsaa, tarttee tapsaa. Juo valitsemasi pelaajan kanssa yksi (1) shotti.", image: "Turaani.png", copies: 1 },

{ name: " ", text: "Tarjoa janoiselle pelaajalle yksi (1) kulaus omaa juomaasi. Peri häneltä kaksi (2) kulausta.", image: "koronkiskuri.png", copies: 1 },

{ name: "Röhnääjä", text: "Valitse nukkumapaikka.", image: "röhnääjä.jpg", copies: 1 },

{ name: "Totuus noussut ilmiöksi", text: "Kerro jokin väite. Pelaajat, joiden mielestä puhut totta, nostavat kätensä. Kerro sitten, puhuitko totta. Väärin äänestäneet juovat.", image: "Totuus noussut ilmiöksi.png", copies: 1 },

{ name: "Häyhä", text: "Vastapäätäsi istuva pelaaja peruuttaa seinää vasten. Jos osut häntä päähän pingispallolla, hän juo.", image: "häyhä.png", copies: 1 },

{ name: "Kuka näin on sanonut?", text: "Sano tunnettu lausahdus. Lausujan arvannut pelaaja ei juo. Muut juovat.", image: "kuka.mp4", copies: 1 },

{ name: " ", text: "Sinä vs Niki jalkapallossa. Häviäjä juo kolme (3) huikkaa.", image: "niki.png", copies: 1 },

{ name: " ", text: "Anna vasemmalla puolellasi istuvalle pelaajalle yksi kulaus omaa juomaasi.", image: "imetän.jpg", copies: 1 },

{ name: "Tuplilla aloitat tytyilyn", text: " ", image: "tyty.mp4", postId: true, copies: 1 },

{ name: "Taikuri", text: "Kerro jotain, mitä et ole tehnyt tänä vuonna. Pelaajat, jotka ovat tehneet sen, juovat.", image: "velho.png", copies: 1 },

{ name: " ", text: "Glunksauta juomasi loppuun.", image: "glunks.png", copies: 1 },

{ name: "Oon aika big", text: "Kumpi painaa enemmän: sinä vai vasemmalla puolellasi istuva pelaaja? Pienempi juo.", image: "big.png", copies: 1 },

{ name: "Rotutohtori", text: "Mittaa oikealla ja vasemmalla puolellasi istuvien pelaajien nenät. Isompi nenä juo kolme (3) huikkaa.", image: "tohtori.png", copies: 1 },

{ name: "Homo neekeri", text: "Juo, jos nauroit.", image: "jani.jpg", textDelay: 5000, copies: 1 },

{ name: "Työtön", text: "Kerää vierustovereiltasi toimeentulotukea. (Yksi huikka molemmilta.)", image: "vastaan.png", copies: 1 },

{ name: "Huhhuh pitkä teksti", text: "Lue yksi lause kirjasta sönköttämättä tai juo kolme (3) huikkaa.", image: "kirja.png", copies: 1 },

{ name: "", text: " ", image: "1.png", copies: 1, first: true },

{ name: "", text: " ", image: "2.png", copies: 1, first: true },

{ name: "", text: " ", image: "3.png", copies: 1, first: true },

{ name: "", text: " ", image: "4.png", copies: 1, first: true },

{ name: "", text: " ", image: "5.png", copies: 1, first: true },

{ name: "", text: " ", image: "6.png", copies: 1, first: true },

{ name: "", text: " ", image: "7.png", copies: 1, first: true },


{ name: "Employim", text: "Montako työpäivää teit tällä viikolla? Juo yhtä monta huikkaa.", image: "bää.jpg", copies: 1 },

{ name: "Säätö-Sauli", text: "Arvioi vasemman pelaajan juoman paino yhden merkitsevän numeron tarkkuudella. Jos arvaat oikein, hän juo (3) huikkaa.", image: "sauli.jpg", copies: 1 },

{ name: "Rankaisija", text: "Sinä juot yhden (1) kulauksen. Valitsemasi pelaaja juo viisi (5).", image: "rankaisija.png", copies: 1 },

{ name: " ", text: "Sulje silmäsi ja valitse yksi pelaaja tuomaan käteesi jokin esine. Jos arvaat esineen oikein ensimmäisellä yrittämällä, pelaaja juo kolme (3) huikkaa. Jos arvaat väärin, juot kolme (3) huikkaa.", image: "yoda.png", copies: 1 },

{ name: "Köyhät kyykkyyn!", text: "Kummalla on kalliimpi juoma: Sinulla vai vasemmalla pelaajalla? Halvempi juo.", image: "kyykkyyn.png", copies: 1 },

{ name: "bing bing wahoo!", text: "Montako erilaista tietokonepeliä pelasit tällä viikolla? Kaikki juovat yhtä monta kulausta.", image: "bing.png", copies: 1 },

{ name: "Ryys", text: "Kaikki ottavat yhden (1) huikan.", image: "ryys.png", copies: 1 },

{ name: " ", text: "Kumpi söi viimeksi: Sinä vai vasen pelaaja? Viimeksi glommannut ottaa (3) huikkaa.", image: "glom.png", copies: 1 },

{ name: " ", text: "Pelaaja, joka on viimeksi ulostanut muualle kuin vessanpönttöön, juo kolme (3) kulausta.", image: "pajeet.png", copies: 1 },

{ name: "Juo vettä", text: "Juo vettä.", image: "vettä.mp4", copies: 1 },

{ name: "Matut vittuun", text: "Kumpi on käynyt ulkomailla viimeksi: sinä vai vasemmalla puolellasi istuva pelaaja? Viimeisimpänä ulkomailla käynyt juo.", image: "gandalf.mp4", copies: 1 },

{ name: " ", text: "Valitse vanha kamu, jonka kanssa juotte kolme (3) kulausta.", image: "kamu.mp4", copies: 1 },

{ name: "Nauti kehostasi ja itsestäsi", text: "Voit nyt käydä tyydyttämässä tarpeesi.", image: "nauti.jpg", copies: 1 },

{ name: "Ykäsonni", text: "Kumpi on vanhempi: sinä vai vasemmalla puolellasi istuva pelaaja? Nuorempi juo kolme (3) huikkaa. ", image: "ykä.png", copies: 1 },

{ name: "Palantir", text: "Ennusta, juoko vasemmalla puolellasi istuva pelaaja seuraavalla vuorollaan? Jos ennustat oikein, hän juo tuplasti. Muuten sinä juot.", image: "ennusta.png", copies: 1 },


  // Special card: draw:true replaces the image with a canvas the player draws on.
  { name: "Itävaltalainen maalari", text: "Piirrä jokin esine tästä huoneesta. Ensimmäisenä oikein arvannut pelaaja ei juo. Muut juovat.", draw: true, copies: 1 },
];
