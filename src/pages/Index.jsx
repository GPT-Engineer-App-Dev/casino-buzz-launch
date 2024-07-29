import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dice, DollarSign, Users, Clock } from "lucide-react";

const Index = () => {
  const [games] = useState([
    { name: "Blackjack", image: "/placeholder.svg" },
    { name: "Roulette", image: "/placeholder.svg" },
    { name: "Poker", image: "/placeholder.svg" },
    { name: "Slots", image: "/placeholder.svg" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      <header className="py-6 px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center">Lucky Star Casino</h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Experience the Thrill</h2>
          <p className="text-xl text-center mb-8">Welcome to Lucky Star Casino, where fortune favors the bold!</p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
              Play Now
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Our Games</h2>
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {games.map((game, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-gray-800">
                    <CardHeader>
                      <CardTitle>{game.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src={game.image} alt={game.name} className="mx-auto object-cover w-full h-40" />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Dice className="h-8 w-8 mb-2" />, title: "Wide Game Selection" },
              { icon: <DollarSign className="h-8 w-8 mb-2" />, title: "Big Jackpots" },
              { icon: <Users className="h-8 w-8 mb-2" />, title: "VIP Program" },
              { icon: <Clock className="h-8 w-8 mb-2" />, title: "24/7 Support" },
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-800">
                <CardHeader>
                  <CardTitle className="flex flex-col items-center">
                    {feature.icon}
                    {feature.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle>Ready to Play?</CardTitle>
              <CardDescription>Join now and get a welcome bonus!</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full bg-green-500 hover:bg-green-600">Sign Up</Button>
            </CardFooter>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-900 text-center py-4 mt-16">
        <p>&copy; 2024 Lucky Star Casino. Play responsibly.</p>
      </footer>
    </div>
  );
};

export default Index;
