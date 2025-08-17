import { useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { mockProducts } from '@/data/products';
import { useCartStore } from '@/store';
import { 
  ShoppingCart, 
  Star, 
  Truck, 
  Shield, 
  Award, 
  ChevronLeft,
  Plus,
  Minus,
  Check,
  AlertTriangle
} from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addItem);

  const product = useMemo(() => {
    return mockProducts.find(p => p.id === id);
  }, [id]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return mockProducts
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Could add a toast notification here
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= product.stockQuantity) {
      setQuantity(newQuantity);
    }
  };

  const getCategoryLabel = (category: string) => {
    const categoryMap: Record<string, string> = {
      'storage-tanks': 'Storage Tanks',
      'dewars': 'Dewars',
      'transfer-systems': 'Transfer Systems', 
      'valves-fittings': 'Valves & Fittings',
      'safety-equipment': 'Safety Equipment',
      'instrumentation': 'Instrumentation',
      'accessories': 'Accessories'
    };
    return categoryMap[category] || category;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
            <span>/</span>
            <Link to={`/products?category=${product.category}`} className="hover:text-foreground transition-colors">
              {getCategoryLabel(product.category)}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/products" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square overflow-hidden rounded-lg border">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden rounded-md border-2 transition-colors ${
                      selectedImage === index ? 'border-primary' : 'border-border hover:border-muted-foreground'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline">{getCategoryLabel(product.category)}</Badge>
                {product.featured && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Featured
                  </Badge>
                )}
                {product.inStock ? (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <Check className="h-3 w-3 mr-1" />
                    In Stock
                  </Badge>
                ) : (
                  <Badge variant="destructive">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Out of Stock
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold">{product.name}</h1>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">Professional Grade</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Pricing */}
            <div className="bg-muted/30 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-primary">
                    ${product.price.toLocaleString()}
                  </span>
                  <span className="text-lg text-muted-foreground">per unit</span>
                </div>

                {product.inStock && (
                  <div className="text-sm text-muted-foreground">
                    Stock Available: {product.stockQuantity} units
                  </div>
                )}

                {/* Quantity and Add to Cart */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="quantity">Quantity:</Label>
                    <div className="flex items-center border rounded-md">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleQuantityChange(quantity - 1)}
                        disabled={quantity <= 1}
                        className="rounded-r-none"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        id="quantity"
                        type="number"
                        min="1"
                        max={product.stockQuantity}
                        value={quantity}
                        onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                        className="w-20 text-center border-0 rounded-none"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleQuantityChange(quantity + 1)}
                        disabled={quantity >= product.stockQuantity}
                        className="rounded-l-none"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="flex-1"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart - ${(product.price * quantity).toLocaleString()}
                  </Button>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Free Shipping</div>
                  <div className="text-muted-foreground">On orders over $5,000</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">2 Year Warranty</div>
                  <div className="text-muted-foreground">Manufacturer guarantee</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">ISO Certified</div>
                  <div className="text-muted-foreground">Quality assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3">Specification</TableHead>
                    <TableHead>Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {product.specifications.map((spec, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{spec.label}</TableCell>
                      <TableCell>
                        {spec.value} {spec.unit && <span className="text-muted-foreground">{spec.unit}</span>}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Related Products</h2>
              <Link to={`/products?category=${product.category}`}>
                <Button variant="outline">
                  View All {getCategoryLabel(product.category)}
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden">
                    <img 
                      src={relatedProduct.images[0]} 
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                    />
                    {relatedProduct.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-semibold line-clamp-2">{relatedProduct.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{relatedProduct.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-primary">
                        ${relatedProduct.price.toLocaleString()}
                      </div>
                      <Link to={`/products/${relatedProduct.id}`}>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}