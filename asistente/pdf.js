window.jsPDF = window.jspdf.jsPDF;

var doc = new jsPDF();
function crearPdf() {
  paso1 = document.getElementById("nombre-empresa").value;
  paso2 = document.getElementById("fecha-entrega").value;
  paso3 = document.getElementById("nombreyapellido").value;
  paso4 = document.getElementById("email").value;

  doc.text(50, 30, "G2 resumen sarasa sarasa");
  doc.text(10, 50, "Nombre de empresa:     " + paso1);
  doc.text(10, 65, "Fecha de entrega:         " + paso2);
  doc.text(10, 80, "Nombre y Apellido:        " + paso3);
  doc.text(10, 95, "Email:                          " + paso4);

  doc.save('Resumen.pdf');
}
