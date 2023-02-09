import { Injectable } from '@angular/core';
import { PDFDocument } from 'pdf-lib';

export interface PdfServiceInterface {
    download: (
        source: URL,
        fileName: string,
        values?: { [key: string]: string }
    ) => void;
}

@Injectable({
    providedIn: 'root',
})
export class PdfService implements PdfServiceInterface {
    download(
        source: URL,
        fileName: string,
        values?: { [p: string]: string }
    ): void {
        fetch(source)
            .then((response) => response.arrayBuffer())
            .then((arrayBuffer) => PDFDocument.load(arrayBuffer))
            .then((pdf) => {
                if (values) {
                    const form = pdf.getForm();
                    Object.entries(values).forEach(([key, value]) => {
                        form.getTextField(key).setText(value);
                    });
                }

                return pdf.save();
            })
            .then((data) => {
                const blobUrl = URL.createObjectURL(
                    new Blob([data.buffer], { type: 'application/pdf' })
                );

                const link = document.createElement('a');
                link.href = blobUrl;
                link.download = `${fileName}.pdf`;

                document.body.appendChild(link);
                link.dispatchEvent(
                    new MouseEvent('click', {
                        bubbles: true,
                        cancelable: true,
                        view: window,
                    })
                );
                document.body.removeChild(link);
            })
            .catch(console.error);
    }
}
