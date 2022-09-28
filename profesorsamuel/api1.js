import fetch from 'node-fetch';
const url = 'https://api.coronavirus.data.gov.uk/v1/data'
fetch(URL)

.then(res => res.json())
    .then(data => {
        let vec = Object.values(data);
        vec.forEach(Element => {
            console.log(Element);
        });
    })
for (let i = 0; i < vec.length; i++) {
    for (let j = 0; j < vec[3].length; j++) {
        console.log(vec[3][j].name);
    }
}






































/*async function loader (){
    const res=await fetch (URL);
    const data= await res.json();
    console.log('................................................')
    console.log(data)
}
loader*/