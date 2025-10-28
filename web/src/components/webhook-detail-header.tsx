import { Badge } from './ui/badge'

export function WebhooksDetailHeader() {
  return (
    <div className="space-y-4 border-b border-zinc-700 p-6">
      <div className="flex items-center gap-3">
        <Badge>POST</Badge>
        <span className="text-lg font-medium text-zinc-300">/curso/status</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 text-sm text-zinc-400">
          <span>From IP</span>
          <span className="font-mono underline-offset-4">123.123.123.123</span>
        </div>
        <span className="w-px h-4 bg-zinc-700" />
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <span>At</span>
          <span>April 10th, 10pm</span>
        </div>
      </div>
    </div>
  )
}
