export default function side(){
    const load = async () => {
        $("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
            $("body").toggleClass("sidebar-toggled")
            $(".sidebar").toggleClass("toggled")
            $(".sidebar").hasClass("toggled") && $(".sidebar .collapse").collapse("hide")
        });
        $(".collapse-item, #btnDashboard").on("click", function (e) {
            if ($('.sidebar').outerWidth() <= 104) {
                $(".collapse").collapse("hide")
                if ($('body').outerWidth() < 500) {
                    $("body").toggleClass("sidebar-toggled"),
                        $(".sidebar").toggleClass("toggled"),
                        $(".sidebar").hasClass("toggled") && $(".sidebar .collapse").collapse("hide")
                }
                $(".collapse").collapse('hide')
            }
            $(".nav-item").removeClass('active')
            $(".collapse-item").removeClass('active')
            $(this).closest('.nav-item').addClass('active')
            $(this).addClass("active")
        });
    }

    return { load }
}