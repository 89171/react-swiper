import React from 'react';
import Slider from './Slider'
import logo from './logo.svg';
import './App.css';
import './common.css';

const vehicleTypes = [
      {
          "id": 1,
          "name": "经济型",
          "desc": "锋范/宝来/卡罗拉等同级车",
          "img": "//dimg04.c-ctrip.com/images/410l1d000001e8sw60EC5.png",
          "seat": 4,
          "bag": 2,
          "productInfos": [
              {
                  "priceMark": "135801",
                  "score": "4.7",
                  "salePrice": 315,
                  "originPrice": 315,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 13580,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"588D6F4009052A44F348D85B08A76B2A\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":10,\\\"bookingControlType\\\":1,\\\"timePrice\\\":30,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":1,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":1,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"Dnjie+157+59+2825/0/41 07:35:99\\\",\\\"ctripVehicleTypeId\\\":1,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":315.00,\\\"saleAmount\\\":315.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":13580,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"kovRYRq+r7A=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":315,\"totamt\":315,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":1,\"fixedId\":0}"
              },
              {
                  "priceMark": "222221",
                  "score": "4.7",
                  "salePrice": 314,
                  "originPrice": 314,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 22222,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"04CB06E07EC663ED398329F46D4024C8\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":1,\\\"bookingControlType\\\":1,\\\"timePrice\\\":30,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":1,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":1,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"15e53815facef6\\\",\\\"ctripVehicleTypeId\\\":1,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":314,\\\"saleAmount\\\":314,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":22222,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"TyJ/caJnZ6Q=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":314,\"totamt\":314,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":1,\"fixedId\":0}"
              },
              {
                  "priceMark": "115231",
                  "score": "5.0",
                  "salePrice": 338,
                  "originPrice": 338,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 11523,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"DEDC54DC32AA04B40B45A0AE3AF6E344\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":1,\\\"bookingControlType\\\":1,\\\"timePrice\\\":30,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":1,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":1,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"E5333CBE4F6BDD7D\\\",\\\"ctripVehicleTypeId\\\":1,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":338,\\\"saleAmount\\\":338,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":11523,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"CfYmJKnLmHY=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":338,\"totamt\":338,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":1,\"fixedId\":0}"
              },
              {
                  "priceMark": "146031",
                  "score": "4.7",
                  "salePrice": 330,
                  "originPrice": 330,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 14603,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"6B01643F453FBCAE045216EA0B550ABD\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":2,\\\"vendorVehicleTypeId\\\":0,\\\"bookingControlType\\\":1,\\\"timePrice\\\":30,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":1,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":1,\\\"newProduct\\\":true,\\\"ctripVehicleTypeId\\\":1,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":330.00,\\\"saleAmount\\\":330.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":14603,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"oqxMTyFCU54=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":330,\"totamt\":330,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":1,\"fixedId\":0}"
              },
              {
                  "priceMark": "200121",
                  "score": "5.0",
                  "salePrice": 528,
                  "originPrice": 528,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20012,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"56B2D859B6149D988C37EAEEEE9D050E\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":1,\\\"bookingControlType\\\":1,\\\"timePrice\\\":30,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":1,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":1,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"1-528\\\",\\\"ctripVehicleTypeId\\\":1,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":528,\\\"saleAmount\\\":528,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20012,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"r8Ai+bqsbnE=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":528,\"totamt\":528,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":1,\"fixedId\":0}"
              },
              {
                  "priceMark": "199931",
                  "score": "5.0",
                  "salePrice": 597,
                  "originPrice": 597,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 19993,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"DDD0D582C5C25BBCD485578112401696\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":1,\\\"bookingControlType\\\":1,\\\"timePrice\\\":30,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":1,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":1,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"cdcb324e3ff54eeea2\\\",\\\"ctripVehicleTypeId\\\":1,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":597.0,\\\"saleAmount\\\":597.0,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":19993,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":120,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"z38JkSrLZN0=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":597,\"totamt\":597,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":1,\"fixedId\":0}"
              },
              {
                  "priceMark": "200001",
                  "score": "5.0",
                  "salePrice": 899,
                  "originPrice": 899,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20000,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"0AB23C08941C03BE8D4B0B3685FC159B\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":1,\\\"bookingControlType\\\":1,\\\"timePrice\\\":30,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":1,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":1,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"LKLbK5W6t12hLwM\\\",\\\"ctripVehicleTypeId\\\":1,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":899,\\\"saleAmount\\\":899,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20000,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"gEeecOAuINs=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":899,\"totamt\":899,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":1,\"fixedId\":0}"
              },
              {
                  "priceMark": "199981",
                  "score": "4.7",
                  "salePrice": 799,
                  "originPrice": 799,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 19998,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"ACADAA0C35FDC5E710AA6E1CCC44B164\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":2,\\\"vendorVehicleTypeId\\\":0,\\\"bookingControlType\\\":1,\\\"timePrice\\\":30,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":1,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":1,\\\"newProduct\\\":true,\\\"ctripVehicleTypeId\\\":1,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":799.00,\\\"saleAmount\\\":799.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":19998,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"WBOtrBSe/dQ=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":799,\"totamt\":799,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":1,\"fixedId\":0}"
              }
          ]
      },
      {
          "id": 2,
          "name": "舒适型",
          "desc": "帕萨特/天籁/雅阁等同级车",
          "img": "//pages.c-ctrip.com/car_dcs/idayimgs/car-shushi.png?v=190628",
          "seat": 4,
          "bag": 2,
          "productInfos": [
              {
                  "priceMark": "135802",
                  "score": "4.7",
                  "salePrice": 340,
                  "originPrice": 340,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 13580,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"452F3E727C37CE081A448B93BEEF6F88\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":11,\\\"bookingControlType\\\":1,\\\"timePrice\\\":30,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"Dnjie+182+50+2825/0/41 07:35:99\\\",\\\"ctripVehicleTypeId\\\":2,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":340.00,\\\"saleAmount\\\":340.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":13580,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"SXU5FPE/wn4=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":340,\"totamt\":340,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":2,\"fixedId\":0}"
              },
              {
                  "priceMark": "222222",
                  "score": "4.7",
                  "salePrice": 339,
                  "originPrice": 339,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 22222,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"DD42EDDC00EA5C34386299FAAA8336E8\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":2,\\\"bookingControlType\\\":1,\\\"timePrice\\\":30,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"15e53815fad06c\\\",\\\"ctripVehicleTypeId\\\":2,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":339,\\\"saleAmount\\\":339,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":22222,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"hcY0/nlyRB8=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":339,\"totamt\":339,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":2,\"fixedId\":0}"
              },
              {
                  "priceMark": "115232",
                  "score": "5.0",
                  "salePrice": 368,
                  "originPrice": 368,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 11523,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"3806DD2EED255245ADD9A6EC7381D503\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":2,\\\"bookingControlType\\\":1,\\\"timePrice\\\":30,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"E5333CBE4F6BDD7D\\\",\\\"ctripVehicleTypeId\\\":2,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":368,\\\"saleAmount\\\":368,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":11523,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"0D7LuWYNNok=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":368,\"totamt\":368,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":2,\"fixedId\":0}"
              },
              {
                  "priceMark": "146032",
                  "score": "4.7",
                  "salePrice": 360,
                  "originPrice": 360,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 14603,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"D73BE38F1D82E9926134DED0BEC2C764\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":2,\\\"vendorVehicleTypeId\\\":0,\\\"bookingControlType\\\":1,\\\"timePrice\\\":30,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"ctripVehicleTypeId\\\":2,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":360.00,\\\"saleAmount\\\":360.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":14603,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"VbD449lEG2k=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":360,\"totamt\":360,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":2,\"fixedId\":0}"
              },
              {
                  "priceMark": "199932",
                  "score": "5.0",
                  "salePrice": 625,
                  "originPrice": 625,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 19993,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"6A76EDAFEE005ADA6D5B25E837613699\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":2,\\\"bookingControlType\\\":1,\\\"timePrice\\\":30,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"a0707ed2ca1f4dc59d\\\",\\\"ctripVehicleTypeId\\\":2,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":625.0,\\\"saleAmount\\\":625.0,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":19993,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":120,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"6QqZNJXtlxA=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":625,\"totamt\":625,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":2,\"fixedId\":0}"
              },
              {
                  "priceMark": "200002",
                  "score": "5.0",
                  "salePrice": 959,
                  "originPrice": 959,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20000,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"6473141B1533DE88F15BB10DDA4D8C4F\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":2,\\\"bookingControlType\\\":1,\\\"timePrice\\\":30,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"bNIru2kEtX4QSjs\\\",\\\"ctripVehicleTypeId\\\":2,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":959,\\\"saleAmount\\\":959,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20000,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"DOFo9CO8E/4=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":959,\"totamt\":959,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":2,\"fixedId\":0}"
              },
              {
                  "priceMark": "199982",
                  "score": "4.7",
                  "salePrice": 888,
                  "originPrice": 888,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 19998,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"2978604A476630669344EE9B2449EB6A\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":2,\\\"vendorVehicleTypeId\\\":0,\\\"bookingControlType\\\":1,\\\"timePrice\\\":30,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"ctripVehicleTypeId\\\":2,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":888.00,\\\"saleAmount\\\":888.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":19998,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"CFBdW/pkSzY=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":888,\"totamt\":888,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":2,\"fixedId\":0}"
              }
          ]
      },
      {
          "id": 5,
          "name": "商务型",
          "desc": "别克GL8等同级车",
          "img": "//dimg04.c-ctrip.com/images/41061d000001e998dE279.png",
          "seat": 6,
          "bag": 4,
          "productInfos": [
              {
                  "priceMark": "115235",
                  "score": "5.0",
                  "salePrice": 458,
                  "originPrice": 458,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 11523,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"EB6A748045C7FDF042B37EF1C716C0A3\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":5,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"E5333CBE4F6BDD7D\\\",\\\"ctripVehicleTypeId\\\":5,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":458,\\\"saleAmount\\\":458,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":11523,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"gUmd1oa/4/0=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":458,\"totamt\":458,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":5,\"fixedId\":0}"
              },
              {
                  "priceMark": "135805",
                  "score": "4.7",
                  "salePrice": 440,
                  "originPrice": 440,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 13580,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"0C58C6022E34B0149C3A693B0C314DCF\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":13,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"Dnjie+282+52+2825/0/41 07:35:99\\\",\\\"ctripVehicleTypeId\\\":5,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":440.00,\\\"saleAmount\\\":440.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":13580,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"+21yxP3RKCo=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":440,\"totamt\":440,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":5,\"fixedId\":0}"
              },
              {
                  "priceMark": "222225",
                  "score": "4.7",
                  "salePrice": 439,
                  "originPrice": 439,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 22222,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"D4EC0CFBC33541B8024A5BA89A8CBEC5\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":5,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"15e53815fad185\\\",\\\"ctripVehicleTypeId\\\":5,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":439,\\\"saleAmount\\\":439,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":22222,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"IaKyEF/D+c8=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":439,\"totamt\":439,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":5,\"fixedId\":0}"
              },
              {
                  "priceMark": "187205",
                  "score": "5.0",
                  "salePrice": 599,
                  "originPrice": 599,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 18720,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"C4FC654B14AADA3A4DA6910BD7591335\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":5,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"11863479546\\\",\\\"ctripVehicleTypeId\\\":5,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":599.0,\\\"saleAmount\\\":599.0,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":18720,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":120,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"vCWMZwK6fs0=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":599,\"totamt\":599,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":5,\"fixedId\":0}"
              },
              {
                  "priceMark": "146035",
                  "score": "4.7",
                  "salePrice": 450,
                  "originPrice": 450,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 14603,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"8FD70947F0D1D47E422CFB9FFD46F4B7\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":2,\\\"vendorVehicleTypeId\\\":0,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"ctripVehicleTypeId\\\":5,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":450.00,\\\"saleAmount\\\":450.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":14603,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"cXL6tE2J+3w=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":450,\"totamt\":450,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":5,\"fixedId\":0}"
              },
              {
                  "priceMark": "200125",
                  "score": "5.0",
                  "salePrice": 658,
                  "originPrice": 658,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20012,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"FBBBDF4E6DBBD6E73746FF8BF5AE5AEF\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":5,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"5-658\\\",\\\"ctripVehicleTypeId\\\":5,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":658,\\\"saleAmount\\\":658,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20012,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"lEYtGVjHLss=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":658,\"totamt\":658,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":5,\"fixedId\":0}"
              },
              {
                  "priceMark": "199935",
                  "score": "5.0",
                  "salePrice": 800,
                  "originPrice": 800,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 19993,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"D683B5A69788A8B2B657D116B7A0A3B8\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":5,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"db6a746e0cc348148a\\\",\\\"ctripVehicleTypeId\\\":5,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":800.0,\\\"saleAmount\\\":800.0,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":19993,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":120,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"LwRYV+OCp94=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":800,\"totamt\":800,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":5,\"fixedId\":0}"
              },
              {
                  "priceMark": "200005",
                  "score": "5.0",
                  "salePrice": 1029,
                  "originPrice": 1029,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20000,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"3FF43337389866A5A6D4600BC34FF18E\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":3,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"5AWP69FUay6jEpb\\\",\\\"ctripVehicleTypeId\\\":5,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1029,\\\"saleAmount\\\":1029,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20000,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"7bOKCpte2qI=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1029,\"totamt\":1029,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":5,\"fixedId\":0}"
              },
              {
                  "priceMark": "199985",
                  "score": "4.7",
                  "salePrice": 899,
                  "originPrice": 899,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 19998,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"0AB23C08941C03BE8D4B0B3685FC159B\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":2,\\\"vendorVehicleTypeId\\\":0,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"ctripVehicleTypeId\\\":5,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":899.00,\\\"saleAmount\\\":899.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":19998,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"gEeecOAuINs=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":899,\"totamt\":899,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":5,\"fixedId\":0}"
              }
          ]
      },
      {
          "id": 3,
          "name": "豪华型",
          "desc": "奥迪A6/宝马5系/奔驰E级等同级车",
          "img": "//pages.c-ctrip.com/car_dcs/idayimgs/car-haohua.png?v=190628",
          "seat": 4,
          "bag": 3,
          "productInfos": [
              {
                  "priceMark": "115233",
                  "score": "5.0",
                  "salePrice": 868,
                  "originPrice": 868,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 11523,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"A7251B3DC5B487F0B64A5452DD013CCC\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":3,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"E5333CBE4F6BDD7D\\\",\\\"ctripVehicleTypeId\\\":3,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":868,\\\"saleAmount\\\":868,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":11523,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"XL0u38rRqwE=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":868,\"totamt\":868,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":3,\"fixedId\":0}"
              },
              {
                  "priceMark": "135803",
                  "score": "4.7",
                  "salePrice": 860,
                  "originPrice": 860,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 13580,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"3BE163812BF0EF30CB5DD7D0D22753AD\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":14,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"Dnjie+602+53+2825/0/41 07:35:99\\\",\\\"ctripVehicleTypeId\\\":3,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":860.00,\\\"saleAmount\\\":860.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":13580,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"ptgaAEIUALY=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":860,\"totamt\":860,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":3,\"fixedId\":0}"
              },
              {
                  "priceMark": "146033",
                  "score": "4.7",
                  "salePrice": 860,
                  "originPrice": 860,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 14603,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"3BE163812BF0EF30CB5DD7D0D22753AD\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":2,\\\"vendorVehicleTypeId\\\":0,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"ctripVehicleTypeId\\\":3,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":860.00,\\\"saleAmount\\\":860.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":14603,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"ptgaAEIUALY=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":860,\"totamt\":860,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":3,\"fixedId\":0}"
              },
              {
                  "priceMark": "187203",
                  "score": "5.0",
                  "salePrice": 929,
                  "originPrice": 929,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 18720,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"A059E5B1AE82350E63C49EAD000B6274\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":3,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"10861741772\\\",\\\"ctripVehicleTypeId\\\":3,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":929.0,\\\"saleAmount\\\":929.0,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":18720,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":120,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"LRg4cWKd0Qg=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":929,\"totamt\":929,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":3,\"fixedId\":0}"
              },
              {
                  "priceMark": "222223",
                  "score": "4.7",
                  "salePrice": 880,
                  "originPrice": 880,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 22222,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"33B8542FEFCFE45DE9B312EE8AB0E176\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":3,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"15e53815fad271\\\",\\\"ctripVehicleTypeId\\\":3,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":880,\\\"saleAmount\\\":880,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":22222,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"5WJX9Dmk68M=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":880,\"totamt\":880,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":3,\"fixedId\":0}"
              },
              {
                  "priceMark": "199933",
                  "score": "5.0",
                  "salePrice": 950,
                  "originPrice": 950,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 19993,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"DAC2056CB5263860794FB30B86B493BD\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":3,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"68a96b8dbf334187ad\\\",\\\"ctripVehicleTypeId\\\":3,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":950.0,\\\"saleAmount\\\":950.0,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":19993,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":120,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"N9bhqMzzWBM=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":950,\"totamt\":950,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":3,\"fixedId\":0}"
              },
              {
                  "priceMark": "200123",
                  "score": "5.0",
                  "salePrice": 988,
                  "originPrice": 988,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20012,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"FED9940A09D57C3779BDE5768D4E3861\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":3,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"3-988\\\",\\\"ctripVehicleTypeId\\\":3,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":988,\\\"saleAmount\\\":988,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20012,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"83fDARj7qss=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":988,\"totamt\":988,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":3,\"fixedId\":0}"
              },
              {
                  "priceMark": "200003",
                  "score": "5.0",
                  "salePrice": 1399,
                  "originPrice": 1399,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20000,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"9DF17909DAEFE3DF0AC7C7DEE2794905\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":4,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"JWWffBt4sIrA9zS\\\",\\\"ctripVehicleTypeId\\\":3,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1399,\\\"saleAmount\\\":1399,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20000,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"YoYwVLTJvDw=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1399,\"totamt\":1399,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":3,\"fixedId\":0}"
              },
              {
                  "priceMark": "199983",
                  "score": "4.7",
                  "salePrice": 999,
                  "originPrice": 999,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 19998,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"0A7C356214847762BD493B4043F3B893\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":2,\\\"vendorVehicleTypeId\\\":0,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"ctripVehicleTypeId\\\":3,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":999.00,\\\"saleAmount\\\":999.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":19998,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":240,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"inN2STbBVKI=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":999,\"totamt\":999,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":3,\"fixedId\":0}"
              }
          ]
      },
      {
          "id": 20,
          "name": "8座小巴",
          "desc": "丰田海狮/金杯阁瑞斯/福特全顺等同级车",
          "img": "//dimg04.c-ctrip.com/images/41051d000001eb53pC8EC.png",
          "seat": 8,
          "bag": 4,
          "productInfos": [
              {
                  "priceMark": "2222220",
                  "score": "4.7",
                  "salePrice": 550,
                  "originPrice": 550,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 22222,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"A94453B8EE3A93366DD1A113AD693D2B\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":20,\\\"bookingControlType\\\":1,\\\"timePrice\\\":40,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"15e53815fad6a4\\\",\\\"ctripVehicleTypeId\\\":20,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":550,\\\"saleAmount\\\":550,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":22222,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"pTq3navkPjE=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":550,\"totamt\":550,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":20,\"fixedId\":0}"
              },
              {
                  "priceMark": "1460320",
                  "score": "4.7",
                  "salePrice": 550,
                  "originPrice": 550,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 14603,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"A94453B8EE3A93366DD1A113AD693D2B\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":2,\\\"vendorVehicleTypeId\\\":0,\\\"bookingControlType\\\":1,\\\"timePrice\\\":40,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"ctripVehicleTypeId\\\":20,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":550.00,\\\"saleAmount\\\":550.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":14603,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"pTq3navkPjE=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":550,\"totamt\":550,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":20,\"fixedId\":0}"
              },
              {
                  "priceMark": "1872020",
                  "score": "5.0",
                  "salePrice": 570,
                  "originPrice": 570,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 18720,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"C62DE6346D35CC052A95CB07624422BC\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":20,\\\"bookingControlType\\\":1,\\\"timePrice\\\":40,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"10191473800\\\",\\\"ctripVehicleTypeId\\\":20,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":570.0,\\\"saleAmount\\\":570.0,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":18720,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"rgrt261pOto=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":570,\"totamt\":570,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":20,\"fixedId\":0}"
              },
              {
                  "priceMark": "1358020",
                  "score": "4.7",
                  "salePrice": 630,
                  "originPrice": 630,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 13580,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"3C1F4BC6ED0A28F01B47D26AD531F81C\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":19,\\\"bookingControlType\\\":1,\\\"timePrice\\\":40,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"Dnjie+472+58+2825/0/41 07:35:99\\\",\\\"ctripVehicleTypeId\\\":20,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":630.00,\\\"saleAmount\\\":630.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":13580,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"O3pbru+d1u0=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":630,\"totamt\":630,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":20,\"fixedId\":0}"
              },
              {
                  "priceMark": "2000020",
                  "score": "5.0",
                  "salePrice": 838,
                  "originPrice": 838,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20000,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"87F54792BCEA84FAD844C23225B3FB6A\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":5,\\\"bookingControlType\\\":1,\\\"timePrice\\\":40,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"MYswpdeR9IoONWH\\\",\\\"ctripVehicleTypeId\\\":20,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":838,\\\"saleAmount\\\":838,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20000,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"GC4m7pjiCNw=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":838,\"totamt\":838,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":20,\"fixedId\":0}"
              },
              {
                  "priceMark": "2001220",
                  "score": "5.0",
                  "salePrice": 888,
                  "originPrice": 888,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20012,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"2978604A476630669344EE9B2449EB6A\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":20,\\\"bookingControlType\\\":1,\\\"timePrice\\\":40,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"20-888\\\",\\\"ctripVehicleTypeId\\\":20,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":888,\\\"saleAmount\\\":888,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20012,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"CFBdW/pkSzY=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":888,\"totamt\":888,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":20,\"fixedId\":0}"
              },
              {
                  "priceMark": "1152320",
                  "score": "5.0",
                  "salePrice": 1790,
                  "originPrice": 1790,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 11523,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"1B386E550D9A5895A7D5F1B563A3C18C\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":20,\\\"bookingControlType\\\":1,\\\"timePrice\\\":40,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":3,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"E5333CBE4F6BDD7D\\\",\\\"ctripVehicleTypeId\\\":20,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1790,\\\"saleAmount\\\":1790,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":11523,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":720,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"G1MDa/5Erxg=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1790,\"totamt\":1790,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":20,\"fixedId\":0}"
              }
          ]
      },
      {
          "id": 14,
          "name": "10座小巴",
          "desc": "丰田海狮/金杯阁瑞斯/福特全顺等同级车",
          "img": "//dimg04.c-ctrip.com/images/41051d000001eb53pC8EC.png",
          "seat": 10,
          "bag": 5,
          "productInfos": [
              {
                  "priceMark": "2222214",
                  "score": "4.7",
                  "salePrice": 600,
                  "originPrice": 600,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 22222,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"0488B6DE1ED88C8A923B1928F1EFB1D7\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":14,\\\"bookingControlType\\\":1,\\\"timePrice\\\":40,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":4,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"15e53815fad380\\\",\\\"ctripVehicleTypeId\\\":14,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":600,\\\"saleAmount\\\":600,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":22222,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"JdJuPlUsqeU=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":600,\"totamt\":600,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":14,\"fixedId\":0}"
              },
              {
                  "priceMark": "1460314",
                  "score": "4.7",
                  "salePrice": 600,
                  "originPrice": 600,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 14603,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"0488B6DE1ED88C8A923B1928F1EFB1D7\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":2,\\\"vendorVehicleTypeId\\\":0,\\\"bookingControlType\\\":1,\\\"timePrice\\\":40,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":4,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"ctripVehicleTypeId\\\":14,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":600.00,\\\"saleAmount\\\":600.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":14603,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"JdJuPlUsqeU=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":600,\"totamt\":600,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":14,\"fixedId\":0}"
              },
              {
                  "priceMark": "1872014",
                  "score": "5.0",
                  "salePrice": 633,
                  "originPrice": 633,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 18720,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"20272EFEA3941A504B056165E6136519\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":14,\\\"bookingControlType\\\":1,\\\"timePrice\\\":40,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":4,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"10623603108\\\",\\\"ctripVehicleTypeId\\\":14,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":633.0,\\\"saleAmount\\\":633.0,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":18720,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"VQD0NrfFs2I=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":633,\"totamt\":633,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":14,\"fixedId\":0}"
              },
              {
                  "priceMark": "1358014",
                  "score": "4.7",
                  "salePrice": 632,
                  "originPrice": 632,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 13580,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"1D74A65F66EDEFFC15CE98BDEC0C7146\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":2,\\\"bookingControlType\\\":1,\\\"timePrice\\\":40,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":4,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"Dnjie+474+6+3000/0/66 55:53:69\\\",\\\"ctripVehicleTypeId\\\":14,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":632.00,\\\"saleAmount\\\":632.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":13580,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"mUmWL5PuCls=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":632,\"totamt\":632,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":14,\"fixedId\":0}"
              },
              {
                  "priceMark": "2000014",
                  "score": "5.0",
                  "salePrice": 898,
                  "originPrice": 898,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20000,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"6D752C060BBFC4957EA4CB0E2D638BFF\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":6,\\\"bookingControlType\\\":1,\\\"timePrice\\\":40,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":4,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"W5MXBzjgYIRT2W2\\\",\\\"ctripVehicleTypeId\\\":14,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":898,\\\"saleAmount\\\":898,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20000,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"45NSPuqTvLI=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":898,\"totamt\":898,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":14,\"fixedId\":0}"
              },
              {
                  "priceMark": "2001214",
                  "score": "5.0",
                  "salePrice": 988,
                  "originPrice": 988,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20012,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"FED9940A09D57C3779BDE5768D4E3861\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":14,\\\"bookingControlType\\\":1,\\\"timePrice\\\":40,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":4,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"14-988\\\",\\\"ctripVehicleTypeId\\\":14,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":988,\\\"saleAmount\\\":988,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20012,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"83fDARj7qss=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":988,\"totamt\":988,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":14,\"fixedId\":0}"
              },
              {
                  "priceMark": "1152314",
                  "score": "5.0",
                  "salePrice": 1845,
                  "originPrice": 1845,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 11523,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"12EA7B168ACF3AA70CCBB636BEE1B6EB\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":14,\\\"bookingControlType\\\":1,\\\"timePrice\\\":40,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":4,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"E5333CBE4F6BDD7D\\\",\\\"ctripVehicleTypeId\\\":14,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1845,\\\"saleAmount\\\":1845,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":11523,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":720,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"2JRmaFt/i3U=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1845,\"totamt\":1845,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":14,\"fixedId\":0}"
              }
          ]
      },
      {
          "id": 21,
          "name": "14座中巴",
          "desc": "丰田海狮/福特全顺等同级车",
          "img": "//dimg04.c-ctrip.com/images/410w1d000001eeo5fBBAE.png",
          "seat": 14,
          "bag": 5,
          "productInfos": [
              {
                  "priceMark": "2222221",
                  "score": "4.7",
                  "salePrice": 680,
                  "originPrice": 680,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 22222,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"CA30D2318BAAE37D1EE8CEC367A3BD3F\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":21,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":4,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"15e53815fadc5b\\\",\\\"ctripVehicleTypeId\\\":21,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":680,\\\"saleAmount\\\":680,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":22222,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"fRlvDSI9sDQ=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":680,\"totamt\":680,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":21,\"fixedId\":0}"
              },
              {
                  "priceMark": "1460321",
                  "score": "4.7",
                  "salePrice": 680,
                  "originPrice": 680,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 14603,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"CA30D2318BAAE37D1EE8CEC367A3BD3F\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":2,\\\"vendorVehicleTypeId\\\":0,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":4,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"ctripVehicleTypeId\\\":21,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":680.00,\\\"saleAmount\\\":680.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":14603,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"fRlvDSI9sDQ=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":680,\"totamt\":680,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":21,\"fixedId\":0}"
              },
              {
                  "priceMark": "1872021",
                  "score": "5.0",
                  "salePrice": 700,
                  "originPrice": 700,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 18720,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"9795DC2C26F8490F89BABC91DBBF6408\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":21,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":4,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"10316024115\\\",\\\"ctripVehicleTypeId\\\":21,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":700.0,\\\"saleAmount\\\":700.0,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":18720,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"9YmABTCJ4EU=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":700,\"totamt\":700,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":21,\"fixedId\":0}"
              },
              {
                  "priceMark": "1358021",
                  "score": "4.7",
                  "salePrice": 700,
                  "originPrice": 700,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 13580,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"9795DC2C26F8490F89BABC91DBBF6408\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":15,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":4,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"Dnjie+542+54+2825/0/41 07:35:99\\\",\\\"ctripVehicleTypeId\\\":21,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":700.00,\\\"saleAmount\\\":700.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":13580,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"9YmABTCJ4EU=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":700,\"totamt\":700,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":21,\"fixedId\":0}"
              },
              {
                  "priceMark": "2000021",
                  "score": "5.0",
                  "salePrice": 958,
                  "originPrice": 958,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20000,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"FE85A37C3C4B7249A0F42868544D7122\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":7,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":4,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"Qv2W4YKYD3hUoru\\\",\\\"ctripVehicleTypeId\\\":21,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":958,\\\"saleAmount\\\":958,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20000,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"tChbIj+rsx0=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":958,\"totamt\":958,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":21,\"fixedId\":0}"
              },
              {
                  "priceMark": "2001221",
                  "score": "5.0",
                  "salePrice": 1018,
                  "originPrice": 1018,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20012,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"D33EB5D90355257C2A3EDA9B306837AC\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":21,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":4,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"21-1018\\\",\\\"ctripVehicleTypeId\\\":21,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1018,\\\"saleAmount\\\":1018,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20012,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"/laErImPnh4=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1018,\"totamt\":1018,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":21,\"fixedId\":0}"
              },
              {
                  "priceMark": "1152321",
                  "score": "5.0",
                  "salePrice": 1855,
                  "originPrice": 1855,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 11523,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"E92F3B855B3DD2FA3ACDF47092EDB7BA\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":21,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":4,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"E5333CBE4F6BDD7D\\\",\\\"ctripVehicleTypeId\\\":21,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1855,\\\"saleAmount\\\":1855,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":11523,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":720,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"aI6jXFZeqOY=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1855,\"totamt\":1855,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":21,\"fixedId\":0}"
              }
          ]
      },
      {
          "id": 15,
          "name": "19座中巴",
          "desc": "金龙/宇通等同级车",
          "img": "//dimg04.c-ctrip.com/images/410w1d000001eeo5fBBAE.png",
          "seat": 19,
          "bag": 5,
          "productInfos": [
              {
                  "priceMark": "2222215",
                  "score": "4.7",
                  "salePrice": 750,
                  "originPrice": 750,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 22222,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"6AA8A8F538E2B1FA76D5EBA38D73C244\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":15,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"15e53815fade4f\\\",\\\"ctripVehicleTypeId\\\":15,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":750,\\\"saleAmount\\\":750,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":22222,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"9jYVdQgr6/g=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":750,\"totamt\":750,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":15,\"fixedId\":0}"
              },
              {
                  "priceMark": "1460315",
                  "score": "4.7",
                  "salePrice": 750,
                  "originPrice": 750,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 14603,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"6AA8A8F538E2B1FA76D5EBA38D73C244\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":2,\\\"vendorVehicleTypeId\\\":0,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"ctripVehicleTypeId\\\":15,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":750.00,\\\"saleAmount\\\":750.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":14603,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"9jYVdQgr6/g=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":750,\"totamt\":750,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":15,\"fixedId\":0}"
              },
              {
                  "priceMark": "1872015",
                  "score": "5.0",
                  "salePrice": 790,
                  "originPrice": 790,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 18720,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"AA733B879E937A765F304CDA2E67D721\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":15,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"12011723597\\\",\\\"ctripVehicleTypeId\\\":15,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":790.0,\\\"saleAmount\\\":790.0,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":18720,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"2dg15t3acsU=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":790,\"totamt\":790,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":15,\"fixedId\":0}"
              },
              {
                  "priceMark": "2000015",
                  "score": "5.0",
                  "salePrice": 1028,
                  "originPrice": 1028,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20000,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"52602E9B0BC6D7B6F98A863C922B5540\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":8,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"eCK1pmYsRhq4t5a\\\",\\\"ctripVehicleTypeId\\\":15,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1028,\\\"saleAmount\\\":1028,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20000,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"ncJYp6GwH4A=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1028,\"totamt\":1028,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":15,\"fixedId\":0}"
              },
              {
                  "priceMark": "2001215",
                  "score": "5.0",
                  "salePrice": 1118,
                  "originPrice": 1118,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20012,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"6D6FA5157CD4C8E6C00D58344DBF989F\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":15,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"15-1118\\\",\\\"ctripVehicleTypeId\\\":15,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1118,\\\"saleAmount\\\":1118,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20012,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"oGWLsW1tUo0=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1118,\"totamt\":1118,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":15,\"fixedId\":0}"
              },
              {
                  "priceMark": "1152315",
                  "score": "5.0",
                  "salePrice": 1850,
                  "originPrice": 1850,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 11523,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"4EBB907CF1958CCFDCAC402E9FFE94F9\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":15,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"E5333CBE4F6BDD7D\\\",\\\"ctripVehicleTypeId\\\":15,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1850,\\\"saleAmount\\\":1850,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":11523,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":720,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"9+pgOUA1CCM=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1850,\"totamt\":1850,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":15,\"fixedId\":0}"
              },
              {
                  "priceMark": "1358015",
                  "score": "4.7",
                  "salePrice": 1788,
                  "originPrice": 1788,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 13580,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"1326671C0357890B611E23745427C77D\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":3,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"Dnjie+9105+2+2825/0/41 07:35:99\\\",\\\"ctripVehicleTypeId\\\":15,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1788.00,\\\"saleAmount\\\":1788.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":13580,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"2/qq6734wiU=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1788,\"totamt\":1788,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":15,\"fixedId\":0}"
              }
          ]
      },
      {
          "id": 23,
          "name": "25座中巴",
          "desc": "金龙/宇通等同级车",
          "img": "//dimg04.c-ctrip.com/images/410w1d000001eeo5fBBAE.png",
          "seat": 25,
          "bag": 5,
          "productInfos": [
              {
                  "priceMark": "2222223",
                  "score": "4.7",
                  "salePrice": 820,
                  "originPrice": 820,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 22222,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"705C809E0F040A421917B920C1E06F69\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":23,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"15e53815fad7e5\\\",\\\"ctripVehicleTypeId\\\":23,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":820,\\\"saleAmount\\\":820,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":22222,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"wcfPiojBO9o=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":820,\"totamt\":820,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":23,\"fixedId\":0}"
              },
              {
                  "priceMark": "1872023",
                  "score": "5.0",
                  "salePrice": 858,
                  "originPrice": 858,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 18720,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"BA238623B0333D8B96BB7211258D2F56\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":23,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"10662793892\\\",\\\"ctripVehicleTypeId\\\":23,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":858.0,\\\"saleAmount\\\":858.0,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":18720,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"H0F3BKhEjjs=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":858,\"totamt\":858,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":23,\"fixedId\":0}"
              },
              {
                  "priceMark": "1460323",
                  "score": "4.7",
                  "salePrice": 950,
                  "originPrice": 950,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 14603,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"DAC2056CB5263860794FB30B86B493BD\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":2,\\\"vendorVehicleTypeId\\\":0,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"ctripVehicleTypeId\\\":23,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":950.00,\\\"saleAmount\\\":950.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":14603,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"N9bhqMzzWBM=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":950,\"totamt\":950,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":23,\"fixedId\":0}"
              },
              {
                  "priceMark": "2000023",
                  "score": "5.0",
                  "salePrice": 1198,
                  "originPrice": 1198,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20000,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"37C7405D7100D0178AE1FF7B2207B691\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":9,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"OpaNwep37nvzVk3\\\",\\\"ctripVehicleTypeId\\\":23,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1198,\\\"saleAmount\\\":1198,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20000,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"jx1ErblWp1I=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1198,\"totamt\":1198,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":23,\"fixedId\":0}"
              },
              {
                  "priceMark": "2001223",
                  "score": "5.0",
                  "salePrice": 1288,
                  "originPrice": 1288,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20012,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"6945419547B9E6FC461669AF4C55C5A0\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":23,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"23-1288\\\",\\\"ctripVehicleTypeId\\\":23,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1288,\\\"saleAmount\\\":1288,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20012,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"Td2JAkhRoQQ=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1288,\"totamt\":1288,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":23,\"fixedId\":0}"
              },
              {
                  "priceMark": "1152323",
                  "score": "5.0",
                  "salePrice": 2065,
                  "originPrice": 2065,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 11523,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"91DA2173D73F50E350EE96BA64B05F3B\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":23,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"E5333CBE4F6BDD7D\\\",\\\"ctripVehicleTypeId\\\":23,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":2065,\\\"saleAmount\\\":2065,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":11523,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":720,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"fHBulID7VGg=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":2065,\"totamt\":2065,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":23,\"fixedId\":0}"
              },
              {
                  "priceMark": "1358023",
                  "score": "4.7",
                  "salePrice": 2066,
                  "originPrice": 2066,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 13580,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"673892CDC64103972943E9FAF53ED2A8\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":20,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"Dnjie+0483+11+0078/6/98 26:50:95\\\",\\\"ctripVehicleTypeId\\\":23,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":2066.00,\\\"saleAmount\\\":2066.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":13580,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"OElF4z5JVf8=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":2066,\"totamt\":2066,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":23,\"fixedId\":0}"
              }
          ]
      },
      {
          "id": 22,
          "name": "30座大巴",
          "desc": "金龙/宇通等同级车",
          "img": "//pages.c-ctrip.com/car_dcs/idayimgs/car-large.png?v=190628",
          "seat": 30,
          "bag": 10,
          "productInfos": [
              {
                  "priceMark": "2222222",
                  "score": "4.7",
                  "salePrice": 1230,
                  "originPrice": 1230,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 22222,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"35A2BF38B0538FA7397AED15461992D9\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":22,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"15e53815fadb12\\\",\\\"ctripVehicleTypeId\\\":22,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1230,\\\"saleAmount\\\":1230,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":22222,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"q7WIIBa6Iw4=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1230,\"totamt\":1230,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":22,\"fixedId\":0}"
              },
              {
                  "priceMark": "1460322",
                  "score": "4.7",
                  "salePrice": 1230,
                  "originPrice": 1230,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 14603,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"35A2BF38B0538FA7397AED15461992D9\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":2,\\\"vendorVehicleTypeId\\\":0,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"ctripVehicleTypeId\\\":22,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1230.00,\\\"saleAmount\\\":1230.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":14603,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"q7WIIBa6Iw4=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1230,\"totamt\":1230,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":22,\"fixedId\":0}"
              },
              {
                  "priceMark": "2001222",
                  "score": "5.0",
                  "salePrice": 1488,
                  "originPrice": 1488,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20012,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"75D57A8E9D6D0F5C4179E0820C36F17A\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":22,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"22-1488\\\",\\\"ctripVehicleTypeId\\\":22,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1488,\\\"saleAmount\\\":1488,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20012,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"Hs6QAd/+lMo=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1488,\"totamt\":1488,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":22,\"fixedId\":0}"
              },
              {
                  "priceMark": "1872022",
                  "score": "5.0",
                  "salePrice": 1620,
                  "originPrice": 1620,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 18720,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"4ED8AC470746162F53FF3FE51DC0EDCB\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":22,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"10309626030\\\",\\\"ctripVehicleTypeId\\\":22,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1620.0,\\\"saleAmount\\\":1620.0,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":18720,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"+TVIViogcqQ=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1620,\"totamt\":1620,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":22,\"fixedId\":0}"
              },
              {
                  "priceMark": "2000022",
                  "score": "5.0",
                  "salePrice": 1638,
                  "originPrice": 1638,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20000,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"A7D8122A1C0AE6A79A7B79097563ED10\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":10,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"6uQdlDvTQfpzp3D\\\",\\\"ctripVehicleTypeId\\\":22,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1638,\\\"saleAmount\\\":1638,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20000,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"oigEHu9E4IU=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1638,\"totamt\":1638,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":22,\"fixedId\":0}"
              },
              {
                  "priceMark": "1152322",
                  "score": "5.0",
                  "salePrice": 2365,
                  "originPrice": 2365,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 11523,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"115020FF11DD3022A2D7EDC2636C5077\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":22,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"E5333CBE4F6BDD7D\\\",\\\"ctripVehicleTypeId\\\":22,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":2365,\\\"saleAmount\\\":2365,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":11523,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":720,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"ETaXgLvdpJ4=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":2365,\"totamt\":2365,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":22,\"fixedId\":0}"
              },
              {
                  "priceMark": "1358022",
                  "score": "4.7",
                  "salePrice": 2288,
                  "originPrice": 2288,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 13580,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"2B5D205B50D247529E2E1A42CCCFC866\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":4,\\\"bookingControlType\\\":1,\\\"timePrice\\\":50,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":2,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"Dnjie+0605+3+2825/0/41 07:35:99\\\",\\\"ctripVehicleTypeId\\\":22,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":2288.00,\\\"saleAmount\\\":2288.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":13580,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"6Q7l2R1aeXc=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":2288,\"totamt\":2288,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":22,\"fixedId\":0}"
              }
          ]
      },
      {
          "id": 16,
          "name": "35座大巴",
          "desc": "金龙/宇通等同级车",
          "img": "//pages.c-ctrip.com/car_dcs/idayimgs/car-large.png?v=190628",
          "seat": 35,
          "bag": 35,
          "productInfos": [
              {
                  "priceMark": "2222216",
                  "score": "4.7",
                  "salePrice": 1300,
                  "originPrice": 1300,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 22222,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"059E7D289F84666D0601EB4412B4B62D\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":16,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":3,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"15e53815fad458\\\",\\\"ctripVehicleTypeId\\\":16,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1300,\\\"saleAmount\\\":1300,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":22222,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"i9njH1FXT9U=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1300,\"totamt\":1300,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":16,\"fixedId\":0}"
              },
              {
                  "priceMark": "1460316",
                  "score": "4.7",
                  "salePrice": 1300,
                  "originPrice": 1300,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 14603,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"059E7D289F84666D0601EB4412B4B62D\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":2,\\\"vendorVehicleTypeId\\\":0,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":3,\\\"newProduct\\\":true,\\\"ctripVehicleTypeId\\\":16,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1300.00,\\\"saleAmount\\\":1300.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":14603,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"i9njH1FXT9U=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1300,\"totamt\":1300,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":16,\"fixedId\":0}"
              },
              {
                  "priceMark": "2000016",
                  "score": "5.0",
                  "salePrice": 1578,
                  "originPrice": 1578,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20000,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"522622B4ED8DEDBFA0DBED1E449D8552\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":11,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":3,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"FSdZkxFYtb69pk9\\\",\\\"ctripVehicleTypeId\\\":16,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1578,\\\"saleAmount\\\":1578,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20000,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"4nFBAwlzbQo=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1578,\"totamt\":1578,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":16,\"fixedId\":0}"
              },
              {
                  "priceMark": "2001216",
                  "score": "5.0",
                  "salePrice": 1588,
                  "originPrice": 1588,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20012,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"FFF84097BEE250DDA93AD0EFA6B00827\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":16,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":3,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"16-1588\\\",\\\"ctripVehicleTypeId\\\":16,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1588,\\\"saleAmount\\\":1588,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20012,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"//3Zx6aVzRY=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1588,\"totamt\":1588,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":16,\"fixedId\":0}"
              },
              {
                  "priceMark": "1872016",
                  "score": "5.0",
                  "salePrice": 1680,
                  "originPrice": 1680,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 18720,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"9A4E821EFCC5BCF5535DC4AF5B669C43\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":16,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":3,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"10463295578\\\",\\\"ctripVehicleTypeId\\\":16,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1680.0,\\\"saleAmount\\\":1680.0,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":18720,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"ACKOnuRYLg8=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1680,\"totamt\":1680,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":16,\"fixedId\":0}"
              },
              {
                  "priceMark": "1152316",
                  "score": "5.0",
                  "salePrice": 2465,
                  "originPrice": 2465,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 11523,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"69E41F32F4CD01941E2A15336F51E255\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":16,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":3,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"E5333CBE4F6BDD7D\\\",\\\"ctripVehicleTypeId\\\":16,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":2465,\\\"saleAmount\\\":2465,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":11523,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":720,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"6MkYN3zUodw=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":2465,\"totamt\":2465,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":16,\"fixedId\":0}"
              },
              {
                  "priceMark": "1358016",
                  "score": "4.7",
                  "salePrice": 2488,
                  "originPrice": 2488,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 13580,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"57B6129C31CF63105F0BB893B9BBB9D5\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":5,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":3,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"Dnjie+0805+4+2825/0/41 07:35:99\\\",\\\"ctripVehicleTypeId\\\":16,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":2488.00,\\\"saleAmount\\\":2488.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":13580,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"Ocq25W9l4Q8=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":2488,\"totamt\":2488,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":16,\"fixedId\":0}"
              }
          ]
      },
      {
          "id": 24,
          "name": "40座大巴",
          "desc": "金龙等同级车",
          "img": "//pages.c-ctrip.com/car_dcs/idayimgs/car-large.png?v=190628",
          "seat": 40,
          "bag": 20,
          "productInfos": [
              {
                  "priceMark": "1460324",
                  "score": "4.7",
                  "salePrice": 1440,
                  "originPrice": 1440,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 14603,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"6DDD929B4EA0AD3D6E10A96990D6B535\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":2,\\\"vendorVehicleTypeId\\\":0,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":3,\\\"newProduct\\\":true,\\\"ctripVehicleTypeId\\\":24,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1440.00,\\\"saleAmount\\\":1440.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":14603,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"p0CnS3Er39M=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1440,\"totamt\":1440,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":24,\"fixedId\":0}"
              }
          ]
      },
      {
          "id": 17,
          "name": "43座大巴",
          "desc": "金龙/宇通等同级车",
          "img": "//pages.c-ctrip.com/car_dcs/idayimgs/car-large.png?v=190628",
          "seat": 43,
          "bag": 43,
          "productInfos": [
              {
                  "priceMark": "2222217",
                  "score": "4.7",
                  "salePrice": 1500,
                  "originPrice": 1500,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 22222,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"05B9A1550D981709B92CD94110DDFCAF\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":17,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":3,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"15e53815fadd5f\\\",\\\"ctripVehicleTypeId\\\":17,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1500,\\\"saleAmount\\\":1500,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":22222,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"N9kUUEtWKDk=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1500,\"totamt\":1500,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":17,\"fixedId\":0}"
              },
              {
                  "priceMark": "1460317",
                  "score": "4.7",
                  "salePrice": 1500,
                  "originPrice": 1500,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 14603,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"05B9A1550D981709B92CD94110DDFCAF\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":2,\\\"vendorVehicleTypeId\\\":0,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":3,\\\"newProduct\\\":true,\\\"ctripVehicleTypeId\\\":17,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1500.00,\\\"saleAmount\\\":1500.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":14603,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"N9kUUEtWKDk=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1500,\"totamt\":1500,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":17,\"fixedId\":0}"
              },
              {
                  "priceMark": "2000017",
                  "score": "5.0",
                  "salePrice": 1698,
                  "originPrice": 1698,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20000,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"AF7B1F0E96EC21E0464EAE04C27E3796\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":12,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":3,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"v4b7ZDfCKyYh01j\\\",\\\"ctripVehicleTypeId\\\":17,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1698,\\\"saleAmount\\\":1698,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20000,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"fN2fz+fC+aI=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1698,\"totamt\":1698,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":17,\"fixedId\":0}"
              },
              {
                  "priceMark": "2001217",
                  "score": "5.0",
                  "salePrice": 1888,
                  "originPrice": 1888,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20012,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"A05D41BA0BE22ADAD867C99EAF350EE4\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":17,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":3,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"17-1888\\\",\\\"ctripVehicleTypeId\\\":17,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":1888,\\\"saleAmount\\\":1888,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20012,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"f3aB+lGr3qI=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":1888,\"totamt\":1888,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":17,\"fixedId\":0}"
              },
              {
                  "priceMark": "1872017",
                  "score": "5.0",
                  "salePrice": 2080,
                  "originPrice": 2080,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 18720,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"CBC8B44704E1EE9CB05F42D0E6BFC970\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":17,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":3,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"12042484037\\\",\\\"ctripVehicleTypeId\\\":17,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":2080.0,\\\"saleAmount\\\":2080.0,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":18720,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"ploP2WJvOFg=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":2080,\"totamt\":2080,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":17,\"fixedId\":0}"
              },
              {
                  "priceMark": "1152317",
                  "score": "5.0",
                  "salePrice": 2765,
                  "originPrice": 2765,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 11523,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"EB115458D148A96D39E4E48EC19E3174\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":17,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":3,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"E5333CBE4F6BDD7D\\\",\\\"ctripVehicleTypeId\\\":17,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":2765,\\\"saleAmount\\\":2765,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":11523,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":720,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"hxyK0+F+5k8=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":2765,\"totamt\":2765,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":17,\"fixedId\":0}"
              },
              {
                  "priceMark": "1358017",
                  "score": "4.7",
                  "salePrice": 2790,
                  "originPrice": 2790,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 13580,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"B6CA2625C1E7E7D70DAE1842EBB04AD7\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":6,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":3,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"Dnjie+0117+5+2825/0/41 07:35:99\\\",\\\"ctripVehicleTypeId\\\":17,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":2790.00,\\\"saleAmount\\\":2790.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":13580,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":60,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"CS+a5kNy0pI=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":2790,\"totamt\":2790,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":17,\"fixedId\":0}"
              }
          ]
      },
      {
          "id": 26,
          "name": "53座大巴",
          "desc": "金龙/宇通等同级车",
          "img": "//pages.c-ctrip.com/car_dcs/idayimgs/car-large.png?v=190628",
          "seat": 53,
          "bag": 53,
          "productInfos": [
              {
                  "priceMark": "2222226",
                  "score": "4.7",
                  "salePrice": 2699,
                  "originPrice": 2699,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 22222,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"AF0A35666A442E0E3038D8E57C1010A4\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":26,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":3,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"15e53815fad581\\\",\\\"ctripVehicleTypeId\\\":26,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":2699,\\\"saleAmount\\\":2699,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":22222,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"jBO+6N3Wj+Y=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":2699,\"totamt\":2699,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":26,\"fixedId\":0}"
              },
              {
                  "priceMark": "1460326",
                  "score": "4.7",
                  "salePrice": 2700,
                  "originPrice": 2700,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 14603,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"3EA1FE7C451041672A5E3A0829C5B15F\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":2,\\\"vendorVehicleTypeId\\\":0,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":3,\\\"newProduct\\\":true,\\\"ctripVehicleTypeId\\\":26,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":2700.00,\\\"saleAmount\\\":2700.00,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":14603,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"won9p5YBI/s=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":2700,\"totamt\":2700,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":26,\"fixedId\":0}"
              },
              {
                  "priceMark": "2000026",
                  "score": "5.0",
                  "salePrice": 2898,
                  "originPrice": 2898,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20000,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"2424F54327513E3B0219CF21C9DEF563\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":13,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":3,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"Es42tK6FyQXTHfV\\\",\\\"ctripVehicleTypeId\\\":26,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":2898,\\\"saleAmount\\\":2898,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20000,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"5vdC3ntgse4=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":2898,\"totamt\":2898,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":26,\"fixedId\":0}"
              },
              {
                  "priceMark": "2001226",
                  "score": "5.0",
                  "salePrice": 3018,
                  "originPrice": 3018,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 20012,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"444CB240221C6F3C5A522531DD273430\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":26,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":3,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"26-3018\\\",\\\"ctripVehicleTypeId\\\":26,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":3018,\\\"saleAmount\\\":3018,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":20012,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"Q14i0yRgZHs=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":3018,\"totamt\":3018,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":26,\"fixedId\":0}"
              },
              {
                  "priceMark": "1872026",
                  "score": "5.0",
                  "salePrice": 3395,
                  "originPrice": 3395,
                  "couponPrice": 0,
                  "couponCode": null,
                  "vendorId": 18720,
                  "addServiceIds": [],
                  "serviceTagDesc": null,
                  "refs": "{\"priceMark\":\"B82BA1E810A72E4CF9023F68E30B4AF1\",\"vendorPriceMark\":\"{\\\"dpt\\\":{\\\"nm\\\":\\\"维亚大厦\\\",\\\"addr\\\":\\\"海淀区 苏州街29号\\\",\\\"lat\\\":39.977580286787,\\\"lng\\\":116.3057325434,\\\"cid\\\":1,\\\"cnm\\\":\\\"北京\\\"},\\\"isVendorProduct\\\":true,\\\"vendorOrderConfirmType\\\":4,\\\"vendorVehicleTypeId\\\":26,\\\"bookingControlType\\\":1,\\\"timePrice\\\":100,\\\"timePriceUnit\\\":\\\"小时\\\",\\\"distancePrice\\\":5,\\\"distancePriceUnit\\\":\\\"公里\\\",\\\"workBeginTime\\\":\\\"00:00\\\",\\\"workEndTime\\\":\\\"23:59\\\",\\\"kongShiKmCost\\\":3,\\\"newProduct\\\":true,\\\"priceMark\\\":\\\"10496797283\\\",\\\"ctripVehicleTypeId\\\":26,\\\"useDuration\\\":1,\\\"productCategoryId\\\":32,\\\"costAmount\\\":3395.0,\\\"saleAmount\\\":3395.0,\\\"isCrossCity\\\":false,\\\"isRoundTrip\\\":false,\\\"vendorId\\\":18720,\\\"serviceMileage\\\":100,\\\"serviceTime\\\":8,\\\"useCityId\\\":1,\\\"accommodationPrice\\\":350,\\\"maxAdvanceBookingMinutes\\\":129600,\\\"minAdvanceBookingMinutes\\\":180,\\\"freeCancelMinutes\\\":1440,\\\"vendorConfirmMinutes\\\":90,\\\"productId\\\":0,\\\"differentialMileage\\\":0}\",\"priid\":\"MCpvuJzRzKM=\",\"cityId\":1,\"useDuration\":1,\"prdid\":0,\"oriamt\":3395,\"totamt\":3395,\"isCrossCity\":false,\"isRoundTrip\":false,\"outsideStay\":0,\"arriveCityId\":1,\"promotionId\":0,\"dpt\":\"维亚大厦\",\"useTime\":\"2020-02-25 19:00\",\"includeTime\":8,\"includeKm\":100,\"ctripVehicleTypeId\":26,\"fixedId\":0}"
              }
          ]
      }
  ]

// function App() {
//   function onSlide(item,index){
//     console.log(item,index)
//   }
//   function renderItem(item,index){
//     return (
//       <div style={{backgroundImage:`url(${item.img})`}} className="package_car_img"></div>
//     )
//   }
//   return (
//     <div className="App">
//       <Slider
//         className="test"
//         itemStyle=""
//         itemWidth="20%"
//         curIdx={1}
//         dataList={vehicleTypes}
//         prevClass=""
//         activeClass=""
//         onSlide={onSlide}
//         renderItem={renderItem}
//       />
//     </div>
//   );
// }
class App extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      index:1
    }
  }
  onSlide = (item,index)=>{
    console.log(item,index)
  }
  renderItem = (item,index)=>{
    return (
      <div style={{backgroundImage:`url(${item.img})`}} className="package_car_img"></div>
    )
  }
  render(){
      return (
        <div className="App">
          <Slider
            wrapperClass="test"
            itemStyle={{}}
            itemWidth="20%"
            curIdx={this.state.index}
            dataList={vehicleTypes}
            prevClass="normal"
            activeClass="active"
            onSlide={this.onSlide}
            renderItem={this.renderItem}
          />
        </div>
      );
  }
}
export default App;
