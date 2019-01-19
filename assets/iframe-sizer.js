jQuery( document ).ready( function() {
	const blocks = jQuery.find( '.wp-block-cgb-block-p5js' );
	jQuery.each( blocks, function() {
		const block = jQuery( this );
		const iFrame = jQuery( block ).find( 'iframe' );
		jQuery( iFrame ).on( 'load', function() {
			const iFrameBody = jQuery( this ).get( 0 ).contentWindow.document.body;
			jQuery( iFrame, block ).height( jQuery( iFrameBody ).find( 'canvas' ).height() );
		} );
	} );
} );
