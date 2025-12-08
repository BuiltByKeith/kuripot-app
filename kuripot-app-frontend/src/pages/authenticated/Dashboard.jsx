import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Kuripot App - Dashboard";
  }, []);
  return (
    <Layout title="Dashboard">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="p-6 bg-white shadow rounded">Card 1</div>
        <div className="p-6 bg-white shadow rounded">Card 2</div>
        <div className="p-6 bg-white shadow rounded">Card 3</div>
      </div>

      <div className="">
        <div className="p-6 bg-white shadow rounded">Card 3</div>
      </div>
    </Layout>
  );
}
