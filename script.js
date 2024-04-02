//======================================================================
//======================================================================
// ==================================== MODAL ========================
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Function to perform action upon confirmation
function confirmDelete() {
  //   alert("Confirmed! Proceeding...");
  modal.style.display = "none";
  //   closeModal();
}
// ==================================== END MODAL ========================
//======================================================================
//======================================================================
function toggleSideNav() {
  var sideNav = document.getElementById("sidebar");
  let toggle = document.getElementsByClassName("toggle-btn")[0];
  let cross = document.getElementsByClassName("cross-btn")[0];
  sideNav.style.marginLeft =
    sideNav.style.marginLeft === "-300px" ? "0px" : "-300px";
  toggle.style.display = toggle.style.display === "block" ? "none" : "block";
  cross.style.display = cross.style.display === "none" ? "block" : "none";
}
//======================================================================
function crossBtn() {
  var sideNav = document.getElementById("sidebar");
  let toggle = document.getElementsByClassName("toggle-btn")[0];
  let cross = document.getElementsByClassName("cross-btn")[0];
  sideNav.style.marginLeft =
    sideNav.style.marginLeft === "-300px" ? "0px" : "-300px";
  toggle.style.display = toggle.style.display === "block" ? "none" : "block";
  cross.style.display = cross.style.display === "none" ? "block" : "none";
}

function closeSideNav() {
  var sideNav = document.getElementById("sidebar");
  let crossBar = document.querySelector(".cross-btn");
  sideNav.style.marginLeft = "-300";
  crossBar.style.display = "none";
}

//========================================
document.addEventListener("DOMContentLoaded", function () {
  var addButton = document.querySelector(".add-price");

  addButton.addEventListener("click", function () {
    var contentToAppend = document
      .querySelector(".er-range-row")
      .cloneNode(true);
    document.querySelector(".edit-range-select").appendChild(contentToAppend);
  });
});

function removeRow1(element) {
  var row = element.closest(".er-range-row");
  row.parentNode.removeChild(row);
}
//===========================================
//===========================================
// function updateFileName(input) {
//     var fileName = '';
//     if (input.files && input.files.length > 0) {
//         fileName = input.files[0].name;
//     }
//     document.getElementById('file-name').textContent = fileName;
// }
//==================================================
//==================================================
document.addEventListener("DOMContentLoaded", function () {
    var addButton = document.querySelector(".add-color");

    addButton.addEventListener("click", function () {
        var originalRow = document.querySelector(".er-color-inp-clone");
        var contentToAppend = originalRow.cloneNode(true);
        
        // Clear input value for cloned row
        var clonedInput = contentToAppend.querySelector('.er-range-inp');
        clonedInput.value = '';

        // Clear file name for cloned row
        var clonedFileName = contentToAppend.querySelector('#file-name');
        clonedFileName.textContent = '';

        // Append cloned row
        originalRow.parentNode.insertBefore(contentToAppend, originalRow.nextSibling);
        
        // Update total count
        var totalCountElement = document.getElementById('total-colors');
        totalCountElement.textContent = parseInt(totalCountElement.textContent) + 1;
    });
});

function removeRow(element) {
    var row = element.closest('.er-color-inp-row');
    row.parentNode.removeChild(row);

    // Update total count
    var totalCountElement = document.getElementById('total-colors');
    totalCountElement.textContent = parseInt(totalCountElement.textContent) - 1;
}

function updateFileName(input) {
    var fileName = '';
    if (input.files && input.files.length > 0) {
        fileName = input.files[0].name;
    }
    input.parentNode.nextElementSibling.textContent = fileName;
}
// ==========================================================
// ==========================================================
// ==========================================================