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
  { id: 'FR-01', land: '' },
  { id: "FR-02" , land: 'Aisne', area: '7 361,68 km2', lat:'49° 30′ nord', long:'3° 40′ est', population: '529 374' },
  { id: "FR-03" },
  { id: "FR-04" },
  { id: "FR-05" },
  { id: "FR-06" },
  { id: "FR-07" },
  { id: "FR-08" },
  { id: "FR-09" },
  { id: "FR-10" },
  { id: "FR-11" },
  { id: "FR-12" },
  { id: "FR-13" },
  { id: "FR-14" },
  { id: "FR-15" },
  { id: "FR-16" },
  { id: "FR-17" },
  { id: "FR-18" },
  { id: "FR-19" },
  { id: "FR-2A" },
  { id: "FR-2B" },
  { id: "FR-21" },
  { id: "FR-22" },
  { id: "FR-23" },
  { id: "FR-24" },
  { id: "FR-25" },
  { id: "FR-26" },
  { id: "FR-27" },
  { id: "FR-28" },
  { id: "FR-29" },
  { id: "FR-30" },
  { id: "FR-31" },
  { id: "FR-32" },
  { id: "FR-33" },
  { id: "FR-34" },
  { id: "FR-35" },
  { id: "FR-36" },
  { id: "FR-37" },
  { id: "FR-38" },
  { id: "FR-39" },
  { id: "FR-40" },
  { id: "FR-41" },
  { id: "FR-42" },
  { id: "FR-43" },
  { id: "FR-44" },
  { id: "FR-45" },
  { id: "FR-46" },
  { id: "FR-47" },
  { id: "FR-48" },
  { id: "FR-49" },
  { id: "FR-50" },
  { id: "FR-51" },
  { id: "FR-52" },
  { id: "FR-53" },
  { id: "FR-54" },
  { id: "FR-55" },
  { id: "FR-56" },
  { id: "FR-57" },
  { id: "FR-58" },
  { id: "FR-59", land: 'Nord', area: '5 743 km2', lat:'50° 23′ nord', long:'3° 19′ est', population: '2 607 746' },
  { id: "FR-60" , land: 'Oise', area: '5 860 km2', lat:'49° 23′ nord', long:'2° 25′ est', population: '829 699' },
  { id: "FR-61" },
  { id: "FR-62" , land: 'Pas-De-Calais', area: '6 671 km2', lat:'50° 36′ nord', long:'2° 19′ est', population: '1 462 167' },
  { id: "FR-63" },
  { id: "FR-64" },
  { id: "FR-65" },
  { id: "FR-66" },
  { id: "FR-67" },
  { id: "FR-68" },
  { id: "FR-69" },
  { id: "FR-70" },
  { id: "FR-71" },
  { id: "FR-72" },
  { id: "FR-73" },
  { id: "FR-74" },
  { id: "FR-75" },
  { id: "FR-76" },
  { id: "FR-77" },
  { id: "FR-78" },
  { id: "FR-79" },
  { id: "FR-80" , land: 'Somme', area: '	6 170 km2', lat:'49° 53′ nord', long:'2° 25′ est', population: '	568 748' },
  { id: "FR-81" },
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
