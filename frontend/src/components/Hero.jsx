import React from 'react';
import { Star, Search, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Vortex } from "./ui/vortex";
import { useTheme } from '../contexts/ThemeContext';
import ButtonRotatingBackgroundGradient from './sub/btnBorder';

const Hero = ({ genres, selectedGenre, onGenreClick, searchQuery, onSearchChange }) => {
  const { darkMode } = useTheme();
  
  return (
    <section className="relative">
      <Vortex darkMode={darkMode}>
        <div className="w-full py-20 md:py-32 relative z-10">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="flex items-center space-x-2">
              <ButtonRotatingBackgroundGradient/>
              </div>

              <h1 className="Non-Natural-Grotesk-Bold text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
                Discover Your Next Favorite Movie
              </h1>

              <p className="Non-Natural-Mono-Light text-xl text-muted-foreground dark:text-gray-300 max-w-2xl">
                Get personalized recommendations from our collection of 10,000+ carefully curated films.
              </p>

              <div className="w-full max-w-2xl flex gap-4">
                <div className="flex-1 relative">
                  {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /> */}
                  <Input
                    type="text"
                    placeholder="Search for movies..."
                    className="w-full bg-card"
                    value={searchQuery}
                    onChange={onSearchChange}
                  />
                </div>
                <Button className="px-8 text-lg">Search</Button>
              </div>

              <div className="w-full max-w-3xl">
                <p className="text-lg mb-4 dark:text-gray-200">Or explore by genre:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {genres.map(genre => (
                    <Button
                      key={genre}
                      variant={selectedGenre === genre ? "default" : "outline"}
                      onClick={() => onGenreClick(genre)}
                      className="transition-all duration-200 dark:border-gray-600"
                    >
                      {genre}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Vortex>
    </section>
  );
};

export default Hero;