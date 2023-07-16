import React from 'react';

type Props = {
  params: {
    storeId: string;
  };
};

export default async function DashboardPage({ params }: Props) {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6"></div>
    </div>
  );
}
