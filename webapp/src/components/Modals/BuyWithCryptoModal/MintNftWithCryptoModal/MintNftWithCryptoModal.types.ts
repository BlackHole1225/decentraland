import { WithAuthorizedActionProps } from 'decentraland-dapps/dist/containers/withAuthorizedAction'
import { ModalProps } from 'decentraland-dapps/dist/providers/ModalProvider/ModalProvider.types'
import type { Route } from 'decentraland-transactions/crossChain'
import { Contract } from '../../../../modules/vendor/services'
import { getContract } from '../../../../modules/contract/selectors'
import {
  buyItemRequest,
  buyItemWithCardRequest
} from '../../../../modules/item/actions'

export type Props = WithAuthorizedActionProps & ModalProps &  {
  getContract: (query: Partial<Contract>) => ReturnType<typeof getContract>
  onBuyItem: typeof buyItemRequest
  onBuyItemCrossChain: (route: Route) => unknown
  onBuyWithCard: typeof buyItemWithCardRequest
}

export type MapStateProps = Pick<Props, 'getContract'>
export type MapDispatchProps = Pick<
  Props,
  'onBuyItem' | 'onBuyItemCrossChain' | 'onBuyWithCard'
>
export type OwnProps = Pick<Props, 'metadata'>