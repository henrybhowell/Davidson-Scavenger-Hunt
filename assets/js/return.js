
window.onload = (event) => {
	$("#clue").empty();
		$(".clue").append(
			'<a class="clue" href= "../' +
			'index.html"><button><svg class="icon-arrow before"><use xlink:href="#arrow"></use>' +
			'</svg><span class="label">Play Again!</span><svg class="icon-arrow after">' +
			'<use xlink:href="#arrow"></use></svg></button><svg style="display: none;"><defs>' +
			'<symbol id="arrow" viewBox="0 0 35 15"><title>Arrow</title>' +
			'<path d="M27.172 5L25 2.828 27.828 0 34.9 7.071l-7.07 7.071L25 11.314 27.314 9H0V5h27.172z "/>' +
			'</symbol></defs></svg></a>'

		);
};
