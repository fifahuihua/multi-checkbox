(function ( $ ) {
 
    $.fn.multicheckbox = function( options ) {
 
        // This is the default options.
        var settings = $.extend({
            theme: "default-checkbox"
        }, options );
 
        return this.addClass(settings.theme);
 
    };
 
}( jQuery ));
