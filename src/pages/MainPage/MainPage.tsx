import Footer from "@/components/Footer";
import MainNavbar from "@/components/MainNavbar";
import MainLayout from "@/layout/MainLayout";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <MainLayout>
        <>
          <MainNavbar />
          <Outlet />
        </>
      </MainLayout>
      <Footer />
    </>
  );
}
