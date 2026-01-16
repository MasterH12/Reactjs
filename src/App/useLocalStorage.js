import React from 'react';

function useLocalStorage(itemName, initialValue) {
  // Estado para manejar el loading
  const [loading, setLoading] = React.useState(true);
  // Estado para manejar errores
  const [error, setError] = React.useState(false);
  // Estado para el item
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          // Si no existe, guardamos el valor inicial
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          // Si existe, lo parseamos
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        console.error(`Error al cargar ${itemName} desde localStorage:`, error);
        setError(true);
        setLoading(false);
      }
    }, 1000);
  }, [itemName, initialValue]);

  // Función para actualizar el item en el estado y en localStorage
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      console.error(`Error al guardar ${itemName} en localStorage:`, error);
      setError(true);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };
