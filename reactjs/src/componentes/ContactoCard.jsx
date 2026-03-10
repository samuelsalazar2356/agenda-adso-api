// Este componente muestra un contacto individual.
// Incluye nombre, teléfono, correo, etiqueta y botones de editar y eliminar.

export default function ContactoCard({
  nombre,
  telefono,
  correo,
  etiqueta,
  onEliminar,
  onEditar,
}) {
  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      {/* Información del contacto */}
      <div className="space-y-1">
        {/* Nombre */}
        <h3 className="text-xl font-semibold text-gray-800">{nombre}</h3>

        {/* Teléfono */}
        <p className="text-gray-600 text-sm flex items-center gap-2">
          <span className="text-purple-500 text-lg">📞</span>
          {telefono}
        </p>

        {/* Correo */}
        <p className="text-gray-600 text-sm flex items-center gap-2">
          <span className="text-purple-500 text-lg">✉️</span>
          {correo}
        </p>

        {/* Etiqueta (opcional) */}
        {etiqueta && (
          <span className="inline-block bg-purple-50 text-purple-700 text-xs px-3 py-1 rounded-full mt-2">
            {etiqueta}
          </span>
        )}
      </div>

      {/* Botones de acción - CLASE 11 */}
      <div className="flex gap-2 justify-end">
        {/* Botón Editar */}
        <button
          onClick={onEditar}
          className="text-sm px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          Editar
        </button>

        {/* Botón Eliminar */}
        <button
          onClick={onEliminar}
          className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-xl shadow transition"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

