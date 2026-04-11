import { Loader2, AlertCircle, InboxIcon } from 'lucide-react'

export const LoadingState = ({ message = 'Loading...' }) => (
  <div className="flex flex-col items-center justify-center py-16 gap-3">
    <Loader2 size={28} className="animate-spin text-[#000066]" />
    <p className="text-sm text-[#808080]">{message}</p>
  </div>
)

export const EmptyState = ({ title = 'Nothing here yet', message = '' }) => (
  <div className="flex flex-col items-center justify-center py-16 gap-3">
    <InboxIcon size={40} className="text-[#d9d9d9]" />
    <p className="text-base font-semibold text-[#000066]">{title}</p>
    {message && <p className="text-sm text-[#808080]">{message}</p>}
  </div>
)

export const ErrorState = ({ message = 'Something went wrong.' }) => (
  <div className="flex flex-col items-center justify-center py-16 gap-3">
    <AlertCircle size={36} className="text-red-400" />
    <p className="text-sm text-[#000066]">{message}</p>
  </div>
)