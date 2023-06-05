import './App.css'
import { AdminPage } from './Router/Admin-page/admin.dashboard.component';
import { NoticePage } from './Router/Notice-page/noitce-page.componet';
import Home from './components/Home-coponent/home.component';
import { Route , Routes } from 'react-router-dom';
import { MembersList } from './components/member-list/member-list.component';
const App = () => {
  return(
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/notice" element={<NoticePage/>} />
      <Route exact path="/admin" element={<AdminPage/>}/>
      <Route exact path="/admin/member" element={<MembersList/>}/>
        
      

    </Routes>
  )
}
export default App;