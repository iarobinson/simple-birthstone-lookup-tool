const birthStoneData = {
  "by time frame": {
    "January": {
      "15th-20th century": ["garnet"],
      "U.S. (1912)": ["garnet"],
      "UK (2013)": ["garnet"],
      "U.S (2019)": ["garnet"],
    },
    "February": {
      "15th-20th century": ["amethyst", "hyacinth", "pearl"],
      "U.S. (1912)": ["amethyst"],
      "UK (2013)": ["amethyst"],
      "U.S (2019)": ["amethyst"],
    },
    "March": {
      "15th-20th century": ["bloodstone", "jasper"],
      "U.S. (1912)": ["bloodstone", "aquamarine"],
      "UK (2013)": ["bloodstone", "aquamarine"],
      "U.S (2019)": ["bloodstone", "aquamarine"],
    },
    "April": {
      "15th-20th century": ["diamond", "sapphire"],
      "U.S. (1912)": ["diamond"],
      "UK (2013)": ["diamond", "rock crystal"],
      "U.S (2019)": ["diamond"],
    },
    "May": {
      "15th-20th century": ["emerald", "agate"],
      "U.S. (1912)": ["emerald"],
      "UK (2013)": ["emerald", "chrysoprase"],
      "U.S (2019)": ["emerald"],
    },
    "June": {
      "15th-20th century": ["cat's eye", "turquoise", "agate"],
      "U.S. (1912)": ["pearl", "moonstone"],
      "UK (2013)": ["pearl", "moonstone"],
      "U.S (2019)": ["pearl", "moonstone", "alexandrite"],
    },
    "July": {
      "15th-20th century": ["turquoise", "onyx"],
      "U.S. (1912)": ["ruby"],
      "UK (2013)": ["ruby", "carnelian"],
      "U.S (2019)": ["ruby"],
    },
    "August": {
      "15th-20th century": ["sardonyx", "carnelian", "moonstone", "topaz"],
      "U.S. (1912)": ["sardonyx", "peridot"],
      "UK (2013)": ["peridot", "sardonyx"],
      "U.S (2019)": ["peridot", "spinel"],
    },
    "September": {
      "15th-20th century": ["chrysolite"],
      "U.S. (1912)": ["sapphire"],
      "UK (2013)": ["sapphire", "lapis lazuli"],
      "U.S (2019)": ["sapphire"],
    },
    "October": {
      "15th-20th century": ["opal", "aquamarine"],
      "U.S. (1912)": ["opal", "tourmaline"],
      "UK (2013)": ["opal"],
      "U.S (2019)": ["opal", "tourmaline"],
    },
    "November": {
      "15th-20th century": ["topaz", "pearl"],
      "U.S. (1912)": ["topaz"],
      "UK (2013)": ["topaz", "citrine"],
      "U.S (2019)": ["topaz", "citrine"],
    },
    "December": {
      "15th-20th century": ["bloodstone", "ruby"],
      "U.S. (1912)": ["turquoise", "lapis lazuli"],
      "UK (2013)": ["tanzanite", "turquoise"],
      "U.S (2019)": ["turquoise", "zircon", "tanzanite"],
    },
  }
}

const form = document.getElementById('birthdayForm');

form.addEventListener('submit', (event) => {

  const lists = document.querySelectorAll('ul');

  lists.forEach(function(list) {
    list.remove();
  });

  event.preventDefault();

  const birthdate = document.getElementById('birthdate');
  const monthNumber = parseInt(birthdate.value.split("-")[1]) - 1;
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const hash = birthStoneData["by time frame"][months[monthNumber]];

  for (let key in hash) {
    const list = document.createElement('ul');
    const heading = document.createElement('h2');
    heading.textContent = key;
    list.appendChild(heading);
  
    for (let i = 0; i < hash[key].length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = hash[key][i];
      list.appendChild(listItem);
    }

    document.body.appendChild(list);
  }

});
