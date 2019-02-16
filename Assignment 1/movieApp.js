
// function to delete movie from list
var list = document.querySelector('#movie-list ul');
list.addEventListener('click', function(e){
  if(e.target.className === 'delete'){          // We want to get where did the click happened, so className
    console.log(e.target);
    const li = e.target.parentElement;         // this is the li which is the parent to the delete and we want to delete it.
    console.log(li);
    li.parentNode.removeChild(li);
    list.removeChild(li);

  }
})

// function to add a movie to the watchlist
  const addForm = document.forms['add-movie'];
  addForm.addEventListener('submit', function(e){
  e.preventDefault();
  var value = addForm.querySelector('input[type="text"]').value;
  var li = document.createElement('li');
  var movieName = document.createElement('span');
  var deleteBtn = document.createElement('span');
  li.appendChild(movieName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
  deleteBtn.textContent =  'delete';
  movieName.textContent = value;
  movieName.classList.add('name');
  deleteBtn.classList.add('delete');

})

// function to hide the list
function hidelist(d,t) {
  if(t.checked==true)
  {
    document.getElementById(d).style.display="none";
  }
  else {
      document.getElementById(d).style.display="block";
    }
}

// function to search movie from the list
function searchmovie() {
  var search,filter,ul,li,a,i,text;
  search=document.getElementById("inputid");
  filter=search.value.toUpperCase();
  ul=document.getElementById("ulid");
  li=ul.getElementsByTagName("li");
  for(i=0; i<li.length; i++)
  {
    a = li[i].getElementsByTagName("span")[0];
    text=a.textContent || a.innerText;
    if(text.toUpperCase().indexOf(filter) > -1)
    {
      li[i].style.display="";
    }
    else
    {
      li[i].style.display="none";
    }
  }
}
