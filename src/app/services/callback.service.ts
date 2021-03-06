import { ApiConstant } from "../utils/constants/apiConstant";
import { httpClient } from "../middleware/axiosInterceptor";

const CallBackService = {
    getUplinkData(deviceCode: string, callback: Function) {
        httpClient
            .get(`${ApiConstant.Callback}/uplink/${deviceCode}`)
            .then(function (response) {
                callback(false, response.data.data);
            })
            .catch(function (error) {
                callback(true, error);
            });
    },
};
export default CallBackService;
