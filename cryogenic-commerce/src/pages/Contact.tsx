import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  Globe,
  Headphones,
  FileText
} from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  category: z.string().min(1, 'Please select a category'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      category: '',
    },
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Contact form submitted:', data);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
      description: 'Mon-Fri 8AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@cryotech.com', 'sales@cryotech.com'],
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Industrial Drive', 'Houston, TX 77001'],
      description: 'Headquarters & Manufacturing'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM'],
      description: 'Central Standard Time'
    }
  ];

  const departments = [
    {
      icon: Globe,
      title: 'Sales & Quotes',
      email: 'sales@cryotech.com',
      phone: '+1 (555) 123-4567',
      description: 'Product information, pricing, and custom solutions'
    },
    {
      icon: Headphones,
      title: 'Technical Support',
      email: 'support@cryotech.com',
      phone: '+1 (555) 123-4568',
      description: 'Installation, maintenance, and troubleshooting'
    },
    {
      icon: FileText,
      title: 'Documentation',
      email: 'docs@cryotech.com',
      phone: '+1 (555) 123-4569',
      description: 'Manuals, certifications, and technical specifications'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Message Sent Successfully!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for contacting CryoTech Solutions. Our team will review your inquiry and 
                respond within 24 hours during business days.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/'}>
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about our cryogenic solutions? Need a custom quote? 
              Our expert team is here to help you find the perfect equipment for your application.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company (Optional)</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input type="tel" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Subject and Category */}
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Inquiry Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="general">General Information</SelectItem>
                              <SelectItem value="quote">Request Quote</SelectItem>
                              <SelectItem value="technical">Technical Support</SelectItem>
                              <SelectItem value="warranty">Warranty Claim</SelectItem>
                              <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              rows={6}
                              placeholder="Please provide details about your inquiry, including specific requirements, quantities, or technical specifications..."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        'Sending Message...'
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium mb-1">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <div key={idx} className="text-sm text-foreground">
                            {info.icon === Phone ? (
                              <a href={`tel:${detail}`} className="hover:text-primary transition-colors">
                                {detail}
                              </a>
                            ) : info.icon === Mail ? (
                              <a href={`mailto:${detail}`} className="hover:text-primary transition-colors">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </div>
                        ))}
                        <div className="text-xs text-muted-foreground mt-1">
                          {info.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Department Contacts */}
            <Card>
              <CardHeader>
                <CardTitle>Direct Contacts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {departments.map((dept, index) => {
                  const Icon = dept.icon;
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-primary" />
                        <h3 className="font-medium">{dept.title}</h3>
                      </div>
                      <div className="text-sm space-y-1 ml-6">
                        <div>
                          <a href={`mailto:${dept.email}`} className="text-primary hover:underline">
                            {dept.email}
                          </a>
                        </div>
                        <div>
                          <a href={`tel:${dept.phone}`} className="text-primary hover:underline">
                            {dept.phone}
                          </a>
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {dept.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Response Time Notice */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-primary mb-1">Response Time</h3>
                    <p className="text-sm text-muted-foreground">
                      We typically respond to all inquiries within 24 hours during business days. 
                      For urgent technical support, please call our direct support line.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Visit Our Facility</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Map placeholder */}
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p className="text-lg font-medium">Interactive Map</p>
                    <p className="text-sm">123 Industrial Drive, Houston, TX 77001</p>
                  </div>
                </div>

                {/* Location Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">CryoTech Solutions Headquarters</h3>
                    <p className="text-muted-foreground">
                      Our state-of-the-art facility houses our manufacturing operations, quality assurance laboratories, 
                      and customer service center. Visits are welcome by appointment.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-sm text-muted-foreground">
                        123 Industrial Drive<br />
                        Houston, TX 77001<br />
                        United States
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium">Facility Hours</h4>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday: 8:00 AM - 6:00 PM CST<br />
                        Saturday: By appointment only<br />
                        Sunday: Closed
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium">Parking</h4>
                      <p className="text-sm text-muted-foreground">
                        Free visitor parking available in front of the building
                      </p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Schedule a Facility Tour
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}