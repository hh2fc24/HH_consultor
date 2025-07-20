'use client';

const CompanyLogos = () => {
  // Simplemente una lista con los nombres de las empresas.
  const companies = [
    'Cencosud Scotiabank',
    'SONDA',
    'BancoEstado',
    'MetLife',
    'Caja Los Héroes',
    'Tenpo',
  ];

  return (
    <div className="flex justify-center items-center gap-x-8 md:gap-x-12 flex-wrap gap-y-4">
      {companies.map((name) => (
        <p
          key={name}
          className="text-lg font-semibold text-zinc-500 hover:text-white transition-colors duration-300 cursor-default"
        >
          {name}
        </p>
      ))}
    </div>
  );
};

export default CompanyLogos;