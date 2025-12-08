import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";

export default function Accounts() {
    useEffect(() => {
        document.title = "Kuripot App - Accounts";
      }, []);
  return (
    <Layout title="Accounts">
      <div>
        <h2 className="text-2xl font-bold mb-4">Accounts</h2>
      </div>
    </Layout>
  );
}
