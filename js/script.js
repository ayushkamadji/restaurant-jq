const menuTable = `
        <h1>Menu</h1>
        <table> 
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>Indomie with Egg</td>
            <td>$ 5.00</td>
          </tr>
          <tr>
            <td>Fried Indomie with Egg</td>
            <td>$ 5.00</td>
          </tr>
          <tr>
            <td>Mung Bean Porridge</td>
            <td>$ 3.00</td>
          </tr>
          <tr>
            <td>Chocolate Peanut Toast</td>
            <td>$ 6.00</td>
          </tr>
          <tr>
            <td>Sweet Ice Tea</td>
            <td>$ 1.00</td>
          </tr>
          <tr>
            <td>Fritters</td>
            <td>$ 0.50</td>
          </tr>
        </table>
      `;
const heroImage_url = `img/heroback.jpg`;
const $heroImage = $(`<img>`, {
  'src': heroImage_url
});
const mainCopy = $(`
        <p>
          Welcome to JQuery Mie. A classic Indonesian noodle bar
          where you eat noodles, have a breakfast menu, or snack
          on tempeh, tofu and veggie fritters. That or just drink
          tea, ice cold or hot.
          Clove ciggarettes are available, do be honest how many 
          you took when checking out.
        </p>
      `);
const contactsCopy = $(`
        <h5>P.50 Wallabyway, Cimanggis<br/>
        333-JQUERYMIE</h5>
      `);

var loadPage = function(page) {
  var $content = $(`#content`);
  switch(page) {
    case `Home`:
      $content.append(`<h1>JQuery Mie</h1>`);
      $content.append($heroImage);
      $content.append(mainCopy);
      break;
    case `Menu`:
      $content.append(menuTable);
      break;
    case `Contacts`:
      $content.append(`<h1>Contacts</h1>`);
      $content.append(contactsCopy);
  }
}

var clearContents = function() {
  $(`#content`).html('');
}


$(document).ready( function() {
  $navUlListItems = $(`.nav ul li`);
  $navUlListItems.on(`click`, function(event) {
    clearContents();
    loadPage($(this).html());

    $(this).siblings().removeClass(`selected`);
    $(this).addClass(`selected`);
  });

  loadPage(`Menu`);
});
