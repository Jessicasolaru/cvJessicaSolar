$(document).ready(function () {

  // Cambio de tema
  $("#btn-tema").click(function () {
  // Alterna la clase modo-oscuro en el body
  $("body").toggleClass("modo-oscuro");

  // Cambia el texto del botón según el modo
  if ($("body").hasClass("modo-oscuro")) {
    $(this).text("Cambiar modo claro ☀️");
  } else {
    $(this).text("Cambiar modo oscuro 🌙");
  }
});


  // Validación email
  $("#email").on("input", function () {
    const email = $(this).val();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
      $("#error-email").removeClass("d-none");
    } else {
      $("#error-email").addClass("d-none");
    }
  });

  // Animación al hacer scroll
  $(window).on("scroll", function () {
    $(".seccion").each(function () {
      if ($(this).offset().top < $(window).scrollTop() + 500) {
        $(this).addClass("visible");
      }
    });
  });

});
