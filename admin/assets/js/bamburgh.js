// Bamburgh Layout

// Responsive menu

$((function () {
    $('.toggle-sidebar-mobile, .sidebar-mobile-overlay').click((function () {
        $('body').toggleClass('sidebar-open-mobile');
        $('.toggle-sidebar-mobile').toggleClass('is-active');
    }))
}));