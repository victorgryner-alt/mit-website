fetch("data/cars.json")
.then(res => res.json())
.then(cars => {

    const search = document.getElementById("search");
    const results = document.getElementById("results");

    search.addEventListener("input", () => {

        const text = search.value.toLowerCase();

        results.innerHTML = "";

        cars.forEach(car => {

            if (
                car.brand.toLowerCase().includes(text) ||
                car.model.toLowerCase().includes(text)
            ) {

                results.innerHTML += `
                    <div>
                        <h3>${car.brand} ${car.model}</h3>
                        <p>Årgang: ${car.year}</p>
                        <p>HK: ${car.horsepower}</p>
                        <p>Værdi: ${car.value} kr.</p>
                    </div>
                `;
            }
        });

    });

});
