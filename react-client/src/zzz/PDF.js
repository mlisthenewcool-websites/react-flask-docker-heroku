// yarn add react-pdf

import React, {useState} from "react";
import Main from "../layouts/Main";
import {Document, Page} from "react-pdf/dist/entry.webpack";

const pdfFilePath = './hippolyte-debernardi-cv-french.pdf';

export const About = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <Main>
            <a href={pdfFilePath} download>Donwload résumé</a>

            <div>
                <Document
                    file={pdfFilePath}
                    onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
        </Main>
    );
};