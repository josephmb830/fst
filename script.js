document.getElementById('generatePdf').addEventListener('click', function () {
    // Crear una instancia de jsPDF
    var pdf = new jsPDF();

     // Agregar logo en el encabezado (marca de agua)
     var logoUrl = "./logom.png"; // Reemplaza 'url_de_tu_logo.png' con la URL de tu propio logo
     pdf.addImage(logoUrl, 'PNG', 10, 10, 40, 40); // Ajusta las coordenadas y el tamaño según tus necesidades
 
     // Agregar título centrado

    // Agregar título centrado
    var title = "AÑO DEL FORTALECIMIENTO DE LA SOBERANÍA NACIONAL";
    var titleWidth = pdf.getStringUnitWidth(title) * pdf.internal.getFontSize() / pdf.internal.scaleFactor;
    var x = (pdf.internal.pageSize.width - titleWidth) / 2;
    pdf.text(title, x, 20);

    // Guardar el PDF
    var pdfContent = pdf.output('datauristring');

    // Crear un objeto embed para visualizar y imprimir el PDF
    var embed = document.createElement('embed');
    embed.type = 'application/pdf';
    embed.width = '100%';
    embed.height = '100%';
    embed.src = pdfContent;

    // Abrir una nueva ventana con el PDF incrustado
    var printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write(embed.outerHTML);
    printWindow.document.close();
});