import {
  RailgunERC20AmountRecipient,
  RailgunNFTAmountRecipient,
  RailgunPopulateTransactionResponse,
  RailgunTransactionGasEstimateResponse,
} from '@railgun-community/shared-models';
import {
  gasEstimateForUnprovenUnshield,
  gasEstimateForUnprovenUnshieldBaseToken,
  gasEstimateForUnprovenUnshieldToOrigin,
  getERC20AndNFTAmountRecipientsForUnshieldToOrigin,
  populateProvedUnshield,
  populateProvedUnshieldBaseToken,
  populateProvedUnshieldToOrigin,
} from '@railgun-community/wallet';
import {
  BridgeCallEvent,
  GasEstimateForUnprovenUnshieldBaseTokenParams,
  GasEstimateForUnprovenUnshieldParams,
  GasEstimateForUnprovenUnshieldToOriginParams,
  GetERC20AndNFTAmountRecipientsForUnshieldToOriginParams,
  PopulateProvedUnshieldBaseTokenParams,
  PopulateProvedUnshieldParams,
  PopulateProvedUnshieldToOriginParams,
} from '@react-shared';
import { bridgeRegisterCall } from '../worker-ipc-service';

bridgeRegisterCall<
  PopulateProvedUnshieldParams,
  RailgunPopulateTransactionResponse
>(
  BridgeCallEvent.PopulateProvedUnshield,
  async ({
    txidVersion,
    networkName,
    railWalletID,
    erc20AmountRecipients,
    nftAmountRecipients,
    broadcasterFeeERC20AmountRecipient,
    sendWithPublicWallet,
    overallBatchMinGasPrice,
    transactionGasDetails,
  }) => {
    return populateProvedUnshield(
      txidVersion,
      networkName,
      railWalletID,
      erc20AmountRecipients,
      nftAmountRecipients,
      broadcasterFeeERC20AmountRecipient,
      sendWithPublicWallet,
      overallBatchMinGasPrice,
      transactionGasDetails,
    );
  },
);

bridgeRegisterCall<
  PopulateProvedUnshieldBaseTokenParams,
  RailgunPopulateTransactionResponse
>(
  BridgeCallEvent.PopulateProvedUnshieldBaseToken,
  async ({
    txidVersion,
    networkName,
    publicWalletAddress,
    railWalletID,
    wrappedTokenAmount,
    broadcasterFeeERC20AmountRecipient,
    sendWithPublicWallet,
    overallBatchMinGasPrice,
    transactionGasDetails,
  }) => {
    return populateProvedUnshieldBaseToken(
      txidVersion,
      networkName,
      publicWalletAddress,
      railWalletID,
      wrappedTokenAmount,
      broadcasterFeeERC20AmountRecipient,
      sendWithPublicWallet,
      overallBatchMinGasPrice,
      transactionGasDetails,
    );
  },
);

bridgeRegisterCall<
  PopulateProvedUnshieldToOriginParams,
  RailgunPopulateTransactionResponse
>(
  BridgeCallEvent.PopulateProvedUnshieldToOrigin,
  async ({
    txidVersion,
    networkName,
    railWalletID,
    erc20AmountRecipients,
    nftAmountRecipients,
    transactionGasDetails,
  }) => {
    return populateProvedUnshieldToOrigin(
      txidVersion,
      networkName,
      railWalletID,
      erc20AmountRecipients,
      nftAmountRecipients,
      transactionGasDetails,
    );
  },
);

bridgeRegisterCall<
  GasEstimateForUnprovenUnshieldParams,
  RailgunTransactionGasEstimateResponse
>(
  BridgeCallEvent.GasEstimateForUnprovenUnshield,
  async ({
    txidVersion,
    networkName,
    railWalletID,
    encryptionKey,
    erc20AmountRecipients,
    nftAmountRecipients,
    originalGasDetails,
    feeTokenDetails,
    sendWithPublicWallet,
  }) => {
    return gasEstimateForUnprovenUnshield(
      txidVersion,
      networkName,
      railWalletID,
      encryptionKey,
      erc20AmountRecipients,
      nftAmountRecipients,
      originalGasDetails,
      feeTokenDetails,
      sendWithPublicWallet,
    );
  },
);

bridgeRegisterCall<
  GasEstimateForUnprovenUnshieldBaseTokenParams,
  RailgunTransactionGasEstimateResponse
>(
  BridgeCallEvent.GasEstimateForUnprovenUnshieldBaseToken,
  async ({
    txidVersion,
    networkName,
    publicWalletAddress,
    railWalletID,
    encryptionKey,
    wrappedTokenAmount,
    originalGasDetails,
    feeTokenDetails,
    sendWithPublicWallet,
  }) => {
    return gasEstimateForUnprovenUnshieldBaseToken(
      txidVersion,
      networkName,
      publicWalletAddress,
      railWalletID,
      encryptionKey,
      wrappedTokenAmount,
      originalGasDetails,
      feeTokenDetails,
      sendWithPublicWallet,
    );
  },
);

bridgeRegisterCall<
  GasEstimateForUnprovenUnshieldToOriginParams,
  RailgunTransactionGasEstimateResponse
>(
  BridgeCallEvent.GasEstimateForUnprovenUnshieldToOrigin,
  async ({
    originalShieldTxid,
    txidVersion,
    networkName,
    railWalletID,
    encryptionKey,
    erc20AmountRecipients,
    nftAmountRecipients,
  }) => {
    return gasEstimateForUnprovenUnshieldToOrigin(
      originalShieldTxid,
      txidVersion,
      networkName,
      railWalletID,
      encryptionKey,
      erc20AmountRecipients,
      nftAmountRecipients,
    );
  },
);

bridgeRegisterCall<
  GetERC20AndNFTAmountRecipientsForUnshieldToOriginParams,
  {
    erc20AmountRecipients: RailgunERC20AmountRecipient[];
    nftAmountRecipients: RailgunNFTAmountRecipient[];
  }
>(
  BridgeCallEvent.GetERC20AndNFTAmountRecipientsForUnshieldToOrigin,
  async ({ txidVersion, networkName, railgunWalletID, originalShieldTxid }) => {
    return getERC20AndNFTAmountRecipientsForUnshieldToOrigin(
      txidVersion,
      networkName,
      railgunWalletID,
      originalShieldTxid,
    );
  },
);
