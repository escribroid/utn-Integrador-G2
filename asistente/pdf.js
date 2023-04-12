window.jsPDF = window.jspdf.jsPDF;

var doc = new jsPDF();
function crearPdf() {
  paso1 = document.getElementById("nombre-empresa").value;
  paso2 = document.getElementById("fecha-entrega").value;
  paso3 = document.getElementById("nombreyapellido").value;
  paso4 = document.getElementById("email").value;

  doc.text(10, 10, paso1);
  doc.text(10, 20, paso2);
  doc.text(10, 30, paso3);
  doc.text(10, 40, paso4);

  doc.save('Resumen.pdf');
}
