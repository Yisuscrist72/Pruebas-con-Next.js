/* "use client"; */ // Para que cargue el componente en el lado cliente.

// Classname sirve para aplicar estilos de Tailwind CSS.
// Si quieres tener varios contenedores, se crean divs. 

// Componente de página de "Sobre nosotros" (AboutPage).
// Este componente se encarga de mostrar la información sobre nosotros.
export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen text-black p-4">
      <header>
        <h1 className="text-5xl mb-6">Sobre nosotros</h1>
      </header>
      <p className="mb-6">Esta es la página de información</p>

      {/* Contenedor de tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4 places-items-center min-h-[50vh]">
        {/* Tarjeta 1 */}
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-center items-center">
          <h2 className="text-4xl mb-3">Tarjeta 1</h2>
          <img src="https://cdn.pixabay.com/photo/2015/11/06/11/43/businessman-1026415_1280.jpg" 
               alt="Imagen de muñeco"
               className="w-90 h-90 rounded-full mt-1.5"
               />
        </div>

        {/* Tarjeta 2 */} 
         <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-center items-center">
          <h2 className="text-4xl mb-3">Tarjeta 2</h2>
          <p>Hola</p>
        </div>

        {/* Tarjeta 3 */}
         <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-center items-center">
          <h2 className="text-4xl mb-3">Tarjeta 3</h2>
          <p>Hola</p>
        </div>
      </div>
    </div>
  );
}