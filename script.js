const display = document.getElementById("display");
    const themeToggle = document.getElementById("toggleTheme");

    let currentInput = "";

    function append(value) {
      if (display.innerText === "0") {
        currentInput = value;
      } else {
        currentInput += value;
      }
      display.innerText = currentInput;
    }

    function clearDisplay() {
      currentInput = "";
      display.innerText = "0";
    }

    function calculate() {
      try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
      } catch {
        display.innerText = "Error";
      }
    }

    function backspace() {
      currentInput = currentInput.slice(0, -1);
      display.innerText = currentInput || "0";
    }

    themeToggle.addEventListener("change", () => {
      document.body.classList.toggle("dark");
    });