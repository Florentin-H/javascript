const Ville1= {
    nom:"Paris",
    lat: 48.8534,
    long: 2.3488
}
const Ville2= {
    nom:"Bordeaux",
    lat: 44.8333,
    long: 0.5667
}
const Ville3= {
    nom:"Dunkerque",
    lat: 51.035,
    long: 2.378
}
 const villes = [  
    Ville1,
    Ville2,
    Ville3
]

function affichageCoordonnees(){
    villes.forEach((ville)=> {
      console.log  (`----${ville.nom}----\n${ville.lat}\n${ville.long}\n\n`)
        })
        
}

affichageCoordonnees()

