let geet = 5;

if (geet > 0) {
    for (let ligne = 1; ligne <= geet; ligne++) {
        let ligneTexte = "";
        for (let s = 1; s <= geet - ligne; s++) {
            ligneTexte = ligneTexte + " ";
        }
        for (let e = 1; e <= (2 * ligne) - 1; e++) {
            ligneTexte = ligneTexte + "*";
        }
        console.log(ligneTexte);
    }
} else {
    console.log("Hauteur invalide.");
}