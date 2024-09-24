import { useMutation } from "@tanstack/react-query"
import { request } from "../utils/axiosConfig"

const updateWatchHistory = async (videoId) => {
    if(!videoId) return;
    return await request({url:"/users/update-history",method:"POST", data:{videoId}})
}

const useUpdateWatchHistory = (videoId) => {
    return useMutation({
        mutationKey: ["update-watch-history",videoId],
        mutationFn: updateWatchHistory,
    })
}

export default useUpdateWatchHistory;
