//-----------------------Div Scolaire/Stage-----------------------//
function showContent(type) {
  // Réinitialiser les styles des boutons
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {//Pour chaque button active/désactive
    if (button.textContent === type) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
  
  // Mettre à jour le contenu de la div
  const container = document.getElementById('container_projet');
  const container2 = document.getElementById('container2');
  const stage = document.getElementById('Stage');
  const scolaire = document.getElementById('Scolaire');

  container.classList.remove('hidden');
  container2.classList.remove('hidden');

  if(type === 'Stage'){
    container2.innerHTML = '<p>Réalisation Stage</p>'; //Ecrit dans la div
    container2.querySelector('p').style.fontSize = '40px'; //Modifie la taille du texte afficher
    stage.classList.remove('hidden');
    scolaire.classList.add('hidden');

  }else if(type === 'Scolaire') {
    container2.innerHTML = '<p>Réalisation Scolaire</p>';
    container2.querySelector('p').style.fontSize = '40px';
    scolaire.classList.remove('hidden');
    stage.classList.add('hidden');
  }
}

//-----------------------Responsive image + arrow-----------------------//
const imgHidden = document.querySelectorAll('#img_hidden');
const imgNoHidden = document.querySelectorAll('#img_Nohidden');
const arrowlx = document.getElementById("left_arrow_x");
const arrowrx = document.getElementById("right_arrow_x");
const arrowr = document.getElementById("right_arrow_s");
const arrowl = document.getElementById("left_arrow_s");

if (window.innerWidth < 1024){
  imgHidden.forEach(img => img.classList.remove('hidden'));
  imgNoHidden.forEach(img => img.classList.add('hidden'));
  if(arrowl, arrowlx, arrowr, arrowrx) {
    arrowlx.classList.remove("hidden");
    arrowrx.classList.remove("hidden");
    arrowl.classList.add("hidden");
    arrowr.classList.add("hidden");
  }
}

//-----------------------Preview image-----------------------//
if(window.innerWidth > 1024){
  function openImage(imageSrc) {
    document.getElementById('imageAffichage').style.display = 'block';
    document.getElementById('affichageImage').src = imageSrc;
  }
  
  function closeImage() {
    document.getElementById('imageAffichage').style.display = 'none';
  }
}

//-----------------------Image des réalisations-----------------------//
const divs2 = ['stage1', 'stage2']; // Liste d'éléments
const divElements2 = {
  'stage1': document.getElementById('div_stage1'),
  'stage2': document.getElementById('div_stage2')
};

const divs = ['oid', 'puiss4nce', 'gestimmo', 'siteasso', 'solutionv']; // Liste d'éléments
const divElements = {
  'oid': document.getElementById('div_oid'),
  'puiss4nce': document.getElementById('div_puiss4nce'),
  'gestimmo': document.getElementById('div_gestimmo'),
  'siteasso': document.getElementById('div_siteasso'),
  'solutionv': document.getElementById('div_solutionv'),
};

// Stage
if (divElements2['stage1'] && divElements2['stage2']){
  let currentIndex1 = 0;

  // Fonction de navigation
  function switchImage1(direction) {
    divElements2[divs2[currentIndex1]].classList.add('hidden'); // ajoute la classe "hidden" à l'élément actuel
    currentIndex1 = (currentIndex1 + direction + divs2.length) % divs2.length; // Change l'index en fonction de la direction (-1, +1) et du nombre total de div (divs.length)
    divElements2[divs2[currentIndex1]].classList.remove('hidden'); // retire la classe "hidden" à l'élément actuel
  }

  divElements2[divs2[currentIndex1]].classList.remove('hidden'); // Permet d'afficher la première div (supprime la classe "hidden")
}

// Scolaire
if (divElements['oid'] && divElements['puiss4nce'] && divElements['gestimmo'] && divElements['siteasso'] && divElements['solutionv']) {
  let currentIndex2 = 0;

  // Fonction de navigation
  function switchImage2(direction) {
    divElements[divs[currentIndex2]].classList.add('hidden');
    currentIndex2 = (currentIndex2 + direction + divs.length) % divs.length;
    divElements[divs[currentIndex2]].classList.remove('hidden');
  }

  divElements[divs[currentIndex2]].classList.remove('hidden'); 
}

//-----------------------Missions Stages 1ère année-----------------------//
const divmission = ['Mission1', 'Mission2', 'Mission3']
const divElements3 = {
  'Mission1': document.getElementById('s1_Mission1'),
  'Mission2': document.getElementById('s1_Mission2'),
  'Mission3': document.getElementById('s1_Mission3')
}

if (divElements3['Mission1'] && divElements3['Mission2'] && divElements3['Mission3']){
  let currentIndex = 0;

  // Fonction de navigation
  function switchmission1(direction) {
    divElements3[divmission[currentIndex]].classList.add('hidden');
    currentIndex = (currentIndex + direction + divmission.length) % divmission.length;
    divElements3[divmission[currentIndex]].classList.remove('hidden');
  }

  divElements3[divmission[currentIndex]].classList.remove('hidden');
}

//-----------------------Missions Stages 2ème année-----------------------//
const divmission2 = ['Mission1', 'Mission2', 'Mission3']
const divElements3_2 = {
  'Mission1': document.getElementById('s2_Mission1'),
  'Mission2': document.getElementById('s2_Mission2'),
  'Mission3': document.getElementById('s2_Mission3')
}

if (divElements3_2['Mission1'] && divElements3_2['Mission2'] && divElements3_2['Mission3']){
  let currentIndex = 0;

  // Fonction de navigation
  function switchmission2(direction) {
    divElements3_2[divmission2[currentIndex]].classList.add('hidden');
    currentIndex = (currentIndex + direction + divmission2.length) % divmission2.length;
    divElements3_2[divmission2[currentIndex]].classList.remove('hidden');
  }

  divElements3_2[divmission2[currentIndex]].classList.remove('hidden');
}

//-----------------------Burger Menu (pour téléphone)-----------------------//
const burgerMenu = document.getElementById('burger-menu');
const menu = document.getElementById('menu');

if (burgerMenu && menu) {
  if (window.innerWidth > 768) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }

  burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
}