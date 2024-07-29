const button = document.querySelector(".button");

const mouseHoverAnimation = () => {
  anime({
    targets: button,
    width: "70%",
    scale: {
      delay: 800,
      value: 1.5,
    },
    duration: 1500,
  });
};

const mouseOutAnimation = () => {
  anime({
    targets: button,
    width: "300px",
    scale: {
      delay: 800,
      value: 1,
    },
    duration: 1500,
  });
};

anime({
    targets:'.linux',
    strokeDashoffset:[anime.strokeDashoffset,0],
    easing:'easeInOutSine',
    duration:1500,
    direction: 'alternate' ,
    loop: true
})

button.addEventListener("mouseover", mouseHoverAnimation);
button.addEventListener("mouseout", mouseOutAnimation);
