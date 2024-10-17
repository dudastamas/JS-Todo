let items = [];

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const listTitle = document.querySelector('.itemlist');
const addButton = document.querySelector('.submitbutton');
const list = document.getElementById('list');

addButton.addEventListener('click', onAddNewItem);

// add item
function onAddNewItem(event) {
  event.preventDefault();
  let title = document.getElementById('title').value;
  let message = document.getElementById('textarea').value;
  let date = document.getElementById('date').value;

  newItem = {
    id: uuidv4(),
    title: title,
    message: message,
    date: date,
    checked: false,
  };

  items = [...items, newItem];
  renderItems();

  //clear form
  document.getElementById('title').value = '';
  document.getElementById('textarea').value = '';
  document.getElementById('date').value = '';
}

// delete item
function onDelete(id) {
  items = items.filter((item) => item.id !== id);
  renderItems();
}

function onCheckBox(id) {
  items = items.map((item) =>
    item.id === id ? { ...item, checked: !item.checked } : item
  );
  renderItems();
}

function renderItems() {
  items.length === 0
    ? (list.innerHTML = `<h4 class="text-center text-white">Még nem adtál meg tennivalót!</h4>`)
    : (list.innerHTML = items.map(
        (item) => `  <ol class="list-group w-80" id="ol-list"><li key=${item.id}
                  class="list-group-item py-4 border rounded-5 border-success d-flex flex-column bg-dark text-white justify-content-between align-items-center"
                >
                  <div class="ms-2 me-auto">
                    <div class="fw-bold fs-3 ${
                      item.checked ? 'through' : ''
                    }">${item.title}</div>
                    <p class=" ${item.checked ? 'through' : ''}">${
          item.date
        }</p>
                    <p class="fs-5 ${item.checked ? 'through' : ''}"">${
          item.message
        }</p>
                  </div>
                  <div class="d-flex mt-4 justify-content-between align-items-center">
                    <input class="form-check-input me-2  " type="checkbox" value="" id="check-${
                      item.id
                    }" ${item.checked ? 'checked' : ''} onclick="onCheckBox('${
          item.id
        }')" />
                    <label class="form-check-label fs-5 me-5" for="check-${
                      item.id
                    }">
                      Feladat megoldva
                    </label>
                  <button class="btn btn-danger" onclick="onDelete('${
                    item.id
                  }')">Törlés</button><div class="form-check">
                  </div>  
                </li> </ol>`
      ));
}

renderItems();
