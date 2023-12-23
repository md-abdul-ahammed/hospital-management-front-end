import DoctorHeader from "@/components/view/Header/DoctorHeader";
import DoctorSidebar from "@/components/view/Sidebar/DoctorSidebar";

export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DoctorHeader />
      <DoctorSidebar>{children}</DoctorSidebar>
    </>
  );
}
