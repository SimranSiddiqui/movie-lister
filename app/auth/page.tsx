'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient' // This line imports the Supabase connection

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // This is the function that runs when you click "Sign Up"
  const handleSignUp = async () => {
    // This calls the Supabase service to create a new user
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) {
      // If something goes wrong, show an error
      alert('Error signing up: ' + error.message)
    } else {
      // If it's successful, show a success message
      alert('Success! Check your email for the confirmation link.')
    }
  }

  const handleSignIn = async () => {
    // We will work on this part later
    alert('Sign in logic goes here')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome to MovieLister</h1>
      <div className="w-full max-w-xs">
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded text-black"
          />
          <input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border rounded text-black"
          />
          <button onClick={handleSignUp} className="p-2 bg-green-500 text-white rounded">
            Sign Up
          </button>
          <button onClick={handleSignIn} className="p-2 bg-blue-500 text-white rounded">
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}