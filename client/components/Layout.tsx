import { Outlet } from "react-router-dom";
import SiteFooter from "./SiteFooter";
import Sidebar from "./Sidebar";
import ContactDialog from "./ContactDialog";
import ScrollProgress from "./ScrollProgress";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <div className="mx-auto flex w-full max-w-[1400px]">
        <Sidebar />
        <div className="flex min-h-screen flex-1 flex-col">
          <main className="flex-1 px-4 sm:px-6 lg:px-10">
            {/* page content */}
            <Outlet />
          </main>
          <SiteFooter />
        </div>
      </div>
      <ContactDialog />
    </div>
  );
}
