import { UserButton, auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import MainNav from './main-nav';
import prismadb from '@/lib/prismadb';
import StoreSwitcher from './store-switcher';

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
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-centers space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
}