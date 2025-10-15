import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCompanies } from "../../services/companiesService";

type Company = {
  id: number;
  name: string;
  description: string;
};

function Companies() {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    // al montar el componente en la pagina
    document.body.style.backgroundColor = "#a9c26aff";

    getCompanies().then((companiesData) => {
      setCompanies(companiesData as Company[]);
    });

    // al desmontar el componente de la pagina
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      <h1>Companies</h1>
      <p>Shows a list of fetched companies.</p>

      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            {company.name}:{company.description}
          </li>
        ))}
      </ul>

      <Link to="/">Home</Link>
    </div>
  );
}

export default Companies;
