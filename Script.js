class Pronostique {
    constructor(age, poid, taille, hepertention, diabetique, cancer, respiratoire, dyalise, foie, enseinte, defenses_immunitaire, traitement) {
        this.age = age;
        this.taille = taille;
        this.poid = poid;
        this.hepertention = hepertention;
        this.diabetique = diabetique;
        this.cancer = cancer;
        this.respiratoire = respiratoire;
        this.dyalise = dyalise;
        this.foie = foie;
        this.enseinte = enseinte;
        this.defenses_immunitaire = defenses_immunitaire;
        this.traitement = traitement;
    }
}
// recuperation des valeur  
const age = document.querySelector('.age ');
const poid = document.querySelector('.poid');
const taille = document.querySelector('.taille');


// 15 -hepertention: -------------------------------------------------
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

// 16-diabetique  -------------------------------------------------
const diabetique_oui = document.querySelector('.diabetique_oui');
const diabetique_non = document.querySelector('.diabetique_non');
var diabetique = false;

diabetique_oui.addEventListener('click', (e) => {
    diabetique = true;
})
diabetique_non.addEventListener('click', (e) => {
        diabetique = false;
    })
    // 17-cancer -------------------------------------------------

const cancer_oui = document.querySelector('.cancer_oui');
const cancer_non = document.querySelector('.cancer_non');
var cancer = false;

cancer_oui.addEventListener('click', (e) => {
    cancer = true;
})
cancer_non.addEventListener('click', (e) => {
    cancer = false;
})


// 18-drespiratoire -------------------------------------------------


const respiratoire_oui = document.querySelector('.respiratoire_oui');
const respiratoire_non = document.querySelector('.respiratoire_non');
var respiratoire = false;


respiratoire_oui.addEventListener('click', (e) => {
    respiratoire = true;
})
respiratoire_non.addEventListener('click', (e) => {
    respiratoire = false;
})

// 18-dyalisé -------------------------------------------------


const dyalise_oui = document.querySelector('.dyalise_oui');
const dyalise_non = document.querySelector('.dyalise_non');
var dyalise = false;

dyalise_oui.addEventListener('click', (e) => {
    dyalise = true;
})
dyalise_non.addEventListener('click', (e) => {
    dyalise = false;
})

// 18-foie -------------------------------------------------


const foie_oui = document.querySelector('.foie_oui');
const foie_non = document.querySelector('.foie_non');
var foie = false;

foie_oui.addEventListener('click', (e) => {
    foie = true;
})
foie_non.addEventListener('click', (e) => {
        foie = false;
    })
    // 19-enseint -------------------------------------------------


const oui_enseinte = document.querySelector('.oui_enceinte');
const non_enseinte = document.querySelector('.non_enceinte');
const homme = document.querySelector('.Homme');
var enseinte = false;

oui_enseinte.addEventListener('click', (e) => {
    enseinte = true;
})
non_enseinte.addEventListener('click', (e) => {
    enseinte = false;
})
homme.addEventListener('click', (e) => {
    enseinte = false;
})


// 19-enseint 

var immunitaire = false;
const immunitaires_non = document.querySelector('.immunitaires_non');
const immunitaires_oui = document.querySelector('.immunitaires_oui');

immunitaires_oui.addEventListener('click', (e) => {
    immunitaire = true;
})
immunitaires_non.addEventListener('click', (e) => {
    immunitaire = false;
})

// 19-traitment

var traitement = false;
const traitement_non = document.querySelector('.traitement_non');
const traitement_oui = document.querySelector('.traitement_oui');

traitement_oui.addEventListener('click', (e) => {
    traitement = true;
})
traitement_non.addEventListener('click', (e) => {
    traitement = false;
})
let ReponseTrue = {}
const suivant = document.querySelector('.suivant');
suivant.addEventListener('click', (e) => {
    var response1 = new Pronostique(age.value, poid.value, taille.value, hyper, diabetique, cancer, respiratoire, dyalise, foie, enseinte, immunitaire, traitement);

    console.log(' \n age : ' + response1.age + ' \n poid :' + response1.poid + '\n taille :' + response1.taille + '\n hypertention :' + response1.hepertention + '\n diabetique :' + response1.diabetique + '\n cancer :' + response1.cancer + '\n respiratoire :' + response1.respiratoire + '\n dyalise :' + response1.dyalise + ' \n foie :' + response1.foie + ' \n enseint:' + response1.enseinte + ' \n immunitaire:' + response1.defenses_immunitaire + '\n traitement : ' + response1.traitement);

    if (hyper)
        ReponseTrue['hypertention'] = true;
    else
        delete ReponseTrue['hypertention'];
    if (diabetique) ReponseTrue['diabetique'] = true;
    else delete ReponseTrue['diabetique'];

    if (cancer) ReponseTrue['cancer'] = true;
    else delete ReponseTrue['cancer'];

    if (respiratoire) ReponseTrue['respiratoire'] = true;
    else delete ReponseTrue['respiratoire'];

    if (dyalise) ReponseTrue['dyalise'] = true;
    else delete ReponseTrue['dyalise'];

    if (foie) ReponseTrue['foie'] = true;
    else delete ReponseTrue['foie'];

    if (enseinte) ReponseTrue['enseinte'] = true;
    else delete ReponseTrue['enseinte'];

    if (immunitaire) ReponseTrue['immunitaire'] = true;
    else delete ReponseTrue['immunitaire'];

    if (traitement) ReponseTrue['traitement'] = true;
    else delete ReponseTrue['traitement'];

    console.log(ReponseTrue);
})

let message;

function res() {

    let countSyNormal = Object.keys(symptomes).length;
    let countSyMaj = Object.keys(majeur).length;
    let countSyMin = Object.keys(mineur).length;
    let CountfactPr = Object.keys(ReponseTrue).length;

    if (!countSyNormal) {
        message = "Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute.Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation.Pour toute information concernant le Covid - 19 allez vers la page d’ accueil.";
    } else if (countSyMaj) {
        message = "Appel 141";
    } else
    if (CountfactPr) {
        if (countSyMin >= 2)
            message = "appel 141";
        else
            message = "appelez le 141 si une gêne respiratoire ou des difficultésimportantes pour s’ alimenter ou boire pendant plusde 24 h apparaissent ";
    } else if (!CountfactPr) {
        if (!countSyMin && age < 50)
            message = "nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’ apparition de nouveaux symptômes.Vous pourrez aussi utiliser à nouveau l’ application pour réévaluer vos symptômes.";
        if (age >= 50 && age <= 69)
            message = "appelez le 141 si une gêne respiratoire ou des difficultésimportantes pours’ alimenter ou boire pendant plus de 24 h apparaissent.";
    }
    if (mineur.hasOwnProperty("temperature") && symptomes.hasOwnProperty("toux")) {
        if (!CountfactPr) {
            if (countSyMin == true) {
                message = "appelez le 141 si une gêne respiratoire ou des difficultésimportantes pour s’ alimenter ou boire pendant plusde 24 h apparaissent";
            }
        } else {
            if (countSyMin <= 1)
                message = "appelez le 141 si une gêne respiratoire ou des difficultésimportantes pour s’ alimenter ou boire pendant plusde 24 h apparaissent";
            else
                message = "appel 141";
        }
    } else if (symptomes.hasOwnProperty("toux") || symptomes.hasOwnProperty("gorge") || symptomes.hasOwnProperty("fatigue")) {
        if (!countSyMin) {
            message = "Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute.";

        } else {
            if (countSyMin || CountfactPr) {
                message = "Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé.Au moindre doute, appelez le 141. ";

            }
        }
    } else {
        message = "Appelez le 141 si une gêne respiratoire ou des difficultésimportantes pour s’ alimenter ou boire pendant plusde 24 h apparaissent";
    }
    // alert(message);
    localStorage.setItem("result", message);
    location.href = 'result.html';
}