const submitBtn = document.getElementById("submitBtn");
const startPage = document.querySelector(".startPage");
const endPage = document.querySelector(".endPage");

//Select rating and add it to the thanks display
if (document.querySelectorAll('input[name="btn"]')) {
    document.querySelectorAll('input[name="btn"]').forEach((elem) => {
        elem.addEventListener("change", function (e) {
            let item = e.target.value;
            console.log(item);
            let ratingValue = (document.querySelector(
                ".ratingValue"
            ).textContent = item);

            //change the display when submit
            submitBtn.addEventListener("click", (e) => {
                e.preventDefault();
                if ((ratingValue = null)) {
                } else {
                    startPage.style.display = "none";
                    endPage.style.display = "flex";
                }
            });
        });
    });
}
