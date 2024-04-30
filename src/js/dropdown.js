document.getElementById('dropdownBtn').addEventListener('click', function () {
  var dropdownContent = document.getElementById('dropdownContent');
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }
});
