export function isotope(node, options) {
	const iso = new Isotope(node, options);
	// imagesLoaded( node ).on( 'progress', function() {
	// 	// layout Isotope after each image loads
	// 	iso.layout();
	// });

	return {
		update(options) {
			iso.isotope(options);
		},
		destroy() {
			iso.destroy()
		}
	};
}
