import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import { getFactoryContract } from "../constants/contracts";
import { getProvider } from "../constants/providers";
import toast from "react-hot-toast";

const useENSRegistration = () => {
    const { walletProvider } = useWeb3ModalProvider();

    async function create(_address, _email, _avatar) {
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();
        const contract = getFactoryContract(signer);
        const loadingToast1 = toast.loading('Creating your ENS name..');
        try {

            const transaction = await contract.registerENS(_address, _email, _avatar);

            console.log("transaction: ", transaction);
            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);

            // if (receipt.status)
                toast.remove(loadingToast1)
            toast.success(`ENS successfully created`)
            console.log("ENS registration successful");
        } catch (error) {
            toast.remove(loadingToast1)
            toast.error("Name already registered")
            console.error(
                error.reason
            );
        }
    }

    return { create }
};

export default useENSRegistration;