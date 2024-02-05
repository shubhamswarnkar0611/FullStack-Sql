const addBooking = document.getElementById("add-new-booking");
addBooking.addEventListener("click", AddBookingToDb);
const editBooking = document.getElementById("edit-booking");
editBooking.addEventListener("click", EditBookingToDb);

getBookingFromDb();
function getBookingFromDb() {
  axios
    .get("http://localhost:3000/user/get-users")
    .then((result) => {
      result.data.map((item) => {
        showBookingInfoToScreen(item);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function AddBookingToDb(e) {
  e.preventDefault();
  let name = e.target.name.value;
  let email = e.target.email.value;
  let phone = e.target.phone.value;

  let obj = {
    name,
    email,
    phone,
  };

  console.log(obj);

  axios
    .post("http://localhost:3000/user/add-user", obj)
    .then((result) => {
      showBookingInfoToScreen(result.data.newUserDetail);
    })
    .catch((err) => {
      console.log(err);
    });
}

function showBookingInfoToScreen(data) {
  let parentEle = document.getElementById("parent");
  let childEle = document.createElement("li");
  childEle.textContent = `${data.name}-${data.phone}-${data.email}`;

  let deleteChildEle = document.createElement("button");
  deleteChildEle.textContent = "Delete";
  deleteChildEle.id = data.id;
  deleteChildEle.onclick = (e) => {
    let id = e.target.id;
    axios
      .post("http://localhost:3000/user/delete", { id })
      .then((result) => {
        console.log(result);
        parentEle.removeChild(childEle);
      })
      .catch((err) => {
        cpnsole.log(err);
      });
  };
  childEle.appendChild(deleteChildEle);

  let editChildEle = document.createElement("button");
  editChildEle.textContent = "Edit";
  editChildEle.id = data.id;
  editChildEle.onclick = (e) => {
    parentEle.removeChild(childEle);
    document.getElementById("id").value = data.id;
    document.getElementById("name").value = data.name;
    document.getElementById("email").value = data.email;
    document.getElementById("phone").value = data.phone;
  };
  childEle.appendChild(editChildEle);
  parentEle.appendChild(childEle);
}

function EditBookingToDb(e) {
   e.preventDefault();
  let name =  document.getElementById("name").value;
  let email = document.getElementById("email").value 
  let phone = document.getElementById("phone").value
  let id =  document.getElementById("id").value

  let obj = {
    id,
    name,
    email,
    phone,
  };
  axios
    .post("http://localhost:3000/user/edit-user", obj)
    .then((result) => {
       showBookingInfoToScreen(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
