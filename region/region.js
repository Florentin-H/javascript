const lands = document.querySelectorAll(".land");

const landInformation = document.querySelector('fieldset.land p')
const populationInformation = document.querySelector('fieldset.population p')
const areaInformation = document.querySelector('fieldset.area p')
const longInformation = document.querySelector('fieldset.long p')
const latInformation = document.querySelector('fieldset.lat p')

const showInformations = (element) => {
  const selectedLand = landsInformations.find((land) => {
    return land.id == element.id
  })
  
  element.classList.add('selected')

  landInformation.innerHTML = selectedLand.land ?? 'Inconnue'
  populationInformation.innerHTML = selectedLand.population ?? 'Inconnue'
  areaInformation.innerHTML = selectedLand.area ?? 'Inconnue'
  longInformation.innerHTML = selectedLand.long ?? 'Inconnue'
  latInformation.innerHTML = selectedLand.lat ?? 'Inconnue'
}

lands.forEach((land) => {
    
    // land.addEventListener('mouseenter', (e) => {
    land.addEventListener('click', (e) => {
      const oldSelected = document.querySelector('.selected')
      console.log(oldSelected)
      if (oldSelected){
          oldSelected.classList.remove('selected')

      }
    const landClickedElement = e.target;
    showInformations(landClickedElement)
  });

})

const landsInformations = [
  { id: 'FR-01', land: 'Ain', area: '5 762 km2', lat:'5° 20′ 00″ est', long:'46° 05′ 00″ nord', population: '657 856' }, 
  { id: "FR-02", land: 'Aisne', area: '7 361,68 km2', lat:'49° 30′ nord', long:'3° 40′ est', population: '529 374' },
  { id: "FR-03", land:'Allier', area: '	7 340 km2', lat:'3° 10′ est', long:'46° 25′ nord', population: '	335 628' },
  { id: "FR-04", land:'Alpes-de-Haute-Provence', area: '6 925 km2', lat:'6° 10′ est', long:'44° 00′ nord', population: '165 451' },
  { id: "FR-05", land:'Hautes-Alpes', area: '5 549 km2', lat:'6° 20′ est', long:'44° 40′ nord', population: '140 605' },
  { id: "FR-06", land:'Alpes-Maritimes', area: '	4 299 km2', lat:'7° 10′ est', long:'43° 50′ nord', population: '1 097 410' },
  { id: "FR-07", land:'Ardèche', area: '329 325', lat:'4° 25′ est', long:'44° 40′ nord', population: '329 325' },
  { id: "FR-08", land:'Ardennes', area: '5 229 km2', lat:'4° 40′ est', long:'49° 35′ nord', population: '269 701' },
  { id: "FR-09", land:'Ariège', area: '4 890 km2', lat:'1° 30′ est', long:'43° 00′ nord', population: '153 954' },
  { id: "FR-10", land:'Aube', area: '6 004 km2', lat:'4° 10′ est', long:'48° 20′ nord', population: '311 435' },
  { id: "FR-11", land:'Aude', area: '	6 139 km2', lat:'2° 25′ est', long:'43° 05′ nord', population: '375 217' },
  { id: "FR-12", land:'Aveyron', area: '8 735 km2', lat:'2° 42′ est', long:'44° 15′ nord', population: '279 554' },
  { id: "FR-13", land:'Bouches-du-Rhône', area: '5 087 km2', lat:'5° 10′ est', long:'43° 30′ nord', population: '2 048 070' },
  { id: "FR-14", land:'Calvados', area: '5 535 km2', lat:'0° 15′ ouest', long:'49° 02′ nord,', population: '	697 547' },
  { id: "FR-15", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-16", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-17", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-18", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-19", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-2A", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-2B", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-21", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-22", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-23", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-24", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-25", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-26", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-27", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-28", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-29", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-30", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-31", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-32", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-33", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-34", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-35", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-36", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-37", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-38", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-39", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-40", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-41", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-42", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-43", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-44", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-45", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-46", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-47", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-48", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-49", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-50", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-51", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-52", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-53", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-54", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-55", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-56", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-57", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-58", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-59", land: 'Nord', area: '5 743 km2', lat:'50° 23′ nord', long:'3° 19′ est', population: '2 607 746' },
  { id: "FR-60" , land: 'Oise', area: '5 860 km2', lat:'49° 23′ nord', long:'2° 25′ est', population: '829 699' },
  { id: "FR-61", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-62" , land: 'Pas-De-Calais', area: '6 671 km2', lat:'50° 36′ nord', long:'2° 19′ est', population: '1 462 167' },
  { id: "FR-63", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-64", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-65", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-66" , land:'', area: '', lat:'', long:'', population: ''},
  { id: "FR-67" , land:'', area: '', lat:'', long:'', population: ''},
  { id: "FR-68" , land:'', area: '', lat:'', long:'', population: ''},
  { id: "FR-69" , land:'', area: '', lat:'', long:'', population: ''},
  { id: "FR-70" , land:'', area: '', lat:'', long:'', population: ''},
  { id: "FR-71" , land:'', area: '', lat:'', long:'', population: ''},
  { id: "FR-72" , land:'', area: '', lat:'', long:'', population: ''},
  { id: "FR-73", land:'', area: '', lat:'', long:'', population: '' },
  { id: "FR-74" , land:'', area: '', lat:'', long:'', population: ''},
  { id: "FR-75" , land:'', area: '', lat:'', long:'', population: ''},
  { id: "FR-76" , land:'', area: '', lat:'', long:'', population: ''},
  { id: "FR-77" , land:'', area: '', lat:'', long:'', population: ''},
  { id: "FR-78" , land:'', area: '', lat:'', long:'', population: ''},
  { id: "FR-79" , land:'', area: '', lat:'', long:'', population: ''},
  { id: "FR-80" , land: 'Somme', area: '	6 170 km2', lat:'49° 53′ nord', long:'2° 25′ est', population: '	568 748' },
  { id: "FR-81" , land:'', area: '', lat:'', long:'', population: ''},
  { id: "FR-82" },
  { id: "FR-83" },
  { id: "FR-84" },
  { id: "FR-85" },
  { id: "FR-86" },
  { id: "FR-87" },
  { id: "FR-88" },
  { id: "FR-89" },
  { id: "FR-90" },
  { id: "FR-91" },
  { id: "FR-92" },
  { id: "FR-93" },
  { id: "FR-94" },
  { id: "FR-95" }
];
