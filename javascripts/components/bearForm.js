import bearData from '../helpers/data/bearData.js';
import river from '../components/river.js';

const events = () => {
    document.getElementById('submit').addEventListener('click', buildBearObject);
}

const buildBearObject = (e) => {
    e.preventDefault();
    const bears = bearData.getBears();
    const newBear = {
     name: document.getElementById('bearNameInput').value,
     url: document.getElementById('bearUrl').value
    }
    bears.push(newBear);
    console.log(bears)
    document.getElementById('bearForm').reset();
    document.getElementById('collapseOne').classList.remove('show');
    river.bearCardBuilder(bears);
};

export default {buildBearObject, events};