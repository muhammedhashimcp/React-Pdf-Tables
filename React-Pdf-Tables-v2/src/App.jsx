import "./App.css";
import React from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDFFile from "./components/PDFFile";
import PDFDOCPAGE from "./pages/PDFDOCPAGE";
import ReactPdfTableModule from "./components/ReactPdfTableModule";



const App = () => {
  return (
    <div className="App">
      <h1>Pdf File</h1>
      <PDFDownloadLink document={<PDFFile />} filename="FORM">
        {({ loading }) => <button>{loading ? "Loading Document" : "Download"}</button>}
      </PDFDownloadLink>
      <div style={{ width: "100%", height: "100vh" }}>
        <PDFViewer>
          <PDFFile />
        </PDFViewer>
      </div>
      <hr />
      <br />
      <PDFDOCPAGE />
      <hr />
      <br />
      <h1>React Table Module</h1>
      <div >
        <PDFDownloadLink document={<ReactPdfTableModule />} filename="FORM">
          {({ loading }) => <button>{loading ? "Loading Document" : "Download"}</button>}
        </PDFDownloadLink>
        <PDFViewer>
          <ReactPdfTableModule />
        </PDFViewer>
      </div>

    </div>
  );
};

export default App;
