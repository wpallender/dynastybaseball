    const slider = document.getElementById("myRange");
    const output = document.getElementById("sliderValue");
    slider.oninput = function() {
      output.textContent = this.value;
    };