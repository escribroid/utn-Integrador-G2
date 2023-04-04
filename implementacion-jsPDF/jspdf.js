window.jsPDF = window.jspdf.jsPDF;

var doc = new jsPDF();
function crearPdf() {
  paso1 = document.getElementById("paso1").value;
  paso2 = document.getElementById("paso2").value;
  paso3 = document.getElementById("paso3").value;
  paso4 = document.getElementById("paso4").value;

  doc.text(10, 30, paso1);
  doc.text(10, 30, paso2);
  doc.text(10, 30, paso3);
  doc.text(10, 30, paso4);

  doc.save('Resumen.pdf');
}
