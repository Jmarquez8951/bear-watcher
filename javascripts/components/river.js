import util from '../helpers/util.js';

const bearCardBuilder = (arr) => {
    let domString = '';
    for(let i = 0; i < arr.length; i++) {
        domString += '<div class="card">';
        domString += `<img src="${arr[i].url}" class="card-img-top" alt="...">`;
        domString += '<div class="card-body">';
        domString += `<h5 class="card-title">${arr[i].name}</h5>`;
        domString += '<a href="#" class="btn btn-primary">Go somewhere</a>';
        domString += '</div>';
        domString += '</div>';
    }
    util.printToDom('river', domString);
};

export default {bearCardBuilder};