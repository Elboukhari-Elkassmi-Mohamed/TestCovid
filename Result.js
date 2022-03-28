let fgMaj, fp, fgMin, symptomes, message;
//message pour tout
msgAll = "";
if (!symtomes) {
    message = "Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute.Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation.Pour toute information concernant le Covid - 19 allez vers la page d’ accueil.";
} else if (fgMaj)
    message = "Appel 141";
else if (fp == true) {
    if (fgMin >= 2)
        message = "appel 141";
    else
        message = "appelez le 141 si une gêne respiratoire ou des difficultésimportantes pour s’ alimenter ou boire pendant plusde 24 h apparaissent ";
} else if (fp == false) {
    if (fgMin == false && age < 50)
        message = "nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’ apparition de nouveaux symptômes.Vous pourrez aussi utiliser à nouveau l’ application pour réévaluer vos symptômes.";
    if (age >= 50 && age <= 69)
        message = "appelez le 141 si une gêne respiratoire ou des difficultésimportantes pours’ alimenter ou boire pendant plus de 24 h apparaissent.";
}
if (symptomes.includes("fievre") && symptomes.includes("toux")) {
    if (fp == false) {
        if (fgMin == true) {
            message = "appelez le 141 si une gêne respiratoire ou des difficultésimportantes pour s’ alimenter ou boire pendant plusde 24 h apparaissent";
        }
    } else {
        if (fgMin <= 1)
            message = "appelez le 141 si une gêne respiratoire ou des difficultésimportantes pour s’ alimenter ou boire pendant plusde 24 h apparaissent";
        else
            message = "appel 141";
    }
} else if (symptomes.includes("toux") || symptomes.includes("gorge") || symptomes.includes("fatigue")) {
    if (fgMin == false) {
        message = "Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute.";

    } else {
        if (fgMin == true || fp == true) {
            message = "Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé.Au moindre doute, appelez le 141. ";
        }
    }
}