import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  Globe, 
  Shield, 
  Thermometer,
  Factory,
  Target,
  Heart,
  ArrowRight
} from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Award, value: '38+', label: 'Years of Excellence' },
    { icon: Users, value: '500+', label: 'Satisfied Customers' },
    { icon: Globe, value: '25+', label: 'Countries Served' },
    { icon: Factory, value: '50,000+', label: 'Units Delivered' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Every product we design prioritizes safety with comprehensive monitoring systems and rigorous testing protocols.'
    },
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Our equipment is built to exacting standards using advanced materials and cutting-edge manufacturing processes.'
    },
    {
      icon: Heart,
      title: 'Customer Commitment',
      description: 'We partner with our customers from initial consultation through installation and ongoing support.'
    },
    {
      icon: Thermometer,
      title: 'Technical Excellence',
      description: 'Decades of expertise in cryogenic technology delivering solutions that perform in the most demanding conditions.'
    }
  ];

  const milestones = [
    { year: '1985', title: 'Company Founded', description: 'Started as a small team of cryogenic engineers with a vision to revolutionize industrial cooling systems.' },
    { year: '1992', title: 'ISO Certification', description: 'Achieved ISO 9001 certification for quality management systems, setting new industry standards.' },
    { year: '2001', title: 'Global Expansion', description: 'Opened international offices and began serving customers across North America, Europe, and Asia.' },
    { year: '2010', title: 'Technology Innovation', description: 'Introduced next-generation vacuum insulation technology, improving efficiency by 40%.' },
    { year: '2018', title: 'Sustainability Focus', description: 'Launched green manufacturing initiatives and developed eco-friendly product lines.' },
    { year: '2024', title: 'Digital Transformation', description: 'Launched our modern e-commerce platform and enhanced customer experience.' }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Executive Officer',
      description: 'PhD in Mechanical Engineering with 20+ years in cryogenic systems design.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300'
    },
    {
      name: 'Michael Rodriguez',
      title: 'VP of Engineering',
      description: 'Leading our R&D team in developing next-generation cryogenic technologies.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300'
    },
    {
      name: 'Dr. Emily Watson',
      title: 'Head of Quality Assurance',
      description: 'Ensuring every product meets our rigorous safety and performance standards.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold">
                  Leading the Future of 
                  <span className="block text-primary">Cryogenic Technology</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  For nearly four decades, CryoTech Solutions has been at the forefront of cryogenic innovation, 
                  delivering reliable, safe, and efficient solutions that power critical applications across industries worldwide.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button size="lg">
                    Explore Our Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="lg:justify-self-end">
              <div className="grid grid-cols-2 gap-6 p-8 rounded-2xl border bg-card">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center space-y-3">
                      <Icon className="h-8 w-8 mx-auto text-primary" />
                      <div className="text-3xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What started as a small team of passionate engineers has grown into a global leader in cryogenic technology. 
                Our journey is marked by innovation, dedication, and an unwavering commitment to excellence.
              </p>
            </div>

            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p>
                Founded in 1985 by a team of visionary engineers, CryoTech Solutions began with a simple mission: 
                to make cryogenic technology more accessible, reliable, and safe for industrial applications. 
                Starting in a modest facility with just five employees, we focused on solving the complex challenges 
                that existing solutions couldn't address.
              </p>
              <p>
                Our breakthrough came in the early 1990s with the development of our proprietary vacuum insulation 
                technology, which dramatically improved the efficiency of cryogenic storage systems. This innovation 
                caught the attention of major aerospace and medical companies, launching us into rapid growth.
              </p>
              <p>
                Today, we're proud to serve over 500 customers across 25 countries, from cutting-edge research 
                laboratories to large-scale industrial facilities. Our commitment to quality, safety, and innovation 
                remains as strong as ever, driving us to push the boundaries of what's possible in cryogenic technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do, from product development to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center border-border/50 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Key Milestones</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Decades of innovation and growth, marked by significant achievements and breakthroughs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2 md:transform md:-translate-x-px"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Timeline dot */}
                    <div className="absolute left-8 w-3 h-3 bg-primary rounded-full md:left-1/2 md:transform md:-translate-x-1/2"></div>
                    
                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                    }`}>
                      <Card>
                        <CardContent className="p-6">
                          <div className="space-y-3">
                            <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                            <h3 className="text-lg font-semibold">{milestone.title}</h3>
                            <p className="text-muted-foreground">{milestone.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals leading CryoTech Solutions into the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6 space-y-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-primary font-medium">{member.title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Partner with Industry Leaders?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of companies worldwide who trust CryoTech Solutions for their critical cryogenic applications. 
              Let's discuss how we can solve your unique challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="lg">
                  Browse Our Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}