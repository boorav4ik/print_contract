import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

export default function generateContract(client, works) {
  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [
              new TextRun('Клиент:'),
              ...Object.entries(client).map(
                (key, value) => new TextRun(`${key}: ${value}`)
              ),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun('Услуги:'),
              ...Object.entries(works).map(
                (key, value) => new TextRun(`${key}: ${value}`)
              ),
            ],
          }),
        ],
      },
    ],
  });

  Packer.toBlob(doc)
    .then((blob) => {
      const { name, secondName, surname } = client;
      const fileName = `${[name, surname].join('_')}.docx`;
      saveAs(blob, fileName);
      return fileName;
    })
    .catch(() => {});
}
