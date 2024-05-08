import factoryAbi from "../constants/factoryAbi.json"
import multicallAbi from "../constants/multicall.json";
import { ethers } from "ethers";
import { readOnlyProvider } from "../constants/providers";
import { useEffect, useState } from "react";
import { getFactoryContract } from "../constants/contracts";

const useGetAllUserTicket = () => {
    const [data, setData] = useState({loading: true, data:[]});

    useEffect(() => {
      (
        async () => {
            const contract = getFactoryContract(readOnlyProvider)
            const itf = new ethers.Interface(factoryAbi);

        }
      )
    
      return () => {
        second
      }
    }, [third])
    
}
