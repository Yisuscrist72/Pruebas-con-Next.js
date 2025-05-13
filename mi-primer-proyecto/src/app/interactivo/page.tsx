"use client"; // Para que cargue el componente en el lado cliente.

import React, { useState } from "react"; // Importa React y useState para manejar el estado del componente.
import Link from "next/link"; // Importa Link de Next.js para la navegación entre páginas.


export default function Menu(){

    const [abierto, setAbierto] = useState(false); // Estado para controlar si el menú está abierto o cerrado.

    return (
        <nav className="p-4 bg-gray-100 rounded shadow w-full max-w-xs mx-auto"> {/*El menu tiene un 4px de padding, redondeao y con sombra, un width del 100%, max-w-xs le limito el ancho máximo del nav a un tamaño pequeño, 
        mx-auto aplica margen automaticamente tanto como la iizquierda como la derecha, esto hace que el elmento se coloque en el centro de forma horizontal.*/}
        <button
            onClick={() => setAbierto(!abierto)} // Cambia el estado de abierto a su opuesto al hacer clic.
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            > {/* px y py son el padding en horizontal y vertical. */}
                Menu
            </button>
            {abierto && (
        <ul className="block mt-4 space-y-2 text-black"> {/* La clase space-y-2 se utiliza para agregar un espacio vertical uniforme entr los hijos del elemento, solo en el eje vertical. */}
          <li>
            <Link href="/" className="block px-2 py-1 hover:bg-blue-100 rounded">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/video" className="block px-2 py-1 hover:bg-blue-100 rounded">
              Video
            </Link>
          </li>
          <li>
            <Link href="/about" className="block px-2 py-1 hover:bg-blue-100 rounded">
              About
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
