import {
    arr
} from "./modules/data.js";
let togglers = document.querySelectorAll('span[data-table]')
let obj = document.querySelector('table tbody')
obj.innerHTML = ''
let table = document.querySelector('table')
let obj2 = document.querySelector('.container')
let drop = document.querySelector('.up')

function reload(data, isTable) {
    for (let item of data) {
        if (isTable) {
            table.style.display = ''
            obj2.style.display = 'none'
            obj.innerHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.address.zipcode}</td>
                    <td>${item.phone}</td>
                    <td>${item.website}</td>
                </tr>`
        } else {
            table.style.display = 'none'
            obj2.style.display = 'grid'
            obj2.innerHTML += `
                <div>
                    <h1>${item.name}</h1>
                    <p>${item.email}</p>
                    <span>${item.website}</span>
                </div>
            `
        }

    }
}

togglers.forEach(btn => {
    btn.onclick = () => {
        let isTable = JSON.parse(btn.getAttribute('data-table'))
        btn.style.color = 'blue'
        
        reload(arr, isTable)
    }
    
})
reload(arr, true)

drop.onclick = () => {
    console.log(click);
}