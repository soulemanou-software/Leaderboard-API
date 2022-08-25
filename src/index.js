const tableList = document.querySelector('.table-list');

const display = ()=> {
    array.forEach(element => {
        tableList.innerHTML = `<tr class="tr-data">
        <td>${array[element.name]}</td>
        <td>${array[element.score]}</td>
    </tr>`;
    });
    console.log('Hello World');
}