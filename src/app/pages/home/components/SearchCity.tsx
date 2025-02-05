
'use client';

import { useState, ChangeEvent, FormEvent, useEffect } from 'react';

interface FormData {
  departamento: string;
  ciudad: string;
}
interface Errors {
  departamento?: string;
  ciudad?: string;
}

interface Departamento {
  id: number;
  name: string;
}
interface Ciudad {
  id: number;
  name: string;
}

export default function City() {

  const [departamentos, setDepartamentos] = useState<Departamento[]>([]);
  const [ciudades, setCiudades] = useState<Ciudad[]>([]);
  const [loadCities, setLoadCities] = useState<string>('');

  const [formData, setFormData] = useState<FormData>({
    departamento: '',
    ciudad: '',
  });

  useEffect(() => {
    const getDepartaments = async () => {
      const response = await fetch('https://api-colombia.com/api/v1/Department');
      const departaments:Departamento[] = await response.json();
      const departamentsOrder = departaments.sort((a, b) => a.name.localeCompare(b.name));
      setDepartamentos(departamentsOrder);
      console.log(departamentsOrder);
    }   

    getDepartaments();
    
  }, []);

  useEffect(() => {
    const getCities = async () => {
      const response = await fetch(`https://api-colombia.com/api/v1/Department/${loadCities}/cities`);      
      const cities:Ciudad[] = await response.json();
      const citiesOrder = cities.sort((a, b) => a.name.localeCompare(b.name));
      setCiudades(citiesOrder);
      console.log(citiesOrder);
    }
    if(loadCities){
      getCities();
    }
  }, [loadCities]);

  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {}

  const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if(name === 'departamento') {
      setLoadCities(value.split('-')[1]);      
    }    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,      
    }));
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-[#f6f5f7] rounded-2xl shadow-md mt-10 mb-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Seleccionar ciudad</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Departamento</label>
          <select
            name="departamento"
            value={formData.departamento}
            onChange={handleChange}
            className={`w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.departamento ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Selecciona un departamento</option>
            {departamentos.map((dep) => (
              <option key={dep.id} value={`${dep.name}-${dep.id}`}>
                {dep.name}
              </option>
            ))}
          </select>
          {errors.departamento && <p className="text-red-500 text-sm mt-1">{errors.departamento}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Ciudad</label>
          <select
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            disabled={!formData.departamento}
            className={`w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.ciudad ? 'border-red-500' : 'border-gray-300'
            } ${!formData.departamento && 'bg-gray-100 cursor-not-allowed'}`}
          >
            <option value="">Selecciona una ciudad</option>
            {formData.departamento &&
              ciudades.map((ciudad) => (
                <option key={ciudad.id} value={ciudad.name}>
                  {ciudad.name}
                </option>
              ))}
          </select>
          {errors.ciudad && <p className="text-red-500 text-sm mt-1">{errors.ciudad}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600 transition duration-300"
        >
          Buscar
        </button>
      </form>
    </div>
  )
}
  