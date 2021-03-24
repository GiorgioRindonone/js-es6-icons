
//

//



const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];



// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
const iconsContainer = $('.icons');



// Milestone 2
// Coloriamo le icone per tipo
const colors = [

  {
    category: "food",
    color: "yellow"
  },
  {
    category: "beverage",
    color: "red"
  },
  {
    category: "food",
    color: "green"
  },
];

const iconsColored = icons.map((icon) => {

  let colorItem;

  colors.forEach((item) => {
    if (icon.category == item.category ) {
      colorItem = item.color;
    }
  });

  item.color = colorItem;

  return icon;

});

printIcons(iconsContainer, iconsColored);


// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const select = $('#type');

const categories = getCategories(icons);
printOptions(select, categories);

select.change(function() {

  const optionSelected = $(this).val();

  let iconsFiltered = iconsColored.filter((icon) => {
    return icon.category == optionSelected;
  });

  if (iconsFiltered.length == 0) {
    iconsFiltered = iconsColored;
  }

  printIcons(iconsContainer, iconsFiltered);
});

//funzioni

function printIcons(target, icons) {
  target.html("");

  icons.forEach((icon) => {

    const {name, prefix, family} = icon;

    const html = '<div><i class="${family} ${prefix}${name}"> </i> <div class="title">${name}</div></div>';

    $('.icons').append(html);
  });
}
