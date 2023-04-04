import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - logo
 *  -Nav Items
 * Body
 *  -Search
 *  -Restaurant Container
 *      -RestaurantCard
 * Footer
 *  -CopyRight
 *  -Links
 *  -Address
 */

 const resList = [
 {
   "type": "restaurant",
   "data": {
     "type": "F",
     "id": "523794",
     "name": "CAPITAL MULTICUISINE RESTAURANT",
     "uuid": "d3b3c599-1523-4c5e-a78e-d1bcb982752d",
     "city": "3",
     "area": "Himayath Nagar \r\n",
     "totalRatingsString": "500+ ratings",
     "cloudinaryImageId": "rkbt9oto4ub6d4uhmu35",
     "cuisines": [
       "Haleem",
       "Biryani",
       "North Indian"
     ],
     "tags": [
       
     ],
     "costForTwo": 35000,
     "costForTwoString": "₹350 FOR TWO",
     "deliveryTime": 36,
     "minDeliveryTime": 36,
     "maxDeliveryTime": 36,
     "slaString": "36 MINS",
     "lastMileTravel": 2.4000000953674316,
     "slugs": {
       "restaurant": "capital-multicuisine-restaurant-himayath-nagar-himayath-nagar",
       "city": "hyderabad"
     },
     "cityState": "3",
     "address": "3-6-285/A, Malkajgiri Circle No.28 , Hyderabad, Telangana, 500048",
     "locality": "Himayath Nagar",
     "parentId": 19262,
     "unserviceable": false,
     "veg": false,
     "select": false,
     "favorite": false,
     "tradeCampaignHeaders": [
       
     ],
     "aggregatedDiscountInfo": {
       "header": "50% off",
       "shortDescriptionList": [
         {
           "meta": "50% off | Use TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "descriptionList": [
         {
           "meta": "50% off up to ₹100 | Use code TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "subHeader": "",
       "headerType": 0,
       "superFreedel": ""
     },
     "aggregatedDiscountInfoV2": {
       "header": "50% OFF",
       "shortDescriptionList": [
         {
           "meta": "Use TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "descriptionList": [
         {
           "meta": "50% off up to ₹100 | Use code TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "subHeader": "",
       "headerType": 0,
       "superFreedel": ""
     },
     "ribbon": [
       {
         "type": "PROMOTED"
       }
     ],
     "chain": [
       
     ],
     "feeDetails": {
       "fees": [
         {
           "name": "distance",
           "fee": 2600,
           "message": ""
         },
         {
           "name": "time",
           "fee": 0,
           "message": ""
         },
         {
           "name": "special",
           "fee": 0,
           "message": ""
         }
       ],
       "totalFees": 2600,
       "message": "",
       "title": "Delivery Charge",
       "amount": "2600",
       "icon": ""
     },
     "availability": {
       "opened": true,
       "nextOpenMessage": "",
       "nextCloseMessage": ""
     },
     "longDistanceEnabled": 0,
     "rainMode": "NONE",
     "thirdPartyAddress": false,
     "thirdPartyVendor": "",
     "adTrackingID": "cid=6400372~p=1~eid=00000187-4c29-706f-05bd-834b001f0100",
     "badges": {
       "imageBased": [
         
       ],
       "textBased": [
         
       ],
       "textExtendedBadges": [
         
       ]
     },
     "lastMileTravelString": "2.4 kms",
     "hasSurge": false,
     "sla": {
       "restaurantId": "523794",
       "deliveryTime": 36,
       "minDeliveryTime": 36,
       "maxDeliveryTime": 36,
       "lastMileTravel": 2.4000000953674316,
       "lastMileDistance": 0,
       "serviceability": "SERVICEABLE",
       "rainMode": "NONE",
       "longDistance": "NOT_LONG_DISTANCE",
       "preferentialService": false,
       "iconType": "EMPTY"
     },
     "promoted": true,
     "avgRating": "3.6",
     "totalRatings": 500,
     "new": false
   },
   "subtype": "basic"
 },
 {
   "type": "restaurant",
   "data": {
     "type": "F",
     "id": "4320",
     "name": "Mehfil",
     "uuid": "4dee4970-8673-42b6-8a49-cab0efdb258f",
     "city": "3",
     "area": "Narayanguda",
     "totalRatingsString": "10000+ ratings",
     "cloudinaryImageId": "esp0fhddgfgdss5hyhpi",
     "cuisines": [
       "Biryani",
       "North Indian",
       "Tandoor",
       "Chinese",
       "Kebabs"
     ],
     "tags": [
       
     ],
     "costForTwo": 30000,
     "costForTwoString": "₹300 FOR TWO",
     "deliveryTime": 21,
     "minDeliveryTime": 21,
     "maxDeliveryTime": 21,
     "slaString": "21 MINS",
     "lastMileTravel": 1.899999976158142,
     "slugs": {
       "restaurant": "mehfil-narayanguda-himayath-nagar",
       "city": "hyderabad"
     },
     "cityState": "3",
     "address": "Near Narayanguda Flyover, Narayanguda, Hyderabad",
     "locality": "Near Narayanguda Flyover",
     "parentId": 637,
     "unserviceable": false,
     "veg": false,
     "select": false,
     "favorite": false,
     "tradeCampaignHeaders": [
       
     ],
     "aggregatedDiscountInfo": {
       "header": "10% off",
       "shortDescriptionList": [
         {
           "meta": "10% off | Use TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "descriptionList": [
         {
           "meta": "10% off up to ₹40 | Use code TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "subHeader": "",
       "headerType": 0,
       "superFreedel": ""
     },
     "aggregatedDiscountInfoV2": {
       "header": "10% OFF",
       "shortDescriptionList": [
         {
           "meta": "Use TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "descriptionList": [
         {
           "meta": "10% off up to ₹40 | Use code TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "subHeader": "",
       "headerType": 0,
       "superFreedel": ""
     },
     "chain": [
       
     ],
     "feeDetails": {
       "fees": [
         {
           "name": "distance",
           "fee": 2600,
           "message": ""
         },
         {
           "name": "time",
           "fee": 0,
           "message": ""
         },
         {
           "name": "special",
           "fee": 0,
           "message": ""
         }
       ],
       "totalFees": 2600,
       "message": "",
       "title": "Delivery Charge",
       "amount": "2600",
       "icon": ""
     },
     "availability": {
       "opened": true,
       "nextOpenMessage": "",
       "nextCloseMessage": ""
     },
     "longDistanceEnabled": 0,
     "rainMode": "NONE",
     "thirdPartyAddress": false,
     "thirdPartyVendor": "",
     "adTrackingID": "",
     "badges": {
       "imageBased": [
         
       ],
       "textBased": [
         
       ],
       "textExtendedBadges": [
         
       ]
     },
     "lastMileTravelString": "1.8 kms",
     "hasSurge": false,
     "sla": {
       "restaurantId": "4320",
       "deliveryTime": 21,
       "minDeliveryTime": 21,
       "maxDeliveryTime": 21,
       "lastMileTravel": 1.899999976158142,
       "lastMileDistance": 0,
       "serviceability": "SERVICEABLE",
       "rainMode": "NONE",
       "longDistance": "NOT_LONG_DISTANCE",
       "preferentialService": false,
       "iconType": "EMPTY"
     },
     "promoted": false,
     "avgRating": "3.9",
     "totalRatings": 10000,
     "new": false
   },
   "subtype": "basic"
 },
 {
   "type": "restaurant",
   "data": {
     "type": "F",
     "id": "40376",
     "name": "Santosh Dhaba Jashan",
     "uuid": "e160f395-466a-4cf0-b473-c08841259f70",
     "city": "3",
     "area": "Koti",
     "totalRatingsString": "5000+ ratings",
     "cloudinaryImageId": "ioxt85wcbgg3qtadlxik",
     "cuisines": [
       "North Indian",
       "Chinese",
       "Italian"
     ],
     "tags": [
       
     ],
     "costForTwo": 30000,
     "costForTwoString": "₹300 FOR TWO",
     "deliveryTime": 31,
     "minDeliveryTime": 31,
     "maxDeliveryTime": 31,
     "slaString": "31 MINS",
     "lastMileTravel": 1.7000000476837158,
     "slugs": {
       "restaurant": "santosh-dhaba-jashan-abids-abids-koti",
       "city": "hyderabad"
     },
     "cityState": "3",
     "address": "4-1-969/970, Ahuja Estate Lane, opp Santosh Sapna Theatre, Abids, Hyderabad",
     "locality": "Secunderabad",
     "parentId": 19162,
     "unserviceable": false,
     "veg": false,
     "select": false,
     "favorite": false,
     "tradeCampaignHeaders": [
       
     ],
     "aggregatedDiscountInfo": {
       "header": "20% off",
       "shortDescriptionList": [
         {
           "meta": "20% off | Use TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "descriptionList": [
         {
           "meta": "20% off up to ₹50 | Use code TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "subHeader": "",
       "headerType": 0,
       "superFreedel": ""
     },
     "aggregatedDiscountInfoV2": {
       "header": "20% OFF",
       "shortDescriptionList": [
         {
           "meta": "Use TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "descriptionList": [
         {
           "meta": "20% off up to ₹50 | Use code TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "subHeader": "",
       "headerType": 0,
       "superFreedel": ""
     },
     "ribbon": [
       {
         "type": "PROMOTED"
       }
     ],
     "chain": [
       
     ],
     "feeDetails": {
       "fees": [
         {
           "name": "distance",
           "fee": 2600,
           "message": ""
         },
         {
           "name": "time",
           "fee": 0,
           "message": ""
         },
         {
           "name": "special",
           "fee": 0,
           "message": ""
         }
       ],
       "totalFees": 2600,
       "message": "",
       "title": "Delivery Charge",
       "amount": "2600",
       "icon": ""
     },
     "availability": {
       "opened": true,
       "nextOpenMessage": "",
       "nextCloseMessage": ""
     },
     "longDistanceEnabled": 0,
     "rainMode": "NONE",
     "thirdPartyAddress": false,
     "thirdPartyVendor": "",
     "adTrackingID": "cid=6328379~p=4~eid=00000187-4c29-706f-05bd-834c001f0422",
     "badges": {
       "imageBased": [
         
       ],
       "textBased": [
         
       ],
       "textExtendedBadges": [
         
       ]
     },
     "lastMileTravelString": "1.7 kms",
     "hasSurge": false,
     "sla": {
       "restaurantId": "40376",
       "deliveryTime": 31,
       "minDeliveryTime": 31,
       "maxDeliveryTime": 31,
       "lastMileTravel": 1.7000000476837158,
       "lastMileDistance": 0,
       "serviceability": "SERVICEABLE",
       "rainMode": "NONE",
       "longDistance": "NOT_LONG_DISTANCE",
       "preferentialService": false,
       "iconType": "EMPTY"
     },
     "promoted": true,
     "avgRating": "4.1",
     "totalRatings": 5000,
     "new": false
   },
   "subtype": "basic"
 },
 {
   "type": "restaurant",
   "data": {
     "type": "F",
     "id": "4650",
     "name": "Bawarchi",
     "uuid": "4e784916-87ff-4951-9c21-2f0c1df1fb31",
     "city": "3",
     "area": "New Nallakunta",
     "totalRatingsString": "10000+ ratings",
     "cloudinaryImageId": "smfhai0o8rnjuzp3ngxu",
     "cuisines": [
       "Biryani",
       "Tandoor",
       "Chinese",
       "Indian",
       "Desserts",
       "Kebabs",
       "Mughlai"
     ],
     "tags": [
       
     ],
     "costForTwo": 30000,
     "costForTwoString": "₹300 FOR TWO",
     "deliveryTime": 32,
     "minDeliveryTime": 32,
     "maxDeliveryTime": 32,
     "slaString": "32 MINS",
     "lastMileTravel": 3,
     "slugs": {
       "restaurant": "bawarchi-nallakunta-vidyanagar",
       "city": "hyderabad"
     },
     "cityState": "3",
     "address": "Beside Astoria Hotel, RTC Cross Road, Chikkadpally, Nallakunta, Hyderabad",
     "locality": "RTC X roads",
     "parentId": 100,
     "unserviceable": false,
     "veg": false,
     "select": false,
     "favorite": false,
     "tradeCampaignHeaders": [
       
     ],
     "chain": [
       
     ],
     "feeDetails": {
       "fees": [
         {
           "name": "distance",
           "fee": 3200,
           "message": ""
         },
         {
           "name": "time",
           "fee": 0,
           "message": ""
         },
         {
           "name": "special",
           "fee": 0,
           "message": ""
         }
       ],
       "totalFees": 3200,
       "message": "",
       "title": "Delivery Charge",
       "amount": "3200",
       "icon": ""
     },
     "availability": {
       "opened": true,
       "nextOpenMessage": "",
       "nextCloseMessage": ""
     },
     "longDistanceEnabled": 0,
     "rainMode": "NONE",
     "thirdPartyAddress": false,
     "thirdPartyVendor": "",
     "adTrackingID": "",
     "badges": {
       "imageBased": [
         
       ],
       "textBased": [
         
       ],
       "textExtendedBadges": [
         
       ]
     },
     "lastMileTravelString": "3 kms",
     "hasSurge": false,
     "sla": {
       "restaurantId": "4650",
       "deliveryTime": 32,
       "minDeliveryTime": 32,
       "maxDeliveryTime": 32,
       "lastMileTravel": 3,
       "lastMileDistance": 0,
       "serviceability": "SERVICEABLE",
       "rainMode": "NONE",
       "longDistance": "NOT_LONG_DISTANCE",
       "preferentialService": false,
       "iconType": "EMPTY"
     },
     "promoted": false,
     "avgRating": "4.0",
     "totalRatings": 10000,
     "new": false
   },
   "subtype": "basic"
 },
 {
   "type": "restaurant",
   "data": {
     "type": "F",
     "id": "367769",
     "name": "Lucky Restaurant",
     "uuid": "0d2cb79c-7f66-4009-b393-3f9015ba849d",
     "city": "3",
     "area": "MasabTank",
     "totalRatingsString": "10000+ ratings",
     "cloudinaryImageId": "qems028i3da5rxf81rbp",
     "cuisines": [
       "Biryani",
       "North Indian",
       "Tandoor"
     ],
     "tags": [
       
     ],
     "costForTwo": 30000,
     "costForTwoString": "₹300 FOR TWO",
     "deliveryTime": 43,
     "minDeliveryTime": 43,
     "maxDeliveryTime": 43,
     "slaString": "43 MINS",
     "lastMileTravel": 4.800000190734863,
     "slugs": {
       "restaurant": "lucky-restaurant-banjara-hills-banjara-hills",
       "city": "hyderabad"
     },
     "cityState": "3",
     "address": "Dana Chambers, Saifabad Rd, Sham Nagar Colony, Chintal, Hyderabad, Telangana 500004",
     "locality": "Banjara Hills",
     "parentId": 293683,
     "unserviceable": false,
     "veg": false,
     "select": false,
     "favorite": false,
     "tradeCampaignHeaders": [
       
     ],
     "aggregatedDiscountInfo": {
       "header": "30% off",
       "shortDescriptionList": [
         {
           "meta": "30% off | Use TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "descriptionList": [
         {
           "meta": "30% off up to ₹75 | Use code TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "subHeader": "",
       "headerType": 0,
       "superFreedel": ""
     },
     "aggregatedDiscountInfoV2": {
       "header": "30% OFF",
       "shortDescriptionList": [
         {
           "meta": "Use TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "descriptionList": [
         {
           "meta": "30% off up to ₹75 | Use code TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "subHeader": "",
       "headerType": 0,
       "superFreedel": ""
     },
     "chain": [
       
     ],
     "feeDetails": {
       "fees": [
         {
           "name": "distance",
           "fee": 3800,
           "message": ""
         },
         {
           "name": "time",
           "fee": 0,
           "message": ""
         },
         {
           "name": "special",
           "fee": 0,
           "message": ""
         }
       ],
       "totalFees": 3800,
       "message": "",
       "title": "Delivery Charge",
       "amount": "3800",
       "icon": ""
     },
     "availability": {
       "opened": true,
       "nextOpenMessage": "",
       "nextCloseMessage": ""
     },
     "longDistanceEnabled": 0,
     "rainMode": "NONE",
     "thirdPartyAddress": false,
     "thirdPartyVendor": "",
     "adTrackingID": "",
     "badges": {
       "imageBased": [
         
       ],
       "textBased": [
         
       ],
       "textExtendedBadges": [
         
       ]
     },
     "lastMileTravelString": "4.8 kms",
     "hasSurge": false,
     "sla": {
       "restaurantId": "367769",
       "deliveryTime": 43,
       "minDeliveryTime": 43,
       "maxDeliveryTime": 43,
       "lastMileTravel": 4.800000190734863,
       "lastMileDistance": 0,
       "serviceability": "SERVICEABLE",
       "rainMode": "NONE",
       "longDistance": "NOT_LONG_DISTANCE",
       "preferentialService": false,
       "iconType": "EMPTY"
     },
     "promoted": false,
     "avgRating": "3.9",
     "totalRatings": 10000,
     "new": false
   },
   "subtype": "basic"
 },
 {
   "type": "restaurant",
   "data": {
     "type": "F",
     "id": "656729",
     "name": "FB Cakes",
     "uuid": "dab01047-972d-4d2b-a5e7-7a44cef19e30",
     "city": "3",
     "area": "Himayath Nagar",
     "totalRatingsString": "20+ ratings",
     "cloudinaryImageId": "a53bdeed939ae720286d75b1428916dd",
     "cuisines": [
       "Bakery",
       "Sweets",
       "Snacks"
     ],
     "tags": [
       
     ],
     "costForTwo": 150000,
     "costForTwoString": "₹1500 FOR TWO",
     "deliveryTime": 28,
     "minDeliveryTime": 28,
     "maxDeliveryTime": 28,
     "slaString": "28 MINS",
     "lastMileTravel": 0.800000011920929,
     "slugs": {
       "restaurant": "fb-cakes-himayath-nagar-himayath-nagar-2",
       "city": "hyderabad"
     },
     "cityState": "3",
     "address": "H.No.3-5-1146/6 &  7,Shamsheerbagh,Rajamohalla,Kachiguda,Hyd erabad, Amberpet Circle No 16, Hyderabad, Telangana-500027",
     "locality": "Shamsheerbagh",
     "parentId": 245423,
     "unserviceable": false,
     "veg": false,
     "select": false,
     "favorite": false,
     "tradeCampaignHeaders": [
       
     ],
     "aggregatedDiscountInfo": {
       "header": "40% off",
       "shortDescriptionList": [
         {
           "meta": "40% off | Use TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "descriptionList": [
         {
           "meta": "40% off up to ₹80 | Use code TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "subHeader": "",
       "headerType": 0,
       "superFreedel": ""
     },
     "aggregatedDiscountInfoV2": {
       "header": "40% OFF",
       "shortDescriptionList": [
         {
           "meta": "Use TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "descriptionList": [
         {
           "meta": "40% off up to ₹80 | Use code TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "subHeader": "",
       "headerType": 0,
       "superFreedel": ""
     },
     "ribbon": [
       {
         "type": "PROMOTED"
       }
     ],
     "chain": [
       
     ],
     "feeDetails": {
       "fees": [
         {
           "name": "distance",
           "fee": 2600,
           "message": ""
         },
         {
           "name": "time",
           "fee": 0,
           "message": ""
         },
         {
           "name": "special",
           "fee": 0,
           "message": ""
         }
       ],
       "totalFees": 2600,
       "message": "",
       "title": "Delivery Charge",
       "amount": "2600",
       "icon": ""
     },
     "availability": {
       "opened": true,
       "nextOpenMessage": "",
       "nextCloseMessage": ""
     },
     "longDistanceEnabled": 0,
     "rainMode": "NONE",
     "thirdPartyAddress": false,
     "thirdPartyVendor": "",
     "adTrackingID": "cid=6353203~p=7~eid=00000187-4c29-706f-05bd-834d001f0743",
     "badges": {
       "imageBased": [
         
       ],
       "textBased": [
         
       ],
       "textExtendedBadges": [
         
       ]
     },
     "lastMileTravelString": "0.8 kms",
     "hasSurge": false,
     "sla": {
       "restaurantId": "656729",
       "deliveryTime": 28,
       "minDeliveryTime": 28,
       "maxDeliveryTime": 28,
       "lastMileTravel": 0.800000011920929,
       "lastMileDistance": 0,
       "serviceability": "SERVICEABLE",
       "rainMode": "NONE",
       "longDistance": "NOT_LONG_DISTANCE",
       "preferentialService": false,
       "iconType": "EMPTY"
     },
     "promoted": true,
     "avgRating": "3.8",
     "totalRatings": 20,
     "new": false
   },
   "subtype": "basic"
 },
 {
   "type": "restaurant",
   "data": {
     "type": "F",
     "id": "4138",
     "name": "Grand Hotel",
     "uuid": "c1a1d888-51b7-4bcc-b539-f884c796a015",
     "city": "3",
     "area": "Koti",
     "totalRatingsString": "10000+ ratings",
     "cloudinaryImageId": "g1arzw6qd7g9affkmgzk",
     "cuisines": [
       "Biryani",
       "Chinese",
       "Tandoor",
       "Haleem"
     ],
     "tags": [
       
     ],
     "costForTwo": 30000,
     "costForTwoString": "₹300 FOR TWO",
     "deliveryTime": 26,
     "minDeliveryTime": 26,
     "maxDeliveryTime": 26,
     "slaString": "26 MINS",
     "lastMileTravel": 1.100000023841858,
     "slugs": {
       "restaurant": "grand-hotel-abids-himayath-nagar",
       "city": "hyderabad"
     },
     "cityState": "3",
     "address": "Opposite Big Bazaar, 4-1-395,Abids Road, Hyderabad",
     "locality": "Abids Road",
     "parentId": 4001,
     "unserviceable": false,
     "veg": false,
     "select": false,
     "favorite": false,
     "tradeCampaignHeaders": [
       
     ],
     "aggregatedDiscountInfo": {
       "header": "10% off",
       "shortDescriptionList": [
         {
           "meta": "10% off | Use TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "descriptionList": [
         {
           "meta": "10% off up to ₹40 | Use code TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "subHeader": "",
       "headerType": 0,
       "superFreedel": ""
     },
     "aggregatedDiscountInfoV2": {
       "header": "10% OFF",
       "shortDescriptionList": [
         {
           "meta": "Use TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "descriptionList": [
         {
           "meta": "10% off up to ₹40 | Use code TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "subHeader": "",
       "headerType": 0,
       "superFreedel": ""
     },
     "chain": [
       
     ],
     "feeDetails": {
       "fees": [
         {
           "name": "distance",
           "fee": 2600,
           "message": ""
         },
         {
           "name": "time",
           "fee": 0,
           "message": ""
         },
         {
           "name": "special",
           "fee": 0,
           "message": ""
         }
       ],
       "totalFees": 2600,
       "message": "",
       "title": "Delivery Charge",
       "amount": "2600",
       "icon": ""
     },
     "availability": {
       "opened": true,
       "nextOpenMessage": "",
       "nextCloseMessage": ""
     },
     "longDistanceEnabled": 0,
     "rainMode": "NONE",
     "thirdPartyAddress": false,
     "thirdPartyVendor": "",
     "adTrackingID": "",
     "badges": {
       "imageBased": [
         
       ],
       "textBased": [
         
       ],
       "textExtendedBadges": [
         
       ]
     },
     "lastMileTravelString": "1.1 kms",
     "hasSurge": false,
     "sla": {
       "restaurantId": "4138",
       "deliveryTime": 26,
       "minDeliveryTime": 26,
       "maxDeliveryTime": 26,
       "lastMileTravel": 1.100000023841858,
       "lastMileDistance": 0,
       "serviceability": "SERVICEABLE",
       "rainMode": "NONE",
       "longDistance": "NOT_LONG_DISTANCE",
       "preferentialService": false,
       "iconType": "EMPTY"
     },
     "promoted": false,
     "avgRating": "4.1",
     "totalRatings": 10000,
     "new": false
   },
   "subtype": "basic"
 },
 {
   "type": "restaurant",
   "data": {
     "type": "F",
     "id": "37103",
     "name": "KFC",
     "uuid": "5bd88204-bfc5-4703-834e-cd09e1ba659c",
     "city": "3",
     "area": "Basheer Bagh",
     "totalRatingsString": "10000+ ratings",
     "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
     "cuisines": [
       "Burgers",
       "Biryani",
       "American",
       "Snacks",
       "Fast Food"
     ],
     "tags": [
       
     ],
     "costForTwo": 40000,
     "costForTwoString": "₹400 FOR TWO",
     "deliveryTime": 32,
     "minDeliveryTime": 32,
     "maxDeliveryTime": 32,
     "slaString": "32 MINS",
     "lastMileTravel": 2,
     "slugs": {
       "restaurant": "kfc-abids-road-abids-koti",
       "city": "hyderabad"
     },
     "cityState": "3",
     "address": "Yum Restaurants -(India)- PVT LTD|Ground Floor, H No: 5-9-322,T. S. No. 86, Ward No. 51, Block F, Abids Road, Opp SBH Bank, Gun Foundry, Hyderabad, Telangana 500001",
     "locality": "Abids Road",
     "parentId": 547,
     "unserviceable": false,
     "veg": false,
     "select": false,
     "favorite": false,
     "tradeCampaignHeaders": [
       
     ],
     "aggregatedDiscountInfo": {
       "header": "20% off",
       "shortDescriptionList": [
         {
           "meta": "20% off | Use SWIGGYIT",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "descriptionList": [
         {
           "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "subHeader": "",
       "headerType": 0,
       "superFreedel": ""
     },
     "aggregatedDiscountInfoV2": {
       "header": "20% OFF",
       "shortDescriptionList": [
         {
           "meta": "Use SWIGGYIT",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "descriptionList": [
         {
           "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "subHeader": "",
       "headerType": 0,
       "superFreedel": ""
     },
     "ribbon": [
       {
         "type": "PROMOTED"
       }
     ],
     "chain": [
       
     ],
     "feeDetails": {
       "fees": [
         {
           "name": "distance",
           "fee": 2600,
           "message": ""
         },
         {
           "name": "time",
           "fee": 0,
           "message": ""
         },
         {
           "name": "special",
           "fee": 0,
           "message": ""
         }
       ],
       "totalFees": 2600,
       "message": "",
       "title": "Delivery Charge",
       "amount": "2600",
       "icon": ""
     },
     "availability": {
       "opened": true,
       "nextOpenMessage": "",
       "nextCloseMessage": ""
     },
     "longDistanceEnabled": 0,
     "rainMode": "NONE",
     "thirdPartyAddress": false,
     "thirdPartyVendor": "",
     "adTrackingID": "cid=6386815~p=19~eid=00000187-4c29-706f-05bd-8351001f1309",
     "badges": {
       "imageBased": [
         
       ],
       "textBased": [
         
       ],
       "textExtendedBadges": [
         
       ]
     },
     "lastMileTravelString": "2 kms",
     "hasSurge": false,
     "sla": {
       "restaurantId": "37103",
       "deliveryTime": 32,
       "minDeliveryTime": 32,
       "maxDeliveryTime": 32,
       "lastMileTravel": 2,
       "lastMileDistance": 0,
       "serviceability": "SERVICEABLE",
       "rainMode": "NONE",
       "longDistance": "NOT_LONG_DISTANCE",
       "preferentialService": false,
       "iconType": "EMPTY"
     },
     "promoted": true,
     "avgRating": "4.0",
     "totalRatings": 10000,
     "new": false
   },
   "subtype": "basic"
 },
 {
   "type": "restaurant",
   "data": {
     "type": "F",
     "id": "131870",
     "name": "4M Biryani House",
     "uuid": "7bd4baf7-71ca-4b3d-9cbd-88cd66581615",
     "city": "3",
     "area": "Nallakunta & Vidyanagar",
     "totalRatingsString": "10000+ ratings",
     "cloudinaryImageId": "o685uklvqias8ez1qgxz",
     "cuisines": [
       "Biryani",
       "North Indian",
       "Chinese"
     ],
     "tags": [
       
     ],
     "costForTwo": 25000,
     "costForTwoString": "₹250 FOR TWO",
     "deliveryTime": 33,
     "minDeliveryTime": 33,
     "maxDeliveryTime": 33,
     "slaString": "33 MINS",
     "lastMileTravel": 4.300000190734863,
     "slugs": {
       "restaurant": "4m-biryani-house-musheerabad-nallakunta-vidyanagar",
       "city": "hyderabad"
     },
     "cityState": "3",
     "address": "Opposite Humera Hotel, Badi Masjid, Bholakpur, Musheerabad, Hyderabad",
     "locality": "Nallakunta & Vidyanagar",
     "parentId": 19646,
     "unserviceable": false,
     "veg": false,
     "select": false,
     "favorite": false,
     "tradeCampaignHeaders": [
       
     ],
     "aggregatedDiscountInfo": {
       "header": "30% off",
       "shortDescriptionList": [
         {
           "meta": "30% off | Use TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "descriptionList": [
         {
           "meta": "30% off up to ₹75 | Use code TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "subHeader": "",
       "headerType": 0,
       "superFreedel": ""
     },
     "aggregatedDiscountInfoV2": {
       "header": "30% OFF",
       "shortDescriptionList": [
         {
           "meta": "Use TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "descriptionList": [
         {
           "meta": "30% off up to ₹75 | Use code TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "subHeader": "",
       "headerType": 0,
       "superFreedel": ""
     },
     "chain": [
       
     ],
     "feeDetails": {
       "fees": [
         {
           "name": "distance",
           "fee": 3800,
           "message": ""
         },
         {
           "name": "time",
           "fee": 0,
           "message": ""
         },
         {
           "name": "special",
           "fee": 0,
           "message": ""
         }
       ],
       "totalFees": 3800,
       "message": "",
       "title": "Delivery Charge",
       "amount": "3800",
       "icon": ""
     },
     "availability": {
       "opened": true,
       "nextOpenMessage": "",
       "nextCloseMessage": ""
     },
     "longDistanceEnabled": 1,
     "rainMode": "NONE",
     "thirdPartyAddress": false,
     "thirdPartyVendor": "",
     "adTrackingID": "",
     "badges": {
       "imageBased": [
         
       ],
       "textBased": [
         
       ],
       "textExtendedBadges": [
         
       ]
     },
     "lastMileTravelString": "4.3 kms",
     "hasSurge": false,
     "sla": {
       "restaurantId": "131870",
       "deliveryTime": 33,
       "minDeliveryTime": 33,
       "maxDeliveryTime": 33,
       "lastMileTravel": 4.300000190734863,
       "lastMileDistance": 0,
       "serviceability": "SERVICEABLE",
       "rainMode": "NONE",
       "longDistance": "IT_IS_LONG_DISTANCE",
       "preferentialService": false,
       "iconType": "EMPTY"
     },
     "promoted": false,
     "avgRating": "4.1",
     "totalRatings": 10000,
     "new": false
   },
   "subtype": "basic"
 },
 {
   "type": "restaurant",
   "data": {
     "type": "F",
     "id": "100942",
     "name": "Lucky Multicuisine Restaurant",
     "uuid": "8e677eb2-065e-4021-ab21-b94d70357977",
     "city": "3",
     "area": "Somajiguda",
     "totalRatingsString": "10000+ ratings",
     "cloudinaryImageId": "yeyiqeakfhjj6cmeocsc",
     "cuisines": [
       "Biryani",
       "North Indian",
       "Tandoor",
       "South Indian"
     ],
     "tags": [
       
     ],
     "costForTwo": 35000,
     "costForTwoString": "₹350 FOR TWO",
     "deliveryTime": 48,
     "minDeliveryTime": 48,
     "maxDeliveryTime": 48,
     "slaString": "48 MINS",
     "lastMileTravel": 6.300000190734863,
     "slugs": {
       "restaurant": "lucky-multicuisine-restaurant-somajiguda-somajiguda-khairtabad",
       "city": "hyderabad"
     },
     "cityState": "3",
     "address": "Door no;6-3-1089/f/33,somajiguda,hyd,circle no.10(old mch circle-v)khairtabad,hyd-central zone, telengana 500082.",
     "locality": "\nRaj Bhavan Quarters Colony",
     "parentId": 18963,
     "unserviceable": false,
     "veg": false,
     "select": false,
     "favorite": false,
     "tradeCampaignHeaders": [
       
     ],
     "aggregatedDiscountInfo": {
       "header": "Flat ₹125 off",
       "shortDescriptionList": [
         {
           "meta": "Flat ₹125 off on orders above ₹499",
           "discountType": "Flat",
           "operationType": "RESTAURANT"
         }
       ],
       "descriptionList": [
         {
           "meta": "Flat ₹125 off on orders above ₹499 | Use code SWIGIFTAR",
           "discountType": "Flat",
           "operationType": "RESTAURANT"
         }
       ],
       "subHeader": "",
       "headerType": 0,
       "superFreedel": ""
     },
     "aggregatedDiscountInfoV2": {
       "header": "₹125 OFF",
       "shortDescriptionList": [
         {
           "meta": "Use SWIGIFTAR",
           "discountType": "Flat",
           "operationType": "RESTAURANT"
         }
       ],
       "descriptionList": [
         {
           "meta": "Flat ₹125 off on orders above ₹499 | Use code SWIGIFTAR",
           "discountType": "Flat",
           "operationType": "RESTAURANT"
         }
       ],
       "subHeader": "",
       "headerType": 0,
       "superFreedel": ""
     },
     "chain": [
       
     ],
     "feeDetails": {
       "fees": [
         {
           "name": "distance",
           "fee": 5700,
           "message": ""
         },
         {
           "name": "time",
           "fee": 0,
           "message": ""
         },
         {
           "name": "special",
           "fee": 0,
           "message": ""
         }
       ],
       "totalFees": 5700,
       "message": "",
       "title": "Delivery Charge",
       "amount": "5700",
       "icon": ""
     },
     "availability": {
       "opened": true,
       "nextOpenMessage": "",
       "nextCloseMessage": ""
     },
     "longDistanceEnabled": 1,
     "rainMode": "NONE",
     "thirdPartyAddress": false,
     "thirdPartyVendor": "",
     "adTrackingID": "",
     "badges": {
       "imageBased": [
         
       ],
       "textBased": [
         
       ],
       "textExtendedBadges": [
         
       ]
     },
     "lastMileTravelString": "6.3 kms",
     "hasSurge": false,
     "sla": {
       "restaurantId": "100942",
       "deliveryTime": 48,
       "minDeliveryTime": 48,
       "maxDeliveryTime": 48,
       "lastMileTravel": 6.300000190734863,
       "lastMileDistance": 0,
       "serviceability": "SERVICEABLE",
       "rainMode": "NONE",
       "longDistance": "IT_IS_LONG_DISTANCE",
       "preferentialService": false,
       "iconType": "EMPTY"
     },
     "promoted": false,
     "avgRating": "3.7",
     "totalRatings": 10000,
     "new": false
   },
   "subtype": "basic"
 },
 {
   "type": "restaurant",
   "data": {
     "type": "F",
     "id": "214809",
     "name": "Hotel Niagara",
     "uuid": "d8a51204-2047-4372-820f-7c0885e4130c",
     "city": "3",
     "area": "Chaderghat",
     "totalRatingsString": "10000+ ratings",
     "cloudinaryImageId": "btea7jwuwkbgd0nebcyd",
     "cuisines": [
       "Haleem",
       "Biryani",
       "North Indian"
     ],
     "tags": [
       
     ],
     "costForTwo": 45000,
     "costForTwoString": "₹450 FOR TWO",
     "deliveryTime": 23,
     "minDeliveryTime": 23,
     "maxDeliveryTime": 23,
     "slaString": "23 MINS",
     "lastMileTravel": 1.2000000476837158,
     "slugs": {
       "restaurant": "hotel-niagara-new-area-sainikpuri---test",
       "city": "hyderabad"
     },
     "cityState": "3",
     "address": "Opposite Thumbay Hospital, Chaderghat Circle",
     "locality": "Himayath Nagar",
     "parentId": 19244,
     "unserviceable": false,
     "veg": false,
     "select": false,
     "favorite": false,
     "tradeCampaignHeaders": [
       
     ],
     "aggregatedDiscountInfo": {
       "header": "50% off",
       "shortDescriptionList": [
         {
           "meta": "50% off | Use TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "descriptionList": [
         {
           "meta": "50% off up to ₹100 | Use code TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "subHeader": "",
       "headerType": 0,
       "superFreedel": ""
     },
     "aggregatedDiscountInfoV2": {
       "header": "50% OFF",
       "shortDescriptionList": [
         {
           "meta": "Use TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "descriptionList": [
         {
           "meta": "50% off up to ₹100 | Use code TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "subHeader": "",
       "headerType": 0,
       "superFreedel": ""
     },
     "ribbon": [
       {
         "type": "PROMOTED"
       }
     ],
     "chain": [
       
     ],
     "feeDetails": {
       "fees": [
         {
           "name": "distance",
           "fee": 2600,
           "message": ""
         },
         {
           "name": "time",
           "fee": 0,
           "message": ""
         },
         {
           "name": "special",
           "fee": 0,
           "message": ""
         }
       ],
       "totalFees": 2600,
       "message": "",
       "title": "Delivery Charge",
       "amount": "2600",
       "icon": ""
     },
     "availability": {
       "opened": true,
       "nextOpenMessage": "",
       "nextCloseMessage": ""
     },
     "longDistanceEnabled": 0,
     "rainMode": "NONE",
     "thirdPartyAddress": false,
     "thirdPartyVendor": "",
     "adTrackingID": "cid=6400366~p=13~eid=00000187-4c29-706f-05bd-834f001f0d47",
     "badges": {
       "imageBased": [
         
       ],
       "textBased": [
         
       ],
       "textExtendedBadges": [
         
       ]
     },
     "lastMileTravelString": "1.2 kms",
     "hasSurge": false,
     "sla": {
       "restaurantId": "214809",
       "deliveryTime": 23,
       "minDeliveryTime": 23,
       "maxDeliveryTime": 23,
       "lastMileTravel": 1.2000000476837158,
       "lastMileDistance": 0,
       "serviceability": "SERVICEABLE",
       "rainMode": "NONE",
       "longDistance": "NOT_LONG_DISTANCE",
       "preferentialService": false,
       "iconType": "EMPTY"
     },
     "promoted": true,
     "avgRating": "3.8",
     "totalRatings": 10000,
     "new": false
   },
   "subtype": "basic"
 },
 {
   "type": "restaurant",
   "data": {
     "type": "F",
     "id": "109168",
     "name": "Al Rabea Al Arabi Cafeteria",
     "uuid": "f94c1d30-76b4-438a-bddf-6442286fbb6e",
     "city": "3",
     "area": "Santosh Nagar",
     "totalRatingsString": "10000+ ratings",
     "cloudinaryImageId": "lu7b9y7xps4icwn6xzfj",
     "cuisines": [
       "Lebanese",
       "Arabian"
     ],
     "tags": [
       
     ],
     "costForTwo": 25000,
     "costForTwoString": "₹250 FOR TWO",
     "deliveryTime": 39,
     "minDeliveryTime": 39,
     "maxDeliveryTime": 39,
     "slaString": "39 MINS",
     "lastMileTravel": 5.800000190734863,
     "slugs": {
       "restaurant": "al-rabea-al-arabi-cafeteria-santhosh-nagar-santoshnagar-saidabad",
       "city": "hyderabad"
     },
     "cityState": "3",
     "address": "9-8-118 BESIDE JB NASHTA POINT SANTOSH NAGAR OPPOSITE LUCKY HOTEL  HYDERABAD",
     "locality": "Opposite Lucky Hotel",
     "parentId": 7582,
     "unserviceable": false,
     "veg": false,
     "select": false,
     "favorite": false,
     "tradeCampaignHeaders": [
       
     ],
     "chain": [
       
     ],
     "feeDetails": {
       "fees": [
         {
           "name": "distance",
           "fee": 5000,
           "message": ""
         },
         {
           "name": "time",
           "fee": 0,
           "message": ""
         },
         {
           "name": "special",
           "fee": 0,
           "message": ""
         }
       ],
       "totalFees": 5000,
       "message": "",
       "title": "Delivery Charge",
       "amount": "5000",
       "icon": ""
     },
     "availability": {
       "opened": true,
       "nextOpenMessage": "",
       "nextCloseMessage": ""
     },
     "longDistanceEnabled": 0,
     "rainMode": "NONE",
     "thirdPartyAddress": false,
     "thirdPartyVendor": "",
     "adTrackingID": "",
     "badges": {
       "imageBased": [
         
       ],
       "textBased": [
         
       ],
       "textExtendedBadges": [
         
       ]
     },
     "lastMileTravelString": "5.8 kms",
     "hasSurge": false,
     "sla": {
       "restaurantId": "109168",
       "deliveryTime": 39,
       "minDeliveryTime": 39,
       "maxDeliveryTime": 39,
       "lastMileTravel": 5.800000190734863,
       "lastMileDistance": 0,
       "serviceability": "SERVICEABLE",
       "rainMode": "NONE",
       "longDistance": "NOT_LONG_DISTANCE",
       "preferentialService": false,
       "iconType": "EMPTY"
     },
     "promoted": false,
     "avgRating": "4.3",
     "totalRatings": 10000,
     "new": false
   },
   "subtype": "basic"
 },
 {
   "type": "restaurant",
   "data": {
     "type": "F",
     "id": "13434",
     "name": "Cafe 555 & Aqeeq Restaurant",
     "uuid": "2379d20f-aa9f-49ae-8077-e275fff77faf",
     "city": "3",
     "area": "Masab Tank",
     "totalRatingsString": "10000+ ratings",
     "cloudinaryImageId": "r5ayymu2bfkse9yt3w3b",
     "cuisines": [
       "Biryani",
       "North Indian",
       "Chinese"
     ],
     "tags": [
       
     ],
     "costForTwo": 30000,
     "costForTwoString": "₹300 FOR TWO",
     "deliveryTime": 53,
     "minDeliveryTime": 53,
     "maxDeliveryTime": 53,
     "slaString": "53 MINS",
     "lastMileTravel": 5,
     "slugs": {
       "restaurant": "cafe-555-banjara-hills",
       "city": "hyderabad"
     },
     "cityState": "3",
     "address": "A/12,, Masab Tank Road, Owaisi Pura, Mehdipatnam, Hyderabad, Telangana 500028",
     "locality": "Owaisi Pura",
     "parentId": 19138,
     "unserviceable": false,
     "veg": false,
     "select": false,
     "favorite": false,
     "tradeCampaignHeaders": [
       
     ],
     "chain": [
       
     ],
     "feeDetails": {
       "fees": [
         {
           "name": "distance",
           "fee": 5000,
           "message": ""
         },
         {
           "name": "time",
           "fee": 0,
           "message": ""
         },
         {
           "name": "special",
           "fee": 0,
           "message": ""
         }
       ],
       "totalFees": 5000,
       "message": "",
       "title": "Delivery Charge",
       "amount": "5000",
       "icon": ""
     },
     "availability": {
       "opened": true,
       "nextOpenMessage": "",
       "nextCloseMessage": ""
     },
     "longDistanceEnabled": 0,
     "rainMode": "NONE",
     "thirdPartyAddress": false,
     "thirdPartyVendor": "",
     "adTrackingID": "",
     "badges": {
       "imageBased": [
         
       ],
       "textBased": [
         
       ],
       "textExtendedBadges": [
         
       ]
     },
     "lastMileTravelString": "5 kms",
     "hasSurge": false,
     "sla": {
       "restaurantId": "13434",
       "deliveryTime": 53,
       "minDeliveryTime": 53,
       "maxDeliveryTime": 53,
       "lastMileTravel": 5,
       "lastMileDistance": 0,
       "serviceability": "SERVICEABLE",
       "rainMode": "NONE",
       "longDistance": "NOT_LONG_DISTANCE",
       "preferentialService": false,
       "iconType": "EMPTY"
     },
     "promoted": false,
     "avgRating": "4.1",
     "totalRatings": 10000,
     "new": false
   },
   "subtype": "basic"
 },
 {
   "type": "restaurant",
   "data": {
     "type": "F",
     "id": "43619",
     "name": "Chung Hua Restaurant",
     "uuid": "ea6824e9-8cc0-408d-97e9-391f31b8c558",
     "city": "3",
     "area": "Adarsh Nagar",
     "totalRatingsString": "10000+ ratings",
     "cloudinaryImageId": "nccgylba8b5vvh55uv0p",
     "cuisines": [
       "Chinese",
       "Asian",
       "Thai",
       "Seafood",
       "Singaporean",
       "Malaysian"
     ],
     "tags": [
       
     ],
     "costForTwo": 30000,
     "costForTwoString": "₹300 FOR TWO",
     "deliveryTime": 38,
     "minDeliveryTime": 38,
     "maxDeliveryTime": 38,
     "slaString": "38 MINS",
     "lastMileTravel": 3.5,
     "slugs": {
       "restaurant": "chung-hua-chinese-restaurant-basheer-bagh-himayath-nagar",
       "city": "hyderabad"
     },
     "cityState": "3",
     "address": "5-9-29, Opposite Paigah Plaza, Mira Mansion, Hill Fort, Adarsh Nagar, Hyderabad, Telangana 500063, India",
     "locality": "Hira Mansion",
     "parentId": 270,
     "unserviceable": false,
     "veg": false,
     "select": false,
     "favorite": false,
     "tradeCampaignHeaders": [
       
     ],
     "ribbon": [
       {
         "type": "PROMOTED"
       }
     ],
     "chain": [
       
     ],
     "feeDetails": {
       "fees": [
         {
           "name": "distance",
           "fee": 3200,
           "message": ""
         },
         {
           "name": "time",
           "fee": 0,
           "message": ""
         },
         {
           "name": "special",
           "fee": 0,
           "message": ""
         }
       ],
       "totalFees": 3200,
       "message": "",
       "title": "Delivery Charge",
       "amount": "3200",
       "icon": ""
     },
     "availability": {
       "opened": true,
       "nextOpenMessage": "",
       "nextCloseMessage": ""
     },
     "longDistanceEnabled": 0,
     "rainMode": "NONE",
     "thirdPartyAddress": false,
     "thirdPartyVendor": "",
     "adTrackingID": "cid=6327808~p=16~eid=00000187-4c29-706f-05bd-8350001f100f",
     "badges": {
       "imageBased": [
         
       ],
       "textBased": [
         
       ],
       "textExtendedBadges": [
         
       ]
     },
     "lastMileTravelString": "3.5 kms",
     "hasSurge": false,
     "sla": {
       "restaurantId": "43619",
       "deliveryTime": 38,
       "minDeliveryTime": 38,
       "maxDeliveryTime": 38,
       "lastMileTravel": 3.5,
       "lastMileDistance": 0,
       "serviceability": "SERVICEABLE",
       "rainMode": "NONE",
       "longDistance": "NOT_LONG_DISTANCE",
       "preferentialService": false,
       "iconType": "EMPTY"
     },
     "promoted": true,
     "avgRating": "4.2",
     "totalRatings": 10000,
     "new": false
   },
   "subtype": "basic"
 },
 {
   "type": "restaurant",
   "data": {
     "type": "F",
     "id": "450654",
     "name": "Pista House Bakery Kotla",
     "uuid": "53152e53-a64f-463a-8929-e2f7972d8605",
     "city": "3",
     "area": "Charminar",
     "totalRatingsString": "1000+ ratings",
     "cloudinaryImageId": "suoms7x4ptt84oeqvl6y",
     "cuisines": [
       "Continental",
       "Pizzas",
       "Snacks"
     ],
     "tags": [
       
     ],
     "costForTwo": 20000,
     "costForTwoString": "₹200 FOR TWO",
     "deliveryTime": 48,
     "minDeliveryTime": 48,
     "maxDeliveryTime": 48,
     "slaString": "48 MINS",
     "lastMileTravel": 3.5,
     "slugs": {
       "restaurant": "pista-house-bakery-kotla-charminar-charminar",
       "city": "hyderabad"
     },
     "cityState": "3",
     "address": "22-4-503,504 & 505, Alijah Kotla, Hyderabad Circle 4, Charminar, Hyderabad 500002",
     "locality": "Alijah Kotla",
     "parentId": 19008,
     "unserviceable": false,
     "veg": false,
     "select": false,
     "favorite": false,
     "tradeCampaignHeaders": [
       
     ],
     "aggregatedDiscountInfo": {
       "header": "30% off",
       "shortDescriptionList": [
         {
           "meta": "30% off | Use TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "descriptionList": [
         {
           "meta": "30% off up to ₹75 | Use code TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "subHeader": "",
       "headerType": 0,
       "superFreedel": ""
     },
     "aggregatedDiscountInfoV2": {
       "header": "30% OFF",
       "shortDescriptionList": [
         {
           "meta": "Use TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "descriptionList": [
         {
           "meta": "30% off up to ₹75 | Use code TRYNEW",
           "discountType": "Percentage",
           "operationType": "RESTAURANT"
         }
       ],
       "subHeader": "",
       "headerType": 0,
       "superFreedel": ""
     },
     "chain": [
       
     ],
     "feeDetails": {
       "fees": [
         {
           "name": "distance",
           "fee": 3200,
           "message": ""
         },
         {
           "name": "time",
           "fee": 0,
           "message": ""
         },
         {
           "name": "special",
           "fee": 0,
           "message": ""
         }
       ],
       "totalFees": 3200,
       "message": "",
       "title": "Delivery Charge",
       "amount": "3200",
       "icon": ""
     },
     "availability": {
       "opened": true,
       "nextOpenMessage": "",
       "nextCloseMessage": ""
     },
     "longDistanceEnabled": 1,
     "rainMode": "NONE",
     "thirdPartyAddress": false,
     "thirdPartyVendor": "",
     "adTrackingID": "",
     "badges": {
       "imageBased": [
         
       ],
       "textBased": [
         
       ],
       "textExtendedBadges": [
         
       ]
     },
     "lastMileTravelString": "3.5 kms",
     "hasSurge": false,
     "sla": {
       "restaurantId": "450654",
       "deliveryTime": 48,
       "minDeliveryTime": 48,
       "maxDeliveryTime": 48,
       "lastMileTravel": 3.5,
       "lasMileDistance": 0,
       "serviceability": "SERVICEABLE",
       "rainMode": "NONE",
       "longDistance": "IT_IS_LONG_DISTANCE",
       "preferentialService": false,
       "iconType": "EMPTY"
     },
     "promoted": false,
     "avgRating": "4.2",
     "totalRatings": 1000,
     "new": false
   },
   "subtype": "basic"
 }
];


 const RestaurantCard = (props) =>{
     const {resData}=props;
     const{name,cuisines,avgRating,deliveryTime}=resData.data;
     return (
         <div className="restaurantCard" style={{backgroundColor: "#f0f0f0"}}>
         <img className="imageCard" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+resData.data.cloudinaryImageId}></img>
         <div className="restaurantInfo">
         <h3>{name}</h3>
         <h4>{cuisines.join(",")}</h4>
         <h4>{avgRating} stars</h4>
         <h4>{deliveryTime}</h4>
         </div>
         </div>
     )
 }

const Body = ()=>{
    return(
        <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
        {resList.map((restaurant) =>(
            <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
        ))}
        </div>
        </div>
    );
};

 const Header = () =>{
    return(
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3G3Mu_1jTlo_3VaCS9PJwsxHgePyE3ritWg&usqp=CAU"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <li>Profile</li>
                    </ul>
            </div>
        </div>

);
};


const AppLayout = () =>{
    return(
    <div className="appLayout">
    <Header/>
    <Body/>
    </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);