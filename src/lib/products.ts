export interface ProductSpec {
  readonly name: string;
  readonly value: string;
}

export interface ProductVariant {
  readonly model: string;
  readonly specs: ReadonlyArray<ProductSpec>;
  readonly description?: string;
  readonly color?: string;
  readonly pdfFile?: string;
}

export interface ProductCategory {
  readonly slug: string;
  readonly name: string;
  readonly shortName: string;
  readonly description: string;
  readonly image: string;
  readonly video?: string;
  readonly pdfFile: string;
  readonly variants: ReadonlyArray<ProductVariant>;
  readonly commonSpecs?: ReadonlyArray<ProductSpec>;
  readonly applications?: ReadonlyArray<string>;
  readonly specHeaders?: ReadonlyArray<string>;
  readonly hidden?: boolean;
}

export const PRODUCT_CATEGORIES: ReadonlyArray<ProductCategory> = [
  {
    slug: 'thermal-grease',
    name: 'Thermal Grease',
    shortName: 'Thermal Grease',
    description: 'High-performance thermal grease for heat transfer between heat-generating components and heat sinks in modern electronics.',
    image: '/images/products/thermal-grease.jpg',
    pdfFile: '/pdfs/TCG-Grease-6000.pdf',
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
    slug: 'pcm',
    name: 'PCM',
    shortName: 'PCM',
    description: 'PCM is up to 9.6 W/m·K phase change material supplied solid for simplified handling and assembly, which transitions near 50°C to improve surface wetting, reduce thermal impedance, and limit pump-out/migration for long-term reliability.',
    image: '/images/products/pcm-9600.png',
    pdfFile: '/pdfs/PCM-9600.pdf',
    applications: [
      'Microprocessors and chipsets',
      'Power semiconductors and voltage regulators',
      'Graphics processors and high-performance computing devices',
      'Telecommunications and networking equipment',
      'Automotive electronics and battery systems',
      'LED lighting modules',
      'Avionics and satellites',
    ],
    commonSpecs: [
      { name: 'Storage', value: '8°C to 40°C in a dry environment (RH <70%)' },
      { name: 'Shelf Life', value: '12 months' },
      { name: 'Burn-In', value: 'Operate above 70°C for at least 1 hour after assembly' },
      { name: 'Form', value: 'Sheet' },
    ],
    variants: [
      {
        model: 'PCM9600',
        color: 'Gray',
        description: 'Phase change material with 9.6 W/mK thermal conductivity',
        specs: [
          { name: 'Thermal Conductivity', value: '9.6 W/m·K' },
          { name: 'Thickness @ 50 psi', value: '0.02 mm' },
          { name: 'Thermal Impedance', value: '0.035 °C-in²/W' },
          { name: 'Density', value: '2.8 g/cc' },
          { name: 'Continuous Use Temperature', value: '-40°C to 125°C' },
          { name: 'Phase Changing Temperature', value: '50°C' },
          { name: 'Volume Resistance', value: '10¹⁴ Ω·cm' },
        ],
      },
      {
        model: 'PCM8500',
        color: 'Gray',
        description: 'Phase change material with 8.5 W/mK thermal conductivity',
        specs: [
          { name: 'Thermal Conductivity', value: '8.5 W/m·K' },
          { name: 'Thickness @ 50 psi', value: '0.02 mm' },
          { name: 'Thermal Impedance', value: '0.04 °C-in²/W' },
          { name: 'Density', value: '2.5 g/cc' },
          { name: 'Continuous Use Temperature', value: '-40°C to 125°C' },
          { name: 'Phase Changing Temperature', value: '50°C' },
          { name: 'Volume Resistance', value: '10⁸ Ω·cm' },
        ],
      },
      {
        model: 'PCM5000',
        color: 'Gray',
        description: 'Phase change material with 5.0 W/mK thermal conductivity',
        specs: [
          { name: 'Thermal Conductivity', value: '5.0 W/m·K' },
          { name: 'Thickness @ 50 psi', value: '0.02 mm' },
          { name: 'Thermal Impedance', value: '0.05 °C-in²/W' },
          { name: 'Density', value: '2.3 g/cc' },
          { name: 'Continuous Use Temperature', value: '-40°C to 125°C' },
          { name: 'Phase Changing Temperature', value: '50°C' },
          { name: 'Volume Resistance', value: '10⁸ Ω·cm' },
        ],
      },
      {
        model: 'PCM3500',
        color: 'Gray',
        description: 'Phase change material with 3.5 W/mK thermal conductivity',
        specs: [
          { name: 'Thermal Conductivity', value: '3.5 W/m·K' },
          { name: 'Thickness @ 50 psi', value: '0.02 mm' },
          { name: 'Thermal Impedance', value: '0.05 °C-in²/W' },
          { name: 'Density', value: '2.3 g/cc' },
          { name: 'Continuous Use Temperature', value: '-40°C to 125°C' },
          { name: 'Phase Changing Temperature', value: '50°C' },
          { name: 'Volume Resistance', value: '10⁸ Ω·cm' },
        ],
      },
    ],
  },
  {
    slug: 'single-part-liquid-gap-filler',
    name: 'Single Part Liquid Gap Filler',
    shortName: 'Single Part Gap Filler',
    description: 'Thermally conductive gap fillers for reliable heat transfer in compact devices.\nAvailable in low-oil-bleed, low-outgassing, high-flow, low-permittivity, and EMI-absorbing variants.\nCompatible with automated dispensing systems.',
    image: '/images/products/single-part-gel.jpg',
    pdfFile: '/pdfs/TCG-Gel-15000.pdf',
    applications: ['Smartphones', 'Tablets', 'Laptops', 'Power supplies', 'Automotive electronics', 'Telecommunications'],
    commonSpecs: [
      { name: 'Operating Temperature', value: '-50°C to 200°C' },
      { name: 'Breakdown Voltage', value: '>8.0 Kv/mm' },
      { name: 'Flammability', value: 'V-0 (UL 94)' },
    ],
    variants: [
      { model: 'TCG-Gel-140AB', color: 'Black', description: 'EMI absorbent thermal gel for RF and high-frequency electronics', specs: [{ name: 'Thermal Conductivity', value: '1.4 W/m·K' }, { name: 'Flow Rate', value: '20 g/min' }, { name: 'Minimum BLT', value: '20 µm' }, { name: 'Density', value: '4.9 g/cc' }, { name: 'Breakdown Voltage', value: '>8.0 kV/mm' }, { name: 'Operating Temperature', value: '-40°C to 100°C' }, { name: 'Magnetic Conductivity @ 1 GHz', value: '8.6' }, { name: 'Volume Resistivity', value: '>10¹² Ω·cm' }, { name: 'Heat Capacity', value: '1.1 J/g' }] },
      { model: 'TCG-Gel-2000', color: 'Blue', description: 'Core single-part thermal gel for automated and manual dispensing', specs: [{ name: 'Thermal Conductivity', value: '2.0 W/m·K' }, { name: 'Flow Rate', value: '40 g/min' }, { name: 'Minimum BLT', value: '90 µm' }, { name: 'Density', value: '2.8 g/cc' }, { name: 'Breakdown Voltage', value: '8.0 kV/mm' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Volatility', value: '0.16%' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Heat Capacity', value: '1.1 J/g' }] },
      { model: 'TCG-Gel-2000LP', color: 'White', description: 'Low permittivity thermal gel for RF and signal-integrity-sensitive applications', specs: [{ name: 'Thermal Conductivity', value: '2.0 W/m·K' }, { name: 'Flow Rate', value: '40 g/min' }, { name: 'Minimum BLT', value: '60 µm' }, { name: 'Density', value: '1.7 g/cc' }, { name: 'Dielectric Constant @ 5 GHz', value: '3.7' }, { name: 'Volume Resistivity', value: '>10¹⁴ Ω·cm' }, { name: 'Heat Capacity', value: '1.1 J/g' }] },
      { model: 'TCG-Gel-300AB', color: 'Black', description: 'EMI absorbent thermal gel for integrated thermal management and EMI suppression', specs: [{ name: 'Thermal Conductivity', value: '3.0 W/m·K' }, { name: 'Flow Rate', value: '20 g/min' }, { name: 'Minimum BLT', value: '80 µm' }, { name: 'Density', value: '3.9 g/cc' }, { name: 'Breakdown Voltage', value: '>8.0 kV/mm' }, { name: 'Operating Temperature', value: '-40°C to 100°C' }, { name: 'Magnetic Conductivity @ 1 GHz', value: '3.2' }, { name: 'Volume Resistivity', value: '>10¹² Ω·cm' }, { name: 'Heat Capacity', value: '1.1 J/g' }] },
      { model: 'TCG-Gel-4000', color: 'Green', description: 'Core single-part thermal gel with 4.0 W/mK thermal conductivity', specs: [{ name: 'Thermal Conductivity', value: '4.0 W/m·K' }, { name: 'Flow Rate', value: '18 g/min' }, { name: 'Minimum BLT', value: '60 µm' }, { name: 'Density', value: '3.2 g/cc' }, { name: 'Breakdown Voltage', value: '8.0 kV/mm' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Volatility', value: '0.11%' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Heat Capacity', value: '1.1 J/g' }] },
      { model: 'TCG-Gel-4000LP', color: 'Yellow', description: 'Low permittivity thermal gel for high-frequency electronics', specs: [{ name: 'Thermal Conductivity', value: '4.0 W/m·K' }, { name: 'Flow Rate', value: '40 g/min' }, { name: 'Minimum BLT', value: '60 µm' }, { name: 'Density', value: '1.6 g/cc' }, { name: 'Dielectric Constant @ 5 GHz', value: '3.5' }, { name: 'Volume Resistivity', value: '>10¹⁴ Ω·cm' }, { name: 'Heat Capacity', value: '1.1 J/g' }] },
      { model: 'TCG-Gel-6000', color: 'Yellow', description: 'Core single-part thermal gel with 6.0 W/mK thermal conductivity', specs: [{ name: 'Thermal Conductivity', value: '6.0 W/m·K' }, { name: 'Flow Rate', value: '35 g/min' }, { name: 'Minimum BLT', value: '150 µm' }, { name: 'Density', value: '3.3 g/cc' }, { name: 'Breakdown Voltage', value: '5.0 kV/mm' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Volatility', value: '<0.20%' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Heat Capacity', value: '1.1 J/g' }] },
      { model: 'TCG-Gel-7000', color: 'Gray', description: 'Core single-part thermal gel with 7.0 W/mK thermal conductivity', specs: [{ name: 'Thermal Conductivity', value: '7.0 W/m·K' }, { name: 'Flow Rate', value: '12 g/min' }, { name: 'Minimum BLT', value: '100 µm' }, { name: 'Density', value: '3.3 g/cc' }, { name: 'Breakdown Voltage', value: '8.0 kV/mm' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Volatility', value: '0.08%' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Heat Capacity', value: '1.1 J/g' }] },
      { model: 'TCG-Gel-10000', color: 'Red', description: 'Core single-part thermal gel with 10.0 W/mK thermal conductivity', specs: [{ name: 'Thermal Conductivity', value: '10.0 W/m·K' }, { name: 'Flow Rate', value: '10 g/min' }, { name: 'Minimum BLT', value: '120 µm' }, { name: 'Density', value: '3.5 g/cc' }, { name: 'Breakdown Voltage', value: '8.0 kV/mm' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Volatility', value: '0.12%' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Heat Capacity', value: '1.1 J/g' }] },
      { model: 'TCG-Gel-12000', color: 'Gray', description: 'Core single-part thermal gel with 12.0 W/mK thermal conductivity', specs: [{ name: 'Thermal Conductivity', value: '12.0 W/m·K' }, { name: 'Flow Rate', value: '10 g/min' }, { name: 'Minimum BLT', value: '120 µm' }, { name: 'Density', value: '3.3 g/cc' }, { name: 'Breakdown Voltage', value: '8.0 kV/mm' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Volatility', value: '0.13%' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Heat Capacity', value: '1.1 J/g' }] },
      { model: 'TCG-Gel-15000', color: 'Gray', description: 'Core single-part thermal gel with 15.0 W/mK thermal conductivity', specs: [{ name: 'Thermal Conductivity', value: '15.0 W/m·K' }, { name: 'Flow Rate', value: '10 g/min' }, { name: 'Minimum BLT', value: '250 µm' }, { name: 'Density', value: '3.5 g/cc' }, { name: 'Breakdown Voltage', value: '8.0 kV/mm' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Volatility', value: '0.13%' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Heat Capacity', value: '1.1 J/g' }] },
    ],
  },
  {
    slug: 'two-part-liquid-gap-filler',
    name: 'Two Parts Liquid Gap Filler',
    shortName: 'Two Part Gap Filler',
    description: 'Thermally conductive two-part gap fillers for efficient heat dissipation in demanding electronic assemblies.\nAvailable in ultra-thin bond-line, low-resistivity, EMI-absorbing, low-density, reworkable, and glass-bead-controlled variants.\nCompatible with automated dispensing systems. Custom formulations available.',
    image: '/images/products/two-part-gel.jpg',
    pdfFile: '/pdfs/TPGF-1200.pdf',
    applications: ['Power supplies', 'Automotive control units', 'Battery management systems', 'Power modules in EVs', 'Telecommunications', 'Industrial electronics'],
    commonSpecs: [
      { name: 'Mixing Ratio', value: '1:1' },
      { name: 'Operation Time @ 25°C', value: '120 minutes' },
      { name: 'Curing Time @ 25°C', value: '24 hours' },
    ],
    variants: [
      { model: 'TPGF-1200', color: 'Gray / Gray', specs: [{ name: 'Thermal Conductivity', value: '12.0 W/m·K' }, { name: 'Minimum BLT', value: '250 µm' }, { name: 'Hardness', value: '60 Shore 00' }, { name: 'Density', value: '3.5 g/cc' }, { name: 'Viscosity', value: '350,000 cps' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Flammability', value: 'V-0 (UL 94)' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Curing Time @ 25°C', value: '24 h' }, { name: 'Curing Time @ 100°C', value: '10 min' }] },
      { model: 'TPGF-1000', color: 'Gray / Gray', specs: [{ name: 'Thermal Conductivity', value: '10.0 W/m·K' }, { name: 'Minimum BLT', value: '180 µm' }, { name: 'Hardness', value: '60 Shore 00' }, { name: 'Density', value: '3.4 g/cc' }, { name: 'Viscosity', value: '400,000 cps' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Flammability', value: 'V-0 (UL 94)' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Curing Time @ 25°C', value: '24 h' }, { name: 'Curing Time @ 100°C', value: '10 min' }] },
      { model: 'TPGF-800', color: 'Gray / White', specs: [{ name: 'Thermal Conductivity', value: '8.0 W/m·K' }, { name: 'Minimum BLT', value: '170 µm' }, { name: 'Hardness', value: '60 Shore 00' }, { name: 'Density', value: '3.5 g/cc' }, { name: 'Viscosity', value: '350,000 cps' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Flammability', value: 'V-0 (UL 94)' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Curing Time @ 25°C', value: '24 h' }, { name: 'Curing Time @ 100°C', value: '10 min' }] },
      { model: 'TPGF-600', color: 'Gray / White', specs: [{ name: 'Thermal Conductivity', value: '6.0 W/m·K' }, { name: 'Minimum BLT', value: '100 µm' }, { name: 'Hardness', value: '60 Shore 00' }, { name: 'Density', value: '3.4 g/cc' }, { name: 'Viscosity', value: '300,000 cps' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Flammability', value: 'V-0 (UL 94)' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Curing Time @ 25°C', value: '24 h' }, { name: 'Curing Time @ 100°C', value: '10 min' }] },
      { model: 'TPGF-600LV', color: 'Gray / White', specs: [{ name: 'Thermal Conductivity', value: '6.0 W/m·K' }, { name: 'Hardness', value: '50 Shore 00' }, { name: 'Density', value: '3.4 g/cc' }, { name: 'Viscosity', value: '400,000 cps' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Flammability', value: 'V-0 (UL 94)' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Curing Time @ 25°C', value: '24 h' }, { name: 'Curing Time @ 100°C', value: '10 min' }] },
      { model: 'TPGF-500', color: 'Green / White', specs: [{ name: 'Thermal Conductivity', value: '5.0 W/m·K' }, { name: 'Minimum BLT', value: '150 µm' }, { name: 'Hardness', value: '60 Shore 00' }, { name: 'Density', value: '3.3 g/cc' }, { name: 'Viscosity', value: '280,000 cps' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Flammability', value: 'V-0 (UL 94)' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Curing Time @ 25°C', value: '24 h' }, { name: 'Curing Time @ 100°C', value: '10 min' }] },
      { model: 'TPGF-500G', color: 'Green / White', specs: [{ name: 'Thermal Conductivity', value: '5.0 W/m·K' }, { name: 'Minimum BLT', value: '250 µm' }, { name: 'Hardness', value: '45 Shore 00' }, { name: 'Density', value: '3.2 g/cc' }, { name: 'Viscosity', value: '350,000 cps' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Flammability', value: 'V-0 (UL 94)' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Working Time @ 25°C', value: '2 h' }, { name: 'Curing Time @ 25°C', value: '24 h' }, { name: 'Curing Time @ 100°C', value: '10 min' }] },
      { model: 'TPGF-500LV', color: 'Gray / White', specs: [{ name: 'Thermal Conductivity', value: '5.0 W/m·K' }, { name: 'Hardness', value: '50 Shore 00' }, { name: 'Density', value: '3.3 g/cc' }, { name: 'Viscosity', value: '350,000 cps' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Flammability', value: 'V-0 (UL 94)' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Curing Time @ 25°C', value: '24 h' }, { name: 'Curing Time @ 100°C', value: '10 min' }] },
      { model: 'TPGF-400', color: 'Pink / White', specs: [{ name: 'Thermal Conductivity', value: '4.0 W/m·K' }, { name: 'Minimum BLT', value: '130 µm' }, { name: 'Hardness', value: '50 Shore 00' }, { name: 'Density', value: '3.2 g/cc' }, { name: 'Viscosity', value: '310,000 cps' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Flammability', value: 'V-0 (UL 94)' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Curing Time @ 25°C', value: '24 h' }, { name: 'Curing Time @ 100°C', value: '10 min' }] },
      { model: 'TPGF-400S', color: 'Pink / White', specs: [{ name: 'Thermal Conductivity', value: '4.0 W/m·K' }, { name: 'Minimum BLT', value: '30 µm' }, { name: 'Hardness', value: '50 Shore 00' }, { name: 'Density', value: '3.4 g/cc' }, { name: 'Viscosity', value: '150,000 cps' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Flammability', value: 'V-0 (UL 94)' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Curing Time @ 25°C', value: '24 h' }, { name: 'Curing Time @ 100°C', value: '10 min' }] },
      { model: 'TPGF-400AB', color: 'Black / Black', specs: [{ name: 'Thermal Conductivity', value: '4.0 W/m·K' }, { name: 'Minimum BLT', value: '130 µm' }, { name: 'Hardness', value: '50 Shore 00' }, { name: 'Density', value: '4.0 g/cc' }, { name: 'Viscosity', value: '300,000 cps' }, { name: 'Operating Temperature', value: '-50°C to 100°C' }, { name: 'Flammability', value: 'V-0 (UL 94)' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Curing Time @ 25°C', value: '24 h' }, { name: 'Curing Time @ 100°C', value: '10 min' }, { name: 'EMI Attenuation @ 10 GHz', value: '14.5' }, { name: 'EMI Attenuation @ 20 GHz', value: '28' }] },
      { model: 'TPGF-400LV', color: 'Gray / White', specs: [{ name: 'Thermal Conductivity', value: '4.0 W/m·K' }, { name: 'Hardness', value: '50 Shore 00' }, { name: 'Density', value: '3.2 g/cc' }, { name: 'Viscosity', value: '250,000 cps' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Flammability', value: 'V-0 (UL 94)' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Curing Time @ 25°C', value: '24 h' }, { name: 'Curing Time @ 100°C', value: '10 min' }] },
      { model: 'TPGF-350', color: 'Blue / White', specs: [{ name: 'Thermal Conductivity', value: '3.5 W/m·K' }, { name: 'Minimum BLT', value: '130 µm' }, { name: 'Hardness', value: '50 Shore 00' }, { name: 'Density', value: '3.2 g/cc' }, { name: 'Viscosity', value: '250,000 cps' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Flammability', value: 'V-0 (UL 94)' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Curing Time @ 25°C', value: '24 h' }, { name: 'Curing Time @ 100°C', value: '10 min' }] },
      { model: 'TPGF-350S', color: 'Blue / White', specs: [{ name: 'Thermal Conductivity', value: '3.5 W/m·K' }, { name: 'Minimum BLT', value: '90 µm' }, { name: 'Hardness', value: '50 Shore 00' }, { name: 'Density', value: '3.2 g/cc' }, { name: 'Viscosity', value: '350,000 cps' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Flammability', value: 'V-0 (UL 94)' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Curing Time @ 25°C', value: '24 h' }, { name: 'Curing Time @ 100°C', value: '10 min' }] },
      { model: 'TPGF-350LV', color: 'Gray / White', specs: [{ name: 'Thermal Conductivity', value: '3.5 W/m·K' }, { name: 'Hardness', value: '90 Shore 00' }, { name: 'Density', value: '3.2 g/cc' }, { name: 'Viscosity', value: '350,000 cps' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Flammability', value: 'V-0 (UL 94)' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Curing Time @ 25°C', value: '24 h' }, { name: 'Curing Time @ 100°C', value: '10 min' }] },
      { model: 'TPGF-300', color: 'Blue / White', specs: [{ name: 'Thermal Conductivity', value: '3.0 W/m·K' }, { name: 'Minimum BLT', value: '110 µm' }, { name: 'Hardness', value: '50 Shore 00' }, { name: 'Density', value: '3.2 g/cc' }, { name: 'Viscosity', value: '250,000 cps' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Flammability', value: 'V-0 (UL 94)' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Curing Time @ 25°C', value: '24 h' }, { name: 'Curing Time @ 100°C', value: '10 min' }] },
      { model: 'TPGF-300S', color: 'Gray / Gray', specs: [{ name: 'Thermal Conductivity', value: '3.0 W/m·K' }, { name: 'Minimum BLT', value: '20 µm' }, { name: 'Hardness', value: '50 Shore 00' }, { name: 'Density', value: '2.4 g/cc' }, { name: 'Viscosity', value: '250,000 cps' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Flammability', value: 'V-0 (UL 94)' }, { name: 'Volume Resistivity', value: '>10⁸ Ω·cm' }, { name: 'Curing Time @ 25°C', value: '24 h' }, { name: 'Curing Time @ 100°C', value: '10 min' }] },
      { model: 'TPGF-300LV', color: 'Gray / White', specs: [{ name: 'Thermal Conductivity', value: '3.0 W/m·K' }, { name: 'Hardness', value: '50 Shore 00' }, { name: 'Density', value: '3.0 g/cc' }, { name: 'Viscosity', value: '200,000 cps' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Flammability', value: 'V-0 (UL 94)' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Curing Time @ 25°C', value: '24 h' }, { name: 'Curing Time @ 100°C', value: '10 min' }] },
      { model: 'TPGF-250', color: 'Yellow / White', specs: [{ name: 'Thermal Conductivity', value: '2.5 W/m·K' }, { name: 'Minimum BLT', value: '100 µm' }, { name: 'Hardness', value: '50 Shore 00' }, { name: 'Density', value: '3.0 g/cc' }, { name: 'Viscosity', value: '200,000 cps' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Flammability', value: 'V-0 (UL 94)' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Curing Time @ 25°C', value: '24 h' }, { name: 'Curing Time @ 100°C', value: '10 min' }] },
      { model: 'TPGF-200LD', color: 'Red / White', specs: [{ name: 'Thermal Conductivity', value: '2.0 W/m·K' }, { name: 'Minimum BLT', value: '100 µm' }, { name: 'Hardness', value: '50 Shore 00' }, { name: 'Density', value: '2.0 g/cc' }, { name: 'Viscosity', value: '150,000 cps' }, { name: 'Operating Temperature', value: '-50°C to 150°C' }, { name: 'Flammability', value: 'V-0 (UL 94)' }, { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' }, { name: 'Curing Time @ 25°C', value: '24 h' }, { name: 'Curing Time @ 100°C', value: '10 min' }] },
    ],
  },
  {
    slug: 'gap-pads',
    name: 'Gap Pads',
    shortName: 'Gap Pads',
    description: 'Soft, conformable thermal pads designed to bridge gaps between electronic components and heat sinks with uniform heat transfer.',
    image: '/images/products/gap-pads.jpg',
    pdfFile: '/pdfs/GFTP-1500.pdf',
    applications: ['Consumer electronics', 'Power systems', 'Telecommunications', 'LED modules', 'Automotive controls', 'Battery management'],
    commonSpecs: [
      { name: 'Operating Temperature', value: '-50°C to 200°C' },
      { name: 'Volume Resistance', value: '10¹³ Ω·cm' },
      { name: 'Breakdown Voltage', value: '>10 KV/mm' },
      { name: 'Flammability', value: 'V-0 (UL 94)' },
    ],
    variants: [
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
    hidden: true,
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
    pdfFile: '/pdfs/PT-400.pdf',
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
    name: 'Low Oil Bleed Pads',
    shortName: 'GFTP-LO Series',
    description: 'Low-oil-bleed thermal interface pads engineered for controlled conformal flow under compression, improving surface wet-out and gap filling while minimizing silicone oil migration.',
    image: '/images/products/gftp-lo.jpg',
    pdfFile: '/pdfs/GFTP-600LO.pdf',
    applications: ['Telecommunications', 'Automotive control systems', 'Power modules', 'Computing', 'Networking'],
    commonSpecs: [
      { name: 'Operating Temperature', value: '-50°C to 200°C' },
      { name: 'Breakdown Voltage', value: '>10 KV/mm' },
      { name: 'Flammability', value: 'V-0 (UL 94)' },
      { name: 'Thickness', value: '0.5–10.0 mm' },
    ],
    variants: [
      { model: 'GFTP-600LO', color: 'Grey', description: 'Premium tier for most demanding applications', specs: [{ name: 'Thermal Conductivity', value: '6.0 W/m·K' }, { name: 'Density', value: '3.3 g/cc' }, { name: 'Hardness', value: '40–70 Shore 00' }, { name: 'Volume Resistance', value: '10¹³ Ω·cm' }] },
      { model: 'GFTP-500LO', color: 'Grey', description: 'High-performance computing and advanced automotive', specs: [{ name: 'Thermal Conductivity', value: '5.0 W/m·K' }, { name: 'Density', value: '3.2 g/cc' }, { name: 'Hardness', value: '40–70 Shore 00' }, { name: 'Volume Resistance', value: '10¹³ Ω·cm' }] },
      { model: 'GFTP-400LO', color: 'Green', description: 'Mid-tier for automotive and telecom', specs: [{ name: 'Thermal Conductivity', value: '4.0 W/m·K' }, { name: 'Density', value: '3.1 g/cc' }, { name: 'Hardness', value: '40–70 Shore 00' }, { name: 'Volume Resistance', value: '10¹³ Ω·cm' }] },
      { model: 'GFTP-300LO', color: 'Blue', description: 'Entry-level, ideal for telecom and automotive control', specs: [{ name: 'Thermal Conductivity', value: '3.0 W/m·K' }, { name: 'Density', value: '3.0 g/cc' }, { name: 'Hardness', value: '30–70 Shore 00' }, { name: 'Volume Resistance', value: '10¹⁴ Ω·cm' }] },
    ],
  },
  {
    slug: 'tcg-lo-series',
    name: 'Low Oil Bleed Gels',
    shortName: 'TCG-LO Series',
    description: 'Low-oil-bleed single-part thermal gels engineered for automated dispensing, stable thermal contact, and reliable heat dissipation across variable gap tolerances.',
    image: '/images/products/tcg-lo.jpg',
    pdfFile: '/pdfs/TCG-Gel-6000LOVE.pdf',
    applications: ['Smartphones', 'Tablets', 'Laptops', 'Wearables', 'Automotive electronics', 'Data centers'],
    commonSpecs: [
      { name: 'Operating Temperature', value: '-50°C to 200°C' },
      { name: 'Volume Resistivity', value: '>10¹³ Ω·cm' },
      { name: 'Flammability', value: 'V-0 (UL 94)' },
      { name: 'Oil Bleeding', value: '<1 mm (100°C, 24h)' },
      { name: 'Packaging', value: '30 cc (100 g) cartridge; other sizes on request' },
      { name: 'Shelf Life', value: '24 months from date of manufacture' },
    ],
    variants: [
      { model: 'TCG-Gel-7000LOHF', color: 'Gray', description: 'Low oil bleed; high flow rate', specs: [{ name: 'Thermal Conductivity', value: '7.0 W/m·K' }, { name: 'Flow Rate', value: '80 g/min' }, { name: 'Minimum BLT', value: '200 µm' }, { name: 'Density', value: '3.2 g/cc' }, { name: 'Breakdown Voltage', value: '5.0 kV/mm' }, { name: 'Volatility', value: '0.01%' }, { name: 'Heat Capacity', value: '1.1 J/g' }] },
      { model: 'TCG-Gel-7000LO', color: 'Gray', description: 'Low oil bleed', specs: [{ name: 'Thermal Conductivity', value: '7.0 W/m·K' }, { name: 'Flow Rate', value: '15 g/min' }, { name: 'Minimum BLT', value: '200 µm' }, { name: 'Density', value: '3.2 g/cc' }, { name: 'Breakdown Voltage', value: '5.0 kV/mm' }, { name: 'Volatility', value: '0.01%' }, { name: 'Heat Capacity', value: '1.1 J/g' }] },
      { model: 'TCG-Gel-6000LOVE', color: 'Gray', description: 'Low oil bleed; low volatile emissions', specs: [{ name: 'Thermal Conductivity', value: '6.0 W/m·K' }, { name: 'Flow Rate', value: '20 g/min' }, { name: 'Minimum BLT', value: '90 µm' }, { name: 'Density', value: '3.5 g/cc' }, { name: 'Breakdown Voltage', value: '8.0 kV/mm' }, { name: 'Volatility', value: '0.13%' }, { name: 'D3-D10', value: '50 ppm' }] },
      { model: 'TCG-Gel-6000LO', color: 'Blue', description: 'Low oil bleed', specs: [{ name: 'Thermal Conductivity', value: '6.0 W/m·K' }, { name: 'Flow Rate', value: '20 g/min' }, { name: 'Minimum BLT', value: '90 µm' }, { name: 'Density', value: '3.3 g/cc' }, { name: 'Breakdown Voltage', value: '8.0 kV/mm' }, { name: 'Volatility', value: '0.13%' }, { name: 'Heat Capacity', value: '1.1 J/g' }] },
      { model: 'TCG-Gel-4000LOVE', color: 'Gray', description: 'Low oil bleed; low volatile emissions', specs: [{ name: 'Thermal Conductivity', value: '4.0 W/m·K' }, { name: 'Flow Rate', value: '40 g/min' }, { name: 'Minimum BLT', value: '70 µm' }, { name: 'Density', value: '3.2 g/cc' }, { name: 'Breakdown Voltage', value: '8.0 kV/mm' }, { name: 'Volatility', value: '0.03%' }, { name: 'D3-D10', value: '50 ppm' }] },
      { model: 'TCG-Gel-4000LO', color: 'Green', description: 'Low oil bleed', specs: [{ name: 'Thermal Conductivity', value: '4.0 W/m·K' }, { name: 'Flow Rate', value: '40 g/min' }, { name: 'Minimum BLT', value: '70 µm' }, { name: 'Density', value: '3.2 g/cc' }, { name: 'Breakdown Voltage', value: '8.0 kV/mm' }, { name: 'Volatility', value: '0.15%' }, { name: 'Heat Capacity', value: '1.1 J/g' }] },
    ],
  },
  {
    slug: 'special-gap-pad',
    name: 'Specialty Gap Pads',
    shortName: 'Specialty Gap Pads',
    description: 'Specially-formulated thermal gap pads for applications that require more than standard thermal conductivity. Deep Materials offers a broad specialty gap pad portfolio, including high-rebound gap pads for improved contact recovery, low-oil-seepage gap pads for cleaner long-term reliability, low-density gap pads for weight-sensitive designs, low-dielectric gap pads for signal-sensitive applications, Zero Pad materials with extremely low hardness, ultra-soft gap pads for low-stress compression, and standard gap pads for general thermal management.\n\nThese materials help engineers balance thermal performance with mechanical compliance, electrical behavior, reworkability, reliability, and assembly constraints across complex electronic systems.',
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
      { model: 'GFTP-600LO', color: 'Gray', description: 'Low oil bleed gap pad engineered to minimize silicone oil migration and preserve interface cleanliness in high-reliability assemblies', pdfFile: '/pdfs/specialty-pads/GFTP-600LO.pdf', specs: [{ name: 'Thermal Conductivity', value: '6.0 W/m·K' }, { name: 'Thickness', value: '0.5–10.0 mm' }, { name: 'Density', value: '3.3 g/cc' }, { name: 'Hardness', value: '50 Shore 00' }, { name: 'Breakdown Voltage', value: '>10 kV/mm' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Volume Resistivity', value: '10¹³ Ω·cm' }, { name: 'Flammability', value: 'V-0 (UL 94)' }] },
      { model: 'GFTP-510', color: 'Green', description: 'Fiberglass-reinforced gap pad for improved tear resistance, handling robustness, and dimensional stability', pdfFile: '/pdfs/specialty-pads/GFTP-510.pdf', specs: [{ name: 'Thermal Conductivity', value: '5.0 W/m·K' }, { name: 'Thickness', value: '0.5–2.0 mm' }, { name: 'Density', value: '3.3 g/cc' }, { name: 'Hardness', value: '50 Shore 00' }, { name: 'Breakdown Voltage', value: '>10 kV/mm' }, { name: 'Operating Temperature', value: '-40°C to 180°C' }, { name: 'Volume Resistivity', value: '10¹³ Ω·cm' }, { name: 'Flammability', value: 'V-0 (UL 94)' }] },
      { model: 'GFTP-500US', color: 'Green', description: 'Ultra-soft gap pad for low-pressure contact and reduced stress on sensitive components', pdfFile: '/pdfs/specialty-pads/GFTP-500US.pdf', specs: [{ name: 'Thermal Conductivity', value: '5.0 W/m·K' }, { name: 'Thickness', value: '1.0–5.0 mm' }, { name: 'Density', value: '3.3 g/cc' }, { name: 'Hardness', value: '20 Shore 00' }, { name: 'Breakdown Voltage', value: '>10 kV/mm' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Volume Resistivity', value: '10¹³ Ω·cm' }, { name: 'Flammability', value: 'V-0 (UL 94)' }] },
      { model: 'GFTP-400LP', color: 'Purple', description: 'Low dielectric gap pad for high-frequency and signal-sensitive electronic applications', pdfFile: '/pdfs/specialty-pads/GFTP-400LP.pdf', specs: [{ name: 'Thermal Conductivity', value: '4.0 W/m·K' }, { name: 'Thickness', value: '0.5–10.0 mm' }, { name: 'Density', value: '1.6 g/cc' }, { name: 'Hardness', value: '40 Shore 00' }, { name: 'Breakdown Voltage', value: '>10 kV/mm' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Volume Resistivity', value: '10¹⁴ Ω·cm' }, { name: 'Flammability', value: 'V-0 (UL 94)' }, { name: 'Dielectric Constant @ 5 GHz', value: '3.8' }] },
      { model: 'GFTP-300AB', color: 'Black', description: 'EMI absorbent specialty gap pad for combined thermal management and electromagnetic noise reduction', pdfFile: '/pdfs/specialty-pads/GFTP-300AB.pdf', specs: [{ name: 'Thermal Conductivity', value: '3.0 W/m·K' }] },
      { model: 'GFTP-300HR', color: 'Pink', description: 'High rebound gap pad for repeated compression cycles and consistent contact recovery', pdfFile: '/pdfs/specialty-pads/GFTP-300HR.pdf', specs: [{ name: 'Thermal Conductivity', value: '3.0 W/m·K' }, { name: 'Thickness', value: '0.5–10.0 mm' }, { name: 'Density', value: '3.1 g/cc' }, { name: 'Hardness', value: '60 Shore 00' }, { name: 'Breakdown Voltage', value: '>10 kV/mm' }, { name: 'Operating Temperature', value: '-50°C to 200°C' }, { name: 'Volume Resistivity', value: '10¹³ Ω·cm' }, { name: 'Flammability', value: 'V-0 (UL 94)' }] },
      { model: 'GFTP-200HT', color: 'Gray', description: 'High temperature gap pad for sustained elevated-temperature environments', pdfFile: '/pdfs/specialty-pads/GFTP-200HT.pdf', specs: [{ name: 'Thermal Conductivity', value: '2.0 W/m·K' }, { name: 'Thickness', value: '0.5–10.0 mm' }, { name: 'Density', value: '2.7 g/cc' }, { name: 'Hardness', value: '40 Shore 00' }, { name: 'Breakdown Voltage', value: '>10 kV/mm' }, { name: 'Operating Temperature', value: '-50°C to 300°C' }, { name: 'Volume Resistivity', value: '10¹³ Ω·cm' }, { name: 'Flammability', value: 'V-0 (UL 94)' }] },
      { model: 'GFTP-X00ZERO', description: 'Zero-hardness ultra-compliant gap pad', specs: [{ name: 'Hardness', value: '0 Shore 00' }] },
    ],
  },
  {
    slug: 'fleximetal',
    name: 'FlexiMetal',
    shortName: 'FlexiMetal',
    description: 'Up to 35 W/mK materials with minimal bond line thickness for the most demanding thermal interface applications. FlexiMetal is available in foils for hand placement or in bulk for screen printing. FlexiMetal has all the advantages of liquid metal but without any of its drawbacks. Extensive performance and reliability data is available upon request.',
    image: '/images/products/fleximetal.jpg',
    video: '/videos/fleximetal-35wmk.m4v',
    pdfFile: '/pdfs/FlexiMetal-9.1-Foil.pdf',
    applications: ['Consumer electronics', 'Automotive', 'SSDs', 'Networking', 'Data centers', 'Computing'],
    variants: [
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

export const VISIBLE_PRODUCT_CATEGORIES = PRODUCT_CATEGORIES.filter(
  (product) => !product.hidden,
);

export function getProductBySlug(slug: string): ProductCategory | undefined {
  return VISIBLE_PRODUCT_CATEGORIES.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): ReadonlyArray<string> {
  return VISIBLE_PRODUCT_CATEGORIES.map((p) => p.slug);
}
