const karzinka = document.querySelector(".karzinka_container");
karzinka.style.display = "none"
const bosh = document.querySelector(".bosh");
bosh.addEventListener("click", () => {
    karzinka.style.display = "none"

})
const ok = document.querySelector("#ok");
ok.addEventListener("click", () => {
    karzinka.style.display = "block"

})


document.addEventListener("DOMContentLoaded", () => {
    const karzinka = document.querySelector(".karzinka");
    document.querySelectorAll(".card button").forEach((button) => {
        button.addEventListener("click", (event) => {
            const card = event.target.closest(".card");
            const card2 = card.cloneNode(true);
            const price=card2.querySelector(".price").textContent.trim().replace("$", "")

            card2.classList.add("card2")
            card2.querySelector("button").remove();
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "x"
            deleteButton.className = "remove"
            const incrament = document.createElement("button")
            incrament.textContent = "+"
            incrament.id = "incrament"
            const decrament = document.createElement("button")
            decrament.textContent = "-"
            decrament.id = "decrament"
            const narx=document.createElement("p")
            narx.textContent="0"
            narx.id="narx"
            const countElement=document.createElement("div")
            countElement.textContent="0"
            deleteButton.addEventListener("click", () => {
                card2.remove();
            });

            let count = 0
            incrament.addEventListener("click", () => {
                if (count < 10) {
                    count++
                    countElement.textContent = count
                    const aslnarx =price * count + "$"
                    narx.textContent = `${aslnarx}`

                } else {
                    count += 10
                    countElement.textContent = count
                    const aslnarx=price *count + "$"
                    narx.textContent = `${aslnarx}`
                }
            });


            decrament.addEventListener("click", () => {
                if (count > 0) {
                    count--
                    countElement.textContent = count
                    const aslnarx=price *count + "$"
                    narx.textContent = `${aslnarx}`
                } else {
                    console.log("funksiya ishlamadi");
                }
            });
            decrament.addEventListener("click", () => {
                if (count > 10) {
                    count - 10
                    countElement.textContent = count
                    countElement.textContent = count
                    const aslnarx=price *count + "$"
                    narx.textContent = `${aslnarx}`
                } else {
                    console.log("funksiya ishlamadi");
                }
            });
            card2.appendChild(incrament)
            card2.appendChild(countElement)
            card2.appendChild(decrament)
            card2.appendChild(narx)
            card2.appendChild(deleteButton)

            karzinka.appendChild(card2);

        });
    });
});
