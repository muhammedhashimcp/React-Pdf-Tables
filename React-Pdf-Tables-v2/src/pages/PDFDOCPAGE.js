import React from 'react'
import PDFDoc from '../components/PDFDoc'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'

const PDFDOCPAGE = () => {
  return (
    <div>PDFDOCPAGE
        
      <div style={{ width: "100%", height: "100vh", margin: "10px" }}>
        <PDFDownloadLink document={<PDFDoc />} filename="FORM">
          {({ loading }) => <button>{loading ? "Loading Document" : "Download"}</button>}
        </PDFDownloadLink>
        <PDFViewer>
          <PDFDoc />
        </PDFViewer>
      </div>
    </div>
  )
}

export default PDFDOCPAGE