import logo from './logo.svg';
import './App.css';
import {Routes,Route} from'react-router-dom';
import{lazy,Suspense} from'react';
import Employee from './Employee.jsx';
import Formik_form from './Formik_form.jsx';
import Mainedit from './Mainedit.jsx';
import Editform from './Editform.jsx';
import Main_container from './Main_container.jsx';
import Action_comp from './Action_comp';
import {useState} from 'react'
import Product_detail from './Product_detail';
import Password from './Password.jsx';
import New_password from './New_password.jsx';
import Counter from './Counter.jsx';
const Home=lazy(() => import( './Home.jsx'));

function App() {
  const [emp,setEmp] = useState({ email: '', password: '',name:'',age:'',role:'' });
  return (
    
    <div>

      <Suspense fallback={<div className="container">Loading..</div>}>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/Employee" element={<Main_container/>}>
          <Route path="/Employee" element={<Employee/>}/>
          <Route path="/Employee/Formik_form" element={<Formik_form/>}/>
          <Route path="/Employee/Mainedit" element={<Mainedit/>}/> 
          <Route path="/Employee/Password" element={<Password/>}/>
          <Route path="/Employee/New_password/:email" element={<New_password/>}/>
          <Route path="/Employee/Counter/:email" element={<Counter/>}/>
          <Route path="/Employee/Editform/:_id" element={<Editform emp={emp} setEmp={setEmp}/>}/> 
        </Route>
      </Routes>

      {/* <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/product_detail" element={<Main_container/>}>
          <Route path="/product_detail" element={<Product_detail/>}/>
        </Route>
      </Routes> */}

      </Suspense>
      {/* <Action_comp/> */}
     
    </div>
  );
}

export default App;
