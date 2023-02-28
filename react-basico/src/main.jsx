import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Primer hola mundo
//root.render(<h1>Hola Mundo</h1>)

// Primer componente
function Greeting() {
  return (
    <div>
      <h1>Este es un componente</h1>
      <p>lorem 123</p>
      <i>Waja</i>
    </div>
  );
}

// Componente con variables
function Variables() {
  const name = "Alonso";

  const num1 = 10;
  const num2 = 20;
  const result = num1 + num2;

  const casado = false;
  let respuesta = "";

  if (casado === true) {
    respuesta = "Estoy casado"; // Tambien se puede poner un return en el caso que el componente no quiera retornar variables externas
  } else {
    respuesta = "NO estoy casado";
  }

  return (
    <div>
      <h1>{name}</h1>
      <h1>
        El resultado entre {num1} y {num2} es: {result}
      </h1>
      <h1>{respuesta}</h1>
    </div>
  );
}

// Ternary Operator (Otra forma de escribir condicional)
function TernaryOperator() {
  const married = true;
  return <h1>{married ? "Estoy Casado" : "NO estoy casado"}</h1>;
}

// Objetos

function Objetos() {
  const user = {
    firstName: "Ryan",
    lastName: "Ray",
  };

  // Para poder pasar un objeto se tiene que usar la funcion JSON.stringify() para poder convertirlo en string
  return <h1>{JSON.stringify(user)}</h1>;
}

// Visualizar los componentes en sitio web
root.render(
  // Si se quiere agregar mas componentes se tienen que poner dentro de un div
  <div>
    <Greeting></Greeting>
    <Variables></Variables>
    <TernaryOperator></TernaryOperator>
    <Objetos></Objetos>
  </div>
);
