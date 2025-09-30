// components/Props.jsx
import React from "react";
import { FaInbox, FaCheckCircle, FaTimesCircle, FaAppleAlt, FaFileAlt, FaSmile } from "react-icons/fa";

// 🔹 Componente hijo que recibe props de distintos tipos
function EjemploProps({
  nombre,
  edad,
  activo,
  frutas,
  datos,
  saludo,
  elementoJSX,
  componente,
}) {
  return (
    <div className="card">
      <h3 className="card-title flex items-center gap-2">
        <FaFileAlt className="icon" /> Ejemplo completo de Props
      </h3>

      {/* String */}
      <p>
        Nombre (string): <strong>{nombre}</strong>
      </p>

      {/* Number */}
      <p>
        Edad (number): <strong>{edad}</strong>
      </p>

      {/* Boolean */}
      <p className="flex items-center gap-2">
        Activo (boolean):
        {activo ? (
          <span className="flex items-center gap-1">
            <FaCheckCircle className="icon text-green-600" /> Sí
          </span>
        ) : (
          <span className="flex items-center gap-1">
            <FaTimesCircle className="icon text-red-600" /> No
          </span>
        )}
      </p>

      {/* Array */}
      <p>
        Frutas (array): <strong>{frutas ? frutas.join(", ") : "No hay frutas"}</strong>
      </p>

      {/* Objeto */}
      <p>
        Datos (objeto): <strong>{datos ? JSON.stringify(datos) : "No hay datos"}</strong>
      </p>

      {/* Función */}
      <p>
        Mensaje de función (función): <strong>{saludo ? saludo() : "No hay función"}</strong>
      </p>

      {/* Elemento JSX */}
      <p>
        Elemento JSX: {elementoJSX || <em>No se pasó elemento</em>}
      </p>

      {/* Componente como prop */}
      <p>Componente pasado como prop:</p>
      {componente ? componente() : <em>No se pasó componente</em>}

      {/* Sintaxis */}
      <pre className="code-block">
        <code>{`<EjemploProps nombre='Ana' edad={25} activo={true} frutas={['Manzana']} datos={{key:'valor'}} saludo={funcion} elementoJSX={<div>Hola</div>} componente={() => <OtroComponente />} />`}</code>
      </pre>
    </div>
  );
}

// 🔹 Componente simple para pasar como prop
function OtroComponente() {
  return (
    <div className="card-sub">
      <FaSmile className="icon" /> Soy un componente pasado como prop
    </div>
  );
}

// 🔹 Componente principal
export default function Props() {
  const frutasUsuario = ["Manzana", "Banana", "Cereza"];
  const miSaludo = () => "¡Hola desde función!";
  const datosUsuario = { ciudad: "Madrid", pais: "España" };

  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaInbox className="icon" /> Props en React - Ejemplo completo
      </h1>

      {/* Descripción */}
      <div className="card card-warning">
        <strong>¿Qué son las props?</strong>
        <p>
          Las props permiten pasar datos desde un componente padre a un componente hijo. 
          Pueden ser de cualquier tipo: string, number, boolean, array, objeto, función, JSX o incluso otro componente. 
          Algunas props pueden ser opcionales y se puede validar su existencia antes de usarlas.
        </p>
      </div>

      {/* Ejemplos de props */}
      <EjemploProps
        nombre="Ana"
        edad={25}
        activo={true}
        frutas={frutasUsuario}
        datos={datosUsuario}
        saludo={miSaludo}
        elementoJSX={<span className="text-blue-600">Soy un span JSX</span>}
        componente={() => <OtroComponente />}
      />

      <EjemploProps
        nombre="Luis"
        edad={30}
        activo={false}
        frutas={["Fresa", "Mango"]}
        saludo={() => "¡Hola Luis!"}
        elementoJSX={<strong>Texto en negrita</strong>}
      />
    </div>
  );
}
