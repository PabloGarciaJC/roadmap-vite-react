// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Gallery from "./components/Gallery";
// import Favorites from "./components/Favorites";
// import Configuracion from "./components/Configuracion";

// export default function App() {
//   return (
//     <div className="app">
//       <Sidebar />
//       <main className="main">
//         <Routes>
//           <Route path="/" element={<Gallery />} />
//           <Route path="/favoritos" element={<Favorites />} />
//           <Route path="/configuracion" element={<Configuracion />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

// Importar todos los componentes de práctica
import Introduccion from "./components/Introduccion";
import Componentes from "./components/Componentes";
import JSX from "./components/JSX";
import Props from "./components/Props";
import Estado from "./components/Estado";
import UseEffect from "./components/UseEffect";
import UseContext from "./components/UseContext";
import UseCallback from "./components/UseCallback";
import UseMemo from "./components/UseMemo";
import Eventos from "./components/Eventos";
import Listas from "./components/Listas";
import Formularios from "./components/Formularios";
import Optimizar from "./components/Optimizar";

export default function App() {
  return (
    <div className="app flex">
      <Sidebar />
      <main className="main flex-1 p-6">
        <Routes>
          <Route path="/" element={<Introduccion />} />
          <Route path="/componentes" element={<Componentes />} />
          <Route path="/jsx" element={<JSX />} />
          <Route path="/props" element={<Props />} />
          <Route path="/estado" element={<Estado />} />
          <Route path="/useeffect" element={<UseEffect />} />
          <Route path="/usecontext" element={<UseContext />} />
          <Route path="/usecallback" element={<UseCallback />} />
          <Route path="/usememo" element={<UseMemo />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/listas" element={<Listas />} />
          <Route path="/formularios" element={<Formularios />} />
          <Route path="/optimizar" element={<Optimizar />} />
        </Routes>
      </main>
    </div>
  );
}
