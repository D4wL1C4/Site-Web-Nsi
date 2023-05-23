var x = 0

titres = [
    "Parklife - Blur - Parklife(1994)",
    "Buzzcut Season - Lorde - Pure Heroine(2013)",
    "Sundress - A$AP Rocky - single(2018)",
    "She Knows This - Kid Cudi - Man On The Moon III: The Chosen(2020)",
    "soso - Omah Lay - Boy Alone(2022)",
    "temptations - Omah Lay - Boy Alone(2022)",
    "bend you - Omah Lay - Boy Alone(2022)",
    "The Less I Know The Better - Tame Impala - Currents(2015)",
    "Big Jet Plane - Angus & Julia Stone - Down The Way(2010)",
    "Santa Monica Dream - Angus & Julia Stone - Down The Way(2010)",
    "12:51 - The Strokes - Room On Fire(2003)",
    "Kelly Watch The Stars - Air - Moon Safari(1998)",
    "Sexy Boy - Air - Moon Safari(1998)",
    "At The Door - The Strokes - The New Abnormal(2020)",
    "The Adults Are Talking - The Strokes - The New Abnormal(2020)",
    "Thirteen - Big Star - #1 Record(1972)",
    "The Ballad Of El Goodo - Big Star - #1 Record(1972)",
    "Under The Bridge - Red Hot Chili Peppers - Blood Sugar Sex Magik(1991)",
    "Pretty Pimpim - Kurt Vile - b'lieve i'm going down(2015)",
    "11th Dimension - Julian Casablancas - Phrazes For The Young(2009)",
    "Mr. Big Stuff - Jean Knight - Mr. Big Stuff(1971)",
    "Pink + White - Frank Ocean - Blonde(2016)",
    "Ivy - Frank Ocean - Blonde(2016)",
    "Nights - Frank Ocean - Blonde(2016)",
    "New Person, Same Old Mistakes - Tame Impala - Currents(2015)",
    "On Melancholy Hill - Gorillaz - Plastic Beach(2010)",
    "Stylo - Gorillaz - Plastic Beach(2010)",
    "Rhinestone Eyes - Gorillaz - Plastic Beach(2010)",
    "Life on Mars? - David Bowie - Hunky Dory(1971)",
    "Changes - David Bowie - Hunky Dory(1971)",
    "Boys Don't Cry - The Cure - Three Imaginary Boys(1979)",
  ];

function titresaléatoires() {
    var nmbale = Math.floor(Math.random() * titres.length);
    var nvtitre = titres[nmbale];
    var titleElement = document.getElementById("musique");
    titleElement.textContent = nvtitre;
}

couleur = [
    "#bada55",
    "#faf9c7",
    "#0000ff",
    "#EA4141",
    "#D744A2",
    "#48D744",
    "#CAD744",
    "#44D7CE",

]

function color(x) {
    
    if (x==1) {
        var coloor = Math.floor(Math.random() * couleur.length);
        var newcolor = couleur[coloor]
        var element = document.getElementById("musique");
        element.style.color = newcolor;
    }
    if (x==0) {
        var element = document.getElementById("musique");
        element.style.color = "#000";
    }

}

let pagenumber = 1;

function plusSlides(n) {
  showSlides(pagenumber += n);
}

function showSlides(n) {
  let i;
  var slides = document.getElementsByClassName("page");
  if (n > slides.length) {
    pagenumber = 1
}
  if (n < 1) {
    pagenumber = slides.length
}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[pagenumber-1].style.display = "block";
}