<template>
    <div>
        <h2 style="color:green">
            GeeksforGeeks
        </h2>
        <h3>
            Generate PDF file using jsPDF library
        </h3>
        <div class="container">
            <input type="button" value="Create PDF" @click="generatePDF()">
        </div>
    </div>
</template>
<script setup>
import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
import "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
import "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("Hello world!", 100, 100);
    doc.save("newFile.pdf");
}

</script>
<style scoped></style>