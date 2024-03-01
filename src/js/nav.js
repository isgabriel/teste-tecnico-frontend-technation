export function trocaNav() {
    $(".nav-menu").toggleClass("ativo");
    $("#btn-menu-mobile").toggleClass("ativo");

    $(".nav-menu").hasClass("ativo")
        ? $(".svg-menu-mobile").attr("src", "./src/assets/icones/btn-fecha.svg")
        : $(".svg-menu-mobile").attr(
              "src",
              "./src/assets/icones/menu-hamburguer-icone.svg"
          );
}

$(".nav-item").each(function () {
    $(".nav-item").on("click", (e) => {
        $(".nav-menu").removeClass("ativo");
        $("#btn-mobile").removeClass("ativo");
        $(".svg-menu-mobile").removeClass("ativo");
        $(".svg-menu-mobile").attr(
            "src",
            "./src/assets/icones/menu-hamburguer-icone.svg"
        );
    });
});
