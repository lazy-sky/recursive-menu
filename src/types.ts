import { TreeNode } from "./api"

export interface FileContext {
  directoryTree: TreeNode
  deleteFile: (fileId: string) => void
}