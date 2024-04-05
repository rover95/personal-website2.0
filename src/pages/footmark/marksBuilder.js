var arr = [
    {
        "_id": Math.random().toString(36).substring(2),
        "date": "2023",
        "location": {
            "coordinates": [88.871941,29.265392],
            "type": "Point"
        },
        "name": "扎什伦布寺",
        "time": new Date().toString(),
        "been": true,
        "coordinate": "88.871941,29.265392"
    },
    {
        "_id": Math.random().toString(36).substring(2),
        "date": "2022",
        "location": {
            "coordinates": [101.509594,30.033311],
            "type": "Point"
        },
        "name": "新都桥",
        "time": new Date().toString(),
        "been": true,
        "coordinate": "101.509594,30.033311"
    },
    {
        "_id": Math.random().toString(36).substring(2),
        "date": "2022",
        "location": {
            "coordinates": [102.446359,30.169142],
            "type": "Point"
        },
        "name": "喇叭河",
        "time": new Date().toString(),
        "been": true,
        "coordinate": "102.446359,30.169142"
    },
    {
        "_id": Math.random().toString(36).substring(2),
        "date": "2022",
        "location": {
            "coordinates": [102.231637,29.9118],
            "type": "Point"
        },
        "name": "泸定桥",
        "time": new Date().toString(),
        "been": true,
        "coordinate": "102.231637,29.9118"
    },
    {
        "_id": Math.random().toString(36).substring(2),
        "date": "2022",
        "location": {
            "coordinates": [101.528098,30.320695],
            "type": "Point"
        },
        "name": "塔公草原",
        "time": new Date().toString(),
        "been": true,
        "coordinate": "101.528098,30.320695"
    },
    {
        "_id": Math.random().toString(36).substring(2),
        "date": "2022",
        "location": {
            "coordinates": [101.544803,30.439792    ],
            "type": "Point"
        },
        "name": "墨石公园",
        "time": new Date().toString(),
        "been": true,
        "coordinate": "101.544803,30.439792"
    },
    {
        "_id": Math.random().toString(36).substring(2),
        "date": "2022",
        "location": {
            "coordinates": [102.86917,31.003491],
            "type": "Point"
        },
        "name": "四姑娘山",
        "time": new Date().toString(),
        "been": true,
        "coordinate": ""
    },
    {
        "_id": Math.random().toString(36).substring(2),
        "date": "2022",
        "location": {
            "coordinates": [102.912845,30.897389],
            "type": "Point"
        },
        "name": "巴朗山",
        "time": new Date().toString(),
        "been": true,
        "coordinate": ""
    },
    {
        "_id": Math.random().toString(36).substring(2),
        "date": "2021",
        "location": {
            "coordinates": [102.608044,30.783817],
            "type": "Point"
        },
        "name": "达瓦更扎",
        "time": new Date().toString(),
        "been": true,
        "coordinate": ""
    },
    {
        "_id": Math.random().toString(36).substring(2),
        "date": "2023",
        "location": {
            "coordinates": [99.760741,29.795005],
            "type": "Point"
        },
        "name": "格聂之眼",
        "time": new Date().toString(),
        "been": true,
        "coordinate": ""
    },
    {
        "_id": Math.random().toString(36).substring(2),
        "date": "",
        "location": {
            "coordinates": [],
            "type": "Point"
        },
        "name": "",
        "time": new Date().toString(),
        "been": true,
        "coordinate": ""
    },
    {
        "_id": Math.random().toString(36).substring(2),
        "date": "",
        "location": {
            "coordinates": [],
            "type": "Point"
        },
        "name": "",
        "time": new Date().toString(),
        "been": true,
        "coordinate": ""
    },
    {
        "_id": Math.random().toString(36).substring(2),
        "date": "",
        "location": {
            "coordinates": [],
            "type": "Point"
        },
        "name": "",
        "time": new Date().toString(),
        "been": true,
        "coordinate": ""
    },
    {
        "_id": Math.random().toString(36).substring(2),
        "date": "",
        "location": {
            "coordinates": [],
            "type": "Point"
        },
        "name": "",
        "time": new Date().toString(),
        "been": true,
        "coordinate": ""
    },

]

console.log(JSON.stringify(arr.map(val=>{
    return {
        ...val,
        coordinate: location.coordinate
    }
})));