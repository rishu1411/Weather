const s = {
    "Clear": {
        svg:'1'
    },
    'Clouds': {
        svg:'2'
    },
    'Snow': {
        svg:'3'
    }
}

// console.log(Object.keys(s))
// console.log(s.Clear)
const d = new Date(
    1705190400 * 1000)
const date = d.toLocaleDateString()
    const tri = date.slice(0,2)
console.log(tri)