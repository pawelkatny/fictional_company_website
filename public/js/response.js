const page = document.URL.substring(
  document.URL.lastIndexOf("/") + 1,
  document.URL.lastIndexOf(".html")
);
fetch(`/${page}`)
  .then(response => {
    return response.json();
  })
  .then(json => {
    const output = document.getElementById(`${page}`);
    json.forEach(text => {
      const element = document.createElement("p");
      element.innerHTML = text;
      output.appendChild(element);
    });
  });
