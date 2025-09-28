// components/Props.js
import React from "react";

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
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "8px" }}>
      <h3>Ejemplo completo de Props</h3>

      {/* String */}
      <p>Nombre (string): <strong>{nombre}</strong></p>

      {/* Number */}
      <p>Edad (number): <strong>{edad}</strong></p>

      {/* Boolean */}
      <p>Activo (boolean): <strong>{activo ? "✅ Sí" : "❌ No"}</strong></p>

      {/* Array */}
      <p>Frutas (array): <strong>{frutas ? frutas.join(", ") : "No hay frutas"}</strong></p>

      {/* Objeto */}
      <p>Datos (objeto): <strong>{datos ? JSON.stringify(datos) : "No hay datos"}</strong></p>

      {/* Función */}
      <p>Mensaje de función (función): <strong>{saludo ? saludo() : "No hay función"}</strong></p>

      {/* Elemento JSX */}
      <p>Elemento JSX: {elementoJSX || <em>No se pasó elemento</em>}</p>

      {/* Componente como prop */}
      <p>Componente pasado como prop:</p>
      {componente ? componente() : <em>No se pasó componente</em>}

      {/* Sintaxis */}
      <p>
        <strong>Sintaxis:</strong>{" "}
        <code>
          {"<EjemploProps nombre='Ana' edad={25} activo={true} frutas={['Manzana']} datos={{key:'valor'}} saludo={funcion} elementoJSX={<div>Hola</div>} componente={() => <OtroComponente />} />"}
        </code>
      </p>
    </div>
  );
}

// 🔹 Componente simple para pasar como prop
function OtroComponente() {
  return <div style={{ padding: "0.5rem", background: "#f0f0f0" }}>Soy un componente pasado como prop</div>;
}

// 🔹 Componente principal
export default function Props() {
  const frutasUsuario = ["Manzana", "Banana", "Cereza"];
  const miSaludo = () => "¡Hola desde función!";
  const datosUsuario = { ciudad: "Madrid", pais: "España" };

  return (
    <div style={{ padding: "1.5rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "1rem" }}>
        📥 Props en React - Ejemplo completo
      </h1>

      {/* Descripción */}
      <div style={{ marginBottom: "1rem", padding: "0.75rem", backgroundColor: "#d1fae5", borderLeft: "4px solid #10b981", borderRadius: "4px" }}>
        <strong>¿Qué son las props?</strong>
        <p>Las props permiten pasar datos desde un componente padre a un componente hijo. Pueden ser de cualquier tipo: string, number, boolean, array, objeto, función, JSX o incluso otro componente. Además, algunas props pueden ser opcionales y se puede validar su existencia antes de usarlas.</p>
      </div>

      {/* Ejemplos de props */}
      <EjemploProps
        nombre="Ana"
        edad={25}
        activo={true}
        frutas={frutasUsuario}
        datos={datosUsuario}
        saludo={miSaludo}
        elementoJSX={<span style={{ color: "blue" }}>Soy un span JSX</span>}
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
