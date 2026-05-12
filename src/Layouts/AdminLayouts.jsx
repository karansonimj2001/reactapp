import Sidebar from "../components/Sidebar";

function AdminLayout({ children }) {

  function handleLogout() {

    localStorage.removeItem(
      "adminPortalUser"
    );

    window.location.href = "/login";
  }

  return (

    <div className="admin-shell">

      <Sidebar
        onLogout={handleLogout}
      />

      <main className="admin-main">
        {children}
      </main>

    </div>
  );
}

export default AdminLayout;