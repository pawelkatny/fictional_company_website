fetch("/galeria")
  .then(response => {
    return response.json();
  })
  .then(json => {
    console.log(json);
    const wyjscie = document.getElementById("galeria");
    json.forEach(obj => {
      const kontener = document.createElement("div");
      kontener.setAttribute("class", "kontener");

      const kafel = document.createElement("div");
      kafel.setAttribute("class", "kafel");

      const tytul = document.createElement("div");
      tytul.setAttribute("class", "tytul");

      const opis = document.createElement("div");
      opis.setAttribute("class", "opis");

      const img = document.createElement("img");

      tytul.innerHTML = obj.tytul;
      opis.innerHTML = obj.opis;
      img.src = obj.img;

      wyjscie.appendChild(kontener);
      kontener.appendChild(kafel);
      kafel.appendChild(tytul);
      kafel.appendChild(img);
      kafel.appendChild(opis);
    });
  });
