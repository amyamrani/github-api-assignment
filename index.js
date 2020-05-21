'use strict';

function getRepos() { 
    const userHandle = $('#user-handle').val();
    fetch(`https://api.github.com/users/${userHandle}/repos`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Please try again later.'));
}

function displayResults (responseJson) {
    $('#results-list').html('');
    responseJson.forEach(repo => {
        $('#results-list').append(
          `<li>${repo.name} - <a href='${repo.html_url}' target='_blank'>repo URL</a></li>`
        )
        $('#results').removeClass('hidden');
    });
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      getRepos();
    });
  }
  
  $(watchForm);