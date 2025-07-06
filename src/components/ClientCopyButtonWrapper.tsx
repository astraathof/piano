'use client'

import CopyButton from './CopyButton'

interface ClientCopyButtonWrapperProps {
  text: string
  className?: string
  title?: string
}

export default function ClientCopyButtonWrapper({ text, className, title }: ClientCopyButtonWrapperProps) {
  return <CopyButton text={text} className={className} title={title} />
}