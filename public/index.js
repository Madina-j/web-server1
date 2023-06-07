const root = document.getElementById("root"); // <div id='root'></div>

window.addEventListener("load", async () => {
  const dishes = await fetch("http://localhost:5000/data").then((res) =>
    res.json()
  );

  const ul = document.createElement("ul");

  dishes.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `Name: ${item.name}, price: $${item.price}`;
    ul.appendChild(li);
  });

  root.appendChild(ul);
});
