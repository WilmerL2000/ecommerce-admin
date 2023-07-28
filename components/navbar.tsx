import { UserButton, auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import MainNav from './main-nav';
import prismadb from '@/lib/prismadb';
import StoreSwitcher from './store-switcher';
import { ThemeToggle } from './theme-toggle';
import MobileNav from './mobile-nav';

export default async function Navbar() {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="hidden lg:flex ">
          <StoreSwitcher items={stores} />
          <MainNav className="mx-6" />
        </div>
        <div className="lg:hidden">
          <MobileNav stores={stores} />
        </div>
        <div className="ml-auto flex items-centers space-x-4">
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
}
