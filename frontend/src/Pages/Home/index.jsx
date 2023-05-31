import FactoryCard from "../../components/FactoryCard";
import Layout from "../../components/Layout";
import { dbBicycle } from "../../db/dbBicycle";



function Home() {
   
  return (
    <Layout>
      <FactoryCard arrBicycle={dbBicycle} />
    </Layout>

  );
}

export default Home;
