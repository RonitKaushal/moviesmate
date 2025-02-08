import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";


export function SignupForm({ className, ...props }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/auth/signup', { 
        username, 
        email, 
        password 
      });
      toast.success('Signup successful! Please login.');
      navigate('/login');
    } catch (error) {
      console.error('Signup error:', error);
      toast.error(error.response?.data?.message || 'Signup failed. Please try again.');
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <Toaster 
        position="top-center" 
        toastOptions={{
          success: {
            style: {
              background: '#4CAF50',
              color: '#FFFFFF',
            },
          },
          error: {
            style: {
              background: '#D32F2F',
              color: '#FFFFFF',
            },
          },
        }}
      />
      <div className="flex flex-col items-start gap-2 text-left">
        <h1 className="Non-Natural-Grotesk-Bold text-2xl font-bold">Create a new account!</h1>
        <p className="Non-Natural-Mono-Light text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
      <div className="grid gap-2">
          <Label
            htmlFor="username"
            
          >
            Username
          </Label>
          <Input id="username" type="text" placeholder="daniwatson@69" value={username}
                  onChange={(e) => setUsername(e.target.value)} required />
        </div> 
        <div className="grid gap-2">
          <Label
            htmlFor="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            Email
          </Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
      Already have an account?
         <Link
            to="/login"
            className="text-chart-1 mx-2"
         >
            Login
         </Link>
      </div>
    </form>
  );
}

export default SignupForm;