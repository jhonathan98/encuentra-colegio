'use client';
import { useState } from 'react';
//import { supabase } from '@/app/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import NavbarColegioCercano from '@/app/componentes/navbar';
import { AuthButton } from '@/app/auth/AuthButton'
import { AuthInput } from '@/app/auth/AuthInput';
import { SocialButton } from '@/app/auth/SocialButton';
import { AuthError } from '@supabase/supabase-js'

import { supabase } from '@/utils/supabase';

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.email) {
      newErrors.email = 'El email es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida'
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    // Verificamos que name sea una key válida de FormData
    if (name === 'email' || name === 'password') {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
    // Limpiar error del campo cuando el usuario empiece a escribir
    setErrors(prev => ({
      ...prev,
      [name]: undefined
    }))
   
  }

  const handleGoogleLogin = async () => {
    try {
      const { error, data } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      })

      if (error) throw error
    } catch (errorExeption) {
      const error = errorExeption as AuthError
      setErrors(prev => ({
        ...prev,
        general: error.message
      }))
    }
  }

  const handleLoginSupabase = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      if(validateForm() === false) return;
      const {data,error} = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      })
      if(error){
        setErrors(prev => ({
          ...prev,
          general: error.message
        }))
        return;
      }
      if(data){
        router.push('/pages/home');
      }
      //console.log("data:->",data)
      //console.log("error:->",error)
    }catch(e : any){
      setErrors(prev => ({
        ...prev,
        general: e.message
      }))
      //console.error("errores:->",e)
    }
  }

  const handleRegisterSupabase = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      const {data,error} = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password
      })
      console.log("data:->",data)
      console.log("error:->",error)
    }catch(e){
      console.error("errores:->",e)
    }
  }


  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-yellow-50">
      <NavbarColegioCercano />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Iniciar Sesión
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              ¿No tienes una cuenta?{' '}
              <Link href="/pagespublic/register" className="text-blue-600 hover:text-blue-500">
                Regístrate
              </Link>
            </p>
          </div>

          {errors.general && (
            <div className="bg-red-50 text-red-700 p-3 rounded-md text-sm">
              {errors.general}
            </div>
          )}

          <form className="space-y-6">
            <AuthInput
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              autoComplete="email"
              placeholder="tu@email.com"
              required
            />

            <AuthInput
              label="Contraseña"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              autoComplete="current-password"
              required
            />
            <div className="mb-6">
              <Link href="/pagespublic/forgotpassword" className="text-sm text-blue-500 hover:text-blue-800">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <AuthButton type="submit" isLoading={isLoading} onClick={handleLoginSupabase}>
              Iniciar Sesión
            </AuthButton>
            <AuthButton type="submit" isLoading={isLoading} onClick={handleRegisterSupabase}>
              Registrarse
            </AuthButton>
            
            {/* <AuthButton type="submit" isLoading={isLoading}>
              Iniciar Sesión
            </AuthButton> */}
          </form>

          <div className="relative my-6">            
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                O continúa con
              </span>
            </div>
          </div>

          <SocialButton
            provider="Google"
            onClick={handleGoogleLogin}
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            }
          />
        </div>
      </div>     
    </div>
  );
};

export default Login;