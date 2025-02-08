import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";


export default function LoginForm({ className, ...props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      console.log("Login successful!");
      navigate("/select-movies");
    } catch (error) {
      console.error("Login error:", error);
      console.error("Login failed. Please try again.");
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
              background: "#10B981",
              color: "#FFFFFF",
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(16, 185, 129, 0.8)",
            },
          },
          error: {
            style: {
              background: "#EF4444",
              color: "#FFFFFF",
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(239, 68, 68, 0.8)",
            },
          },
        }}
      />
      <div className="flex flex-col items-start gap-2 text-left">
        <h1 className="Non-Natural-Grotesk-Bold text-2xl font-bold">Login to your account</h1>
        <p className="Non-Natural-Mono-Light text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
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
        Don&apos;t have an account?{" "}
         <Link
            to="/signup"
            className="text-chart-1"
         >
            Sign Up
         </Link>
      </div>
    </form>
  );
}
