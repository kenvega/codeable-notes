import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCompany } from "../../services/companiesService";

type Company = {
  id: number;
  name: string;
  description: string;
};

function CompanyDetail() {
  const { companyId } = useParams<{ companyId: string }>();

  console.log("companyId", companyId);

  const [company, setCompany] = useState<Company | null>(null);

  useEffect(() => {
    if (companyId) {
      getCompany(parseInt(companyId)).then((companyData) => {
        setCompany(companyData as Company);
      });
    }
  }, [companyId]);

  return (
    <div>
      <h1>Games detail</h1>
      <p>Details for game {company?.name}</p>
      <ul>
        <li>
          <strong>Id:</strong> {company?.id}
        </li>
        <li>
          <strong>Name:</strong> {company?.name}
        </li>
        <li>
          <strong>Description:</strong> {company?.description}
        </li>
      </ul>

      <Link to="/">Home</Link>
    </div>
  );
}

export default CompanyDetail;
