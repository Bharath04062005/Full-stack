$(document).ready(function () {
  $('#todo-list').on('dblclick', 'li', function () {
    const $li = $(this);
    const currentText = $li.text();
    const $input = $('<input type="text">').val(currentText);

    $li.html($input);
    $input.focus();

    // Save on Enter
    $input.keydown(function (e) {
      if (e.key === 'Enter') {
        const updatedText = $(this).val();
        $li.text(updatedText);
      }
    });

    // Save on blur
    $input.blur(function () {
      const updatedText = $(this).val();
      $li.text(updatedText);
    });
  });
});