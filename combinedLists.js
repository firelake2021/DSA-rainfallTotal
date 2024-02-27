// The object structure is the same
// for every list of rainfall totals. The cities in the first list may or may not be included in the second list but if a city occurs in both lists, combine the rainfall totals for the city so there are no duplicate cities in the resulting array.
function combineMonthlyRainfallTotals(firstMonthTotals, secondMonthTotals) {
  // Write your solution to combine the Lists of Monthly Rainfall Totals here.
  // The correct result will not have duplicates and will appropriately add rainfall amounts from cities that appear in both lists.
    if(firstMonthTotals.head === null || secondMonthTotals === null)
        return []
     console.log("firstMonthTotals", firstMonthTotals)
    let map = new Map()
    let cur = firstMonthTotals.head
    while(cur){
        let city = cur.value.city
        console.log("city",city)
        if(cur.value.city){
            if(!map.has(cur.value.city)){
                map.set(cur.value.city, cur.value.rainfall)
            }
        }

        cur= cur.next
    }

    cur = secondMonthTotals.head
    while(cur){
        if(!map.has(cur.value.city)){
            map.set(cur.value.city, cur.value.rainfall)
        }
        else{
            let city = cur.value.city
            let rainf = map.get(city)
            let total = rainf+cur.value.rainfall
            map.set(city, total)
        }
        cur= cur.next
    }
    console.log("map", map)

     let res =[]
    for(let [key, value] of map){
        res.push({ city: key, rainfall: value})
    }
    console.log("elena", res)

    return res
}

module.exports = combineMonthlyRainfallTotals;
