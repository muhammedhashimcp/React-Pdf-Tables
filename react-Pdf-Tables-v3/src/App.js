import React from 'react';
import './App.css';
import { Document, Font, Image, PDFViewer, Page, StyleSheet, Text } from '@react-pdf/renderer';
import ReactPdfTable from "react-pdf-table";

function App() {
  return (
    <div className="">
      <h1>Hello</h1> 
      {/* <PDFViewer style={styles.viewer}> */}
        {/* <Document>
          <Page size="A4" style={styles.body}>
            <Text style={styles.header} fixed>
              ~ Created with react-pdf ~
            </Text>
            <Text style={styles.title}>Don Quijote de la Mancha</Text>
            <Text style={styles.author}>Miguel de Cervantes</Text>
            <ReactPdfTable.TableRow>
              <ReactPdfTable.TableRow width={70} disableMargin={true}>
                <ReactPdfTable.TableCell text="1" align="center" width={57} />
                <ReactPdfTable.TableCell text="2" align="center" />
                <ReactPdfTable.TableCell text="3" align="right" />
              </ReactPdfTable.TableRow>
              <ReactPdfTable.TableCell text="Name1" align="center" />
              <ReactPdfTable.TableCell text="Name2" align="right" />
              <ReactPdfTable.TableCell text="Name3" align="right" />
            </ReactPdfTable.TableRow>
            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
              `${pageNumber} / ${totalPages}`
            )} fixed />
          </Page>
        </Document> */}
        
      {/* </PDFViewer> */}
    </div>
  );
}


Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    width: '100vw',
    height: '100vh'
  },
  viewer: {
    width: '100vw',
    height: '100vh',
    border: 'none'
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald',
    backgroundColor: "red"
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});
export default App;
