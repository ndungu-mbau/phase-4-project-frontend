import { ResponsiveLayoutComponent } from "@/components/responsive-layout";
import { ownerLinks } from "@/lib/links/owner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ResponsiveLayoutComponent links={ownerLinks}>
      {children}
    </ResponsiveLayoutComponent>
  );
}
