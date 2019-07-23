$(function() {
    window.onload = (e) => {
        window.addEventListener('message', (event) => {
            console.log(event);
            var item = event.data;

            if (item === undefined) return;
            if (item.type !== "pixelated.radio") return;

            if (item.display) {
                $("#radio").show();
            } else if (!item.display) {
                $("#radio").hide();
            }
        });
    }
});