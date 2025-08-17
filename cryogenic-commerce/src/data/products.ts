import { Product, ProductCategory } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Cryogenic Storage Dewar - 50L',
    description: 'High-performance 50-liter cryogenic storage dewar designed for liquid nitrogen, oxygen, and argon storage. Features superior vacuum insulation and durable stainless steel construction.',
    category: 'dewars' as ProductCategory,
    price: 2899.99,
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
    ],
    specifications: [
      { label: 'Capacity', value: '50', unit: 'L' },
      { label: 'Working Pressure', value: '22', unit: 'PSIG' },
      { label: 'Operating Temperature', value: '-196 to 50', unit: '°C' },
      { label: 'Material', value: 'Stainless Steel 304' },
      { label: 'Vacuum Level', value: '< 5 × 10⁻⁶', unit: 'Torr' },
      { label: 'Static Evaporation Rate', value: '0.4', unit: 'L/day' },
      { label: 'Height', value: '665', unit: 'mm' },
      { label: 'Diameter', value: '356', unit: 'mm' },
      { label: 'Weight Empty', value: '14', unit: 'kg' }
    ],
    inStock: true,
    stockQuantity: 12,
    featured: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'Industrial LNG Storage Tank - 10,000L',
    description: 'Large-capacity liquefied natural gas storage tank with advanced insulation system. Ideal for industrial applications requiring bulk cryogenic fuel storage.',
    category: 'storage-tanks' as ProductCategory,
    price: 125999.99,
    images: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800',
      'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800'
    ],
    specifications: [
      { label: 'Capacity', value: '10,000', unit: 'L' },
      { label: 'Design Pressure', value: '2.5', unit: 'MPa' },
      { label: 'Operating Temperature', value: '-162', unit: '°C' },
      { label: 'Insulation', value: 'Perlite Vacuum' },
      { label: 'Material', value: 'Stainless Steel 316L' },
      { label: 'Boil-off Rate', value: '0.1', unit: '%/day' },
      { label: 'Height', value: '4,200', unit: 'mm' },
      { label: 'Diameter', value: '2,400', unit: 'mm' },
      { label: 'Weight Empty', value: '3,500', unit: 'kg' }
    ],
    inStock: true,
    stockQuantity: 2,
    featured: true,
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-16T14:22:00Z'
  },
  {
    id: '3',
    name: 'Cryogenic Transfer Pump System',
    description: 'High-efficiency centrifugal pump system designed for transferring cryogenic fluids. Features variable speed control and explosion-proof motor.',
    category: 'transfer-systems' as ProductCategory,
    price: 18499.99,
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
      'https://images.unsplash.com/photo-1562408590-e32931084e23?w=800'
    ],
    specifications: [
      { label: 'Flow Rate', value: '100', unit: 'm³/h' },
      { label: 'Head', value: '150', unit: 'm' },
      { label: 'Suction Pressure', value: '0.1 to 1.6', unit: 'MPa' },
      { label: 'Temperature Range', value: '-196 to -150', unit: '°C' },
      { label: 'Motor Power', value: '45', unit: 'kW' },
      { label: 'Motor Type', value: 'Explosion-proof' },
      { label: 'Material', value: 'Stainless Steel 316' },
      { label: 'Connection', value: 'DN100 Flanged' },
      { label: 'Weight', value: '450', unit: 'kg' }
    ],
    inStock: true,
    stockQuantity: 5,
    featured: false,
    createdAt: '2024-01-03T00:00:00Z',
    updatedAt: '2024-01-17T09:15:00Z'
  },
  {
    id: '4',
    name: 'Cryogenic Ball Valve DN50',
    description: 'Extended stem ball valve designed for cryogenic applications. Features PTFE seats and graphite packing for reliable sealing at extreme temperatures.',
    category: 'valves-fittings' as ProductCategory,
    price: 899.99,
    images: [
      'https://images.unsplash.com/photo-1609205807107-171d22478be3?w=800'
    ],
    specifications: [
      { label: 'Nominal Diameter', value: '50', unit: 'mm' },
      { label: 'Pressure Rating', value: 'PN40' },
      { label: 'Temperature Range', value: '-196 to 200', unit: '°C' },
      { label: 'Body Material', value: 'Stainless Steel 316' },
      { label: 'Ball Material', value: 'Stainless Steel 316' },
      { label: 'Seat Material', value: 'PTFE' },
      { label: 'Stem Extension', value: '300', unit: 'mm' },
      { label: 'End Connection', value: 'Flanged RF' },
      { label: 'Weight', value: '8.5', unit: 'kg' }
    ],
    inStock: true,
    stockQuantity: 25,
    featured: false,
    createdAt: '2024-01-04T00:00:00Z',
    updatedAt: '2024-01-18T16:45:00Z'
  },
  {
    id: '5',
    name: 'Oxygen Deficiency Monitor',
    description: 'Advanced oxygen monitoring system with audible and visual alarms. Essential safety equipment for cryogenic facilities handling liquid nitrogen or other inert gases.',
    category: 'safety-equipment' as ProductCategory,
    price: 1299.99,
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800'
    ],
    specifications: [
      { label: 'Oxygen Range', value: '0-25', unit: '%' },
      { label: 'Accuracy', value: '±0.1', unit: '%' },
      { label: 'Response Time', value: '< 15', unit: 'seconds' },
      { label: 'Sensor Type', value: 'Electrochemical' },
      { label: 'Display', value: 'LCD with Backlight' },
      { label: 'Alarms', value: 'Audio/Visual/Relay' },
      { label: 'Operating Temperature', value: '-10 to 50', unit: '°C' },
      { label: 'Power Supply', value: '24VDC' },
      { label: 'IP Rating', value: 'IP65' }
    ],
    inStock: true,
    stockQuantity: 15,
    featured: false,
    createdAt: '2024-01-05T00:00:00Z',
    updatedAt: '2024-01-19T11:20:00Z'
  },
  {
    id: '6',
    name: 'Digital Pressure Transmitter - Cryogenic',
    description: 'High-precision digital pressure transmitter designed for cryogenic applications. Features temperature compensation and HART communication protocol.',
    category: 'instrumentation' as ProductCategory,
    price: 2199.99,
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800'
    ],
    specifications: [
      { label: 'Pressure Range', value: '0-4', unit: 'MPa' },
      { label: 'Accuracy', value: '±0.075', unit: '%' },
      { label: 'Operating Temperature', value: '-196 to 85', unit: '°C' },
      { label: 'Output Signal', value: '4-20 mA HART' },
      { label: 'Process Connection', value: '1/2" NPT' },
      { label: 'Wetted Materials', value: 'SS316L' },
      { label: 'Display', value: 'LCD Digital' },
      { label: 'Power Supply', value: '10-45 VDC' },
      { label: 'Protection', value: 'IP67' }
    ],
    inStock: true,
    stockQuantity: 8,
    featured: false,
    createdAt: '2024-01-06T00:00:00Z',
    updatedAt: '2024-01-20T13:30:00Z'
  },
  {
    id: '7',
    name: 'Cryogenic Transfer Hose - 25ft',
    description: 'Flexible transfer hose with vacuum insulation for efficient cryogenic fluid transfer. Features quick-disconnect fittings and excellent thermal performance.',
    category: 'accessories' as ProductCategory,
    price: 1899.99,
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800'
    ],
    specifications: [
      { label: 'Length', value: '25', unit: 'ft' },
      { label: 'Inner Diameter', value: '1', unit: 'inch' },
      { label: 'Working Pressure', value: '350', unit: 'PSIG' },
      { label: 'Temperature Range', value: '-196 to 65', unit: '°C' },
      { label: 'Inner Tube', value: 'Stainless Steel 304' },
      { label: 'Insulation', value: 'Multi-layer Vacuum' },
      { label: 'Fittings', value: 'Quick Disconnect' },
      { label: 'Bend Radius', value: '12', unit: 'inches' },
      { label: 'Weight', value: '18', unit: 'lbs' }
    ],
    inStock: true,
    stockQuantity: 10,
    featured: false,
    createdAt: '2024-01-07T00:00:00Z',
    updatedAt: '2024-01-21T08:45:00Z'
  },
  {
    id: '8',
    name: 'Laboratory Cryogenic Dewar - 5L',
    description: 'Compact 5-liter cryogenic dewar perfect for laboratory applications. Features easy-pour spout and excellent thermal performance for small-scale storage.',
    category: 'dewars' as ProductCategory,
    price: 799.99,
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800'
    ],
    specifications: [
      { label: 'Capacity', value: '5', unit: 'L' },
      { label: 'Static Evaporation Rate', value: '0.15', unit: 'L/day' },
      { label: 'Working Pressure', value: 'Atmospheric' },
      { label: 'Material', value: 'Stainless Steel 304' },
      { label: 'Height', value: '420', unit: 'mm' },
      { label: 'Diameter', value: '230', unit: 'mm' },
      { label: 'Weight Empty', value: '3.2', unit: 'kg' },
      { label: 'Neck Opening', value: '50', unit: 'mm' },
      { label: 'Pour Spout', value: 'Included' }
    ],
    inStock: true,
    stockQuantity: 20,
    featured: true,
    createdAt: '2024-01-08T00:00:00Z',
    updatedAt: '2024-01-22T15:10:00Z'
  }
];

export const categories: Array<{label: string, value: ProductCategory, count: number}> = [
  { label: 'Storage Tanks', value: 'storage-tanks', count: mockProducts.filter(p => p.category === 'storage-tanks').length },
  { label: 'Dewars', value: 'dewars', count: mockProducts.filter(p => p.category === 'dewars').length },
  { label: 'Transfer Systems', value: 'transfer-systems', count: mockProducts.filter(p => p.category === 'transfer-systems').length },
  { label: 'Valves & Fittings', value: 'valves-fittings', count: mockProducts.filter(p => p.category === 'valves-fittings').length },
  { label: 'Safety Equipment', value: 'safety-equipment', count: mockProducts.filter(p => p.category === 'safety-equipment').length },
  { label: 'Instrumentation', value: 'instrumentation', count: mockProducts.filter(p => p.category === 'instrumentation').length },
  { label: 'Accessories', value: 'accessories', count: mockProducts.filter(p => p.category === 'accessories').length },
];