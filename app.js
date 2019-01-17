function main() {
  //shopping-item__checked
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    const targetStrike = $(event.currentTarget).parent().siblings(); 
    targetStrike.toggleClass('shopping-item__checked');
   // .addClass('.shopping-item__checked');
  })
}

$(main());