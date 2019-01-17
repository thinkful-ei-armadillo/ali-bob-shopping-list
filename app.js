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
   // .addClass('.shopping-item__checked');
  })

  $('submit').submit(function(event){
    event.preventDefault();
  //   $('.shopping-list').append(generateHtml($('#shopping-list-entry').submit(event => {
  //     event.preventDefault();
  //     const targetAdd = $(event.currentTarget);
  //     targetAdd.find('#shopping-list-entry');
  //   })));
  // })
  console.log('what?');

  });
}

$(main());



function main() {
  //shopping-item__checked
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    const targetStrike = $(event.currentTarget).parent().siblings(); 
    targetStrike.toggleClass('shopping-item__checked');
   // .addClass('.shopping-item__checked');
  })

  $('submit').submit(function(event){
    event.preventDefault();
  //   $('.shopping-list').append(generateHtml($('#shopping-list-entry').submit(event => {
  //     event.preventDefault();
  //     const targetAdd = $(event.currentTarget);
  //     targetAdd.find('#shopping-list-entry');
  //   })));
  // })
  console.log('what?');

  });
}

$(main());

