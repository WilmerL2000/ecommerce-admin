'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Modal } from '../ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';

export default function StoreModal() {
  const storeModal = useStoreModal();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>Future Create Store Form</div>
    </Modal>
  );
}
