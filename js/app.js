const badges = document.getElementsByClassName("badge");

(function() {
    for (let i = 0; i < badges.length; i++) {
        badges.item(i).addEventListener("click", () => {
            console.log(badges.item(i).innerHTML);
            const bubble = badges.item(i).getElementsByClassName("bubble");
            let value = parseInt(bubble[0].textContent);
            if (value < 99) {
                value++;
                bubble[0].innerHTML = value;
            } else {
                bubble[0].innerHTML = 0;
            }
        });
    }
})();
