import { User } from "../../../../types"

export interface IUserListContainerProps {
  endOfUserCatalog?: boolean
}
export interface IStyledUserListProps {
  ref?: any
}

export interface IStyledMessageProps {
  position?: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  width?: string
  marginTop?: string
  marginLeft?: string
  transform?: string
}

export interface IMessageProps {
  marginLeft?: string
}

export interface IUserListProps {
  userList: User[]
  setUserList: React.Dispatch<React.SetStateAction<User[]>>
  isSearchActive: boolean
  loadingInitialUserBatch: boolean
  preFetchedUserBatch: User[]
}
