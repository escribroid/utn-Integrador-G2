window.jsPDF = window.jspdf.jsPDF;

var doc = new jsPDF();
function crearPdf() {
  pdf = document.getElementById("ingresa").value;
  doc.text(10, 30, pdf);
  doc.save('hello-world.pdf');
}
