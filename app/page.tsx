import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { ThreeDScene } from '@/components/3d-scene';

export default function Home() {
  return (
    <main className="flex flex-1 w-full">
      <ThreeDScene />
    </main>
  );
}
