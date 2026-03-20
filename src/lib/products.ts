export interface ProductSpec {
  readonly name: string;
  readonly value: string;
}

export interface ProductVariant {
  readonly model: string;
  readonly specs: ReadonlyArray<ProductSpec>;
  readonly description?: string;
  readonly color?: string;
}

export interface ProductCategory {
  readonly slug: string;
  readonly name: string;
  readonly shortName: string;
  readonly description: string;
  readonly image: string;
  readonly pdfFile: string;
  readonly variants: ReadonlyArray<ProductVariant>;
  readonly commonSpecs?: ReadonlyArray<ProductSpec>;
  readonly applications?: ReadonlyArray<string>;
  readonly specHeaders?: ReadonlyArray<string>;
}

export const PRODUCT_CATEGORIES: ReadonlyArray<ProductCategory> = [
  {
    slug: 'thermal-grease',
    name: 'Thermal Grease',
    shortName: 'Thermal Grease',
    description: 'High-performance thermal grease for heat transfer between heat-generating components and heat sinks in modern electronics.',
    image: '/images/products/thermal-grease.jpg',
    pdfFile: '/pdfs/Thermal-Grease.pdf',
    applications: ['Computer processors', 'Power semiconductors', 'LED systems', 'Automotive electronics', 'Telecommunications', 'Audio/video devices'],
    specHeaders: ['Property', 'TCG-2000', 'TCG-2000S', 'TCG-3500', 'TCG-5000', 'TCG-6000'],
    variants: [
      {
        model: 'TCG-Grease-2000',
        color: 'Yellow/Grey',
        description: 'Low-power consumer electronics, general CPUs, and basic LED systems',
        specs: [
          { name: 'Thermal Conductivity', value: '2.0 W/m·K' },
          { name: 'Viscosity', value: '90,000 cps' },
          { name: 'Density', value: '3.4 g/cc' },
          { name: 'Operating Temperature', value: '-40°C to 150°C' },
          { name: 'Volume Resistance', value: '10¹³ Ω·cm' },
          { name: 'Breakdown Voltage', value: '>5.0 Kv/mm' },
        ],
      },
      {
        model: 'TCG-Grease-2000S',
        color: 'Grey',
        description: 'Consumer laptops, tablets, and mid-power applications',
        specs: [
          { name: 'Thermal Conductivity', value: '2.0 W/m·K' },
          { name: 'Viscosity', value: '160,000 cps' },
          { name: 'Density', value: '3.0 g/cc' },
          { name: 'Operating Temperature', value: '-40°C to 150°C' },
          { name: 'Volume Resistance', value: '10¹³ Ω·cm' },
          { name: 'Breakdown Voltage', value: '>5.0 Kv/mm' },
        ],
      },
      {
        model: 'TCG-Grease-3500',
        color: 'Grey',
        description: 'Gaming consoles and high-performance systems',
        specs: [
          { name: 'Thermal Conductivity', value: '3.5 W/m·K' },
          { name: 'Viscosity', value: '220,000 cps' },
          { name: 'Density', value: '2.5 g/cc' },
          { name: 'Operating Temperature', value: '-40°C to 150°C' },
          { name: 'Volume Resistance', value: '10⁸ Ω·cm' },
          { name: 'Breakdown Voltage', value: '>3.0 Kv/mm' },
        ],
      },
      {
        model: 'TCG-Grease-5000',
        color: 'Grey',
        description: 'Industrial electronics and automotive/EV battery systems',
        specs: [
          { name: 'Thermal Conductivity', value: '5.0 W/m·K' },
          { name: 'Viscosity', value: '<250,000 cps' },
          { name: 'Density', value: '2.4 g/cc' },
          { name: 'Operating Temperature', value: '-40°C to 150°C' },
          { name: 'Volume Resistance', value: '10⁸ Ω·cm' },
          { name: 'Breakdown Voltage', value: '>3.0 Kv/mm' },
        ],
      },
      {
        model: 'TCG-Grease-6000',
        color: 'Grey',
        description: 'High-power CPUs/GPUs and critical industrial applications',
        specs: [
          { name: 'Thermal Conductivity', value: '6.0 W/m·K' },
          { name: 'Viscosity', value: '<350,000 cps' },
          { name: 'Density', value: '2.7 g/cc' },
          { name: 'Operating Temperature', value: '-40°C to 150°C' },
          { name: 'Volume Resistance', value: '10⁸ Ω·cm' },
          { name: 'Breakdown Voltage', value: '>3.0 Kv/mm' },
        ],
      },
    ],
  },
  {
    slug: 'single-part-liquid-gap-filler',
    name: 'Single Part Liquid Gap Filler',
    shortName: 'Single Part Gap Filler',
    description: 'Thermally conductive gap fillers that bridge air gaps between components, ensuring optimal thermal transfer in compact devices.',
    image: '/images/products/single-part-gel.jpg',
    pdfFile: '/pdfs/Single-Part-Liquid-Gap-Filler.pdf',
    applications: ['Smartphones', 'Tablets', 'Laptops', 'Power supplies', 'Automotive electronics', 'Telecommunications'],
    commonSpecs: [
      { name: 'Operating Temperature', value: '-50°C to 200°C' },
      { name: 'Breakdown Voltage', value: '>8.0 Kv/mm' },
      { name: 'Flammability', value: 'V-0 (UL 94)' },
    ],
    variants: [
      { model: 'TCG-Gel-2000-LP', specs: [{ name: 'Thermal Conductivity', value: '2.0 W/m·K' }] },
      { model: 'TCG-Gel-2000RW', specs: [{ name: 'Thermal Conductivity', value: '2.0 W/m·K' }] },
      { model: 'TCG-Gel-4000', specs: [{ name: 'Thermal Conductivity', value: '4.0 W/m·K' }] },
      { model: 'TCG-Gel-4000-LP', specs: [{ name: 'Thermal Conductivity', value: '4.0 W/m·K' }] },
      { model: 'TCG-Gel-5000-HF', specs: [{ name: 'Thermal Conductivity', value: '5.0 W/m·K' }] },
      { model: 'TCG-Gel-7000', specs: [{ name: 'Thermal Conductivity', value: '7.0 W/m·K' }] },
      { model: 'TCG-Gel-10000', specs: [{ name: 'Thermal Conductivity', value: '10.0 W/m·K' }] },
      { model: 'TCG-Gel-12000', specs: [{ name: 'Thermal Conductivity', value: '12.0 W/m·K' }] },
    ],
  },
  {
    slug: 'two-part-liquid-gap-filler',
    name: 'Two Parts Liquid Gap Filler',
    shortName: 'Two Part Gap Filler',
    description: 'Advanced two-part liquid gap fillers for efficient heat dissipation in a range of electronic applications.',
    image: '/images/products/two-part-gel.jpg',
    pdfFile: '/pdfs/Two-Parts-Liquid-Gap-Filler.pdf',
    applications: ['Power supplies', 'Automotive control units', 'Battery management systems', 'Power modules in EVs', 'Telecommunications', 'Industrial electronics'],
    commonSpecs: [
      { name: 'Mixing Ratio', value: '1:1' },
      { name: 'Operation Time @ 25°C', value: '120 minutes' },
      { name: 'Curing Time @ 25°C', value: '24 hours' },
    ],
    variants: [
      { model: 'TPGF-180-LD', specs: [{ name: 'Thermal Conductivity', value: '1.8 W/m·K' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }] },
      { model: 'TPGF-200', specs: [{ name: 'Thermal Conductivity', value: '2.0 W/m·K' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }] },
      { model: 'TPGF-200LP-RW', description: 'Easy peel without residue (reworkable)', specs: [{ name: 'Thermal Conductivity', value: '2.0 W/m·K' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }] },
      { model: 'TPGF-300-RW', specs: [{ name: 'Thermal Conductivity', value: '3.0 W/m·K' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }] },
      { model: 'TPGF-350', specs: [{ name: 'Thermal Conductivity', value: '3.5 W/m·K' }, { name: 'Operating Temperature', value: '-50°C to 150°C' }] },
      { model: 'TPGF-500', specs: [{ name: 'Thermal Conductivity', value: '5.0 W/m·K' }, { name: 'Operating Temperature', value: '-50°C to 150°C' }] },
    ],
  },
  {
    slug: 'gap-pads',
    name: 'Gap Pads',
    shortName: 'Gap Pads',
    description: 'Soft, conformable thermal pads designed to bridge gaps between electronic components and heat sinks with uniform heat transfer.',
    image: '/images/products/gap-pads.jpg',
    pdfFile: '/pdfs/Gap-Pads.pdf',
    applications: ['Consumer electronics', 'Power systems', 'Telecommunications', 'LED modules', 'Automotive controls', 'Battery management'],
    commonSpecs: [
      { name: 'Operating Temperature', value: '-50°C to 200°C' },
      { name: 'Volume Resistance', value: '10¹³ Ω·cm' },
      { name: 'Breakdown Voltage', value: '>10 KV/mm' },
      { name: 'Flammability', value: 'V-0 (UL 94)' },
    ],
    variants: [
      { model: 'GFTP-200T', color: 'White + Grey', specs: [{ name: 'Thermal Conductivity', value: '2.0 W/m·K' }, { name: 'Density', value: '2.0 g/cc' }, { name: 'Hardness', value: '30 Shore 00' }, { name: 'Thickness', value: '0.5–10.0 mm' }] },
      { model: 'GFTP-200', color: 'Light Grey', specs: [{ name: 'Thermal Conductivity', value: '2.0 W/m·K' }, { name: 'Density', value: '2.8 g/cc' }, { name: 'Hardness', value: '30 Shore 00' }, { name: 'Thickness', value: '0.5–10.0 mm' }] },
      { model: 'GFTP-300', color: 'Light Blue', specs: [{ name: 'Thermal Conductivity', value: '3.0 W/m·K' }, { name: 'Density', value: '2.9 g/cc' }, { name: 'Hardness', value: '45 Shore 00' }, { name: 'Thickness', value: '0.5–10.0 mm' }] },
      { model: 'GFTP-500', color: 'Green', specs: [{ name: 'Thermal Conductivity', value: '5.0 W/m·K' }, { name: 'Density', value: '3.1 g/cc' }, { name: 'Hardness', value: '50 Shore 00' }, { name: 'Thickness', value: '0.5–10.0 mm' }] },
      { model: 'GFTP-600', color: 'Grey', specs: [{ name: 'Thermal Conductivity', value: '6.0 W/m·K' }, { name: 'Density', value: '3.2 g/cc' }, { name: 'Hardness', value: '55 Shore 00' }, { name: 'Thickness', value: '0.5–10.0 mm' }] },
      { model: 'GFTP-800', color: 'Dark Grey', specs: [{ name: 'Thermal Conductivity', value: '8.0 W/m·K' }, { name: 'Density', value: '3.3 g/cc' }, { name: 'Hardness', value: '55 Shore 00' }, { name: 'Thickness', value: '0.5–10.0 mm' }] },
      { model: 'GFTP-1000', color: 'Grey', specs: [{ name: 'Thermal Conductivity', value: '10.0 W/m·K' }, { name: 'Density', value: '3.6 g/cc' }, { name: 'Hardness', value: '55 Shore 00' }, { name: 'Thickness', value: '0.5–4.0 mm' }] },
      { model: 'GFTP-1200', color: 'Grey', specs: [{ name: 'Thermal Conductivity', value: '12.0 W/m·K' }, { name: 'Density', value: '3.6 g/cc' }, { name: 'Hardness', value: '55 Shore 00' }, { name: 'Thickness', value: '0.5–4.0 mm' }] },
      { model: 'GFTP-1500', color: 'Grey', specs: [{ name: 'Thermal Conductivity', value: '15.0 W/m·K' }, { name: 'Density', value: '3.6 g/cc' }, { name: 'Hardness', value: '65 Shore 00' }, { name: 'Thickness', value: '0.5–4.0 mm' }] },
    ],
  },
  {
    slug: 'ec-products-replace-fof',
    name: 'EC Products (Replace FoF)',
    shortName: 'EC Products',
    description: 'Eco-friendly alternatives to traditional Foam on Fabric materials, providing superior thermal performance for electronics and automotive.',
    image: '/images/products/ec-products.jpg',
    pdfFile: '/pdfs/EC-Products-Replace-FoF.pdf',
    applications: ['Handsets', 'Tablets', 'Laptops', 'Servers', 'Printers', 'Networking', 'Automotive electronics'],
    variants: [
      {
        model: 'TPGF-180 EC (Two-Part Gel)',
        color: 'Black',
        specs: [
          { name: 'Thermal Conductivity', value: '1.5 W/m·K' },
          { name: 'Mixing Ratio', value: '1:1' },
          { name: 'Viscosity', value: '200,000 cps' },
          { name: 'Density', value: '2.0 g/cc' },
          { name: 'Hardness', value: '60 Shore 00 (cured)' },
          { name: 'Operating Temperature', value: '-60°C to 180°C' },
          { name: 'Electrical Resistivity', value: '1 Ω·cm' },
          { name: 'Flammability', value: 'V-0 (UL 94)' },
          { name: 'Curing Time', value: '4h @ 25°C / 10min @ 100°C' },
        ],
      },
      {
        model: 'GFTP-180 EC (Thermal Pad)',
        color: 'Black',
        specs: [
          { name: 'Thermal Conductivity', value: '1.5 W/m·K' },
          { name: 'Density', value: '2.0 g/cc' },
          { name: 'Hardness', value: '65 Shore 00' },
          { name: 'Operating Temperature', value: '-60°C to 180°C' },
          { name: 'Electrical Resistivity', value: '1 Ω·cm' },
          { name: 'Flammability', value: 'V-0 (UL 94)' },
        ],
      },
    ],
  },
  {
    slug: 'potting-materials',
    name: 'Potting Materials',
    shortName: 'Potting Materials',
    description: 'Encapsulation materials with thermal conductivity and mechanical protection for automotive, industrial, and networking applications.',
    image: '/images/products/potting.jpg',
    pdfFile: '/pdfs/Potting-Materials.pdf',
    applications: ['Automotive', 'Industrial', 'Networking', 'Power electronics'],
    commonSpecs: [
      { name: 'Mixing Ratio', value: '1:1' },
      { name: 'Operating Temperature', value: '-50°C to 200°C' },
      { name: 'Hardness', value: '65 Shore C' },
      { name: 'Breakdown Voltage', value: '>8.0 kV/mm' },
      { name: 'Flammability', value: 'V-0 (UL 94)' },
      { name: 'Curing Time @ 25°C', value: '4 hours' },
    ],
    variants: [
      { model: 'TPGF-BD-100', description: 'High bonding capability', specs: [{ name: 'Thermal Conductivity', value: '1.0 W/m·K' }, { name: 'Viscosity', value: '100,000 cps' }, { name: 'Tensile Strength', value: '3 MPa' }] },
      { model: 'PT-150', description: 'High-flow formulation', specs: [{ name: 'Thermal Conductivity', value: '1.5 W/m·K' }, { name: 'Viscosity', value: '5,000 cps' }, { name: 'Tensile Strength', value: '1.3 MPa' }] },
      { model: 'PT-200', description: 'Balanced thermal/flowability', specs: [{ name: 'Thermal Conductivity', value: '2.0 W/m·K' }, { name: 'Viscosity', value: '8,000 cps' }, { name: 'Tensile Strength', value: '0.9 MPa' }] },
      { model: 'PT-300', description: 'Maximum heat dissipation', specs: [{ name: 'Thermal Conductivity', value: '3.0 W/m·K' }, { name: 'Viscosity', value: '15,000 cps' }, { name: 'Tensile Strength', value: '0.6 MPa' }] },
    ],
  },
  {
    slug: 'insulating-pads',
    name: 'Insulating Pads',
    shortName: 'Insulating Pads',
    description: 'Thermal and electrical insulation pads with low thermal resistance for critical electronic applications.',
    image: '/images/products/insulating-pads.jpg',
    pdfFile: '/pdfs/Insulating-Pads.pdf',
    applications: ['Power modules', 'IGBT', 'MOSFETs', 'Transformers', 'Industrial electronics'],
    variants: [
      { model: 'TIP-1000', color: 'Gray', specs: [{ name: 'Thermal Conductivity', value: '1.0 W/m·K' }, { name: 'Thickness', value: '0.229 mm' }, { name: 'Hardness', value: '80 Shore A' }, { name: 'Tensile Strength', value: '1300 psi / 9 MPa' }, { name: 'Operating Temperature', value: '-60°C to 180°C' }, { name: 'Dielectric Breakdown', value: '5000 Vac' }] },
      { model: 'TIP-1600', color: 'Pink/Gray', specs: [{ name: 'Thermal Conductivity', value: '1.6 W/m·K' }, { name: 'Thickness', value: '0.203 mm' }, { name: 'Hardness', value: '80 Shore A' }, { name: 'Tensile Strength', value: '2880 psi / 20 MPa' }, { name: 'Operating Temperature', value: '-60°C to 180°C' }, { name: 'Dielectric Breakdown', value: '5000 Vac' }] },
      { model: 'TIP-3500', color: 'White', specs: [{ name: 'Thermal Conductivity', value: '3.5 W/m·K' }, { name: 'Thickness', value: '0.25 mm' }, { name: 'Hardness', value: '80 Shore A' }, { name: 'Tensile Strength', value: '2880 psi / 20 MPa' }, { name: 'Operating Temperature', value: '-60°C to 200°C' }, { name: 'Dielectric Breakdown', value: '5000 Vac' }] },
      { model: 'PCM 2500-PI', color: 'Gray', specs: [{ name: 'Thermal Conductivity', value: '2.5 W/m·K' }, { name: 'Thickness', value: '0.127–0.254 mm' }, { name: 'Tensile Strength', value: '7000 psi / 50 MPa' }, { name: 'Operating Temperature', value: '-40°C to 130°C' }, { name: 'Dielectric Breakdown', value: '5000 Vac' }] },
    ],
  },
  {
    slug: 'gftp-lo-series',
    name: 'GFTP-LO Series (Low Oil Bleeding Pad)',
    shortName: 'GFTP-LO Series',
    description: 'Low oil bleeding thermal interface pads designed for high-performance electronics with minimal oil migration.',
    image: '/images/products/gftp-lo.jpg',
    pdfFile: '/pdfs/GFTP-LO-Series-Low-Oil-Bleeding-Pad.pdf',
    applications: ['Telecommunications', 'Automotive control systems', 'Power modules', 'Computing', 'Networking'],
    commonSpecs: [
      { name: 'Operating Temperature', value: '-50°C to 200°C' },
      { name: 'Breakdown Voltage', value: '>10 KV/mm' },
      { name: 'Flammability', value: 'V-0 (UL 94)' },
      { name: 'Thickness', value: '0.5–10.0 mm' },
    ],
    variants: [
      { model: 'GFTP-300 LO', color: 'Blue', description: 'Entry-level, ideal for telecom and automotive control', specs: [{ name: 'Thermal Conductivity', value: '3.0 W/m·K' }, { name: 'Density', value: '3.0 g/cc' }, { name: 'Hardness', value: '30–70 Shore 00' }, { name: 'Volume Resistance', value: '10¹⁴ Ω·cm' }] },
      { model: 'GFTP-400 LO', color: 'Green', description: 'Mid-tier for automotive and telecom', specs: [{ name: 'Thermal Conductivity', value: '4.0 W/m·K' }, { name: 'Density', value: '3.1 g/cc' }, { name: 'Hardness', value: '40–70 Shore 00' }, { name: 'Volume Resistance', value: '10¹³ Ω·cm' }] },
      { model: 'GFTP-500 LO', color: 'Grey', description: 'High-performance computing and advanced automotive', specs: [{ name: 'Thermal Conductivity', value: '5.0 W/m·K' }, { name: 'Density', value: '3.2 g/cc' }, { name: 'Hardness', value: '40–70 Shore 00' }, { name: 'Volume Resistance', value: '10¹³ Ω·cm' }] },
      { model: 'GFTP-600 LO', color: 'Grey', description: 'Premium tier for most demanding applications', specs: [{ name: 'Thermal Conductivity', value: '6.0 W/m·K' }, { name: 'Density', value: '3.3 g/cc' }, { name: 'Hardness', value: '40–70 Shore 00' }, { name: 'Volume Resistance', value: '10¹³ Ω·cm' }] },
    ],
  },
  {
    slug: 'tcg-lo-series',
    name: 'TCG-LO Series (Low Oil Bleeding Gel)',
    shortName: 'TCG-LO Series',
    description: 'Specially designed thermal interface gels with excellent thermal conductivity and minimal oil migration for consumer, automotive, and computing.',
    image: '/images/products/tcg-lo.jpg',
    pdfFile: '/pdfs/TCG-LO-Series-Low-Oil-Bleeding-Gels.pdf',
    applications: ['Smartphones', 'Tablets', 'Laptops', 'Wearables', 'Automotive electronics', 'Data centers'],
    commonSpecs: [
      { name: 'Operating Temperature', value: '-50°C to 200°C' },
      { name: 'Volume Resistance', value: '10¹³ Ω·cm' },
      { name: 'Breakdown Voltage', value: '>8 KV/mm' },
      { name: 'Flammability', value: 'V-0 (UL 94)' },
      { name: 'Oil Bleeding', value: '<1–2 mm (100°C, 24h)' },
      { name: 'Volatility', value: '<0.08%' },
    ],
    variants: [
      { model: 'TCG-Gel-4000LO', color: 'Green', description: 'Compact electronics — smartphones, tablets, laptops', specs: [{ name: 'Thermal Conductivity', value: '4.0 W/m·K' }, { name: 'Min BLT', value: '0.06 mm' }, { name: 'Density', value: '~3.25 g/cc' }, { name: 'Dielectric Constant @1GHz', value: '7.5' }] },
      { model: 'TCG-Gel-4000LOVE', color: 'Red', description: 'Color-coded for wearables, automotive, networking', specs: [{ name: 'Thermal Conductivity', value: '4.0 W/m·K' }, { name: 'Min BLT', value: '0.06 mm' }, { name: 'Density', value: '~3.25 g/cc' }, { name: 'Dielectric Constant @1GHz', value: '8.0' }] },
      { model: 'TCG-Gel-6000LO', color: 'Blue', description: 'High-demand — data centers, automotive heat management', specs: [{ name: 'Thermal Conductivity', value: '6.0 W/m·K' }, { name: 'Min BLT', value: '0.15 mm' }, { name: 'Density', value: '~3.3 g/cc' }, { name: 'Dielectric Constant @1GHz', value: '8.0' }] },
    ],
  },
  {
    slug: 'special-gap-pad',
    name: 'Special Gap Pad (Low Density & Low Dielectric)',
    shortName: 'Special Gap Pad',
    description: 'Low density and low dielectric thermal pads ideal for weight-sensitive and signal-sensitive applications.',
    image: '/images/products/special-gap-pad.jpg',
    pdfFile: '/pdfs/Special-Gap-Pad-Low-density-and-Low-dielectric.pdf',
    applications: ['Consumer electronics', 'Automotive', 'SSDs', 'Memory modules', 'Computing'],
    commonSpecs: [
      { name: 'Thickness', value: '0.5–5.0 mm' },
      { name: 'Operating Temperature', value: '-50°C to 150°C' },
      { name: 'Volume Resistance', value: '10¹⁴ Ω·cm' },
      { name: 'Breakdown Voltage', value: '>10 KV/mm' },
      { name: 'Flammability', value: 'V-0 (UL 94)' },
    ],
    variants: [
      { model: 'GFTP-200 LD', color: 'Grey', description: 'Consumer electronics and lightweight devices', specs: [{ name: 'Thermal Conductivity', value: '2.0 W/m·K' }, { name: 'Density', value: '2.0 g/cc' }, { name: 'Hardness', value: '30–50 Shore 00' }, { name: 'Dielectric Constant @1GHz', value: '5.5' }] },
      { model: 'GFTP-300 LD', color: 'Yellow', description: 'Automotive and computing applications', specs: [{ name: 'Thermal Conductivity', value: '3.0 W/m·K' }, { name: 'Density', value: '2.3 g/cc' }, { name: 'Hardness', value: '40–70 Shore 00' }, { name: 'Dielectric Constant @1GHz', value: '7.3' }] },
      { model: 'GFTP-300LP', color: 'Yellow', description: 'SSDs, memory modules, space-constrained devices', specs: [{ name: 'Thermal Conductivity', value: '3.0 W/m·K' }, { name: 'Density', value: '1.6 g/cc' }, { name: 'Hardness', value: '20–70 Shore 00' }, { name: 'Dielectric Constant @1GHz', value: '3.8' }] },
    ],
  },
  {
    slug: 'fleximetal-and-elm',
    name: 'FlexiMetal & ELM',
    shortName: 'FlexiMetal & ELM',
    description: 'High thermal conductivity materials with minimal bond line thickness for the most demanding thermal interface applications.',
    image: '/images/products/fleximetal.jpg',
    pdfFile: '/pdfs/FlexiMetal-and-ELM-Products.pdf',
    applications: ['Consumer electronics', 'Automotive', 'SSDs', 'Networking', 'Data centers', 'Computing'],
    variants: [
      {
        model: 'TCG-ELM-8000',
        color: 'Grey',
        description: 'Thermal grease with ultra-low BLT',
        specs: [
          { name: 'Thermal Conductivity', value: '8.0 W/m·K' },
          { name: 'BLT', value: '0.025 mm' },
          { name: 'Density', value: '5.1 g/cc' },
          { name: 'Viscosity', value: '200,000 cps' },
          { name: 'Operating Temperature', value: '-40°C to 150°C' },
          { name: 'Thermal Resistance @40psi', value: '0.02 °C·cm²/W' },
          { name: 'Volume Resistance', value: '10² Ω·cm' },
        ],
      },
      {
        model: 'TCG-ELM-10000',
        color: 'Grey',
        description: 'Premium thermal grease for maximum heat transfer',
        specs: [
          { name: 'Thermal Conductivity', value: '10.0 W/m·K' },
          { name: 'BLT', value: '0.025 mm' },
          { name: 'Density', value: '5.4 g/cc' },
          { name: 'Viscosity', value: '260,000 cps' },
          { name: 'Operating Temperature', value: '-40°C to 150°C' },
          { name: 'Thermal Resistance @40psi', value: '0.018 °C·cm²/W' },
          { name: 'Volume Resistance', value: '10² Ω·cm' },
        ],
      },
      {
        model: 'FlexiMetal\u2122',
        color: 'Silvery',
        description: 'Soft metal TIM for ultimate thermal performance',
        specs: [
          { name: 'Thermal Conductivity', value: '35 W/m·K' },
          { name: 'Density', value: '7.0 g/cc' },
          { name: 'Viscosity', value: '100,000 cps' },
          { name: 'Operating Temperature', value: '-40°C to 225°C' },
          { name: 'Thermal Resistance @40psi', value: '0.01 °C·cm²/W' },
          { name: 'Solidus Point', value: '~30°C' },
          { name: 'Liquidus Point', value: '~300°C' },
        ],
      },
    ],
  },
];

export function getProductBySlug(slug: string): ProductCategory | undefined {
  return PRODUCT_CATEGORIES.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): ReadonlyArray<string> {
  return PRODUCT_CATEGORIES.map((p) => p.slug);
}
