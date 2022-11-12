
import './App.css';
import Card from './components/Card';
import Carddatachange from './components/Carddatachange';

//DATA CONTAINS AN ARRAY
const data=[

  {
  url:"https://thumbs.dreamstime.com/b/bikes-googleplex-google-headquarters-mountain-view-ca-usa-december-biked-foreground-91572068.jpg",
  prodName:"GOOGLE",
  id:1,
  desc:"APPLICATION OPEN BLOCKCHAIN REQUIRED",
  }

,{
  url:"https://m.economictimes.com/thumb/msid-94146898,width-1200,height-900,resizemode-4,imgsize-58126/amazon.jpg",
  prodName:"AMAZON",
  id:2,
  desc:"APPLICATION CLOSED",


},{
  url:"https://img.etimg.com/thumb/msid-93495251,width-650,imgsize-94338,,resizemode-4,quality-100/microsoft.jpg",
  prodName:"MICROSOFT",
  id:3,
  desc:" SUMMER INTERNSHIP OPEN    CLOUD COMPUTING REQUIRED",


}
,];

function App() {
  const a="HOW ARE U?";
  const b="HI BRO";
  const c="Dream COMANIES";
  return (
    // <p>
    // <h1>Hello Anupam</h1>
    // <Card /> 
    // {/* Card is rendered */}
    // <Card />
    // <h1>HI BUDDY</h1>
    // <Card />
    // </p>

    //NOW WE ARE GONING TO USE GRID STRUCTURE
     <p>
      <h1>HELLO</h1>
      <h1 >{  a}</h1>     
      {/* //curly braces ke andar kuch bhi likhe voa javascript code ke andar aata hai like a is written */}
      
      
      <div className='container'>
        <div className='row'>
          <div className='col-6 col-sm-4 col-md-3' > <Card /></div>
          <div className='col-6 col-sm-4 col-md-3' > <Card /></div>
          <div className='col-6 col-sm-4 col-md-3' > <Card /></div>
          <div className='col-6 col-sm-4 col-md-3' > <Card /></div>
        </div>
      </div>


     <br/>
     <br/>
     {/* isme koi data value change nahi hogi sab same rahega */}
     <div className='container'>
      <h1>{b}</h1>
        <div className='row'>
          {
            data.map((val,i)=>{
             return( <div className='col-6 col-sm-4 col-md-3' > <Card /></div>)
            })
          }
        </div>
      </div>
<br/>
<br/>

<div className='container'>
      <h1>{c}</h1>
        <div className='row'>
          {
            data.map((val,i)=>{
             return( <div className='col-6 col-sm-4 col-md-3' > 
             <Carddatachange values={val} /></div>)
            })
          }
        </div>
      </div>

{/* jitne card bane hai hum chahete hai usme sabki data value change hoa according to data array */}
{/* //for this props is used */}



      </p> 
      




   

   
  );
}

export default App;
