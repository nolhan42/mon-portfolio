document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("formulaire").addEventListener("submit", function(event){
        event.preventDefault();

        let formulaireData = new FormData(this);
        let formulaireStatus = document.getElementById("formulaire-status");

        fetch(this.action, {
            method: "POST",
            body: formulaireData,
            header: {'Accept': 'application/json'}
        })
        .then(response => {
            if(response.ok){
                formulaireStatus.textContent = "Votre message à bien été envoyé";
                formulaireStatus.style.color = "green";
                this.reset();
            }else{
                formulaireStatus.textContent = "Erreur lors de l'envoi du formulaire.";
                formulaireStatus.style.color = "red";
            }
        })
        .catch(error =>{
            formulaireStatus.textContent = "Merci pour l'envoie !";/*temporaire*/
            formulaireStatus.style.color = "red";
        });
    });
});