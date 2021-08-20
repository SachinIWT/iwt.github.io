
function createFunctionWithTimeout(callback, opt_timeout) {
    var called = false;
    function fn() {
        if (!called) {
            called = true;
            callback();
        }
    }
    setTimeout(fn, opt_timeout || 1000);
    return fn;
}

function hr__addTrackClickEvent(el) {

    if (el.length) {

        jQuery(el).on('click', function(linkEvent){
            var obj = jQuery(this);
            var params = {};

            if (!obj.attr('target')) {
                linkEvent.preventDefault();
            }

            if (obj.data('event-category')) params.event_category = obj.data('event-category');
            if (obj.data('event-subcategory')) params['Event Category 2'] = obj.data('event-subcategory');
            if (obj.data('event-file-type')) params['Event File Type'] = obj.data('event-file-type');
            if (obj.data('campaign')) params.event_action = obj.data('campaign');
            if (obj.data('property-id')) params.send_to = obj.data('property-id');
            if (obj.data('event-label')) params['event_label'] = obj.data('event-label');
            params['Location URL'] = window.location.href.split(/[?#]/)[0];
            params.event_callback = createFunctionWithTimeout(function (){
                if (obj.attr('target')) return;
                window.location.href = obj.attr('href');
            });

            if( typeof gtag !== 'undefined' ) {
                gtag('event', 'click', params);
            }else if ( typeof window.dataLayer !== 'undefined') {
                params.event = 'click';
                window.dataLayer.push(params);
            }

        })
    }
}

jQuery(document).ready(function($) {
    hr__addTrackClickEvent('.hr__tracked_link');
})