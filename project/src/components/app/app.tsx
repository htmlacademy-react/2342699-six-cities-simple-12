import Main from '../../pages/main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../../pages/login/Login';
import Room from '../../pages/room/Room';
import Page404 from '../../pages/page404/Page404';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Main/>} />
          <Route path='login' element={<Login/>} />
          <Route path='offer/:id' element={<Room/>} />
          <Route path='*' element={<Page404/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
