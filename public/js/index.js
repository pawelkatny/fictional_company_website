fetch(`/index`)
  .then(response => {
    return response.json();
  })
  .then(json => {
    const output = document.getElementById(`index`);
    json.forEach(text => {
      const el = document.createElement("p");
      el.innerHTML = text;
      output.appendChild(el);
    });
  });
