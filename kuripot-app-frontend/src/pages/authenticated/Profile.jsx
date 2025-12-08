import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";

export default function Profile() {
  useEffect(() => {
    document.title = "Kuripot App - Profile";
  }, []);
  return (
    <Layout title="Profile">
      <div>
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
      </div>
    </Layout>
  );
}
