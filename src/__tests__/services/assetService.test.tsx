import { httpClient } from '../../app/middleware/axiosInterceptor';

import assetService from '../../app/services/assetService'

describe("AssetService", () => {

    beforeEach(() => {
        jest.clearAllMocks();
      });
      

    test("Success getting data back from api and return to action correctly",   (done) => {
        const spyOne = jest.spyOn(httpClient, 'get').mockImplementation(
            () => Promise.resolve({
                    data: 'mockValue'
                })
        )

        const callBackFunction = ( (isError:boolean,callbackData: any) =>{
                expect(isError).toEqual(false);
                expect(callbackData).toEqual('mockValue' )
                done();
        });

        assetService.getAssetParameters(callBackFunction)
        expect(spyOne).toHaveBeenCalled();
    })

    test("Failed getting data back from api",   (done) => {
        const spyOne = jest.spyOn(httpClient, 'get').mockImplementation(
            () => Promise.reject({
                    response: {
                        data:'mockErrorValue'
                    }
                })
        )
        const callBackFunction = ( (isError:boolean,callbackData: any) =>{
                expect(isError).toEqual(true);
                expect(callbackData).toEqual('mockErrorValue' )
                done();
        });

        assetService.getAssetParameters(callBackFunction)
        expect(spyOne).toHaveBeenCalled();
    })
});