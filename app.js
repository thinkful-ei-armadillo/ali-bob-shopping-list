function generateHtml(item) {
  return `<li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`
}



function main() {
  //shopping-item__checked
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    const targetStrike = $(event.currentTarget).parent().siblings(); 
    targetStrike.toggleClass('shopping-item__checked');

  })

  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    const targetAdd = $(event.currentTarget);
    const userInput = targetAdd.find('#shopping-list-entry').val();
    $('.shopping-list').append(generateHtml(userInput));
    event.preventDefault();

  $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
    const targetDelete = $(event.currentTarget).parent().parent();
    targetDelete.remove();
    });
  })
}

$(main());



// $('#js-shopping-list-form').submit(event => {

//   // const targetAdd = $(event.currentTarget);

//   // console.log(`This is target: ${targetAdd}`);
//   // const userInput = targetAdd.find('#shopping-list-entry').val();
//   // console.log(`This is input: ${userInput}`);
//   event.preventDefault();
// })}

