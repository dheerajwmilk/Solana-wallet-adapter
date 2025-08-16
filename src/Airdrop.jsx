import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import React, { useState } from 'react'

export const Airdrop = () => {
    const wallet = useWallet(); 
    const publicKey = wallet.publicKey;
    const { connection } = useConnection();
    const [inputvalue, setInputValue] = useState("");
    const [success, setSuccess] = useState(false);     

    const sendAirdropToUser = async () => {
        try {
            await connection.requestAirdrop(publicKey, inputvalue * 1000000000)
            setSuccess(true);                          
            setTimeout(() => setSuccess(false), 3000);    
        } catch (err) {
            alert("Something went wrong");
        }
    }

    const handleChange = (e) => {
        if (e.target.value >= 0) {
            setInputValue(e.target.value)
        } else {
            alert("No negative number pls")
        }
    }

    return (
        <>
            <div className="relative flex flex-col sm:flex-row gap-4 items-center bg-gray-800 h-150 w-150 pl-10">
                {success && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-md animate-bounce">
                        Airdrop Successful ✅
                    </div>
                )}

                <div>
                    <div className="font-extrabold absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                            <image href="src/assets/solana-sol-icon.svg" height="24" width="24" />
                        </svg>
                        SOLANA DROP
                    </div>

                    <div className="flex gap-4 items-center mt-10">
                        <input
                            type="number"
                            placeholder="Enter sol to drop"
                            value={inputvalue}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-44 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />

                        <button
                            onClick={sendAirdropToUser}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition duration-200"
                        >
                            Airdrop
                        </button>
                    </div>
                    <div className="mt-4 text-sm text-gray-200 break-all">
                        {publicKey ? (
                            <>
                                Here is your public key:
                                <br />
                                {publicKey.toString()}
                            </>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
