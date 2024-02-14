const weekdays = [
    'pondělí',
    'úterý',
    'středa',
    'čtvrtek',
    'pátek',
    'sobota',
    'neděle',
  ];
  const months = [
    {
      name: 'leden',
      days: 31,
    },
    {
      name: 'únor',
      days: 28,
    },
    {
      name: 'březen',
      days: 31,
    },
    {
      name: 'duben',
      days: 30,
    },
    {
      name: 'květen',
      days: 31,
    },
    {
      name: 'červen',
      days: 30,
    },
    {
      name: 'červenec',
      days: 31,
    },
    {
      name: 'srpen',
      days: 31,
    },
    {
      name: 'září',
      days: 30,
    },
    {
      name: 'říjen',
      days: 31,
    },
    {
      name: 'listopad',
      days: 30,
    },
    {
      name: 'prosinec',
      days: 31,
    },
  ];

  const zkratkyDnu = weekdays.map(z => z.substring(0,2)); // asi spis slice(0,2)
  console.log(zkratkyDnu);

  const velkymiPismeny = weekdays.map(vp => vp.toUpperCase());
  console.log(velkymiPismeny);

  const poctyDni = months.map(pd => pd.days);
  console.log(poctyDni);

  const prvniDny = months.map(prvni => `1.${prvni.name} 2020`);
  console.log(prvniDny);