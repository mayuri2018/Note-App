import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom";

function App() {
  return <Routes>
    <Route path="/" element={<h1>Home</h1>}/>
    <Route path="/new" element={<h1>New</h1>}/>
    <Route path="/:id">
        <Route index element = {<h1>Show</h1>}/>
        <Route index element = {<h1>Edit</h1>}/>
    </Route>
    <Route path="/new" element={<h1>New</h1>}/>
  </Routes>
}

export default App;
