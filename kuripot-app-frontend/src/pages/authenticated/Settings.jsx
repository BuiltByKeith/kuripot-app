import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";

export default function Settings() {
  useEffect(() => {
    document.title = "Kuripot App - Settings";
  }, []);
  return (
    <Layout title={"Settings"}>
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
    </Layout>
  );
}
