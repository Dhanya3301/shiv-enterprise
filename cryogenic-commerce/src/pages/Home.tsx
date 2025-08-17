import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockProducts } from '@/data/products';
import { useCartStore } from '@/store';
import { 
  ArrowRight, 
  Thermometer, 
  Shield, 
  Zap, 
  Truck,
  Award,
  Users,
  Globe,
  ShoppingCart,
  Star
} from 'lucide-react';

export default function Home() {
  const addToCart = useCartStore((state) => state.addItem);
  const featuredProducts = mockProducts.filter(product => product.featured);

  const stats = [
    { icon: Award, label: '38+ Years', description: 'Industry Experience' },
    { icon: Users, label: '500+', description: 'Satisfied Customers' },
    { icon: Globe, label: '25+', description: 'Countries Served' },
    { icon: Shield, label: 'ISO 9001', description: 'Quality Certified' }
  ];

  const features = [
    {
      icon: Thermometer,
      title: 'Extreme Temperature Range',
      description: 'Equipment designed to operate efficiently from -196°C to ambient temperatures'
    },
    {
      icon: Shield,
      title: 'Safety First Design',
      description: 'All products meet strict safety standards with comprehensive monitoring systems'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Superior insulation and advanced materials for maximum efficiency'
    },
    {
      icon: Truck,
      title: 'Global Support',
      description: 'Worldwide shipping and technical support for all our products'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/30 animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="container relative mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center rounded-full border border-border/50 bg-background/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm">
                <Thermometer className="mr-2 h-3 w-3" />
                Trusted by Industry Leaders Since 1985
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Industrial
                  <span className="block text-primary">Cryogenic</span>
                  Solutions
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Advanced cryogenic equipment and fuel systems for aerospace, medical, and industrial applications. 
                  Engineered for reliability at extreme temperatures.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button size="lg" className="group">
                    Explore Products
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Stats */}
            <div className="lg:justify-self-end animate-scale-in">
              <div className="grid grid-cols-2 gap-6 p-8 rounded-2xl border bg-card/50 backdrop-blur-sm hover-lift">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center space-y-2">
                      <Icon className="h-6 w-6 mx-auto text-primary" />
                      <div className="text-2xl font-bold">{stat.label}</div>
                      <div className="text-xs text-muted-foreground">{stat.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose CryoTech Solutions?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Decades of expertise in cryogenic technology delivering reliable, 
              safe, and efficient solutions for the most demanding applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors hover-lift">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Products</h2>
              <p className="text-lg text-muted-foreground">
                Our most popular cryogenic equipment trusted by industry professionals
              </p>
            </div>
            <Link to="/products">
              <Button variant="outline" className="group">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow hover-lift">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold line-clamp-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{product.description}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>Professional Grade</span>
                    <span>•</span>
                    <span>In Stock: {product.stockQuantity}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="text-2xl font-bold text-primary">
                      ${product.price.toLocaleString()}
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/products/${product.id}`}>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </Link>
                      <Button 
                        size="sm" 
                        onClick={() => addToCart(product)}
                        className="group"
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Find Your Perfect Cryogenic Solution?
            </h2>
            <p className="text-xl text-muted-foreground">
              Our technical team is ready to help you select the right equipment for your specific requirements. 
              Get expert consultation and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="group">
                  Browse Catalog
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Sales Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}