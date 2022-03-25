class Pronostique {
    constructor(age, poid, taille, hepertention, diabétique, cancer, dyalise, foie, enseinte, defenses_immunitaire, traitement) {
        this.age = age;
        this.taille = taille;
        this.poid = poid;
        this.hepertention = hepertention;
        this.diabétique = diabétique;
        this.cancer = cancer;
        this.dyalise = dyalise;
        this.fois = dyalise;
        this.foie = foie;
        this.enseinte = enseinte;
        this.defenses_immunitaire = defenses_immunitaire;
        this.traitement = traitement;
    }
}

const age = document.querySelector('.age ');
const poid = document.querySelector('.poid');
const taille = document.querySelector('.taille');


// hepertention:
const hypertention_non = document.querySelector('.hypertension_non');
const hypertention_oui = document.querySelector('.hypertension_oui');

var hyper = false;
// var hyper_existe;

hypertention_oui.addEventListener('click', (e) => {
    hyper = true;

})
hypertention_non.addEventListener('click', (e) => {
        hyper = false;
    })
    // if (hypertension == false) {
    //     hypertension = 'non existe';
    // } else {
    //     hypertension = 'existe';
    // }

const suivant = document.querySelector('.suivant');
suivant.addEventListener('click', (e) => {
    var response1 = new Pronostique(age.value, poid.value, taille.value, hyper);
    console.log(response1.age + '' + response1.poid + '' + response1.taille + '' + response1.hepertention);
})