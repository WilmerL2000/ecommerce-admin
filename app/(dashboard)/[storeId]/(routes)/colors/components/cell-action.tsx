'use client';

import axios from 'axios';
import { useState } from 'react';
import { Copy, Edit, MoreHorizontal, Trash } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useParams, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { ColorColumn } from './columns';
import AlertModal from '@/components/modals/alert-modal';

interface CellActionProps {
  data: ColorColumn;
}

export default function CellAction({ data }: CellActionProps) {
  const router = useRouter();
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  /**
   * The function `onConfirm` is an asynchronous function that deletes a color using an API call,
   * displays a success message, refreshes the page, and handles any errors that occur.
   */
  const onConfirm = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/${params.storeId}/colors/${data.id}`);
      toast.success('Color deleted.');
      router.refresh();
    } catch (error) {
      toast.error('Make sure you removed all products using this color first.');
    } finally {
      setOpen(false);
      setLoading(false);
    }
  };

  /**
   * The function `onCopy` copies a given string to the clipboard and displays a success toast message.
   * @param {string} id - The `id` parameter is a string that represents the Color ID that needs to
   * be copied to the clipboard.
   */
  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success('Color ID copied to clipboard.');
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onCopy(data.id)}>
            <Copy className="mr-2 h-4 w-4" /> Copy Id
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => router.push(`/${params.storeId}/colors/${data.id}`)}
          >
            <Edit className="mr-2 h-4 w-4" /> Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
