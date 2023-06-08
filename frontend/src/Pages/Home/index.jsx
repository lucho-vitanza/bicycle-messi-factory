import FactoryCard from "../../components/FactoryCard";
import Layout from "../../components/Layout";
import { dbBicycle } from "../../db/dbBicycle";

function Bicycle() {
  return (
    <Layout>
      <FactoryCard arrBicycle={dbBicycle} />
    </Layout>
  );
}

export default Bicycle;
