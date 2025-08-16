import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
  WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { Airdrop } from './Airdrop';

import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
  const endpoint = "https://solana-devnet.g.alchemy.com/v2/CyOzj-kIWbyLC0Du5e31s"
  // wallets = empty array cuz apne aap detect kr lega but ni krta to we have to name it
  return (
    <>
      <div className='h-screen w-screen flex items-center justify-center relative'>

        <ConnectionProvider endpoint={endpoint}>

          <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>


              <div className="absolute top-4 right-4 flex gap-2">
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
              <Airdrop />

            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </div>
    </>
  )
}

export default App
