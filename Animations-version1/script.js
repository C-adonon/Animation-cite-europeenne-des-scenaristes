gsap.registerPlugin(ScrollTrigger);

function moveParagraph() {
  // DEPLACMENT PARAGRAPHE INTRO
  gsap.from("#p1-intro", {
    duration: 1,
    x: "70%",
    opacity: 0,
  });

  gsap.from("#p2-intro", {
    duration: 1,
    x: "-70%",
    opacity: 0,
  });
}

// DESKTOP

function movePicturesDesktop() {
  // DEPLACEMENT PHOTO

  const trigger1 = {
    trigger: "#header2",
    scrub: 1,
  };

  // PREMIERE LIGNE DROITE
  gsap.fromTo(
    ".portrait_row1_right",
    { x: "100%", opacity: 0, scrollTrigger: trigger1 },
    { x: "0%", opacity: 1, scrollTrigger: trigger1 }
  );

  // PREMIERE LIGNE GAUCHE
  gsap.fromTo(
    ".portrait_row1_left",
    { x: "-100%", opacity: 0, scrollTrigger: trigger1 },
    { x: "0%", opacity: 1, scrollTrigger: trigger1 }
  );

  // DEUXIEME LIGNE
  const trigger2 = {
    trigger: ".portrait_row1_right",
    scrub: 1,
  };

  // DEUXIEME LIGNE DROITE
  gsap.fromTo(
    ".portrait_row2_right",
    { x: "100%", opacity: 0, scrollTrigger: trigger2 },
    { x: "0%", opacity: 1, scrollTrigger: trigger2 }
  );

  // DEUXIEME LIGNE MILIEU
  gsap.fromTo(
    ".portrait_row2_middle",
    { y: "100%", opacity: 0, scrollTrigger: trigger2 },
    { y: "0%", opacity: 1, scrollTrigger: trigger2 }
  );

  // DEUXIEME LIGNE GAUCHE
  gsap.fromTo(
    ".portrait_row2_left",
    { x: "-100%", opacity: 0, scrollTrigger: trigger2 },
    { x: "0%", opacity: 1, scrollTrigger: trigger2 }
  );

  // TROISIEME LIGNE
  const trigger3 = {
    trigger: ".portrait_row2_right",
    scrub: 1,
  };

  // TROISIEME LIGNE DROITE
  gsap.fromTo(
    ".portrait_row3_right",
    { x: "90%", opacity: 0, scrollTrigger: trigger3 },
    { x: "0%", opacity: 1, scrollTrigger: trigger3 }
  );

  // TROISIEME LIGNE GAUCHE
  gsap.fromTo(
    ".portrait_row3_left",
    { x: "-90%", opacity: 0, scrollTrigger: trigger3 },
    { x: "0%", opacity: 1, scrollTrigger: trigger3 }
  );

  // QUATRIEME LIGNE
  const trigger4 = {
    trigger: ".portrait_row3_right",
    scrub: 1,
  };

  // QUATRIEME LIGNE DROITE
  gsap.fromTo(
    ".portrait_row4_right",
    { x: "90%", opacity: 0, scrollTrigger: trigger4 },
    { x: "0%", opacity: 1, scrollTrigger: trigger4 }
  );

  // QUATRIEME LIGNE GAUCHE
  gsap.fromTo(
    ".portrait_row4_left",
    { x: "-90%", opacity: 0, scrollTrigger: trigger4 },
    { x: "0%", opacity: 1, scrollTrigger: trigger4 }
  );

  // ANIMATION BACKGROUND

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
    { x: "-60%", opacity: 0, scrollTrigger: trigger4 },
    { x: "0%", opacity: 1, scrollTrigger: trigger4 }
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

  // QUATRIEME LIGNE
  const mobile_trigger4 = {
    trigger: "#MA",
    scrub: 1,
  };

  // CINQUIEME LIGNE
  const mobile_trigger5 = {
    trigger: "#FS",
    scrub: 1,
  };

  // SIXIEME LIGNE
  const mobile_trigger6 = {
    trigger: "#IBC",
    scrub: 1,
  };

  //SEPTIEME LIGNE
  const mobile_trigger7 = {
    trigger: "#FC",
    scrub: 1,
  };

  //HUITIEME LIGNE
  const mobile_trigger8 = {
    trigger: "#MHA",
    scrub: 1,
  };

  // TABLEAU DE TRIGGERS
  const mobile_triggers = [
    mobile_trigger1,
    mobile_trigger2,
    mobile_trigger3,
    mobile_trigger4,
    mobile_trigger5,
    mobile_trigger6,
    mobile_trigger7,
    mobile_trigger8,
  ];

  const left_pictures = [
    "#TB",
    "#CG",
    "#RB",
    "#FS",
    "#AB",
    "#BA",
    "#XC",
    "#HH",
  ];
  const right_pictures = [
    "#PR",
    "#EN",
    "#MA",
    "#empty",
    "#IBC",
    "#FC",
    "#MHA",
    "#AP",
  ];

  for (let i = 0; i < mobile_triggers.length; i++) {
    // console.log(right_pictures[i]);
    if (!!right_pictures[i]) {
      gsap.fromTo(
        right_pictures[i],
        { x: "100%", opacity: 0, scrollTrigger: mobile_triggers[i] },
        { x: "0%", opacity: 1, scrollTrigger: mobile_triggers[i] }
      );
    }

    if (!!left_pictures[i]) {
      gsap.fromTo(
        left_pictures[i],
        { x: "-100%", opacity: 0, scrollTrigger: mobile_triggers[i] },
        { x: "0%", opacity: 1, scrollTrigger: mobile_triggers[i] }
      );
    }
  }
}

function injectDiv() {
  let emptyDiv = document.getElementById("empty");
  emptyDiv.style.display = "contents";
}

ScrollTrigger.matchMedia({ 
  // !!!! ALL !!!!
  all: moveParagraph,

//   // !!!! MEDIUM & LARGE !!!!

  "(min-width: 481px)": movePicturesDesktop,

  // !!!! MOBILE !!!!

  "(max-width: 480px)": function () {
    injectDiv();
    movePicturesMobile();
  },
  
});
