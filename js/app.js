const badges = document.getElementsByClassName("badge");

initNotifRandom();

(function() {
    for (let i = 0; i < badges.length; i++) {
        badges.item(i).addEventListener("click", () => {
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

function initNotifRandom() {
    for (let i = 0; i < badges.length; i++) {
        const bubble = badges.item(i).getElementsByClassName("bubble");
        const value = getRandomInt(100);
        bubble[0].innerHTML = value;
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  