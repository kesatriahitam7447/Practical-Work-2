// preview image 

function previewImage(event) {
  const file = event.target.files[0];
  const readFile = new FileReader();

  readFile.onload = function() {
    const output = document.getElementById('imagePreview');
    output.src = readFile.result;
  }

  if (file) {
    readFile.readAsDataURL(file);
  }
}


//for two function below
const imagePreview = document.getElementById('imagePreview');
const studentImageInput = document.getElementById('studentImageInput');

// Handle file selection
studentImageInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.classList.add('has-image');
            imagePreview.alt = 'Student Image';
        };
        reader.readAsDataURL(file);
    }
});  

// drag and drop

imagePreview.addEventListener('dragover', function(e) {
  e.preventDefault();
  imagePreview.style.borderColor = '#007bff';
  if (!imagePreview.classList.contains('has-image')) {
    imagePreview.style.background = '#f8f9ff';
  }
});

imagePreview.addEventListener('dragleave', function(e) {
  e.preventDefault();
  imagePreview.style.borderColor = '#ccc';
  if (!imagePreview.classList.contains('has-image')) {
    imagePreview.style.background = 'white';
  }
});

imagePreview.addEventListener('drop', function(e) {
  e.preventDefault();
  imagePreview.style.borderColor = '#ccc';
  if (!imagePreview.classList.contains('has-image')) {
    imagePreview.style.background = 'white';
  }
  
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function(e) {
      imagePreview.src = e.target.result;
      imagePreview.classList.add('has-image');
      imagePreview.alt = 'Student Image';
    };
    reader.readAsDataURL(file);
  }
});


// hide upload button
const imageUpload = document.getElementById("studentImage");

imageUpload.addEventListener("click", function() {
    studentImageInput.click();
});



// email validation
function validateEmail(input) {
  const email = input.value.trim();
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '') {
    input.style.borderColor = '';
  } else if (!pattern.test(email)) {
    input.style.borderColor = 'red';
  } else {
    input.style.borderColor = 'green';
  }

  input.value = email;
}

// phone no validation
function validatePhone(input) {
  const phoneNo = input.value.trim();
  const phonePattern = /^[0-9]{3}-[0-9]{7,8}$/;
  
  if (phoneNo === '') {
    input.style.borderColor = '';
  } else if (!phonePattern.test(phoneNo)) {
    input.style.borderColor = 'red';
  } else {
    input.style.borderColor = 'green';
  }
}

// show email hint
function showEmailPopover(element) {
  var popover = new bootstrap.Popover(element, {
    content: 'Enter a valid email address (e.g., user@example.com)',
    placement: 'top',
    trigger: 'focus',
    html: true, // Allow HTML content
    delay: { show: 500, hide: 100 }
  });
  popover.show();
}

//check the whole form validation
document.getElementById('registerBtn').addEventListener('click', function(e) {
  e.preventDefault();
  const form = document.getElementById('registerForm');
  
  if (form.checkValidity()) {
    // Form is valid, show modal
    const modal = new bootstrap.Modal(document.getElementById('registerModal'));
    modal.show();
  }
});