import factoryAbi from "../constants/factoryAbi.json"
import multicallAbi from "../constants/multicall.json";
import { ethers } from "ethers";
import { readOnlyProvider } from "../constants/providers";
import { useEffect, useState } from "react";
import { getFactoryContract } from "../constants/contracts";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const useGetAllUserTicket = () => {
    const [data, setData] = useState({ loading: true, data: [] });
    const { address } = useWeb3ModalAccount()

    useEffect(() => {
        (
            async () => {
                const contract = getFactoryContract(readOnlyProvider)
                const itf = new ethers.Interface(factoryAbi);
                const allEvents = await contract.getAllEvents()
                const numberOfCalls = allEvents.length

                let calls = []
                for (let i = 0; i < Number(numberOfCalls); i++) {
                    calls.push({
                        target: process.env.REACT_APP_FACTORY_CONTRACT_ADDRESS,
                        callData: itf.encodeFunctionData("balanceOfTickets", [i, address, 1]),
                    })
                }

                const multicall = new ethers.Contract(
                    process.env.REACT_APP_MULTICALL_CONTRACT_ADDRESS,
                    multicallAbi,
                    readOnlyProvider
                );

                const callResults = await multicall.tryAggregate.staticCall(
                    false,
                    calls
                );

                const validResponsesIndex = [];

                const validResponses = callResults.filter((x, i) => {
                    if (x[0] === true) {
                        validResponsesIndex.push(i);
                        return true;
                    }
                    return false;
                });

                const decodedResponses = validResponses.map((x) =>
                    itf.decodeFunctionResult("balanceOfTickets", x[1])
                );

                let tickets = []

                for (let i = 0; i < decodedResponses.length; i++) {
                    const obj = decodedResponses[i][0];
                    tickets.push(obj)
                }


                setData({ loading: false, data: tickets })
            })();
    }, []);

    return data;

}

export default useGetAllUserTicket
