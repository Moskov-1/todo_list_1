const table = document.querySelector('.todo-table');

const search = document.querySelector('.search');

const searchButton = document.querySelector('.enter');

const clear = document.querySelector('.clear')

let count = 1;

searchButton.addEventListener('click',()=>{
    console.log(count);
    let txt = search.value;
    console.log(txt);
    if(txt != ''){
        let content = table.innerHTML;
        content += `<tr class="li"><td>${count++}</td><td>${txt}</td></tr>`;
        table.innerHTML = content;
        search.value = '';
    }
});
search.addEventListener('keypress',(e)=>{
   
    if( e.key == 'Enter'){
        e.preventDefault();
        searchButton.click();
    }
});

clear.addEventListener('click',()=>{
    search.value = '';
    table.innerHTML = `<tr class="li">
    <td>serial</td><td>what to do</td>
    </tr>`;
    count = 1;
});
