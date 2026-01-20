//GOAS Pliusebi

const benefits = [
    "sjobs konkurencia vidre toksikoba",
    "motxovna ara zecola",
    "liderobis ganvitareba",
    "megobruli garemo",
    "programirebis scavla",
    "motivacia da disciplina",
];
const list = document.getElementById(benefitsList);

benefits.forEach(item => {const li = document.createElement("li")
    li.textContent = item;
    list.appendChild(li);
});

//vrclad yilakis punkcia
const moreBth = document.getElementById("moreBth");
const moreText = document.getElementById("moreText");

moreBth.addEventListener("click", () =>
{
    if (moreText.style.display === "none")
{
    moreText.style.display = "block";
    moreBth.textContent = "damalva";
} else {
    moreText.style.display = "none";
    moreBth.textContent = "vrclad";
}
});