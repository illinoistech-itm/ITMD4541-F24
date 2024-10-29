(() => {
  // src/counter.js
  function setupCounter(element) {
    let counter = 0;
    const setCounter = (count) => {
      counter = count;
      element.innerHTML = "count is ".concat(counter);
    };
    element.addEventListener("click", () => setCounter(counter + 1));
    setCounter(0);
  }

  // src/main.js
  document.querySelector("#app").innerHTML = '\n  <div>\n    <a href="https://vitejs.dev" target="_blank">\n      <img src="'.concat(viteLogo, '" class="logo" alt="Vite logo" />\n    </a>\n    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">\n      <img src="').concat(javascriptLogo, '" class="logo vanilla" alt="JavaScript logo" />\n    </a>\n    <h1>Hello Vite!!!!!!!!!!!</h1>\n    <div class="card">\n      <button id="counter" type="button"></button>\n    </div>\n    <p class="read-the-docs">\n      Click on the Vite logo to learn more\n    </p>\n  </div>\n');
  setupCounter(document.querySelector("#counter"));
})();
//# sourceMappingURL=out.js.map
