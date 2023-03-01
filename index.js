// La intención es poder armar a futuro una web de muestra para el emprendimiendo de un familiar sobre su vivero.

function elegirCategoria() {
  let categoria, productos;

  const Ingreso = alert("Bienvenido a Mi Vergel Austral");

  do {
    let productoCategoria = parseInt(
      prompt(
        " Categorías \n 1. Fertilizantes y insecticidas \n 2. Enmiendas y sustratos \n 3. Macetas \n 4. Plantas de interior \n 5. Cactus y suculentas \n 6. Plantines florales y de exterior \n 7. Semillas"
      )
    );

    switch (productoCategoria) {
      case 1:
        categoria = "Fertilizantes-insecticidas";
        productos = [
          "babosil cebo",
          "diatomeo talquera",
          "micorrizas",
          "neem puro",
        ];
        break;

      case 2:
        categoria = "Enmiendas y sustratos";
        productos = [
          "chips 10 dm3",
          "compost 10 dm3",
          "humus de lombriz 5 dm3",
          "perlita 5 dm3",
        ];
        break;

      case 3:
        categoria = "Macetas";
        productos = [
          "bols n° 18",
          "bols n° 15 vega",
          "bols n° 21 vega",
          "ganchos de color",
          "maceta rocio n°14",
          "maceta rocio n°21",
        ];
        break;

      case 4:
        categoria = "Plantas de interior";
        productos = [
          "aglaonema",
          "alegría del hojar m12",
          "aloe vera",
          "anturium",
          "arbol de jade",
          "azalea doble cretonas",
          "culandrillo",
        ];
        break;

      case 5:
        categoria = "Cactus y suculentas";
        productos = [
          "cactus chicos",
          "cactus medianos",
          "cactus grandes",
          "cuculentas",
          "hawortia",
          "collar de jade",
        ];
        break;

      case 6:
        categoria = "Plantines florales y de exterior";
        productos = [
          "aleli plantin",
          "amapolas",
          "caléndulas",
          "camelia japónica",
          "clavelina",
          "crataegus",
          "crisantemo",
          "lavanda",
          "muerdago",
        ];
        break;

      case 7:
        categoria = "Semillas";
        productos = ["caléndula", "lupinos", "retamas"];
        break;

      default:
        alert("No eligió ninguna categoría.");
        return;
    }

    alert("Usted eligió la categoría: " + categoria);

    let productoElegido = prompt(
      "Productos disponibles: " +
        productos.join(", ") +
        ".\nEscriba el nombre del producto que desea comprar:"
    );
    while (!productos.includes(productoElegido)) {
      productoElegido = prompt(
        "Producto inválido. Productos disponibles: " +
          productos.join(", ") +
          ".\nEscriba el nombre del producto que desea comprar:"
      );
    }

    alert("Usted eligió el producto: " + productoElegido);
  } while (confirm("¿Desea elegir otra categoría y producto?"));

  alert("Gracias por su compra. Hasta luego.");
}

elegirCategoria();
