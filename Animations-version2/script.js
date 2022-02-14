gsap.registerPlugin(ScrollTrigger);

function moveParagraph() {
  // DEPLACMENT PARAGRAPHE INTRO
  gsap.from("#p1-intro", {
    duration: 1,
    x: "70%",
    y: "-70%",
    opacity: 0,
  });

  gsap.from("#p2-intro", {
    duration: 1,
    x: "-70%",
    y: "70%",
    opacity: 0,
  });
}

// DESKTOP //

function movePicturesDesktop() {
  // DEPLACEMENT PHOTO
  // TRIGGERS

  //PREMIERE LIGNE
  const trigger1 = {
    trigger: "#header2",
    scrub: 1,
  };

  //DEUXIEME LIGNE
  const trigger2 = {
    trigger: ".portrait_row1_right",
    scrub: 1,
  };

  // TROISIEME LIGNE
  const trigger3 = {
    trigger: ".portrait_row2_right",
    scrub: 1,
  };

  // QUATRIEME LIGNE
  const trigger4 = {
    trigger: ".portrait_row3_right",
    scrub: 1,
  };

  // TABLEAUX DES TRIGGERS
  const triggers = [
    trigger1,
    trigger1,
    trigger1,
    trigger1,
    trigger2,
    trigger2,
    trigger2,
    trigger3,
    trigger3,
    trigger3,
    trigger3,
    trigger4,
    trigger4,
    trigger4,
    trigger4,
  ];
  // TABLEAU DES ID
  const ids = [
    "#TB",
    "#PR",
    "#CG",
    "#EN",
    "#MA",
    "#FS",
    "#RB",
    "#BA",
    "#IBC",
    "#AB",
    "#FC",
    "#XC",
    "#MHA",
    "#HH",
    "#AP",
  ];
  // TABLEAUX DES POSITIONS INITIALES X ET Y
  const position_x = [
    "-80%",
    "-80%",
    "80%",
    "80%",
    "0%",
    "80%",
    "-80%",
    "0%",
    "0%",
    "-100%",
    "100%",
    "-80%",
    "-80%",
    "80%",
    "80%",
  ];
  const position_y = [
    "-60%",
    "-50%",
    "-50%",
    "-60%",
    "100%",
    "0%",
    "0%",
    "70%",
    "70%",
    "100%",
    "100%",
    "60%",
    "50%",
    "60%",
    "50%",
  ];
  
  // NOMBRE D'IMAGES
  const nbr_images = 15;
  // TABLEAU D'OBJETS {id,pos_x,pos_y,trigger}
  const images = [nbr_images];

  // FONCTION QUI CONSTRUIT CHAQUE OBJET
  function makePosition(id, x, y, trigger) {
    const img_position = {
      img_id: id,
      img_x: x,
      img_y: y,
      img_trigger: trigger,
    };
    return img_position;
  }

  // BOUCLE QUI REMPLIT LE TABLEAU images[] D'OBJET
  for (let z = 0; z < nbr_images; z++) {
    images[z] = makePosition(ids[z], position_x[z], position_y[z], triggers[z]);
  }

  console.table(images);

  // BOUCLE QUI DEPLACE CHAQUE IMAGE
  for (let i = 0; i < images.length; i++) {
    gsap.fromTo(
      images[i].img_id,
      {
        x: images[i].img_x,
        y: images[i].img_y,
        opacity: 0,
        scrollTrigger: images[i].img_trigger,
      },
      { x: "0%", y: "0%", opacity: 1, scrollTrigger: images[i].img_trigger }
    );
  }

  // DEPLACEMENT BACKGROUND

  // vector_blue_top
  // au temps

  gsap.from("#vector_blue_top", {
    duration: 1,
    x: "10%",
    y: "-10%",
  });

  // vector_orange_top_left
  gsap.from("#vector_orange_top_left", {
    duration: 1,
    x: "-10%",
    y: "10%",
  });

  // vector_blue_right
  // au scroll
  gsap.fromTo(
    "#vector_blue_right",
    { x: "50%", opacity: 0, scrollTrigger: trigger3 },
    { x: "0%", opacity: 1, scrollTrigger: trigger3 }
  );

  // vector_yellow_left
  gsap.fromTo(
    "#vector_yellow_left",
    { x: "-60%", opacity: 0, scrollTrigger: trigger3 },
    { x: "0%", opacity: 1, scrollTrigger: trigger3 }
  );

  // vector_orange_bottom
  gsap.fromTo(
    "#vector_orange_bottom",
    { y: "90%", opacity: 0, scrollTrigger: trigger4 },
    { y: "0%", opacity: 1, scrollTrigger: trigger4 }
  );
}

// MOBILE //

function movePicturesMobile() {
  // DEPLACMENT BACKGROUND
  // au temps
  gsap.from(" #vector_blue_right ", {
    duration: 1,
    x: "10%",
    y: "-10%",
  });

  gsap.from("#vector_yellow_left, #vector_orange_top_left", {
    duration: 1,
    x: "-10%",
    y: "10%",
  });

  gsap.from("#vector_orange_bottom", {
    duration: 1,
    y: "10%",
  });

  // DEPLACEMENT PHOTOS
  // PREMIERE LIGNE
  const mobile_trigger1 = {
    trigger: "#header2",
    scrub: 1,
  };

  // DEUXIEME LIGNE
  const mobile_trigger2 = {
    trigger: "#PR",
    scrub: 1,
  };

  // TROISIEME LIGNE
  const mobile_trigger3 = {
    trigger: "#EN",
    scrub: 1,
  };

  // QUATRIEME LIGNE FS
  const mobile_trigger4 = {
    trigger: "#MA",
    scrub: 1,
  };

  // CINQUIEME LIGNE
  const mobile_trigger5 = {
    trigger: "#FS_name",
    scrub: 1,
  };

  // SIXIEME LIGNE
  const mobile_trigger6 = {
    trigger: "#IBC_name",
    scrub: 1,
  };

  //SEPTIEME LIGNE
  const mobile_trigger7 = {
    trigger: "#FC_name",
    scrub: 1,
  };

  //HUITIEME LIGNE
  const mobile_trigger8 = {
    trigger: "#MHA_name",
    scrub: 1,
  };

  const mobile_triggers = [
    mobile_trigger2,
    mobile_trigger3,
    mobile_trigger4,
    mobile_trigger5,
    mobile_trigger6,
    mobile_trigger7,
  ];

  const left_pictures = ["#CG", "#RB", "#FS", "#AB", "#BA", "#XC"];
  const right_pictures = ["#EN", "#MA", "#empty", "#IBC", "#FC", "#MHA"];

  // PREMIERE LIGNE
  // DEPLACEMENT VERS LE BAS DROITE
  gsap.fromTo(
    "#TB",
    { x: "-60%", y: "-40%", opacity: 0, scrollTrigger: mobile_trigger1 },
    { x: "0%", y: "0%", opacity: 1, scrollTrigger: mobile_trigger1 }
  );

  // DEPLACEMENT VERS LE BAS GAUCHE
  gsap.fromTo(
    "#PR",
    { x: "60%", y: "-40%", opacity: 0, scrollTrigger: mobile_trigger1 },
    { x: "0%", y: "0%", opacity: 1, scrollTrigger: mobile_trigger1 }
  );

  // BOUCLE DEPLACEMENT LIGNES 2 A 7
  for (let j = 0; j < mobile_triggers.length; j++) {
    // DEPLACEMENT VERS LA DROITE
    // console.log(mobile_triggers[j]);
    if (!!right_pictures[j]) {
      gsap.fromTo(
        right_pictures[j],
        { x: "100%", opacity: 0, scrollTrigger: mobile_triggers[j] },
        { x: "0%", opacity: 1, scrollTrigger: mobile_triggers[j] }
      );
    }
    // DEPLACEMENT VERS LA GAUCHE
    if (!!left_pictures[j]) {
      gsap.fromTo(
        left_pictures[j],
        { x: "-100%", opacity: 0, scrollTrigger: mobile_triggers[j] },
        { x: "0%", opacity: 1, scrollTrigger: mobile_triggers[j] }
      );
    }
  }

  // DERNIERE LIGNE
  // DEPLACMENTT VERS LE HAUT GAUCHE
  gsap.fromTo(
    "#AP",
    { x: "80%", y: "60%", opacity: 0, scrollTrigger: mobile_trigger8 },
    { x: "0%", y: "0%", opacity: 1, scrollTrigger: mobile_trigger8 }
  );

  // DEPLACMENTT VERS LE HAUT DROITE
  gsap.fromTo(
    "#HH",
    { x: "-80%", y: "60%", opacity: 0, scrollTrigger: mobile_trigger8 },
    { x: "0%", y: "0%", opacity: 1, scrollTrigger: mobile_trigger8 }
  );
}

function injectDiv() {
  let emptyDiv = document.getElementById("empty");
  emptyDiv.style.display = "contents";
}

ScrollTrigger.matchMedia({
  //  !!!! ALL !!!!

  all: moveParagraph,

  // !!!!  MEDIUM & LARGE !!!!

  "(min-width: 481px)": movePicturesDesktop,

  //  !!!! MOBILE !!!!

  "(max-width: 480px)": function () {
    injectDiv();
    movePicturesMobile();
  },
});
