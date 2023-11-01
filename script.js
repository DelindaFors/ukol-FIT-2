const jmeno = prompt ("Zadej své jméno (bez diakritiky): ");
const prijmeni = prompt ("Zadej své příjmení (bez diakritiky): ");

prijmeni . trim ();
jmeno . trim ();

document.body.innerHTML += prijmeni . slice (0,4) . toLowerCase () + jmeno . slice (0,2) . toLowerCase () + "@" + "fit.cvut.cz"


