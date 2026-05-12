import Sidebar from "../components/Sidebar";

function AdminLayout({
  children,
  onLogout,
}) {

  return (
    <div className="admin-shell">

      <Sidebar onLogout={onLogout} />

      <main className="admin-main">
        {children}
      </main>

    </div>
  );
}

export default AdminLayout;