// React Router
import { BrowserRouter, Routes, Route } from "react-router";

//pages
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";

//page
import Page from "./components/Page/Page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/catalog" element={<Page children={<MainPage/>}/>}/>
          <Route path="/profile" element={<Page children={<ProfilePage/>}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
