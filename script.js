
  const snowContainer = document.querySelector('.snowfall');

  // yahan kitne flakes banane hain
  const totalFlakes = 50;

  for (let i = 0; i < totalFlakes; i++) {
    let flake = document.createElement('div');
    flake.classList.add('snowflake');

    // random size
    let size = Math.random() * 6 + 3; // 3px – 9px
    flake.style.width = size + "px";
    flake.style.height = size + "px";

    // random left position
    flake.style.left = Math.random() * 100 + "%";

    // random animation duration (falling speed)
    flake.style.animationDuration = (Math.random() * 5 + 7) + "s";

    // random delay
    flake.style.animationDelay = Math.random() * 10 + "s";

    snowContainer.appendChild(flake);
  }

