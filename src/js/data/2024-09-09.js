dataSetVersion = "2024-09-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by keys",
    key: "girl",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Girls Only", key: "girls" },
    ]
  },

];

dataSet[dataSetVersion].characterData = [
  {
    name: "Callie",
    img: "4IxgZWR.png",
    opts: {
      girl: [ "girls" ],
    }
  },
  {
    name: "Marie",
    img: "DZKjSmA.png",
    opts: {
      girl: [ "girls" ],
    }
  },
    {
    name: "Flandre Scarlet",
    img: "U1r0ufK.png",
    opts: {
      girl: [ "girls" ],
    }
  },
    {
    name: "Francine",
    img: "jX8QL0h.png",
    opts: {
      girl: [ "girls" ],
    }
  },
      {
    name: "E-102 Gamma",
    img: "Esx9x8o.png",
    opts: {
      girl: [],
    }
  },
      {
    name: "Glaceon",
    img: "mEQcMUG.png",
    opts: {
      girl: [],
    }
  },
    {
    name: "Ika Musume",
    img: "zHrkIt1.png",
    opts: {
      girl: [ "girls" ],
    }
  },
    {
    name: "Koishi Komeiji",
    img: "oEylvcP.png",
    opts: {
      girl: [ "girls" ],
    }
  },
    {
    name: "Lucario",
    img: "TtUyrGZ.png",
    opts: {
      girl: [],
    }
  },
    {
    name: "Hatsune Miku",
    img: "ZddoWlI.png",
    opts: {
      girl: [ "girls" ],
    }
  },
    {
    name: "Nazrin",
    img: "pm56hw8.png",
    opts: {
      girl: [ "girls" ],
    }
  },
    {
    name: "Remilia Scarlet",
    img: "5tapzVc.png",
    opts: {
      girl: [ "girls" ],
    }
  },
    {
    name: "Shadow the Hedgehog",
    img: "ehFbYzz.png",
    opts: {
      girl: [],
    }
  },
    {
    name: "Shy Guy",
    img: "nSzAna0.png",
    opts: {
      girl: [],
    }
  },
    {
    name: "Silver the Hedgehog",
    img: "lwAFm5Q.png",
    opts: {
      girl: [],
    }
  },
    {
    name: "Snake",
    img: "B9EXE4A.png",
    opts: {
      girl: [],
    }
  },
  {
    name: "Riolu",
    img: "Hdf2YhA.png",
    opts: {
      girl: [],
      notgirl: true 
    }
  }
];
