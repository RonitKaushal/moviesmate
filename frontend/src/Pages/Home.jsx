//this is the home page of the web app

"use client"

import React, { useState, useEffect, useCallback, useMemo } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import image from "../assets/1303126.jpg"

import {
  Film,
  Popcorn,
  ListVideo,
  Sparkles,
  Sun,
  Moon,
  Star,
  Calendar,
  Clock,
  Heart,
  Tv,
  Trophy,
  Search,
  Play,
} from "lucide-react"
import { theme } from "@/lib/theme"
import { Vortex } from "../components/ui/vortex"
import Hero from "../components/Hero"

const Home = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [selectedGenre, setSelectedGenre] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const genres = useMemo(() => ["Action", "Drama", "Comedy", "Sci-Fi", "Horror", "Romance"], [])

  const streamingServices = useMemo(() => ["Netflix", "Amazon", "Disney+", "Hulu", "HBO","Netflix", "Amazon", "Disney+", "Hulu", "HBO", "Netflix", "Amazon", "Disney+", "Hulu", "HBO","Netflix", "Amazon", "Disney+", "Hulu", "HBO", "Netflix", "Amazon", "Disney+", "Hulu", "HBO","Netflix", "Amazon", "Disney+", "Hulu", "HBO"], [])

  const trendingMovies = useMemo(
    () => [
      {
        title: "Dune: Part Two",
        rating: "9.2",
        genre: "Sci-Fi",
        image: "/poster/dune.jpg",
      },
      {
        title: "Poor Things",
        rating: "8.9",
        genre: "Drama",
        image: "/poster/poorthings.jpeg",
      },
      {
        title: "Oppenheimer",
        rating: "9.1",
        genre: "Biography",
        image: "/poster/openhimar.jpg",
      },
      {
        title: "The Batman",
        rating: "8.8",
        genre: "Action",
        image: "/poster/batman.jpg",
      },
    ],
    [],
  )

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prevMode) => !prevMode)
  }, [])

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value)
  }, [])

  const handleGenreClick = useCallback((genre) => {
    setSelectedGenre(genre)
  }, [])

  return (
    <div>
      {/* Header */}
      {/* <header
        className="px-8 h-20 flex items-center justify-center sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-black/80"
      >
        <div className="container max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Popcorn className="h-8 w-8 text-primary" />
            <span className="text-3xl font-bold">MovieMate</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link className="text-lg font-medium hover:text-primary transition-colors" to="#features">
              Features
            </Link>
            <Link className="text-lg font-medium hover:text-primary transition-colors" to="#trending">
              Trending
            </Link>
            <Link className="text-lg font-medium hover:text-primary transition-colors" to="#pricing">
              Pricing
            </Link>
            <Button
              onClick={toggleDarkMode}
              variant="ghost"
              size="icon"
              className="p-3 hover:scale-110 transition-transform"
            >
              {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </Button>
            <Button className="px-6">Sign In</Button>
          </nav>
        </div>
      </header> */}

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          genres={genres}
          selectedGenre={selectedGenre}
          onGenreClick={handleGenreClick}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />

        {/* Features Section */}
        <section id="features" className="py-20 bg-background">
          <div className="container px-4 mx-auto">
            <div className="text-left mb-16">
              <h2 className="Non-Natural-Grotesk-Bold text-3xl md:text-4xl font-bold mb-4">Why Choose MovieMate?</h2>
              <p className="Non-Natural-Mono-Light text-base text-muted-foreground">Experience the future of movie discovery</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Sparkles,
                  title: "AI Recommendations",
                  description: "Our advanced AI learns your taste and suggests movies you'll love",
                },
                {
                  icon: Heart,
                  title: "Personalized Watchlist",
                  description: "Create and organize your perfect movie playlist",
                },
                {
                  icon: Trophy,
                  title: "Curated Collections",
                  description: "Discover hand-picked themed collections and genres",
                },
                {
                  icon: Tv,
                  title: "Stream Availability",
                  description: "Find where to watch across all major platforms",
                },
                {
                  icon: Star,
                  title: "Community Ratings",
                  description: "Real reviews from movie lovers like you",
                },
                {
                  icon: Calendar,
                  title: "New Releases",
                  description: "Stay updated with the latest movies and upcoming releases",
                },
              ].map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="relative p-4 rounded-xl border bg-muted transition-all duration-200 hover:shadow-lg hover:scale-105"
                >
                  <div className="reason flex flex-col items-start text-left max-w-80">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-muted-foreground">{description}</p>
                    <div className="mt-5 w-full flex justify-end items-center">
                    <div className="absolute top-2 right-2 p-2 rounded-full">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Movies */}
        <section id="trending" className="py-20 bg-background">
          <div className="container px-4 mx-auto">
            <div className="text-left mb-16">
              <h2 className="Non-Natural-Grotesk-Bold text-3xl md:text-4xl font-bold mb-4">Trending Now</h2>
              <p className="Non-Natural-Mono-Light text-base text-muted-foreground">Most popular movies this week</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {trendingMovies.map((movie) => (
                <div key={movie.title} className="group relative rounded-xl overflow-hidden">
                  <img
                    src={movie.image || "/placeholder.svg"}
                    alt={movie.title}
                    className="w-full h-auto min-h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-50% flex flex-col justify-end p-2 sm:p-6">
                    <h3 className="text-base sm:text-xl font-bold text-white mb-2">{movie.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-primary">{movie.genre}</span>
                      <Badge className="bg-yellow-300 flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span className="text-card">{movie.rating}</span>
                      </Badge>
                    </div>
                    <Button className="mt-4 w-full bg-card text-primary hover:text-card gap-2">
                      <Play className="w-4 h-4" /> Watch Trailer
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Streaming Services */}
        <section className="py-0 bg-background">
          <div className="container px-4 mx-auto">
            {/* <div className="text-left mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Available on All Platforms</h2>
              <p className="text-xl text-muted-foreground">Find where to watch your favorite movies</p>
            </div> */}
{/* ///////////////////////// */}
      <div className="w-full text-5xl py-8  inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">
        <ul className="flex items-center justify-center md:justify-start sm:[&_li]:mx-3 [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
        {streamingServices.map((service) => (
          <li key={service}>
            <a
              target="_blank"
              href="https://x.com/naymur_dev"
              className="w-auto Non-Natural-Grotesk-Bold text-xl bg-muted text-primary uppercase sm:grid hidden place-content-center  py-2 px-3 rounded-md">
                <p className="w-auto">{service}</p>
            </a>
          </li>
        ))}
        </ul>
      </div>
{/* //////////////////////// */}

            {/* <div className="flex flex-wrap justify-center gap-8">
              {streamingServices.map((service) => (
                <div key={service} className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md">
                  <span className="text-lg font-medium">{service}</span>
                </div>
              ))}
            </div> */}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Next Movie?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of movie lovers and start discovering films tailored to your taste.
              </p>
              <Button size="lg" className="text-lg px-8">
                Get Started — It's Free
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
              <div className="flex justify-center items-center w-10 h-10">
          <img src="/Movies Mate Logo.png" className="w-full" />
          </div>                <span className="text-xl font-bold">MovieMate</span>
              </Link>
              <p className="text-muted-foreground">Your personal movie recommendation companion.</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link className="text-muted-foreground hover:text-primary" to="#">
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="text-muted-foreground hover:text-primary" to="#">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className="text-muted-foreground hover:text-primary" to="#">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link className="text-muted-foreground hover:text-primary" to="#">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="text-muted-foreground hover:text-primary" to="#">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link className="text-muted-foreground hover:text-primary" to="#">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link className="text-muted-foreground hover:text-primary" to="#">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link className="text-muted-foreground hover:text-primary" to="#">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link className="text-muted-foreground hover:text-primary" to="#">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p>© 2025 MOVIES MATE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

