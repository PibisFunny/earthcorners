document.addEventListener("DOMContentLoaded", function() {
	var promise = document.getElementById("autoplay").play();

	if (promise !== undefined) {
		promise.then(function() {}).catch(function(error) {
			var autoplayCover = document.createElement("div");
			autoplayCover.id = "autoplay-mys";
			autoplayCover.innerHTML = `<img src="img/mys_accept.gif" draggable="false">`;
			document.body.appendChild(autoplayCover);
			autoplayCover.addEventListener("click", function() {
				autoplayCover.className = "hide";
				setTimeout(function() {
					document.body.removeChild(autoplayCover);
				}, 500);
				document.getElementById("autoplay").play();
			});
		});
	}
});
