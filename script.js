const val = document.querySelector('#input')
const btn = document.querySelector('#btn')

window.jsPDF = window.jspdf.jsPDF

// Define the Base64 encoded font data

const doc = new jsPDF()
const currentFont = doc.internal.getFont();
console.log(currentFont.fontName, currentFont.fontStyle)

// Set the font using the embedded Base64 data
doc.addFileToVFS('./fonts/verdana-normal.txt', 'verdana')
doc.addFileToVFS('./fonts/verdana-bold.txt', 'verdana')
doc.addFileToVFS('./fonts/verdanai.txt', 'verdana')
doc.addFileToVFS('./fonts/verdana-bold-italic.txt', 'verdana')

//adding the font to jspdf library
doc.addFont('./fonts/verdana-normal.ttf', 'Verdana', 'normal')
doc.addFont('./fonts/verdana-bold.ttf', 'Verdana', 'bold')
doc.addFont('./fonts/verdanai.ttf', 'Verdana', 'italic')
doc.addFont('./fonts/verdana-bold-italic.ttf', 'Verdana', 'bolditalic')

doc.addFileToVFS('./fonts/helvetica-normal.txt', 'helvetica')
doc.addFileToVFS('./fonts/helvetica-bold.txt', 'helvetica')

//adding the font to jspdf library
doc.addFont('./fonts/helvetica-normal.ttf', 'Helvetica', 'normal')
doc.addFont('./fonts/helvetica-bold.ttf', 'Helvetica', 'bold')

console.log(doc.getFontList())

btn.addEventListener('click', () => {
  console.log(doc.getFontList())
  // Set the font for the document

  // Add content to the PDF with different styles
  //you can read the text from user and add it instead of string
  let text = "Lentpjūvės g. 14";
  //Normal Text
  doc.setFont('Verdana', 'normal')
  doc.text('This is normal text. Verdana. ' + text, 10, 20)

  //Bold Text
  doc.setFont('Verdana', 'bold')
  doc.text('This is bold text. Verdana. ' + text, 10, 40)

  //Italic Text
  doc.setFont('Verdana', 'italic')
  doc.text('This is italic text. Verdana. ' + text, 10, 60)

  //Bold-Italic text
  doc.setFont('Verdana', 'bolditalic')
  doc.text('This is bold italic text. Verdana. ' + text, 10, 80)

  doc.setFont('Helvetica', 'normal')
  doc.text('This is normal text. Helvetica. ' + text, 10, 100)

  //Bold Text
  doc.setFont('Helvetica', 'bold')
  doc.text('This is bold text. Helvetica. ' + text, 10, 120)
  // Save or output the PDF
  doc.save('output.pdf')
})
