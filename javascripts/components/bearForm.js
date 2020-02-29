import bearData from '../helpers/data/bearData.js';

const bearButton = () => {
    document.getElementById('submit').addEventListener('click', buildBearObject);
};


const buildBearObject = (e) => {
    e.preventDefault();
    const newBear = {
     name: document.getElementById('bearNameInput').value,
     Url: document.getElementById('bearUrl').value
    }
    bearData.getBears().push(newBear);
    document.getElementById('bearForm').reset();
    document.getElementById('collapseOne').classList.remove('show');
};

export default {bearButton};