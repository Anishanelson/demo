import React, { useRef, useState } from 'react';
import { Card } from 'primereact/card';
import './Dashboard.css'
import { Header } from '../../Components/Header/Header';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import { FileUpload } from 'primereact/fileupload';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from 'primereact/dialog';
import { Image } from 'primereact/image';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';


export const Dashboard = () => {

  const [value, setValue] = useState('');
  const [date, setDate] = useState(null);
  const toast = useRef(null);

  const onUpload = () => {
    toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  };


  const [img, setImg] = useState([]);
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  const getUploadFiles = (file) => {
    const url = URL.createObjectURL(file);
    return (
      <>
        <div style={{ textAlign: 'left', display: 'flex' }} onClick={() => setShow(true)}>
          <img src={url} style={{ marginRight: 0 }} width={'10%'} height={'10%'} />
          <p style={{ paddingLeft: '10px' }}>{file.name}</p>
          <Button style={{ paddingLeft: "15px" }} label="Add Document" onClick={() => setVisible(true)} />
        </div>
        <Dialog header="Header" visible={show} style={{ width: '80vw' }} onHide={() => setShow(false)}>
          <Image src={url} alt="Image" width="100%" />
        </Dialog>
      </>
    )
  }

  const products = [
    {
      title: 'sample document(0)',
      currentdocument: 'add relevent files to the document',
      currentdate: '14 days ago',
      id: "1000",
      image: "bamboo-watch.jpg",
      inventoryStatus: "INSTOCK",
      name: "Bamboo Watch",
      price: 65,
      quantity: 24,
      rating: 5,
    },
  ];

  const product = [
    {
      title: 'about 4 hours ago',
      currentdocument: 'admin',
      currentdate: 'File deleted : 2023-04-09.png',
      id: "1000",
      image: "bamboo-watch.jpg",
      inventoryStatus: "INSTOCK",
      name: "Bamboo Watch",
      price: 65,
      quantity: 24,
      rating: 5,
    },
    {
      title: 'about 4 hours ago',
      currentdocument: 'admin',
      currentdate: 'File deleted : 2023-04-09.png',
      id: "1000",
      image: "bamboo-watch.jpg",
      inventoryStatus: "INSTOCK",
      name: "Bamboo Watch",
      price: 65,
      quantity: 24,
      rating: 5,
    },
    {
      title: 'about 4 hours ago',
      currentdocument: 'admin',
      currentdate: 'File deleted : 2023-04-09.png',
      id: "1000",
      image: "bamboo-watch.jpg",
      inventoryStatus: "INSTOCK",
      name: "Bamboo Watch",
      price: 65,
      quantity: 24,
      rating: 5,
    },
    {
      title: 'about 4 hours ago',
      currentdocument: 'admin',
      currentdate: 'File deleted : 2023-04-09.png',
      id: "1000",
      image: "bamboo-watch.jpg",
      inventoryStatus: "INSTOCK",
      name: "Bamboo Watch",
      price: 65,
      quantity: 24,
      rating: 5,
    },
    {
      title: 'about 4 hours ago',
      currentdocument: 'admin',
      currentdate: 'File deleted : 2023-04-09.png',
      id: "1000",
      image: "bamboo-watch.jpg",
      inventoryStatus: "INSTOCK",
      name: "Bamboo Watch",
      price: 65,
      quantity: 24,
      rating: 5,
    },
    {
      title: 'about 4 hours ago',
      currentdocument: 'admin',
      currentdate: 'File deleted : 2023-04-09.png',

    },
    {
      title: 'about 4 hours ago',
      currentdocument: 'admin',
      currentdate: 'File deleted : 2023-04-09.png',

    },
    {
      title: 'about 4 hours ago',
      currentdocument: 'admin',
      currentdate: 'File deleted : 2023-04-09.png',

    },
    {
      title: 'about 4 hours ago',
      currentdocument: 'admin',
      currentdate: 'File deleted : 2023-04-09.png',

    },
    {
      title: 'about 4 hours ago',
      currentdocument: 'admin',
      currentdate: 'File deleted : 2023-04-09.png',

    },
    {
      title: 'about 4 hours ago',
      currentdocument: 'admin',
      currentdate: 'File deleted : 2023-04-09.png',

    },
  ];
  return (
    <>
      <Header />
      <div className="Container">
        <Sidebar />

        <div className="card Editcontainer">

        ({

          visible ? 
          <>
          <Card className="card" title="Documents assigned to you" style={{ marginTop: '25px', backgroundColor: 'ButtonShadow', display: 'flex' }}>
            <div style={{ display: "flex" }}>
            <div>Primary metadata</div>
            <Button style={{ right: '0px' }}  label='close' onClick={() => setVisible(false)} />
            </div>
            <p>Title</p>
            <div className="text ">
              <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
            </div>
            <p>Description</p>
            <div className="text ">
              <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
            </div>
            <p>Creation date</p>
            <div className="text">
              <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />
            </div>
            <p>Language</p>
            <div className='text'>
              <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
            </ div>
            <p>New files</p>
            <div className='text' >

              <div className="card " style={{ backgroundColor: 'white', width: '800px' }}>
                <Toast ref={toast}></Toast>
                <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} />
              </div>
            </div>
            <p>tags</p>
            <div className='text'>
              <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
            </ div>
            <p>Additional Metadata</p>
            <div className="text" style={{ gap: '3px' }}>

              <Button label="Submit" icon="pi pi-check" />
              <Button label="cancel" icon="pi pi-times" iconPos="right" style={{ gap: '-10px' }} />
            </div>
          </Card>
          </> 
          : 
          <>
          <Card className="card" title=" quick upload" style={{ height: '30%', }}>
            <div className="file ">
              <FileUpload name="demo[]" url={'/api/upload'} multiple webkitdirectory maxFileSize={1000000} emptyTemplate={<p className="m-10">Drag and drop files to here to upload.</p>} onSelect={(e) => setImg((event) => [...event, e.files[e.files.length - 1]])} itemTemplate={(files) => getUploadFiles(files)} />
            </div>
          </Card>
          <Card className="card" title="Latest activity" style={{ marginTop: '25px', backgroundColor: 'ButtonShadow', height: '80%' }}>
            <DataTable value={product} tableStyle={{ minWidth: "50rem", backgroundColor: 'GrayText' }}>
              <Column field="title" header=""></Column>
              <Column field="currentdocument" header=""></Column>
              <Column field="currentdate" header=""></Column>
            </DataTable>
          </Card>
          </>

        })
      
        </div>
      </div>
    </>
  )
}