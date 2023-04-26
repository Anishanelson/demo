import React, { useState ,useRef} from "react";
import './Sidebar.css';
import { Card } from "primereact/card";
import { InputText } from 'primereact/inputtext';
import { FaHome } from "react-icons/fa";
import { SelectButton } from 'primereact/selectbutton';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';
import { Timeline } from 'primereact/timeline';
import 'primeicons/primeicons.css';



export const Sidebar = () => {
   
    const [value, setValue] = useState(null);
    const [value1, setValue1] = useState(null);

    const TagsOptions = [
        {icon: 'pi pi-align-left', value: 'left'},
        {icon: 'pi pi-align-right', value: 'Right'},
    ];

    const AlignProperties = [
        {icon: 'pi pi-align-center', value: 'Center'},
        {icon: 'pi pi-align-justify', value: 'Justify'}
    ];

    const events = [
        { status: 'Demo',   date: '15/10/2020 10:30', icon: 'pi pi-tags',  color: 'grey',image:'game-controller.jpg' },
        { status: 'Files', date: '15/10/2020 14:00', icon: 'pi pi-tags', color: '#9C27B0' },
        { status: 'Invoice', date: '15/10/2020 16:15', icon: 'pi pi-tags', color: '#FF9800' },
        { status: 'Orders', date: '16/10/2020 10:00', icon: 'pi pi-tags', color: 'blue' },
        { status: 'Sub', date: '16/10/2020 10:00', icon: 'pi pi-tags', color: 'skyblue' },
        { status: 'Test', date: '16/10/2020 10:00', icon: 'pi pi-tags', color: 'brown' },
    ];
    const IconWithContent = (item) => {
        return (
          <div style={{ display: "flex" }}>
           <i className={item.icon} style={{ color:item.color,fontSize: '1rem',rowGap:'1px'}}></i>
             <p style={{ paddingLeft: "1px" ,margin:"0",marginTop:"-3px",gap:'2px'}}>{item.status}</p>
             </div>
        );
      };


    //const router = useRouter();
    const [nav, setNav] = useState(false);
    

    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];
    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

const justifyTemplate = (option) => {
        return <i className={option.icon}></i>;
    };
    

    return (
        <><div className="card Sidecontainer">
                <div style={{ width: '100%', margin: '2%' }}>
                <div className='document'>
            <Toast ref={toast}></Toast>

            <SplitButton label="Add a Document" icon="pi pi-plus" onClick={save} model={items}  size="small"/>

        </div>
                    <div className="Search">
                        <InputText placeholder="Search" className="SearchInput" />
                        <div className="Attributes">
                            <FaHome size={16} className="HomeTag" />
                            <div className="SwitchBtn">
                                <SelectButton value={value} className="SelectOption1" onChange={(e) => setValue(e.value)} itemTemplate={justifyTemplate} optionLabel="value" options={TagsOptions} />
                                <SelectButton value={value} className="SelectOption2" onChange={(e) => setValue(e.value)} itemTemplate={justifyTemplate} optionLabel="value" options={AlignProperties} />
                            </div>
                            
                        </div>
                        <div className="list">

            
                        <Timeline value={events}     content={IconWithContent} />
                       {/* <i className="pi pi-tags" style={{ color: 'GrayText',fontSize: '1.2rem',paddingRight:'20px',paddingLeft:'40px',paddingBottom:'10px',fontcolor:"black" }}> Demo</i>
                        <div >
                        <i className="pi pi-tags" style={{ color: 'purple',fontSize: '1.2rem',paddingLeft:'40px' ,paddingBottom:'10px' }}> Files</i>
                        </div>
                        <div>
                        <i className="pi pi-tags" style={{ color: 'yellowgreen',fontSize: '1.2rem',paddingLeft:'40px',paddingBottom:'10px'  }}> Test</i>
                        </div> <div>
                        <i className="pi pi-tags" style={{ color: 'blue',fontSize: '1.2rem',paddingLeft:'40px',paddingBottom:'10px'  }}> Invoice</i>
                        </div><div>
                        <i className="pi pi-tags" style={{ color: 'skyblue',fontSize: '1.2rem',paddingLeft:'40px',paddingBottom:'10px'  }}> Orders</i>
                        </div><div>
    <i className="pi pi-tags" style={{ color: 'brown',fontSize: '1.2rem' ,paddingLeft:'40px',paddingBottom:'10px' }}> Sub</i>
                       <Timeline value={events}content={IconWithContent} />
    </div>*/}
                        

        
                        </div>


                        

                        <div className="list2">
                            <div style={{ lineHeight: '500%' }}>TITTLE</div>


                            <div>Base Requirments Doc(1)</div>
                            <button style={{ backgroundColor: 'blue', color: 'white', borderColor: 'blue', borderRadius: '15%' }}>orders</button>
                            <div style={{ marginLeft: '70%' }}>15 days ago</div>

                            <div>Demo(3)</div>
                            <button style={{ backgroundColor: 'blue', color: 'white', borderColor: 'blue', borderRadius: '15%' }}>orders</button>
                            <div style={{ marginLeft: '70%' }}>14 days ago</div>


                            <div>Invoice(1)</div>
                            <button style={{ backgroundColor: 'blue', color: 'white', borderColor: 'blue', borderRadius: '15%' }}>files</button>
                            <div style={{ marginLeft: '70%' }}>13 days ago</div>

                            <div>Invoices(3)</div>
                            <button style={{ backgroundColor: 'blue', color: 'white', borderColor: 'blue', borderRadius: '15%' }}>orders</button>
                            <div style={{ marginLeft: '70%' }}>14 days ago</div>


                            <div>Sample document(0)</div>
                            <button style={{ backgroundColor: 'blue', color: 'white', borderColor: 'blue', borderRadius: '15%' }}>orders</button>


                            <button style={{ backgroundColor: 'white', color: 'grey', marginLeft: '70%', width: '25%', height: '50%' }}>previous</button>
                            

                        </div>
                    </div>
                </div>
            </div></>
         
            
    
        
    );
};

